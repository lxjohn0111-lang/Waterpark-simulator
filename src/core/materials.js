// Shared material library + shader injections (caustics, wind, night glow)
import * as THREE from 'three';
import { TEX } from './textures.js';
import { WATER_Y } from '../config.js';

// Global uniforms shared by injected shaders
export const U = {
  uTime: { value: 0 },
  uWaterY: { value: WATER_Y },
  uSunI: { value: 1 },
  uAmb: { value: 1 },
  uGlow: { value: 0 },        // pool night lights
  uWind: { value: 1 },
  uNight: { value: 0 },
};

export const M = {};
const colorCache = new Map();

export const CAUSTICS_GLSL = /* glsl */`
float causticsFn(vec2 p, float t) {
  vec2 i = p; float c = 1.0; float inten = 0.005;
  for (int n = 0; n < 4; n++) {
    float tt = t * (1.0 - (3.5 / float(n + 1)));
    i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
    c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
  }
  c /= 4.0;
  c = 1.17 - pow(c, 1.4);
  return pow(abs(c), 8.0);
}
`;

// Adds underwater caustics + depth absorption + night glow to any standard material
export function applyUnderwater(mat, opts = {}) {
  const glowCol = opts.glow || 'vec3(0.10, 0.62, 0.95)';
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = U.uTime; sh.uniforms.uWaterY = U.uWaterY; sh.uniforms.uSunI = U.uSunI;
    sh.uniforms.uAmb = U.uAmb; sh.uniforms.uGlow = U.uGlow;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPosU;')
      .replace('#include <project_vertex>', '#include <project_vertex>\n{ vec4 wpu = vec4(transformed,1.0);\n#ifdef USE_INSTANCING\n wpu = instanceMatrix * wpu;\n#endif\n vWPosU = (modelMatrix * wpu).xyz; }');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPosU;\nuniform float uTime; uniform float uWaterY; uniform float uSunI; uniform float uAmb; uniform float uGlow;\n' + CAUSTICS_GLSL)
      .replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
        float uwDepth = uWaterY - vWPosU.y;
        float csv = 0.0;
        if (uwDepth > 0.0) {
          csv = causticsFn(mod(vWPosU.xz * 2.4166, 6.2831853) - 250.0, uTime * 0.55 + 23.0);
          float csv2 = causticsFn(mod(vWPosU.xz * 1.37 + 1.7, 6.2831853) - 250.0, uTime * 0.41 + 7.0);
          csv = csv * 0.65 + csv2 * 0.5;
          reflectedLight.directDiffuse *= (0.5 + csv * 2.6 * smoothstep(0.0, 0.25, uwDepth));
        }`)
      .replace('#include <opaque_fragment>', `
        if (uwDepth > 0.0) {
          vec3 deepCol = vec3(0.015, 0.20, 0.30) * (0.25 + 0.75 * uAmb);
          float ab = 1.0 - exp(-uwDepth * 0.42);
          outgoingLight = mix(outgoingLight, deepCol, ab * 0.75);
          outgoingLight += uGlow * ${glowCol} * (0.55 + csv * 0.9) * (0.6 + 0.4 * smoothstep(0.0, 1.2, uwDepth));
        }
        #include <opaque_fragment>`);
  };
  mat.customProgramCacheKey = () => 'underwater' + glowCol;
  return mat;
}

// Vertex wind sway for foliage. mode: 'leaf' (uses uv.x as weight) or 'trunk' (uses height)
export function applyWind(mat, mode = 'leaf', amount = 1) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    sh.uniforms.uTime = U.uTime; sh.uniforms.uWind = U.uWind;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime; uniform float uWind;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        {
          vec3 ip = vec3(0.0);
          #ifdef USE_INSTANCING
            ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
          #endif
          ip += vec3(modelMatrix[3][0], 0.0, modelMatrix[3][2]);
          float ph = ip.x * 0.37 + ip.z * 0.21;
          float sw = sin(uTime * 1.25 + ph) * 0.6 + sin(uTime * 2.9 + ph * 1.7) * 0.25 + sin(uTime * 5.3 + ph * 3.1) * 0.08;
          ${mode === 'leaf'
            ? 'float wgt = uv.x * uv.x * ' + amount.toFixed(3) + ';\n transformed.x += sw * 0.22 * wgt * uWind; transformed.y += (sin(uTime * 3.7 + ph + uv.x * 4.0) * 0.06 - 0.02) * wgt * uWind; transformed.z += cos(uTime * 1.1 + ph) * 0.12 * wgt * uWind;'
            : mode === 'grass'
            ? 'float wgt = uv.y * ' + amount.toFixed(3) + ';\n float gph = ip.x * 1.7 + ip.z * 1.3; transformed.x += (sin(uTime * 2.1 + gph) * 0.08 + sin(uTime * 4.7 + gph * 2.0) * 0.03) * wgt * uWind; transformed.z += cos(uTime * 1.7 + gph) * 0.05 * wgt * uWind;'
            : 'float wgt = max(0.0, position.y) * ' + amount.toFixed(3) + ';\n wgt = wgt * wgt; transformed.x += sw * 0.03 * wgt * uWind; transformed.z += cos(uTime * 0.9 + ph) * 0.015 * wgt * uWind;'}
        }`);
  };
  if (mode === 'grass') {
    const prev2 = mat.onBeforeCompile;
    mat.onBeforeCompile = (sh, r) => {
      prev2(sh, r);
      // light grass like the ground: always use a world-up normal (no back-face darkening)
      sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', '#include <normal_fragment_begin>\n normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);');
    };
  }
  mat.customProgramCacheKey = () => 'wind_' + mode + amount;
  return mat;
}

function tex(t, rx = 1, ry = 1) {
  const c = t.clone();
  c.repeat.set(rx, ry);
  c.needsUpdate = true;
  return c;
}

export function initMaterials() {
  M.poolTile = applyUnderwater(new THREE.MeshStandardMaterial({ map: TEX.poolTile, normalMap: TEX.poolTileN, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.22, metalness: 0.0 }));
  M.poolTileDark = applyUnderwater(new THREE.MeshStandardMaterial({ color: 0x0d3f78, roughness: 0.3 }));
  M.poolTileWarm = applyUnderwater(new THREE.MeshStandardMaterial({ map: TEX.poolTile, normalMap: TEX.poolTileN, color: 0xe8f6ff, roughness: 0.2 }), { glow: 'vec3(0.95, 0.65, 0.25)' });
  M.sandUW = applyUnderwater(new THREE.MeshStandardMaterial({ map: TEX.sand, normalMap: TEX.sandN, roughness: 0.9 }));
  M.deck = new THREE.MeshStandardMaterial({ map: TEX.deck, normalMap: TEX.deckN, roughness: 0.78, normalScale: new THREE.Vector2(0.8, 0.8) });
  M.coping = new THREE.MeshStandardMaterial({ color: 0xf2eee6, roughness: 0.55, map: TEX.concrete, normalMap: TEX.concreteN, normalScale: new THREE.Vector2(0.3, 0.3) });
  M.concrete = new THREE.MeshStandardMaterial({ map: TEX.concrete, normalMap: TEX.concreteN, roughness: 0.9, color: 0xe0ddd6 });
  M.concreteDark = new THREE.MeshStandardMaterial({ map: TEX.concrete, normalMap: TEX.concreteN, roughness: 0.9, color: 0x8f8b84 });
  M.steel = new THREE.MeshStandardMaterial({ color: 0xdfe3e8, metalness: 0.85, roughness: 0.32 });
  M.steelDark = new THREE.MeshStandardMaterial({ color: 0x5a6068, metalness: 0.8, roughness: 0.4 });
  M.chrome = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1.0, roughness: 0.08 });
  M.wood = new THREE.MeshStandardMaterial({ map: TEX.wood, normalMap: TEX.woodN, roughness: 0.75 });
  M.woodDark = new THREE.MeshStandardMaterial({ map: TEX.wood, normalMap: TEX.woodN, roughness: 0.7, color: 0x8a6448 });
  M.whitePaint = new THREE.MeshStandardMaterial({ color: 0xf5f5f0, roughness: 0.5 });
  M.stucco = new THREE.MeshStandardMaterial({ color: 0xf3ead8, roughness: 0.92, map: TEX.concrete, normalMap: TEX.concreteN, normalScale: new THREE.Vector2(0.7, 0.7) });
  M.blackPlastic = new THREE.MeshStandardMaterial({ color: 0x1c1f22, roughness: 0.55 });
  M.rubber = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.9 });
  M.glass = new THREE.MeshPhysicalMaterial({ color: 0x9fd4e8, metalness: 0, roughness: 0.05, transparent: true, opacity: 0.35, envMapIntensity: 1.5, depthWrite: false });
  M.glassDark = new THREE.MeshStandardMaterial({ color: 0x223a48, metalness: 0.3, roughness: 0.08 });
  M.sand = new THREE.MeshStandardMaterial({ map: TEX.sand, normalMap: TEX.sandN, roughness: 0.95 });
  M.asphalt = new THREE.MeshStandardMaterial({ map: TEX.asphalt, normalMap: TEX.asphaltN, roughness: 0.92 });
  M.rock = new THREE.MeshStandardMaterial({ map: TEX.rock, normalMap: TEX.rockN, roughness: 0.95 });
  M.thatch = new THREE.MeshStandardMaterial({ map: TEX.thatch, roughness: 1, side: THREE.DoubleSide });
  M.bark = applyWind(new THREE.MeshStandardMaterial({ map: TEX.bark, normalMap: TEX.barkN, roughness: 0.95 }), 'trunk', 0.11);
  M.palmLeaf = applyWind(new THREE.MeshStandardMaterial({ map: TEX.palmLeaf, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.75 }), 'leaf', 1.0);
  M.foliage = new THREE.MeshStandardMaterial({ map: TEX.foliage, normalMap: TEX.foliageN, roughness: 0.9 });
  M.foliageDark = new THREE.MeshStandardMaterial({ map: TEX.foliage, normalMap: TEX.foliageN, roughness: 0.9, color: 0x9ab08a });
  M.fence = new THREE.MeshStandardMaterial({ map: TEX.fence, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.6 });
  M.lampGlow = new THREE.MeshStandardMaterial({ color: 0xfff1d0, emissive: 0xffd28a, emissiveIntensity: 0.0, roughness: 0.3 });
  M.poolLight = new THREE.MeshStandardMaterial({ color: 0xdffaff, emissive: 0x8fe8ff, emissiveIntensity: 0.4, roughness: 0.2 });
  M.fire = new THREE.MeshBasicMaterial({ color: 0xffa52a, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
  M.redLight = new THREE.MeshStandardMaterial({ color: 0xff2222, emissive: 0xff0000, emissiveIntensity: 2.0 });
  M.greenLight = new THREE.MeshStandardMaterial({ color: 0x22ff44, emissive: 0x00ff33, emissiveIntensity: 1.5 });
  M.screen = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0x3ac8ff, emissiveIntensity: 0.6, roughness: 0.2 });
  M.ghostOk = new THREE.MeshBasicMaterial({ color: 0x44ff99, transparent: true, opacity: 0.38, depthWrite: false });
  M.ghostBad = new THREE.MeshBasicMaterial({ color: 0xff4444, transparent: true, opacity: 0.38, depthWrite: false });
  M.tex = tex;
}

// Colored plastic (glossy) cached by hex
export function plastic(hex, rough = 0.35) {
  const k = 'p' + hex + '_' + rough;
  if (!colorCache.has(k)) colorCache.set(k, new THREE.MeshStandardMaterial({ color: hex, roughness: rough, metalness: 0 }));
  return colorCache.get(k);
}
// Glossy fibreglass for slides (clearcoat)
export function slideMat(hex) {
  const k = 's' + hex;
  if (!colorCache.has(k)) colorCache.set(k, new THREE.MeshPhysicalMaterial({ color: hex, roughness: 0.28, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08, side: THREE.DoubleSide }));
  return colorCache.get(k);
}
export function fabric(hex) {
  const k = 'f' + hex;
  if (!colorCache.has(k)) colorCache.set(k, new THREE.MeshStandardMaterial({ color: hex, roughness: 0.92, side: THREE.DoubleSide }));
  return colorCache.get(k);
}
export function painted(hex, rough = 0.6) {
  const k = 'c' + hex + '_' + rough;
  if (!colorCache.has(k)) colorCache.set(k, new THREE.MeshStandardMaterial({ color: hex, roughness: rough }));
  return colorCache.get(k);
}
export function signMat(texture, emissive = 0.0) {
  const m = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5, transparent: true, alphaTest: 0.05 });
  if (emissive > 0) { m.emissive = new THREE.Color(0xffffff); m.emissiveMap = texture; m.emissiveIntensity = emissive; m.userData.nightSign = true; }
  return m;
}
