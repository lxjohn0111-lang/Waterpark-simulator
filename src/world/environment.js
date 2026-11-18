// Sky, sun/moon lighting, day-night cycle, weather, environment reflections.
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { G } from '../core/context.js';
import { U, M } from '../core/materials.js';
import { clamp, lerp, smoothstep, damp } from '../core/utils.js';

const WEATHERS = {
  sunny:   { cover: 0.18, density: 0.35, sun: 1.0,  arrive: 1.18, label: 'Sunny', icon: '☀️', temp: [29, 34], fog: 0.0016, thirst: 1.35 },
  partly:  { cover: 0.42, density: 0.45, sun: 0.92, arrive: 1.0,  label: 'Partly cloudy', icon: '⛅', temp: [25, 29], fog: 0.0019, thirst: 1.1 },
  overcast:{ cover: 0.78, density: 0.7,  sun: 0.5,  arrive: 0.72, label: 'Overcast', icon: '☁️', temp: [21, 25], fog: 0.0028, thirst: 0.9 },
  rain:    { cover: 0.95, density: 0.9,  sun: 0.32, arrive: 0.4,  label: 'Rain shower', icon: '🌧️', temp: [19, 22], fog: 0.0045, thirst: 0.8 },
};
export { WEATHERS };

export class Environment {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.weather = 'sunny';
    this.weatherBlend = { cover: 0.18, density: 0.35, sun: 1, fog: 0.0016, rain: 0 };
    this.temp = 30;
    this.sunDir = new THREE.Vector3(0, 1, 0);
    this.nightF = 0;
    this.lastEnvEl = -999;
    this.lastEnvCover = -1;
    this.envTimer = 0;

    // Sky dome
    this.sky = new Sky();
    this.sky.scale.setScalar(9000);
    this.sky.material.uniforms.turbidity.value = 3.2;
    this.sky.material.uniforms.rayleigh.value = 1.6;
    this.sky.material.uniforms.mieCoefficient.value = 0.004;
    this.sky.material.uniforms.mieDirectionalG.value = 0.84;
    this.sky.material.uniforms.cloudScale.value = 0.00022;
    this.sky.material.uniforms.cloudSpeed.value = 0.00003;
    this.sky.material.uniforms.cloudElevation.value = 0.55;
    this.sky.frustumCulled = false;
    scene.add(this.sky);

    // Visible sky gets a gain uniform so it isn't blown out on screen,
    // while the env-map capture uses full radiance for lighting.
    const addGain = (mat, gain) => {
      mat.uniforms.skyGain = { value: gain };
      mat.fragmentShader = mat.fragmentShader
        .replace('uniform float showSunDisc;', 'uniform float showSunDisc;\nuniform float skyGain;')
        .replace('gl_FragColor = vec4( texColor, 1.0 );', 'gl_FragColor = vec4( texColor * skyGain, 1.0 );');
    };
    addGain(this.sky.material, 0.38);
    // Separate sky for env-map capture
    this.envScene = new THREE.Scene();
    this.envSky = new Sky();
    this.envSky.scale.setScalar(4000);
    const shared = {};
    for (const k of Object.keys(this.sky.material.uniforms)) shared[k] = this.sky.material.uniforms[k];
    this.envSky.material.uniforms = shared;
    addGain(this.envSky.material, 1.0);
    this.envSky.material.uniforms.skyGain = { value: 1.0 };
    this.envScene.add(this.envSky);
    // Ground bounce disc for env capture so reflections aren't black below horizon
    this.envGround = new THREE.Mesh(new THREE.CircleGeometry(3000, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x3d5a2c }));
    this.envGround.position.y = -20;
    this.envScene.add(this.envGround);
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.envRT = null;

    // Sun light (also used as moon light at night)
    this.sun = new THREE.DirectionalLight(0xffffff, 3);
    this.sun.castShadow = true;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.035;
    const sc = this.sun.shadow.camera;
    this.shadowExtent = 48;
    sc.left = -this.shadowExtent; sc.right = this.shadowExtent; sc.top = this.shadowExtent; sc.bottom = -this.shadowExtent;
    sc.near = 1; sc.far = 260;
    scene.add(this.sun);
    scene.add(this.sun.target);

    this.hemi = new THREE.HemisphereLight(0xbfdcff, 0x5a6b45, 0.4);
    scene.add(this.hemi);

    scene.fog = new THREE.FogExp2(0xbcd6ea, 0.0016);

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const N = 1800, pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(1 - u * u);
      const y = Math.abs(u) * 0.95 + 0.05;
      pos[i * 3] = Math.cos(a) * r * 3500; pos[i * 3 + 1] = y * 3500; pos[i * 3 + 2] = Math.sin(a) * r * 3500;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
    this.stars = new THREE.Points(starGeo, this.starMat);
    this.stars.frustumCulled = false;
    this.stars.renderOrder = -1;
    scene.add(this.stars);

    // Moon disc
    this.moon = new THREE.Mesh(new THREE.CircleGeometry(60, 32), new THREE.MeshBasicMaterial({ color: 0xf2f4ff, fog: false, transparent: true, opacity: 0 }));
    scene.add(this.moon);

    // Rain streaks
    const RN = 2600;
    const rg = new THREE.BufferGeometry();
    this.rainPos = new Float32Array(RN * 6);
    this.rainN = RN;
    for (let i = 0; i < RN; i++) this._resetDrop(i, true, new THREE.Vector3());
    rg.setAttribute('position', new THREE.BufferAttribute(this.rainPos, 3));
    this.rain = new THREE.LineSegments(rg, new THREE.LineBasicMaterial({ color: 0xaac4dd, transparent: true, opacity: 0.0, depthWrite: false }));
    this.rain.frustumCulled = false;
    scene.add(this.rain);

    // Night point lights pool (constant count to avoid shader recompiles)
    this.pointLights = [];
    for (let i = 0; i < 6; i++) {
      const pl = new THREE.PointLight(0xffd7a0, 0, 16, 2);
      pl.position.set(0, -100, 0);
      scene.add(pl);
      this.pointLights.push(pl);
    }
    this.lightAnchors = []; // world positions of lamps (filled by park)
  }

  _resetDrop(i, initial, c) {
    const x = c.x + (Math.random() - 0.5) * 50, z = c.z + (Math.random() - 0.5) * 50;
    const y = initial ? c.y + Math.random() * 30 : c.y + 18 + Math.random() * 10;
    const p = this.rainPos;
    p[i * 6] = x; p[i * 6 + 1] = y; p[i * 6 + 2] = z;
    p[i * 6 + 3] = x + 0.05; p[i * 6 + 4] = y - 0.5; p[i * 6 + 5] = z;
  }

  setQuality(q) {
    const size = q === 'high' ? 4096 : q === 'medium' ? 2048 : 1024;
    this.shadowExtent = q === 'low' ? 34 : 48;
    const sc = this.sun.shadow.camera;
    sc.left = -this.shadowExtent; sc.right = this.shadowExtent; sc.top = this.shadowExtent; sc.bottom = -this.shadowExtent;
    sc.updateProjectionMatrix();
    if (this.sun.shadow.mapSize.x !== size) {
      this.sun.shadow.mapSize.set(size, size);
      if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; }
    }
    this.sun.shadow.radius = q === 'high' ? 3 : 2;
  }

  setWeather(w, instant = false) {
    if (!WEATHERS[w]) return;
    this.weather = w;
    const W = WEATHERS[w];
    this.temp = Math.round(lerp(W.temp[0], W.temp[1], Math.random()));
    if (instant) {
      Object.assign(this.weatherBlend, { cover: W.cover, density: W.density, sun: W.sun, fog: W.fog, rain: w === 'rain' ? 1 : 0 });
    }
  }
  get weatherInfo() { return WEATHERS[this.weather]; }

  // Sun elevation & azimuth from minutes of day
  computeSun(minutes) {
    const rise = 360, set = 1215;
    let el, az;
    if (minutes >= rise && minutes <= set) {
      const f = (minutes - rise) / (set - rise);
      el = Math.sin(Math.PI * f) * THREE.MathUtils.degToRad(66) - THREE.MathUtils.degToRad(1.5);
      az = THREE.MathUtils.degToRad(lerp(-115, 115, f));
    } else {
      let m = minutes < rise ? minutes + 1440 : minutes;
      const f = (m - set) / (rise + 1440 - set);
      el = -Math.sin(Math.PI * f) * THREE.MathUtils.degToRad(35) - THREE.MathUtils.degToRad(1.5);
      az = THREE.MathUtils.degToRad(lerp(115, 245, f));
    }
    return { el, az };
  }

  update(dt, camPos) {
    const minutes = G.time.minutes;
    const W = WEATHERS[this.weather];
    const wb = this.weatherBlend;
    wb.cover = damp(wb.cover, W.cover, 0.25, dt);
    wb.density = damp(wb.density, W.density, 0.25, dt);
    wb.sun = damp(wb.sun, W.sun, 0.25, dt);
    wb.fog = damp(wb.fog, W.fog, 0.25, dt);
    wb.rain = damp(wb.rain, this.weather === 'rain' ? 1 : 0, 0.4, dt);

    const { el, az } = this.computeSun(minutes);
    const ce = Math.cos(el);
    this.sunDir.set(Math.sin(az) * ce, Math.sin(el), Math.cos(az) * ce).normalize();
    const u = this.sky.material.uniforms;
    u.sunPosition.value.copy(this.sunDir).multiplyScalar(400000);
    u.cloudCoverage.value = wb.cover;
    u.cloudDensity.value = wb.density;
    u.time.value += dt * (1 + G.time.speed);
    u.turbidity.value = lerp(3.0, 9.0, clamp(wb.cover - 0.3, 0, 1));
    u.rayleigh.value = lerp(1.6, 0.8, clamp(wb.cover - 0.4, 0, 1));

    const elDeg = THREE.MathUtils.radToDeg(el);
    const dayF = smoothstep(-6, 6, elDeg);
    const nightF = 1 - smoothstep(-8, 2, elDeg);
    this.nightF = nightF;
    U.uNight.value = nightF;
    U.uGlow.value = smoothstep(4, -5, elDeg) * 1.2;
    U.uAmb.value = lerp(0.07, 1.0, dayF) * lerp(1, 0.75, clamp(wb.cover - 0.4, 0, 1));

    // Directional light: sun by day, moon by night
    const low = 1 - smoothstep(4, 28, elDeg);
    const sunCol = new THREE.Color().setRGB(1.0, lerp(0.96, 0.62, low), lerp(0.9, 0.38, low));
    const sunI = smoothstep(-3, 8, elDeg) * 3.4 * wb.sun;
    U.uSunI.value = sunI / 3.4;
    let lightDir;
    if (elDeg > -3) {
      lightDir = this.sunDir;
      this.sun.color.copy(sunCol);
      this.sun.intensity = Math.max(sunI, 0.0) * (this._sunMul ?? 1);
    } else {
      lightDir = new THREE.Vector3(-0.35, 0.82, -0.45).normalize();
      this.sun.color.setRGB(0.55, 0.68, 1.0);
      this.sun.intensity = 0.75 * smoothstep(-3, -10, elDeg);
    }
    // Shadow camera follows the player, snapped to texels to avoid shimmering
    const ext = this.shadowExtent;
    const texel = (ext * 2) / this.sun.shadow.mapSize.x;
    const cx = Math.round(camPos.x / texel) * texel, cz = Math.round(camPos.z / texel) * texel;
    this.sun.target.position.set(cx, 0, cz);
    this.sun.position.set(cx + lightDir.x * 120, lightDir.y * 120, cz + lightDir.z * 120);
    this.sun.target.updateMatrixWorld();

    // Hemisphere ambient
    this.hemi.intensity = lerp(0.75, 0.55, dayF) * (this._hemiMul ?? 1);
    G.renderer.toneMappingExposure = lerp(0.6, 1.05, nightF) * (this._expMul ?? 1);
    this.scene.environmentIntensity = (this._envI ?? 0.38) * lerp(0.5, 1.0, dayF);
    this.hemi.color.setRGB(lerp(0.2, 0.72, dayF), lerp(0.27, 0.84, dayF), lerp(0.48, 1.0, dayF));
    this.hemi.groundColor.setRGB(lerp(0.04, 0.32, dayF), lerp(0.05, 0.36, dayF), lerp(0.08, 0.24, dayF));

    // Fog color
    const sunset = smoothstep(18, 2, elDeg) * smoothstep(-8, 0, elDeg);
    const fc = new THREE.Color().setRGB(0.66, 0.79, 0.93);
    fc.lerp(new THREE.Color(0.96, 0.66, 0.46), sunset * 0.75);
    fc.lerp(new THREE.Color(0.025, 0.04, 0.075), nightF);
    fc.lerp(new THREE.Color(0.55, 0.6, 0.66).multiplyScalar(dayF * 0.95 + 0.05), clamp((wb.cover - 0.5) * 1.6, 0, 0.85));
    this.scene.fog.color.copy(fc);
    this.scene.fog.density = wb.fog * (1 + wb.rain * 0.6);

    // Stars & moon
    this.starMat.opacity = nightF * (1 - wb.cover * 0.8);
    this.stars.position.copy(camPos);
    const md = new THREE.Vector3(-0.35, 0.62, -0.7).normalize();
    this.moon.position.copy(camPos).addScaledVector(md, 3000);
    this.moon.lookAt(camPos);
    this.moon.material.opacity = nightF * (1 - wb.cover * 0.7);

    // Rain
    this.rain.material.opacity = wb.rain * 0.45;
    this.rain.visible = wb.rain > 0.02;
    if (this.rain.visible) {
      const p = this.rainPos;
      const fall = 22 * dt;
      for (let i = 0; i < this.rainN; i++) {
        p[i * 6 + 1] -= fall; p[i * 6 + 4] -= fall;
        if (p[i * 6 + 4] < 0 || Math.abs(p[i * 6] - camPos.x) > 26 || Math.abs(p[i * 6 + 2] - camPos.z) > 26) this._resetDrop(i, false, camPos);
      }
      this.rain.geometry.attributes.position.needsUpdate = true;
    }

    // Night emissives
    const glow = smoothstep(6, -4, elDeg);
    M.lampGlow.emissiveIntensity = glow * 3.2;
    M.poolLight.emissiveIntensity = 0.4 + glow * 4;
    for (const m of this.nightSigns || []) m.emissiveIntensity = 0.05 + glow * 0.9;

    // Point lights at nearest lamps (night only)
    this.updatePointLights(camPos, glow);

    // Environment map refresh
    this.envTimer -= dt;
    const elChanged = Math.abs(elDeg - this.lastEnvEl) > 1.2;
    const covChanged = Math.abs(wb.cover - this.lastEnvCover) > 0.06;
    if ((elChanged || covChanged) && this.envTimer <= 0) {
      this.refreshEnv(elDeg, dayF);
    }
  }

  refreshEnv(elDeg, dayF) {
    this.envTimer = 0.4;
    this.lastEnvEl = elDeg;
    this.lastEnvCover = this.weatherBlend.cover;
    const u = this.sky.material.uniforms;
    const showSun = u.showSunDisc.value;
    u.showSunDisc.value = 0;
    this.envGround.material.color.setRGB(0.22 * dayF + 0.01, 0.3 * dayF + 0.012, 0.16 * dayF + 0.02);
    const rt = this.pmrem.fromScene(this.envScene, 0.02, 1, 10000);
    u.showSunDisc.value = showSun;
    if (this.envRT) this.envRT.dispose();
    this.envRT = rt;
    this.scene.environment = rt.texture;
  }

  updatePointLights(camPos, glow) {
    const pls = this.pointLights;
    if (glow < 0.05 || !this.lightAnchors.length) {
      for (const pl of pls) pl.intensity = 0;
      return;
    }
    // choose nearest anchors
    const arr = this.lightAnchors;
    const best = [];
    for (let i = 0; i < arr.length; i++) {
      const a = arr[i];
      const d = (a.x - camPos.x) ** 2 + (a.z - camPos.z) ** 2;
      if (d > 50 * 50) continue;
      best.push([d, a]);
    }
    best.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < pls.length; i++) {
      const pl = pls[i];
      if (i < best.length) {
        const a = best[i][1];
        pl.position.set(a.x, a.y, a.z);
        pl.color.setHex(a.color || 0xffd7a0);
        pl.intensity = glow * (a.intensity || 10);
        pl.distance = a.range || 14;
      } else pl.intensity = 0;
    }
  }
}
