// Particles, fireworks, litter, tip coins, floating debris & rubber ducks.
import * as THREE from 'three';
import { G, bus } from '../core/context.js';
import { TEX } from '../core/textures.js';
import { plastic, painted } from '../core/materials.js';
import { WATER_Y } from '../config.js';
import { rand, pick } from '../core/utils.js';

// --------------------------------------------------------------------------
class Particles {
  constructor(scene, max, additive) {
    this.max = max;
    this.n = 0;
    this.pos = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.col = new Float32Array(max * 4);
    this.size = new Float32Array(max);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.alpha0 = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage);
    this.aSize = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos);
    g.setAttribute('color', this.aCol);
    g.setAttribute('size', this.aSize);
    g.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 600 }, uTex: { value: TEX.spark } },
      vertexShader: /* glsl */`
        attribute float size; attribute vec4 color; varying vec4 vCol; uniform float uScale;
        void main() { vCol = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(size * uScale / -mv.z, 1.0, 256.0); }`,
      fragmentShader: /* glsl */`
        varying vec4 vCol; uniform sampler2D uTex;
        void main() { float a = texture2D(uTex, gl_PointCoord).a; gl_FragColor = vec4(vCol.rgb, vCol.a * a); if (gl_FragColor.a < 0.01) discard; }`,
      transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);
  }
  emit(x, y, z, vx, vy, vz, life, size, r, g, b, a = 1, grav = 1, drag = 0) {
    let i;
    if (this.n < this.max) i = this.n++;
    else i = Math.floor(Math.random() * this.max);
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.col[i * 4] = r; this.col[i * 4 + 1] = g; this.col[i * 4 + 2] = b; this.col[i * 4 + 3] = a;
    this.alpha0[i] = a;
    this.size[i] = size; this.life[i] = life; this.maxLife[i] = life; this.grav[i] = grav; this.drag[i] = drag;
  }
  update(dt) {
    let n = this.n;
    const p = this.pos, v = this.vel;
    for (let i = 0; i < n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0 || p[i * 3 + 1] < -3) {
        // swap-remove
        n--;
        if (i !== n) {
          p[i * 3] = p[n * 3]; p[i * 3 + 1] = p[n * 3 + 1]; p[i * 3 + 2] = p[n * 3 + 2];
          v[i * 3] = v[n * 3]; v[i * 3 + 1] = v[n * 3 + 1]; v[i * 3 + 2] = v[n * 3 + 2];
          for (let k = 0; k < 4; k++) this.col[i * 4 + k] = this.col[n * 4 + k];
          this.size[i] = this.size[n]; this.life[i] = this.life[n]; this.maxLife[i] = this.maxLife[n];
          this.grav[i] = this.grav[n]; this.drag[i] = this.drag[n]; this.alpha0[i] = this.alpha0[n];
        }
        i--;
        continue;
      }
      const d = 1 - this.drag[i] * dt;
      v[i * 3] *= d; v[i * 3 + 1] = v[i * 3 + 1] * d - 9.81 * this.grav[i] * dt; v[i * 3 + 2] *= d;
      p[i * 3] += v[i * 3] * dt; p[i * 3 + 1] += v[i * 3 + 1] * dt; p[i * 3 + 2] += v[i * 3 + 2] * dt;
      const t = this.life[i] / this.maxLife[i];
      this.col[i * 4 + 3] = this.alpha0[i] * Math.min(1, t * 3);
    }
    this.n = n;
    this.points.geometry.setDrawRange(0, n);
    this.aPos.needsUpdate = true; this.aCol.needsUpdate = true; this.aSize.needsUpdate = true;
  }
}

// --------------------------------------------------------------------------
export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.water = new Particles(scene, 3500, false);
    this.glow = new Particles(scene, 4000, true);
    this.rockets = [];
    this.fireworksShow = null;

    // Litter: 3 kinds
    const can = new THREE.CylinderGeometry(0.035, 0.035, 0.12, 10).rotateZ(Math.PI / 2).translate(0, 0.035, 0);
    const cup = new THREE.CylinderGeometry(0.045, 0.032, 0.11, 10).rotateX(Math.PI / 2.3).translate(0, 0.04, 0);
    const wrap = new THREE.IcosahedronGeometry(0.06, 0).scale(1.4, 0.45, 1).translate(0, 0.025, 0);
    this.trashMeshes = [
      new THREE.InstancedMesh(can, new THREE.MeshStandardMaterial({ color: 0xd83a3a, metalness: 0.7, roughness: 0.3 }), 300),
      new THREE.InstancedMesh(cup, plastic(0xffffff, 0.5), 300),
      new THREE.InstancedMesh(wrap, plastic(0xffc21a, 0.4), 300),
    ];
    for (const m of this.trashMeshes) { m.count = 0; m.castShadow = true; m.frustumCulled = false; scene.add(m); }
    this.trash = []; // {x,z,kind,idx,ry}

    // Tip coins
    const coinGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.025, 20).rotateX(Math.PI / 2);
    this.coinMat = new THREE.MeshStandardMaterial({ color: 0xffc83a, metalness: 0.75, roughness: 0.25, emissive: 0xffa400, emissiveIntensity: 0.55 });
    this.coinMesh = new THREE.InstancedMesh(coinGeo, this.coinMat, 200);
    this.coinMesh.count = 0; this.coinMesh.frustumCulled = false; this.coinMesh.castShadow = true;
    scene.add(this.coinMesh);
    this.coins = [];

    // Floating leaves (pool debris)
    const leaf = new THREE.PlaneGeometry(0.16, 0.09).rotateX(-Math.PI / 2);
    this.leafMesh = new THREE.InstancedMesh(leaf, new THREE.MeshStandardMaterial({ color: 0x6b7a2a, roughness: 0.8, side: THREE.DoubleSide }), 500);
    this.leafMesh.count = 0; this.leafMesh.frustumCulled = false;
    scene.add(this.leafMesh);
    this.leaves = [];

    // Rubber ducks
    this.ducks = [];
    this.duckProto = this._makeDuck(false);
    this.goldDuckProto = this._makeDuck(true);

    // Seagulls circling the park
    this.birds = [];
    const birdMat = new THREE.MeshStandardMaterial({ color: 0xf4f4f0, roughness: 0.8, side: THREE.DoubleSide });
    const tipMat = new THREE.MeshStandardMaterial({ color: 0x3a3d42, roughness: 0.8, side: THREE.DoubleSide });
    for (let i = 0; i < 9; i++) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), birdMat); body.scale.set(0.8, 0.7, 2.2); g.add(body);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), birdMat); head.position.set(0, 0.05, 0.25); g.add(head);
      const wingG = new THREE.PlaneGeometry(0.7, 0.22).translate(0.35, 0, 0).rotateX(-Math.PI / 2);
      const tipG = new THREE.PlaneGeometry(0.25, 0.16).translate(0.82, 0, -0.02).rotateX(-Math.PI / 2);
      const wl = new THREE.Group(), wr = new THREE.Group();
      wl.add(new THREE.Mesh(wingG, birdMat), new THREE.Mesh(tipG, tipMat));
      wr.add(new THREE.Mesh(wingG, birdMat), new THREE.Mesh(tipG, tipMat)); wr.scale.x = -1;
      g.add(wl, wr);
      g.scale.setScalar(1.6);
      scene.add(g);
      this.birds.push({ g, wl, wr, cx: rand(-40, 40), cz: rand(-20, 60), r: rand(18, 45), h: rand(22, 40), a: rand(0, 6.28), sp: rand(0.12, 0.22) * (Math.random() < 0.5 ? 1 : -1), ph: rand(0, 6) });
    }

    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._s = new THREE.Vector3(1, 1, 1);
    this._p = new THREE.Vector3();
  }

  _makeDuck(gold) {
    const g = new THREE.Group();
    const mat = gold ? new THREE.MeshStandardMaterial({ color: 0xffd34a, metalness: 1, roughness: 0.15, emissive: 0x553300, emissiveIntensity: 0.5 }) : plastic(0xffdc2a, 0.3);
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.16, 14, 10), mat); body.scale.set(1, 0.75, 1.3); body.position.y = 0.06;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 10), mat); head.position.set(0, 0.22, 0.12);
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.09, 8), plastic(0xff7a1a, 0.4)); beak.rotation.x = Math.PI / 2; beak.position.set(0, 0.2, 0.24);
    const eyeM = painted(0x111111, 0.3);
    for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 5), eyeM); e.position.set(s * 0.06, 0.25, 0.19); g.add(e); }
    g.add(body, head, beak);
    g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    return g;
  }

  // ---------------- particles ----------------
  splash(x, y, z, strength = 1) {
    const n = Math.round(26 * strength);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, r = Math.random();
      const sp = (1.2 + Math.random() * 2.2) * strength;
      this.water.emit(x + Math.cos(a) * r * 0.3, y + 0.05, z + Math.sin(a) * r * 0.3, Math.cos(a) * sp * 0.6, 2 + Math.random() * 3.5 * strength, Math.sin(a) * sp * 0.6, 0.7 + Math.random() * 0.5, 0.12 + Math.random() * 0.14, 0.88, 0.97, 1, 0.75, 1, 0.3);
    }
    for (let i = 0; i < 6 * strength; i++) {
      const a = Math.random() * Math.PI * 2;
      this.water.emit(x + Math.cos(a) * 0.4, y + 0.02, z + Math.sin(a) * 0.4, Math.cos(a) * 1.2, 0.3, Math.sin(a) * 1.2, 0.9, 0.5, 0.95, 1, 1, 0.35, 0.05, 2);
    }
  }
  spray(x, y, z, vx, vy, vz, size = 0.12, spread = 0.3) {
    this.water.emit(x, y, z, vx + (Math.random() - 0.5) * spread, vy + (Math.random() - 0.5) * spread, vz + (Math.random() - 0.5) * spread, 1.1, size, 0.9, 0.97, 1, 0.6, 1, 0.1);
  }
  bubble(x, y, z) {
    this.water.emit(x, y, z, (Math.random() - 0.5) * 0.2, 0.4 + Math.random() * 0.3, (Math.random() - 0.5) * 0.2, 0.6, 0.05 + Math.random() * 0.06, 0.95, 1, 1, 0.8, -0.05, 0.5);
  }
  steam(x, y, z) {
    this.water.emit(x, y, z, (Math.random() - 0.5) * 0.15, 0.25 + Math.random() * 0.2, (Math.random() - 0.5) * 0.15, 2.2, 0.5 + Math.random() * 0.4, 0.9, 0.92, 0.95, 0.12, -0.01, 0.3);
  }
  sparkle(x, y, z, color = 0xffd34a, n = 14) {
    const c = new THREE.Color(color);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, b = Math.random() * Math.PI - Math.PI / 2;
      const sp = 1 + Math.random() * 2;
      this.glow.emit(x, y, z, Math.cos(a) * Math.cos(b) * sp, Math.sin(b) * sp + 1.5, Math.sin(a) * Math.cos(b) * sp, 0.6 + Math.random() * 0.4, 0.12 + Math.random() * 0.1, c.r, c.g, c.b, 1, 0.4, 1.5);
    }
  }
  dust(x, y, z, n = 30) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      this.water.emit(x + Math.cos(a) * 0.5, y + 0.1, z + Math.sin(a) * 0.5, Math.cos(a) * 2.5, 0.6 + Math.random(), Math.sin(a) * 2.5, 0.8, 0.35 + Math.random() * 0.3, 0.95, 0.92, 0.85, 0.5, 0.2, 2.5);
    }
  }
  confetti(x, y, z, n = 120) {
    const cols = [0xff4a4a, 0xffd23a, 0x3adf7a, 0x2ab0ff, 0xff7ab8, 0xa45cff];
    for (let i = 0; i < n; i++) {
      const c = new THREE.Color(pick(cols));
      const a = Math.random() * Math.PI * 2;
      this.glow.emit(x, y, z, Math.cos(a) * rand(1, 5), rand(3, 9), Math.sin(a) * rand(1, 5), rand(1.8, 3), rand(0.1, 0.18), c.r, c.g, c.b, 1, 0.35, 0.8);
    }
  }
  fire(x, y, z) {
    this.glow.emit(x + (Math.random() - 0.5) * 0.06, y, z + (Math.random() - 0.5) * 0.06, (Math.random() - 0.5) * 0.2, 0.6 + Math.random() * 0.5, (Math.random() - 0.5) * 0.2, 0.35 + Math.random() * 0.2, 0.18 + Math.random() * 0.1, 1, 0.55 + Math.random() * 0.2, 0.15, 0.8, -0.2, 1);
  }

  // ---------------- fireworks ----------------
  launchRocket(x, z) {
    const cols = [0xff3a3a, 0xffd23a, 0x3aff8a, 0x3ab0ff, 0xff6ad5, 0xffffff, 0xff9a2a, 0xa46aff];
    this.rockets.push({ x, y: 1, z, vx: rand(-1.5, 1.5), vy: rand(22, 30), vz: rand(-1.5, 1.5), t: rand(1.2, 1.7), col: new THREE.Color(pick(cols)), col2: new THREE.Color(pick(cols)), type: Math.floor(Math.random() * 3) });
    G.audio && G.audio.play('launch', { pos: new THREE.Vector3(x, 1, z), vol: 0.6 });
  }
  explode(r) {
    const n = 140;
    for (let i = 0; i < n; i++) {
      const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u);
      let sp = r.type === 1 ? 11 : rand(6, 12);
      const c = i % 2 ? r.col : r.col2;
      this.glow.emit(r.x, r.y, r.z, Math.cos(a) * s * sp, u * sp, Math.sin(a) * s * sp, rand(1.4, 2.4), rand(0.35, 0.6), c.r, c.g, c.b, 1, 0.12, 1.4);
    }
    this.glow.emit(r.x, r.y, r.z, 0, 0, 0, 0.25, 6, 1, 0.95, 0.8, 1, 0, 0);
    G.audio && G.audio.play('boom', { pos: new THREE.Vector3(r.x, r.y, r.z), vol: 1 });
  }
  startFireworks(launchers) {
    if (!launchers.length) return;
    this.fireworksShow = { t: 0, dur: 40, launchers, next: 0 };
    bus.emit('fireworks');
  }

  // ---------------- litter ----------------
  addTrash(x, z) {
    if (this.trash.length >= 290) return null;
    const kind = Math.floor(Math.random() * 3);
    const t = { x, z, kind, ry: Math.random() * Math.PI * 2, id: Math.random(), claimed: null };
    this.trash.push(t);
    this._rebuildTrash();
    bus.emit('trashSpawned', t);
    return t;
  }
  removeTrash(t) {
    const i = this.trash.indexOf(t);
    if (i < 0) return false;
    this.trash.splice(i, 1);
    this._rebuildTrash();
    return true;
  }
  _rebuildTrash() {
    const counts = [0, 0, 0];
    for (const t of this.trash) {
      const m = this.trashMeshes[t.kind];
      this._e.set(0, t.ry, 0); this._q.setFromEuler(this._e); this._p.set(t.x, 0.0, t.z);
      this._m.compose(this._p, this._q, this._s);
      m.setMatrixAt(counts[t.kind]++, this._m);
    }
    this.trashMeshes.forEach((m, i) => { m.count = counts[i]; m.instanceMatrix.needsUpdate = true; });
  }
  trashNear(x, z, r) {
    let c = 0; const r2 = r * r;
    for (const t of this.trash) if ((t.x - x) ** 2 + (t.z - z) ** 2 < r2) c++;
    return c;
  }
  nearestTrash(x, z, maxD, unclaimedOnly = false) {
    let best = null, bd = maxD * maxD;
    for (const t of this.trash) {
      if (unclaimedOnly && t.claimed) continue;
      const d = (t.x - x) ** 2 + (t.z - z) ** 2;
      if (d < bd) { bd = d; best = t; }
    }
    return best;
  }

  // ---------------- coins ----------------
  addCoin(x, y, z, value) {
    if (this.coins.length >= 190) return;
    this.coins.push({ x, y, z, vy: 3.2, value, t: 0, ground: Math.max(0.25, y > 0 ? 0.25 : WATER_Y + 0.12), life: 120 });
  }
  // ---------------- debris ----------------
  setPoolDebris(pool, count) {
    // pool: park object with pool info; regenerate its leaves
    this.leaves = this.leaves.filter((l) => l.pool !== pool);
    const p = pool.pool;
    for (let i = 0; i < count; i++) {
      let lx, lz;
      if (p.shape === 'circle') { const a = Math.random() * 6.28, r = Math.sqrt(Math.random()) * p.r * 0.85; lx = Math.cos(a) * r; lz = Math.sin(a) * r; }
      else { lx = (Math.random() - 0.5) * p.hw * 1.8; lz = (Math.random() - 0.5) * p.hl * 1.8; }
      const [wx, wz] = pool.poolToWorld(lx, lz);
      if (p.floorFn(lx, lz) > WATER_Y - 0.05) continue;
      this.leaves.push({ pool, x: wx, z: wz, ry: Math.random() * 6.28, ph: Math.random() * 6.28, lx, lz });
    }
  }
  removeLeavesNear(x, z, r) {
    const before = this.leaves.length;
    this.leaves = this.leaves.filter((l) => (l.x - x) ** 2 + (l.z - z) ** 2 > r * r);
    return before - this.leaves.length;
  }

  // ---------------- ducks ----------------
  addDuck(pool, gold) {
    const p = pool.pool;
    let lx = 0, lz = 0;
    for (let t = 0; t < 10; t++) {
      if (p.shape === 'circle') { const a = Math.random() * 6.28, r = Math.sqrt(Math.random()) * p.r * 0.7; lx = Math.cos(a) * r; lz = Math.sin(a) * r; }
      else { lx = (Math.random() - 0.5) * p.hw * 1.6; lz = (Math.random() - 0.5) * p.hl * 1.6; }
      if (p.floorFn(lx, lz) < WATER_Y - 0.3) break;
    }
    const [x, z] = pool.poolToWorld(lx, lz);
    const mesh = (gold ? this.goldDuckProto : this.duckProto).clone();
    mesh.position.set(x, WATER_Y, z);
    this.scene.add(mesh);
    const d = { pool, mesh, x, z, gold, vx: rand(-0.15, 0.15), vz: rand(-0.15, 0.15), ph: Math.random() * 6, value: gold ? 750 : Math.round(rand(60, 160)) };
    this.ducks.push(d);
    return d;
  }
  removeDuck(d) {
    const i = this.ducks.indexOf(d);
    if (i >= 0) this.ducks.splice(i, 1);
    this.scene.remove(d.mesh);
  }

  update(dt, camPos, time) {
    this.water.update(dt);
    this.glow.update(dt);
    // particle scale by viewport height
    const s = (G.renderer ? G.renderer.domElement.height : 800) * 0.75;
    this.water.mat.uniforms.uScale.value = s; this.glow.mat.uniforms.uScale.value = s;

    // rockets
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i];
      r.vy -= 9.81 * dt * 0.6; r.x += r.vx * dt; r.y += r.vy * dt; r.z += r.vz * dt; r.t -= dt;
      this.glow.emit(r.x, r.y, r.z, (Math.random() - 0.5) * 0.5, -1, (Math.random() - 0.5) * 0.5, 0.5, 0.18, 1, 0.75, 0.4, 0.8, 0.2, 1);
      if (r.t <= 0) { this.explode(r); this.rockets.splice(i, 1); }
    }
    const fs = this.fireworksShow;
    if (fs) {
      fs.t += dt; fs.next -= dt;
      if (fs.next <= 0) {
        const L = pick(fs.launchers);
        const burst = fs.t > fs.dur - 6 ? 3 : 1;
        for (let k = 0; k < burst; k++) this.launchRocket(L.x + rand(-0.5, 0.5), L.z + rand(-0.5, 0.5));
        fs.next = fs.t > fs.dur - 6 ? 0.25 : rand(0.6, 1.6);
      }
      if (fs.t > fs.dur) this.fireworksShow = null;
    }

    // coins
    const cm = this.coinMesh;
    let ci = 0;
    for (let i = this.coins.length - 1; i >= 0; i--) {
      const c = this.coins[i];
      c.t += dt; c.life -= dt;
      if (c.vy !== 0) { c.vy -= 9.81 * dt; c.y += c.vy * dt; if (c.y <= c.ground) { c.y = c.ground; c.vy = 0; } }
      if (c.life <= 0) { this.coins.splice(i, 1); continue; }
    }
    for (const c of this.coins) {
      this._e.set(0, time * 3 + c.x, 0); this._q.setFromEuler(this._e);
      this._p.set(c.x, c.y + (c.vy === 0 ? Math.sin(time * 3 + c.z) * 0.06 : 0), c.z);
      const sc = c.life < 3 ? c.life / 3 : 1;
      this._s.set(sc, sc, sc);
      this._m.compose(this._p, this._q, this._s);
      cm.setMatrixAt(ci++, this._m);
    }
    this._s.set(1, 1, 1);
    cm.count = ci; cm.instanceMatrix.needsUpdate = true;

    // leaves bob
    const lm = this.leafMesh;
    let li = 0;
    for (const l of this.leaves) {
      if (li >= 500) break;
      this._e.set(Math.sin(time + l.ph) * 0.08, l.ry + Math.sin(time * 0.2 + l.ph) * 0.3, 0); this._q.setFromEuler(this._e);
      this._p.set(l.x + Math.sin(time * 0.15 + l.ph) * 0.2, WATER_Y + 0.012 + Math.sin(time * 1.3 + l.ph) * 0.008, l.z + Math.cos(time * 0.13 + l.ph) * 0.2);
      this._m.compose(this._p, this._q, this._s);
      lm.setMatrixAt(li++, this._m);
    }
    lm.count = li; lm.instanceMatrix.needsUpdate = true;

    // seagulls
    for (const b of this.birds) {
      b.a += b.sp * dt; b.ph += dt * (6 + Math.sin(time * 0.3 + b.cx) * 2);
      const x = b.cx + Math.cos(b.a) * b.r, z = b.cz + Math.sin(b.a) * b.r;
      const y = b.h + Math.sin(time * 0.4 + b.cz) * 2;
      b.g.position.set(x, y, z);
      const dir = b.sp > 0 ? 1 : -1;
      b.g.rotation.set(0, Math.atan2(-Math.sin(b.a) * dir, Math.cos(b.a) * dir), -0.25 * dir);
      const flap = Math.sin(b.ph) > -0.2 ? Math.sin(b.ph) * 0.6 : -0.12;
      b.wl.rotation.z = flap; b.wr.rotation.z = -flap;
      b.g.visible = !G.env || G.env.nightF < 0.7;
    }
    // ducks drift
    for (const d of this.ducks) {
      d.ph += dt;
      const p = d.pool.pool;
      d.x += d.vx * dt; d.z += d.vz * dt;
      const [lx, lz] = d.pool.poolLocal(d.x, d.z);
      const lim = p.shape === 'circle' ? (Math.hypot(lx, lz) > p.r * 0.75) : (Math.abs(lx) > p.hw - 0.4 || Math.abs(lz) > p.hl - 0.4);
      if (lim || p.floorFn(lx, lz) > WATER_Y - 0.25) { d.vx = -d.vx; d.vz = -d.vz; d.x += d.vx * dt * 2; d.z += d.vz * dt * 2; }
      d.mesh.position.set(d.x, WATER_Y - 0.02 + Math.sin(d.ph * 2) * 0.02 + (d.pool.waveAt ? d.pool.waveAt(d.x, d.z) : 0), d.z);
      d.mesh.rotation.set(Math.sin(d.ph * 1.7) * 0.08, Math.atan2(d.vx, d.vz), Math.sin(d.ph * 2.1) * 0.08);
      if (d.gold && Math.random() < dt * 4) this.sparkle(d.x, WATER_Y + 0.3, d.z, 0xffd34a, 1);
    }
  }
}
