// Small verlet ragdoll for the 7-bone mini rig: 10 particles, distance constraints,
// ground/pool-floor collision, buoyancy in pools, walls from the park grid.
import * as THREE from 'three';
import { G } from '../core/context.js';
import { WATER_Y } from '../config.js';

const GRAVITY = -16;
const H = 1 / 120;          // fixed sub-step: verlet needs a constant step to stay stable
const MAX_SUB = 8;
const _v = new THREE.Vector3(), _a = new THREE.Vector3(), _b = new THREE.Vector3();
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion();

// particle indices
const HIP_L = 0, HIP_R = 1, SH_L = 2, SH_R = 3, NECK = 4, HEAD = 5, HAND_L = 6, HAND_R = 7, FOOT_L = 8, FOOT_R = 9;

export class Ragdoll {
  constructor(person, vel, spin = 0) {
    this.p = person;
    const b = person.bones, tips = person.base.tips;
    const fix = (t, def) => (t && t.lengthSq() > 1e-6 ? t : def);
    const tHead = fix(tips.head, new THREE.Vector3(0, 0.22, 0));
    const tArmL = fix(tips.armL, new THREE.Vector3(0.14, 0, 0)), tArmR = fix(tips.armR, new THREE.Vector3(-0.14, 0, 0));
    const tLegL = fix(tips.legL, new THREE.Vector3(0, -0.18, 0)), tLegR = fix(tips.legR, new THREE.Vector3(0, -0.18, 0));
    const wp = (bone, local) => (local ? bone.localToWorld(local.clone()) : bone.getWorldPosition(new THREE.Vector3()));
    this.x = [wp(b.legL), wp(b.legR), wp(b.armL), wp(b.armR), wp(b.head), wp(b.head, tHead), wp(b.armL, tArmL), wp(b.armR, tArmR), wp(b.legL, tLegL), wp(b.legR, tLegR)];
    const s = person.height;
    this.rad = [0.08, 0.08, 0.08, 0.08, 0.1, 0.17, 0.05, 0.05, 0.05, 0.05].map((r) => r * s);
    // start clear of the ground (feet would otherwise be shoved up and launch the body)
    let lift = 0;
    for (let i = 0; i < this.x.length; i++) { const p = this.x[i]; lift = Math.max(lift, this.groundY(p.x, p.z).y + this.rad[i] - p.y); }
    if (lift > 0) for (const p of this.x) p.y += lift + 0.005;
    // previous positions encode the initial velocity (+ spin around the body's vertical axis)
    const c = this.centre(new THREE.Vector3());
    this.px = this.x.map((p) => {
      const pv = p.clone().addScaledVector(vel, -H);
      if (spin) { const r = _v.subVectors(p, c); pv.x += r.z * spin * H; pv.z -= r.x * spin * H; }
      return pv;
    });
    // constraints [a, b, restLength, stiffness]
    const C = [];
    const add = (i, j, k = 1) => C.push([i, j, this.x[i].distanceTo(this.x[j]), k]);
    const torso = [HIP_L, HIP_R, SH_L, SH_R, NECK];
    for (let i = 0; i < torso.length; i++) for (let j = i + 1; j < torso.length; j++) add(torso[i], torso[j]);
    add(HEAD, NECK); add(HEAD, SH_L, 0.6); add(HEAD, SH_R, 0.6);
    add(HAND_L, SH_L); add(HAND_R, SH_R); add(FOOT_L, HIP_L); add(FOOT_R, HIP_R);
    this.C = C;
    // starting frames used to map particle motion back onto the bones
    this.B0inv = this.basis(new THREE.Matrix4()).invert();
    const wq = (bone) => bone.getWorldQuaternion(new THREE.Quaternion());
    this.q0 = { root: wq(b.root), torso: wq(b.torso), legL: wq(b.legL), legR: wq(b.legR), armL: wq(b.armL), armR: wq(b.armR), head: wq(b.head) };
    this.d0 = { legL: this.dir(HIP_L, FOOT_L, new THREE.Vector3()), legR: this.dir(HIP_R, FOOT_R, new THREE.Vector3()), armL: this.dir(SH_L, HAND_L, new THREE.Vector3()), armR: this.dir(SH_R, HAND_R, new THREE.Vector3()), head: this.dir(NECK, HEAD, new THREE.Vector3()) };
    this.rootOff = wp(b.root).sub(this.hipMid(new THREE.Vector3()));
    this.t = 0;
    this.acc = 0;
    this.still = 0;
    this.maxV = 0;
    this.inWater = false;
  }

  hipMid(out) { return out.addVectors(this.x[HIP_L], this.x[HIP_R]).multiplyScalar(0.5); }
  centre(out) { out.set(0, 0, 0); for (const p of this.x) out.add(p); return out.multiplyScalar(1 / this.x.length); }
  dir(i, j, out) { return out.subVectors(this.x[j], this.x[i]).normalize(); }
  basis(out) {
    const X = _a.subVectors(this.x[SH_L], this.x[SH_R]).normalize();
    const hm = this.hipMid(_v);
    const Y = _b.subVectors(this.x[NECK], hm).normalize();
    const Z = new THREE.Vector3().crossVectors(X, Y).normalize();
    X.crossVectors(Y, Z).normalize();
    return out.makeBasis(X, Y, Z);
  }

  kick(vel) { for (let i = 0; i < this.x.length; i++) this.px[i].addScaledVector(vel, -H); this.still = 0; }

  groundY(x, z) {
    const pl = G.player;
    return pl ? pl.groundAt(x, z) : { y: 0, pool: null };
  }

  step(dt) {
    dt = Math.min(dt, MAX_SUB * H);
    this.t += dt;
    this.acc += dt;
    const h = H;
    const grid = G.park.grid;
    let n = 0;
    while (this.acc >= H && n < MAX_SUB) {
      this.acc -= H; n++;
      let maxV = 0;
      this.inWater = false;
      for (let i = 0; i < this.x.length; i++) {
        const p = this.x[i], q = this.px[i];
        const vx = (p.x - q.x) * 0.996, vy = (p.y - q.y) * 0.996, vz = (p.z - q.z) * 0.996;
        q.copy(p);
        p.x += vx; p.y += vy + GRAVITY * h * h; p.z += vz;
        const g = this.groundY(p.x, p.z);
        if (g.pool && p.y < WATER_Y) {
          // float: buoyancy grows with depth, water drags the motion
          this.inWater = true;
          // (the body floats with the head and chest just breaking the surface)
          const depth = Math.min(1, (WATER_Y + 0.06 - p.y) * 7);
          p.y += (i === HEAD || i === NECK ? 34 : i >= HAND_L ? 24 : 28) * depth * h * h;
          q.x = p.x - (p.x - q.x) * 0.95; q.y = p.y - (p.y - q.y) * 0.93; q.z = p.z - (p.z - q.z) * 0.95;
        }
        maxV = Math.max(maxV, Math.abs(vx) + Math.abs(vy) + Math.abs(vz));
      }
      // constraints
      for (let it = 0; it < 6; it++) {
        for (const [i, j, rest, k] of this.C) {
          const a = this.x[i], b = this.x[j];
          _v.subVectors(b, a);
          const len = _v.length() || 1e-6;
          const diff = ((len - rest) / len) * 0.5 * k;
          a.addScaledVector(_v, diff);
          b.addScaledVector(_v, -diff);
        }
      }
      // collisions
      for (let i = 0; i < this.x.length; i++) {
        const p = this.x[i], q = this.px[i], r = this.rad[i];
        let g = this.groundY(p.x, p.z);
        let floor = g.y + r;
        if (p.y < floor - 0.3) {
          // ran into a step up (pool wall, deck edge): treat it as a wall, not a floor
          p.x = q.x; p.z = q.z;
          g = this.groundY(p.x, p.z); floor = g.y + r;
        }
        if (p.y < floor) {
          p.y = floor;
          // friction
          q.x = p.x - (p.x - q.x) * 0.55; q.z = p.z - (p.z - q.z) * 0.55;
          if (q.y > p.y) q.y = p.y - (q.y - p.y) * 0.3; // small bounce
          else q.y = p.y; // never inject energy when pushed out of the ground
        }
        // walls: buildings and other blocked cells (pool water is fine)
        const k = grid.idxAt(p.x, p.z);
        if (k < 0 || !grid.land[k] || (p.y < 2.6 && grid.block[k] && !grid.water[k] && (grid.base[k] || grid.prop[k] || grid.fixed[k]))) {
          p.x = q.x; p.z = q.z;
        }
      }
      this.maxV = maxV / H; // m/s (sum of axis speeds)
    }
    if (this.acc > H) this.acc = 0; // dropped frames: don't try to catch up
    if (this.t > 1.0 && this.maxV < 0.3 + (this.inWater ? 0.5 : 0)) this.still += dt; else this.still = 0;
    this.apply();
  }

  done() { return this.inWater ? this.t > 9 || (this.t > 4 && this.still > 1.5) : this.t > 8 || (this.t > 1.6 && this.still > 0.7); }

  // Write particle positions back onto the skeleton
  apply() {
    const b = this.p.bones;
    const B = this.basis(_m);
    const R = B.multiply(this.B0inv); // rotation since the start
    const qt = _q.setFromRotationMatrix(R);
    const setWorldQuat = (bone, wq) => {
      bone.parent.getWorldQuaternion(_q2);
      bone.quaternion.copy(_q2.invert().multiply(wq));
      bone.updateMatrixWorld(true);
    };
    // root: rigid with the hips
    const rootPos = this.hipMid(new THREE.Vector3()).add(this.rootOff.clone().applyQuaternion(qt));
    const parent = b.root.parent;
    parent.updateWorldMatrix(true, false);
    b.root.position.copy(parent.worldToLocal(rootPos));
    setWorldQuat(b.root, qt.clone().multiply(this.q0.root));
    setWorldQuat(b.torso, qt.clone().multiply(this.q0.torso));
    const limb = (name, i, j) => {
      const d0 = this.d0[name].clone().applyQuaternion(qt);
      const d = this.dir(i, j, new THREE.Vector3());
      const swing = new THREE.Quaternion().setFromUnitVectors(d0, d);
      setWorldQuat(b[name], swing.multiply(qt.clone().multiply(this.q0[name])));
    };
    limb('legL', HIP_L, FOOT_L); limb('legR', HIP_R, FOOT_R);
    limb('armL', SH_L, HAND_L); limb('armR', SH_R, HAND_R);
    limb('head', NECK, HEAD);
  }

  // Where the body ended up: ground position and facing
  summary() {
    const hm = this.hipMid(new THREE.Vector3());
    const X = _a.subVectors(this.x[SH_L], this.x[SH_R]);
    const yaw = Math.atan2(-X.z, X.x);
    return { pos: hm, yaw, inWater: this.inWater };
  }

  headPos(out) { return out.copy(this.x[HEAD]); }
}
