// Ground (with pool cut-outs), surrounding landscape, parking, road, entrance,
// fences, for-sale signs and near-camera grass.
import * as THREE from 'three';
import { G } from '../core/context.js';
import { TEX, makeSignTexture } from '../core/textures.js';
import { M, plastic, painted, signMat, fabric } from '../core/materials.js';
import { PrefabBuilder, instantiate, InstancePool, scaleBoxUV } from '../core/prefab.js';
import { getPrefab, PM } from './props.js';
import { PLOT, PLOTS, PARK_MIN, GATE_Z } from '../config.js';
import { mulberry32, fbm2, smoothstep } from '../core/utils.js';

const MAX_HOLES = 40;

export class Terrain {
  constructor(scene) {
    this.scene = scene;
    this.holeUniform = { value: Array.from({ length: MAX_HOLES }, () => new THREE.Vector4(0, 0, 0, 0)) };
    this.holeCount = { value: 0 };
    this._buildGround();
    this._buildHills();
    this._buildParking();
    this._buildEntrance();
    this._buildDistantTrees();
    this.fenceGroup = new THREE.Group(); scene.add(this.fenceGroup);
    this.saleGroup = new THREE.Group(); scene.add(this.saleGroup);
    this.saleSigns = [];
    this.grass = null;
    this.grassCenter = new THREE.Vector2(1e9, 1e9);
    this.movingCars = [];
    this._buildMovingCars();
  }

  _buildGround() {
    const size = 360;
    const geo = new THREE.PlaneGeometry(size, size, 1, 1).rotateX(-Math.PI / 2);
    const map = TEX.grass.clone(); map.repeat.set(size / 7, size / 7); map.needsUpdate = true;
    const nmap = TEX.grassN.clone(); nmap.repeat.set(size / 7, size / 7); nmap.needsUpdate = true;
    const mat = new THREE.MeshStandardMaterial({ map, normalMap: nmap, normalScale: new THREE.Vector2(0.9, 0.9), roughness: 0.96, metalness: 0, color: 0xe2ead8 });
    const holes = this.holeUniform, hc = this.holeCount;
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uHoles = holes; sh.uniforms.uHoleCount = hc; sh.uniforms.uMacro = { value: TEX.macro };
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vGW;')
        .replace('#include <project_vertex>', '#include <project_vertex>\n vGW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>
          varying vec3 vGW; uniform vec4 uHoles[${MAX_HOLES}]; uniform int uHoleCount; uniform sampler2D uMacro;`)
        .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
          for (int i = 0; i < ${MAX_HOLES}; i++) {
            if (i >= uHoleCount) break;
            vec4 h = uHoles[i];
            if (h.w < -9000.0) { if (distance(vGW.xz, h.xy) < h.z) discard; }
            else if (vGW.x > h.x && vGW.x < h.z && vGW.z > h.y && vGW.z < h.w) discard;
          }`)
        .replace('#include <map_fragment>', `
          vec4 sampledDiffuseColor = texture2D(map, vMapUv);
          vec4 s2 = texture2D(map, vMapUv * 0.31 + vec2(0.17, 0.53));
          sampledDiffuseColor = mix(sampledDiffuseColor, s2, 0.45);
          diffuseColor *= sampledDiffuseColor;
          float m1 = texture2D(uMacro, vGW.xz * 0.011).r;
          float m2 = texture2D(uMacro, vGW.xz * 0.047 + 0.3).r;
          diffuseColor.rgb *= mix(vec3(0.78, 0.86, 0.66), vec3(1.15, 1.1, 0.86), smoothstep(0.3, 0.75, m1)) * (0.86 + 0.28 * m2);`);
    };
    mat.customProgramCacheKey = () => 'ground';
    const ground = new THREE.Mesh(geo, mat);
    ground.position.set(0, 0, 15);
    ground.receiveShadow = true;
    this.scene.add(ground);
    this.ground = ground;
  }

  setHoles(list) {
    const n = Math.min(MAX_HOLES, list.length);
    for (let i = 0; i < MAX_HOLES; i++) {
      const v = this.holeUniform.value[i];
      if (i < n) {
        const h = list[i];
        if (h.circle) v.set(h.x, h.z, h.r, -9999);
        else v.set(h.x0, h.z0, h.x1, h.z1);
      } else v.set(0, 0, 0, 0);
    }
    this.holeCount.value = n;
  }
  get maxHoles() { return MAX_HOLES; }

  _buildHills() {
    // ring of rolling hills beyond the play area
    const rings = 34, segs = 120;
    const pos = [], col = [], uv = [], idx = [];
    const c0 = new THREE.Color(0x5f7f3a), c1 = new THREE.Color(0x3e5f2c), c2 = new THREE.Color(0x7a8a5a);
    for (let i = 0; i <= rings; i++) {
      const t = i / rings;
      const r = 170 + Math.pow(t, 1.6) * 1400;
      for (let j = 0; j <= segs; j++) {
        const a = (j / segs) * Math.PI * 2;
        const x = Math.cos(a) * r, z = Math.sin(a) * r + 15;
        const n = fbm2(x * 0.004 + 10, z * 0.004 - 3, 5);
        const rise = smoothstep(170, 520, r);
        let h = rise * (n * n * 70 + 4) - 1.5 + smoothstep(700, 1500, r) * n * 120;
        if (i === 0) h = -0.3;
        pos.push(x, h, z);
        const cc = c0.clone().lerp(c1, Math.min(1, n * 1.1)).lerp(c2, smoothstep(70, 160, h) * 0.5);
        col.push(cc.r, cc.g, cc.b);
        uv.push(x / 12, z / 12);
      }
    }
    for (let i = 0; i < rings; i++) for (let j = 0; j < segs; j++) {
      const a = i * (segs + 1) + j, b = a + segs + 1;
      idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    const map = TEX.grass.clone(); map.needsUpdate = true;
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, map, roughness: 1, color: 0xd0d8c0 });
    const hills = new THREE.Mesh(g, mat);
    hills.receiveShadow = true;
    this.scene.add(hills);
    this.hillHeight = (x, z) => {
      const r = Math.hypot(x, z - 15);
      const n = fbm2(x * 0.004 + 10, z * 0.004 - 3, 5);
      return smoothstep(170, 520, r) * (n * n * 70 + 4) - 1.5;
    };
  }

  _buildParking() {
    const b = new PrefabBuilder();
    // parking lot
    const lot = new THREE.BoxGeometry(100, 0.06, 26); scaleBoxUV(lot, 100, 0.06, 26, 0.25);
    b.add(lot, M.asphalt, 0, 0.0, 86);
    // road
    const road = new THREE.BoxGeometry(360, 0.06, 9); scaleBoxUV(road, 360, 0.06, 9, 0.25);
    b.add(road, M.asphalt, 0, 0.005, 104);
    // curbs
    b.box(360, 0.18, 0.3, M.concrete, 0, 0.09, 99.4);
    b.box(360, 0.18, 0.3, M.concrete, 0, 0.09, 108.6);
    // sidewalk / plaza outside gate
    const plaza = new THREE.BoxGeometry(28, 0.08, 9); scaleBoxUV(plaza, 28, 0.08, 9, 0.5);
    b.add(plaza, M.deck, 0, 0.02, 68.5);
    const walk = new THREE.BoxGeometry(10, 0.08, 26); scaleBoxUV(walk, 10, 0.08, 26, 0.5);
    b.add(walk, M.deck, 0, 0.025, 86);
    // stall lines
    const white = painted(0xf2f2ec, 0.6);
    for (const side of [-1, 1]) {
      for (let i = 0; i <= 14; i++) {
        const x = side * (7 + i * 2.8);
        b.box(0.12, 0.01, 5, white, x, 0.035, 76.5);
        b.box(0.12, 0.01, 5, white, x, 0.035, 95.5);
        b.box(0.12, 0.01, 5, white, x, 0.035, 85.5);
      }
    }
    // road center dashes
    for (let x = -178; x < 178; x += 6) b.box(3, 0.01, 0.15, painted(0xffd23a, 0.6), x, 0.04, 104);
    const pf = b.build({ castShadow: false });
    const g = instantiate(pf);
    g.traverse((o) => { if (o.isMesh) o.receiveShadow = true; });
    this.scene.add(g);
    // parked cars (instanced, colored)
    const carPool = new InstancePool(getPrefab('car'), this.scene, 64);
    this.carPool = carPool;
    const rng = mulberry32(99);
    const colors = [0xd8d8d8, 0x1a1a1a, 0xb02a2a, 0x2a4ab0, 0xf2f2f2, 0x6a6a6a, 0x2a7a4a, 0xe0b030, 0x3a8ad0];
    const m = new THREE.Matrix4();
    for (const side of [-1, 1]) for (const [rowZ, face] of [[76.5, Math.PI], [85.5, 0], [95.5, 0]]) {
      for (let i = 0; i < 14; i++) {
        if (rng() < 0.38) continue;
        const x = side * (8.4 + i * 2.8);
        m.compose(new THREE.Vector3(x, 0, rowZ), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, face + (rng() - 0.5) * 0.05, 0)), new THREE.Vector3(1, 1, 1));
        carPool.add(m, new THREE.Color(colors[Math.floor(rng() * colors.length)]));
      }
    }
    carPool.freeze();
    // a few palms along the walkway
    this.decoPalms = [];
    for (let z = 74; z < 99; z += 6) for (const x of [-6, 6]) this.decoPalms.push([x, z]);
    for (const x of [-16, -12, 12, 16]) this.decoPalms.push([x, 71]);
  }

  _buildMovingCars() {
    const pf = getPrefab('car');
    const colors = [0xb02a2a, 0x2a4ab0, 0xf2f2f2, 0x1a1a1a, 0xe0b030];
    for (let i = 0; i < 5; i++) {
      const g = new THREE.Group();
      for (const p of pf.parts) {
        let mat = p.material;
        if (mat.userData.instColor) { mat = mat.clone(); mat.color = new THREE.Color(colors[i]); mat.userData = {}; }
        const mm = new THREE.Mesh(p.geometry, mat); mm.castShadow = true; g.add(mm);
      }
      const dir = i % 2 ? 1 : -1;
      g.position.set(-170 + Math.random() * 340, 0, dir > 0 ? 102 : 106);
      g.rotation.y = dir > 0 ? -Math.PI / 2 : Math.PI / 2;
      this.scene.add(g);
      this.movingCars.push({ g, dir, speed: 9 + Math.random() * 6 });
    }
  }

  _buildEntrance() {
    const b = new PrefabBuilder();
    const z = GATE_Z;
    const stone = M.stucco;
    // pillars
    for (const x of [-7.5, 7.5]) {
      b.boxUV(2.2, 7.5, 2.2, stone, x, 3.75, z, 0, 0.5);
      b.boxUV(2.6, 0.5, 2.6, painted(0x1a7fb8, 0.5), x, 7.75, z, 0, 1);
      b.add(new THREE.ConeGeometry(1.6, 1.6, 4), painted(0xff7a1a, 0.6), x, 8.8, z, 0, Math.PI / 4, 0);
      // wave stripe
      b.boxUV(2.24, 0.4, 2.24, painted(0x22c3f5, 0.5), x, 1.2, z, 0, 1);
    }
    // arch beam with sign
    const arch = new THREE.TorusGeometry(7.5, 0.35, 10, 40, Math.PI);
    b.add(arch, painted(0x1a7fb8, 0.45), 0, 7.4, z - 0.15, 0, 0, 0, 1, 0.45, 1);
    b.box(13.0, 0.5, 0.6, painted(0xffffff, 0.5), 0, 7.0, z);
    b.add(new THREE.PlaneGeometry(10.5, 3.3), signMat(TEX.logo, 0.7), 0, 8.9, z + 0.42);
    b.add(new THREE.PlaneGeometry(10.5, 3.3), signMat(TEX.logo, 0.7), 0, 8.9, z - 0.42, 0, Math.PI, 0);
    b.box(10.8, 3.5, 0.7, painted(0x0a5d93, 0.5), 0, 8.9, z);
    // ticket booths
    for (const x of [-4.3, 4.3]) {
      b.boxUV(2.4, 2.6, 2.2, painted(0xfff4e0, 0.7), x, 1.3, z + 0.2, 0, 1);
      b.box(1.6, 1.0, 0.05, M.glassDark, x, 1.6, z + 1.32);
      b.box(2.8, 0.15, 2.8, painted(0xff7a1a, 0.6), x, 2.7, z + 0.2);
      b.box(1.2, 0.08, 0.35, painted(0xffffff, 0.5), x, 1.05, z + 1.4);
      const tk = makeSignTexture(['TICKETS'], { bg: '#ff7a1a', fg: '#ffffff', w: 256, h: 64 });
      b.add(new THREE.PlaneGeometry(1.4, 0.36), signMat(tk, 0.5), x, 2.35, z + 1.33);
    }
    // turnstiles
    for (const x of [-2.2, -0.75, 0.75, 2.2]) {
      b.box(0.25, 1.0, 1.2, M.steel, x, 0.5, z + 0.2);
      for (let k = 0; k < 3; k++) {
        const a = (k / 3) * Math.PI * 2;
        b.beam(new THREE.Vector3(x, 0.9, z + 0.2), new THREE.Vector3(x + Math.cos(a) * 0.55, 0.9 + Math.sin(a) * 0.2, z + 0.2), 0.025, M.chrome);
      }
    }
    // flags
    for (const x of [-11, -9.6, 9.6, 11]) {
      b.cyl(0.05, 0.06, 7, M.steel, x, 3.5, z + 1.2, 8);
      b.add(new THREE.PlaneGeometry(1.4, 0.9), fabric([0x22c3f5, 0xff7a1a, 0xffd23a, 0x3adf7a][(x > 0 ? 2 : 0) + (Math.abs(x) > 10 ? 1 : 0)]), x + 0.72, 6.4, z + 1.2);
    }
    // planters along the front wall
    for (const x of [-13, 13]) b.boxUV(4, 0.7, 1.2, stone, x, 0.35, z + 0.4, 0, 0.5);
    const pf = b.build();
    const g = instantiate(pf);
    this.scene.add(g);
    this.entrance = g;
  }

  _buildDistantTrees() {
    const broad = new InstancePool(getPrefab('broadTree'), this.scene, 256, { shadows: false });
    const pine = new InstancePool(getPrefab('pine'), this.scene, 256, { shadows: false });
    const rng = mulberry32(2024);
    const m = new THREE.Matrix4();
    let placed = 0;
    for (let t = 0; t < 2600 && placed < 520; t++) {
      const a = rng() * Math.PI * 2;
      const r = 78 + Math.pow(rng(), 0.8) * 320;
      const x = Math.cos(a) * r, z = Math.sin(a) * r + 15;
      // keep out of parking/road corridor and the park
      if (z > 64 && z < 112 && Math.abs(x) < 60) continue;
      if (Math.abs(x) < 70 && z > -70 && z < 66) continue;
      if (z > 98 && z < 112) continue;
      const y = r > 165 ? this.hillHeight(x, z) : 0;
      const s = 0.8 + rng() * 0.9;
      m.compose(new THREE.Vector3(x, y - 0.2, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rng() * 6.28, 0)), new THREE.Vector3(s, s * (0.85 + rng() * 0.4), s));
      (rng() < 0.6 ? broad : pine).add(m);
      placed++;
    }
    broad.freeze(); pine.freeze();
  }

  // Fence around owned plots (gate gap at the entrance)
  rebuildFence(owned) {
    for (const c of [...this.fenceGroup.children]) { this.fenceGroup.remove(c); c.geometry && c.geometry.dispose(); }
    const set = new Set(owned);
    const b = new PrefabBuilder();
    const H = 1.25;
    const segs = [];
    for (const key of owned) {
      const [i, j] = key.split(',').map(Number);
      const x0 = PARK_MIN + i * PLOT, z0 = PARK_MIN + j * PLOT, x1 = x0 + PLOT, z1 = z0 + PLOT;
      if (!set.has(`${i},${j - 1}`)) segs.push([x0, z0, x1, z0]);
      if (!set.has(`${i},${j + 1}`)) segs.push([x0, z1, x1, z1]);
      if (!set.has(`${i - 1},${j}`)) segs.push([x0, z0, x0, z1]);
      if (!set.has(`${i + 1},${j}`)) segs.push([x1, z0, x1, z1]);
    }
    const add = (ax, az, bx, bz) => {
      const len = Math.hypot(bx - ax, bz - az);
      if (len < 0.1) return;
      const g = new THREE.PlaneGeometry(len, H);
      const uv = g.attributes.uv;
      for (let k = 0; k < uv.count; k++) uv.setX(k, uv.getX(k) * len / 2);
      const ang = Math.atan2(-(bz - az), bx - ax);
      b.add(g, M.fence, (ax + bx) / 2, H / 2, (az + bz) / 2, 0, ang, 0);
      const n = Math.max(1, Math.round(len / 2.5));
      for (let k = 0; k <= n; k++) {
        const t = k / n;
        b.box(0.14, H + 0.15, 0.14, M.whitePaint, ax + (bx - ax) * t, (H + 0.15) / 2, az + (bz - az) * t);
      }
    };
    for (const [ax, az, bx, bz] of segs) {
      if (az === bz && az === GATE_Z && Math.min(ax, bx) < -9 && Math.max(ax, bx) > 9) {
        add(Math.min(ax, bx), az, -9, az);
        add(9, az, Math.max(ax, bx), az);
      } else if (az === bz && az === GATE_Z && ax >= -9 && bx <= 9) {
        continue;
      } else if (az === bz && az === GATE_Z) {
        // segment overlapping gate partially
        const lo = Math.min(ax, bx), hi = Math.max(ax, bx);
        if (hi <= -9 || lo >= 9) add(lo, az, hi, az);
        else { if (lo < -9) add(lo, az, -9, az); if (hi > 9) add(9, az, hi, az); }
      } else add(ax, az, bx, bz);
    }
    const pf = b.build();
    const g = instantiate(pf);
    for (const c of [...g.children]) this.fenceGroup.add(c);
  }

  rebuildSaleSigns(owned, priceFn) {
    for (const s of this.saleSigns) this.saleGroup.remove(s.group);
    this.saleSigns = [];
    const set = new Set(owned);
    const pf = getPrefab('forsale');
    for (let i = 0; i < PLOTS; i++) for (let j = 0; j < PLOTS; j++) {
      const k = `${i},${j}`;
      if (set.has(k)) continue;
      const adj = set.has(`${i - 1},${j}`) || set.has(`${i + 1},${j}`) || set.has(`${i},${j - 1}`) || set.has(`${i},${j + 1}`);
      if (!adj) continue;
      const g = instantiate(pf);
      const price = priceFn();
      const tex = makeSignTexture(['FOR SALE', '$' + price.toLocaleString('en-US')], { bg: '#ffffff', fg: '#d8341e', w: 512, h: 256, border: '#d8341e' });
      const face = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.05), signMat(tex, 0.3));
      face.position.set(0, 1.75, 0.04);
      const back = face.clone(); back.rotation.y = Math.PI; back.position.z = -0.04;
      g.add(face, back);
      // place near the edge facing the owned land
      let x = PARK_MIN + i * PLOT + PLOT / 2, z = PARK_MIN + j * PLOT + PLOT / 2, ry = 0;
      if (set.has(`${i},${j + 1}`)) { z = PARK_MIN + (j + 1) * PLOT - 2; ry = 0; }
      else if (set.has(`${i},${j - 1}`)) { z = PARK_MIN + j * PLOT + 2; ry = Math.PI; }
      else if (set.has(`${i + 1},${j}`)) { x = PARK_MIN + (i + 1) * PLOT - 2; ry = Math.PI / 2; }
      else if (set.has(`${i - 1},${j}`)) { x = PARK_MIN + i * PLOT + 2; ry = -Math.PI / 2; }
      g.position.set(x, 0, z);
      g.rotation.y = ry;
      this.saleGroup.add(g);
      this.saleSigns.push({ group: g, plot: k, x, z, price });
    }
  }

  // Near-camera grass clumps
  initGrass(count) {
    if (this.grass) { this.grass.meshes.forEach((m) => this.scene.remove(m)); this.grass = null; }
    if (!count) return;
    this.grass = new InstancePool(getPrefab('grassClump'), this.scene, count);
    this.grassCap = count;
    this.grassCell = count > 6000 ? 0.5 : 0.7;
    this.grassR = count > 6000 ? 24 : 20;
    this.grassCenter.set(1e9, 1e9);
  }
  refreshGrass(camPos, force = false) {
    if (!this.grass) return;
    const cs = 4;
    const cx = Math.round(camPos.x / cs) * cs, cz = Math.round(camPos.z / cs) * cs;
    if (!force && cx === this.grassCenter.x && cz === this.grassCenter.y) return;
    this.grassCenter.set(cx, cz);
    const pool = this.grass;
    // reset
    while (pool.count > 0) pool.remove(pool.handles[pool.count - 1]);
    const R = this.grassR, cell = this.grassCell;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), s = new THREE.Vector3();
    const grid = G.park && G.park.grid;
    const i0 = Math.floor((cx - R) / cell), i1 = Math.ceil((cx + R) / cell);
    const j0 = Math.floor((cz - R) / cell), j1 = Math.ceil((cz + R) / cell);
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      if (pool.count >= this.grassCap) break;
      const h = Math.sin(i * 127.1 + j * 311.7) * 43758.5453; const r1 = h - Math.floor(h);
      const h2 = Math.sin(i * 269.5 + j * 183.3) * 43758.5453; const r2 = h2 - Math.floor(h2);
      const x = (i + r1) * cell, z = (j + r2) * cell;
      const d = Math.hypot(x - cx, z - cz);
      if (d > R) continue;
      if (z > 64.5 && z < 112 && Math.abs(x) < 52) continue; // parking & plaza
      if (z > 61 && z < 67 && Math.abs(x) < 15) continue;
      if (grid && !grid.isGrass(x, z)) continue;
      const fade = smoothstep(R, R - 6, d);
      const sc = (0.55 + r1 * 0.7) * fade;
      e.set(0, r2 * 6.28, 0); q.setFromEuler(e); v.set(x, 0, z); s.set(sc * (0.8 + r2 * 0.5), sc, sc * (0.8 + r2 * 0.5));
      m.compose(v, q, s);
      pool.add(m);
    }
  }

  update(dt) {
    for (const c of this.movingCars) {
      c.g.position.x += c.dir * c.speed * dt;
      if (c.g.position.x > 180) c.g.position.x = -180;
      if (c.g.position.x < -180) c.g.position.x = 180;
    }
  }
}
