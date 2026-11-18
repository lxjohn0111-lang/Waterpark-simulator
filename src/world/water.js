// Water surface materials (transmission refraction on medium/high, alpha on low)
import * as THREE from 'three';
import { TEX } from '../core/textures.js';
import { U } from '../core/materials.js';
import { G } from '../core/context.js';

export const WaterU = {
  uWaveAmp: { value: 0.0 },
  uRipple: { value: 1.0 },
};

const CLEAN = new THREE.Color(0x3fd6ea);
const DIRTY = new THREE.Color(0x7a8f3a);
const CLEAN_LOW = new THREE.Color(0x22b4d8);
const DIRTY_LOW = new THREE.Color(0x6f8a3a);

// GLSL wave function shared by the wave pool (must mirror waveHeight() below)
const WAVE_GLSL = /* glsl */`
uniform float uWaveAmp;
float waveH(vec2 p, float t) {
  return uWaveAmp * (0.32 * sin(1.15 * p.y - 2.1 * t) + 0.1 * sin(2.4 * p.y + 0.6 * p.x - 3.2 * t) + 0.05 * sin(0.9 * p.x + 1.3 * t));
}
`;

export function waveHeight(lx, lz, t) {
  const a = WaterU.uWaveAmp.value;
  return a * (0.32 * Math.sin(1.15 * lz - 2.1 * t) + 0.1 * Math.sin(2.4 * lz + 0.6 * lx - 3.2 * t) + 0.05 * Math.sin(0.9 * lx + 1.3 * t));
}

export function makeWaterMaterial(opts = {}) {
  const low = G.quality === 'low';
  let mat;
  if (low) {
    mat = new THREE.MeshStandardMaterial({
      color: CLEAN_LOW.clone(), transparent: true, opacity: 0.72, roughness: 0.04, metalness: 0.15,
      normalMap: TEX.waterN, normalScale: new THREE.Vector2(0.35, 0.35), envMapIntensity: 1.3, depthWrite: false,
    });
  } else {
    mat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff, transmission: 1, thickness: 0.5, ior: 1.33, roughness: 0.035, metalness: 0,
      attenuationColor: CLEAN.clone(), attenuationDistance: 2.2, specularIntensity: 1,
      normalMap: TEX.waterN, normalScale: new THREE.Vector2(0.28, 0.28), envMapIntensity: 1.15,
    });
  }
  mat.userData.isWater = true;
  const wave = !!opts.wave;
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = U.uTime;
    sh.uniforms.uRipple = WaterU.uRipple;
    sh.uniforms.uWaveAmp = WaterU.uWaveAmp;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;\nvarying vec2 vWaterUV;\n' + (wave ? WAVE_GLSL : ''))
      .replace('#include <project_vertex>', '#include <project_vertex>\n vWaterUV = (modelMatrix * vec4(transformed, 1.0)).xz * 0.22;');
    if (wave) {
      sh.vertexShader = sh.vertexShader
        .replace('#include <beginnormal_vertex>', `
          float e = 0.15;
          float h0 = waveH(position.xz, uTime);
          float hx = waveH(position.xz + vec2(e, 0.0), uTime);
          float hz = waveH(position.xz + vec2(0.0, e), uTime);
          vec3 objectNormal = normalize(vec3(-(hx - h0) / e, 1.0, -(hz - h0) / e));
          #ifdef USE_TANGENT
            vec3 objectTangent = vec3( tangent.xyz );
          #endif`)
        .replace('#include <begin_vertex>', '#include <begin_vertex>\n transformed.y += h0;');
    }
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uTime; uniform float uRipple;\nvarying vec2 vWaterUV;')
      .replace('#include <normal_fragment_maps>', `
        #ifdef USE_NORMALMAP_TANGENTSPACE
          vec2 wuv = vWaterUV;
          vec3 n1 = texture2D(normalMap, wuv + uTime * vec2(0.021, 0.013)).xyz * 2.0 - 1.0;
          vec3 n2 = texture2D(normalMap, wuv * 1.63 + vec2(0.37, 0.11) - uTime * vec2(0.012, 0.019)).xyz * 2.0 - 1.0;
          vec3 n3 = texture2D(normalMap, wuv * 0.31 + uTime * vec2(-0.006, 0.008)).xyz * 2.0 - 1.0;
          vec3 mapN = normalize(vec3(n1.xy + n2.xy + n3.xy * 0.7, n1.z * 1.2));
          mapN.xy *= normalScale * uRipple;
          normal = normalize(tbn * mapN);
        #endif`);
  };
  mat.customProgramCacheKey = () => 'water' + (wave ? 'W' : '') + (low ? 'L' : 'H');
  return mat;
}

export function setWaterDirt(mat, dirt) {
  // dirt 0..1
  if (mat.attenuationColor) {
    mat.attenuationColor.copy(CLEAN).lerp(DIRTY, dirt);
    mat.attenuationDistance = 2.2 - dirt * 1.5;
    mat.color.setRGB(1 - dirt * 0.15, 1 - dirt * 0.05, 1 - dirt * 0.3);
  } else {
    mat.color.copy(CLEAN_LOW).lerp(DIRTY_LOW, dirt);
    mat.opacity = 0.72 + dirt * 0.2;
  }
}

// Underside of the water surface, seen when the camera is submerged:
// total internal reflection outside Snell's window, bright see-through inside it.
export const underMat = { m: null };
export function getUnderMaterial() {
  if (!underMat.m) {
    underMat.m = new THREE.ShaderMaterial({
      uniforms: { uTime: U.uTime, uAmb: U.uAmb, uGlow: U.uGlow, uN: { value: TEX.waterN } },
      vertexShader: /* glsl */`
        varying vec3 vW;
        void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */`
        uniform float uTime, uAmb, uGlow; uniform sampler2D uN; varying vec3 vW;
        void main() {
          vec3 V = normalize(cameraPosition - vW);
          vec2 n = texture2D(uN, vW.xz * 0.25 + uTime * vec2(0.02, 0.014)).xy * 2.0 - 1.0;
          vec2 n2 = texture2D(uN, vW.xz * 0.41 - uTime * vec2(0.016, 0.021)).xy * 2.0 - 1.0;
          float cosT = abs(V.y) + (n.x + n2.y) * 0.05;
          float win = smoothstep(0.6, 0.72, cosT);
          float amb = max(uAmb, 0.08);
          vec3 tir = vec3(0.03, 0.30, 0.38) * (0.35 + 0.65 * amb) + vec3(0.1, 0.5, 0.65) * uGlow * 0.4;
          tir += vec3(0.25, 0.45, 0.5) * pow(max(0.0, n.x * n2.y), 2.0) * amb;
          vec3 col = mix(tir, vec3(0.8, 0.97, 1.0) * (0.3 + 0.9 * amb), win);
          float a = mix(0.96, 0.18, win);
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      side: THREE.BackSide, transparent: true, depthWrite: false, fog: false,
    });
  }
  return underMat.m;
}

export function makeWaterMesh(geom, opts = {}) {
  const mat = makeWaterMaterial(opts);
  const m = new THREE.Mesh(geom, mat);
  m.receiveShadow = false;
  m.castShadow = false;
  m.renderOrder = 1;
  const under = new THREE.Mesh(geom, getUnderMaterial());
  under.renderOrder = 2;
  m.add(under);
  return m;
}
