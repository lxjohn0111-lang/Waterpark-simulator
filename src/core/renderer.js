// Renderer + post-processing pipeline with quality tiers.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { FXAAPass } from 'three/addons/postprocessing/FXAAPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { G } from './context.js';

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uUnder: { value: 0 },
    uTime: { value: 0 },
    uSat: { value: 1.18 },
    uVig: { value: 0.32 },
    uRes: { value: new THREE.Vector2(1, 1) },
    uFlash: { value: 0 },
  },
  vertexShader: /* glsl */`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform float uUnder, uTime, uSat, uVig, uFlash; uniform vec2 uRes;
    varying vec2 vUv;
    void main(){
      vec2 uv = vUv;
      if (uUnder > 0.0) {
        uv += vec2(sin(uv.y * 22.0 + uTime * 2.2), cos(uv.x * 18.0 + uTime * 1.7)) * 0.0045 * uUnder;
      }
      vec3 c = texture2D(tDiffuse, uv).rgb;
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, uSat);
      // gentle warm highlights / cool shadows split-tone
      c *= mix(vec3(0.97, 1.0, 1.04), vec3(1.03, 1.0, 0.97), smoothstep(0.0, 1.2, l));
      if (uUnder > 0.0) {
        vec3 deep = vec3(0.02, 0.22, 0.30);
        float d = length(vUv - 0.5);
        c = mix(c, deep * (0.6 + l * 0.8), 0.45 * uUnder);
        c *= mix(1.0, 0.55, smoothstep(0.2, 0.75, d) * uUnder);
        c += vec3(0.03, 0.09, 0.1) * uUnder * (0.5 + 0.5 * sin(uv.x * 40.0 + uTime * 3.0) * sin(uv.y * 30.0 - uTime * 2.0)) * smoothstep(0.6, 0.0, vUv.y - 0.4);
      }
      float v = smoothstep(0.85, 0.25, length((vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0) * 0.9));
      c *= mix(1.0 - uVig, 1.0, v);
      c += uFlash;
      gl_FragColor = vec4(c, 1.0);
    }`,
};

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false, alpha: false });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.6;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.transmissionResolutionScale = 0.5;
  renderer.setClearColor(0x87b8e0);
  return renderer;
}

export class Pipeline {
  constructor(renderer, scene, camera, vmScene) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.vmScene = vmScene;
    this.quality = null;
    this.composer = null;
  }

  build(quality) {
    this.quality = quality;
    const r = this.renderer;
    const dpr = Math.min(window.devicePixelRatio || 1, quality === 'high' ? 2 : quality === 'medium' ? 1.5 : 1);
    r.setPixelRatio(dpr * (quality === 'low' ? 0.85 : 1));
    const [w, h] = G.viewSize();
    r.setSize(w, h, false);
    if (this.composer) { this.composer.dispose(); }
    const rt = new THREE.WebGLRenderTarget(w * r.getPixelRatio(), h * r.getPixelRatio(), { type: THREE.HalfFloatType });
    const composer = new EffectComposer(r, rt);
    composer.setPixelRatio(r.getPixelRatio());
    composer.setSize(w, h);
    this.renderPass = new RenderPass(this.scene, this.camera);
    composer.addPass(this.renderPass);
    this.gtao = null;
    if (quality === 'high') {
      try {
        this.gtao = new GTAOPass(this.scene, this.camera, w, h);
        this.gtao.output = GTAOPass.OUTPUT.Default;
        this.gtao.blendIntensity = 0.75;
        this.gtao.updateGtaoMaterial({ radius: 0.8, distanceExponent: 1.5, thickness: 1.2, scale: 1, samples: 12 });
        composer.addPass(this.gtao);
      } catch (e) { console.warn('GTAO unavailable', e); this.gtao = null; }
    }
    const vm = new RenderPass(this.vmScene, this.camera);
    vm.clear = false; vm.clearDepth = true;
    composer.addPass(vm);
    this.vmPass = vm;
    if (quality !== 'low') {
      this.bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.32, 0.55, 0.92);
      composer.addPass(this.bloom);
    } else this.bloom = null;
    this.grade = new ShaderPass(GradeShader);
    this.grade.uniforms.uRes.value.set(w, h);
    composer.addPass(this.grade);
    composer.addPass(new OutputPass());
    this.fxaa = new FXAAPass();
    this.fxaa.setSize(w * r.getPixelRatio(), h * r.getPixelRatio());
    composer.addPass(this.fxaa);
    this.composer = composer;
  }

  resize() {
    const [w, h] = G.viewSize();
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);
    if (this.fxaa) this.fxaa.setSize(w * this.renderer.getPixelRatio(), h * this.renderer.getPixelRatio());
    this.grade.uniforms.uRes.value.set(w, h);
  }

  render(dt) {
    const u = this.grade.uniforms;
    u.uTime.value += dt;
    u.uUnder.value += ((G.player && G.player.underwater ? 1 : 0) - u.uUnder.value) * Math.min(1, dt * 8);
    u.uFlash.value *= Math.max(0, 1 - dt * 4);
    if (this.bloom) {
      const night = G.env ? G.env.nightF : 0;
      this.bloom.strength = 0.3 + night * 0.45;
      this.bloom.threshold = (this._bloomT ?? 1.6) * (1 - night * 0.55);
    }
    this.vmScene.environment = this.scene.environment;
    this.composer.render(dt);
  }
}
