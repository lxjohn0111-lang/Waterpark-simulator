// First-person player: movement, swimming, slide rides, tools & interactions.
import * as THREE from 'three';
import { G, bus } from '../core/context.js';
import { WATER_Y } from '../config.js';
import { clamp, lerp, damp, angleDiff, fmtMoney, rand } from '../core/utils.js';
import { samplePath } from '../world/slides.js';
import { PrefabBuilder, instantiate } from '../core/prefab.js';
import { M, painted, plastic } from '../core/materials.js';

const EYE = 1.65, RADIUS = 0.3;
const tmpS = { pos: new THREE.Vector3(), tan: new THREE.Vector3(), up: new THREE.Vector3(), side: new THREE.Vector3() };
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _m = new THREE.Matrix4();

export const TOOLS = [
  { key: 'hand', name: 'Grabber', icon: '✋', hint: 'Pick up litter & interact' },
  { key: 'skimmer', name: 'Skimmer', icon: '🥅', hint: 'Hold to clean pool water' },
  { key: 'wrench', name: 'Wrench', icon: '🔧', hint: 'Hold to repair slides' },
];

export class Player {
  constructor(camera) {
    this.cam = camera;
    this.pos = new THREE.Vector3(0, 0, 59);
    this.vel = new THREE.Vector3();
    this.yaw = 0; this.pitch = -0.05;
    this.onGround = true;
    this.mode = 'walk';
    this.tool = 0;
    this.ride = null;
    this.climbOut = null;
    this.bob = 0; this.bobAmt = 0;
    this.stepDist = 0;
    this.underwater = false;
    this.waterY = -99;
    this.inWater = false;
    this.hold = { kind: null, t: 0 };
    this.aim = null;
    this.confirmBuy = null;
    this.lookOff = { yaw: 0, pitch: 0 };
    this.ray = new THREE.Raycaster();
    this.fovKick = 0;
    this._buildViewmodels();
  }

  _buildViewmodels() {
    const vm = new THREE.Group();
    G.vmScene.add(vm);
    this.vmRoot = vm;
    // grabber
    let b = new PrefabBuilder();
    b.cyl(0.012, 0.012, 0.9, M.steel, 0, 0, -0.45, 8, Math.PI / 2, 0, 0);
    b.box(0.04, 0.12, 0.05, M.blackPlastic, 0, -0.06, 0.02);
    b.box(0.03, 0.02, 0.09, painted(0xff7a1a, 0.5), 0.012, -0.012, -0.94);
    b.box(0.03, 0.02, 0.09, painted(0xff7a1a, 0.5), -0.012, -0.012, -0.94);
    const grab = instantiate(b.build());
    // skimmer
    b = new PrefabBuilder();
    b.cyl(0.014, 0.014, 2.0, M.steel, 0, 0, -1.0, 8, Math.PI / 2, 0, 0);
    b.box(0.035, 0.035, 0.18, painted(0x1e9bff, 0.4), 0, 0, 0.0);
    b.add(new THREE.TorusGeometry(0.2, 0.012, 6, 24), plastic(0x1e9bff, 0.4), 0, 0, -2.18, Math.PI / 2, 0, 0);
    const netMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, side: THREE.DoubleSide, roughness: 0.9 });
    b.add(new THREE.ConeGeometry(0.2, 0.22, 16, 1, true), netMat, 0, -0.11, -2.18, Math.PI, 0, 0);
    const skim = instantiate(b.build());
    // wrench
    b = new PrefabBuilder();
    b.box(0.045, 0.02, 0.32, M.chrome, 0, 0, -0.16);
    b.add(new THREE.TorusGeometry(0.045, 0.018, 6, 12, Math.PI * 1.5), M.chrome, 0, 0, -0.34, Math.PI / 2, 0, Math.PI * 0.75);
    b.box(0.05, 0.03, 0.12, painted(0xd83a3a, 0.5), 0, 0, 0.0);
    const wrench = instantiate(b.build());
    this.vmTools = [grab, skim, wrench];
    for (const t of this.vmTools) { t.visible = false; vm.add(t); t.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } }); }
    // hand (simple arm)
    b = new PrefabBuilder();
    b.add(new THREE.CapsuleGeometry(0.045, 0.32, 4, 8), painted(0xe8b48f, 0.6), 0, 0, 0.12, Math.PI / 2, 0, 0);
    this.vmArm = instantiate(b.build());
    vm.add(this.vmArm);
    this.setTool(0);
  }

  setTool(i) {
    this.tool = (i + TOOLS.length) % TOOLS.length;
    this.vmTools.forEach((t, k) => (t.visible = k === this.tool));
    this.toolAnim = 0;
    this.hold = { kind: null, t: 0 };
    bus.emit('tool', this.tool);
  }

  get forward() { return _v.set(-Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), -Math.cos(this.yaw) * Math.cos(this.pitch)); }
  eyePos(out = new THREE.Vector3()) { return out.copy(this.cam.position); }

  // ---------------------------------------------------------------- collision
  blockedAt(x, z, feetY) {
    const g = G.park.grid;
    const k = g.idxAt(x, z);
    if (k < 0) return true;
    if (!g.land[k] || g.fixed[k]) return true;
    if (g.base[k] && !g.bwalk[k] && !g.water[k]) {
      // walking on top of very low things isn't possible; buildings block
      return true;
    }
    if (g.prop[k] && g.pblock[k]) return true;
    if (feetY < -0.18 && !g.water[k]) return true; // pool walls
    return false;
  }
  collides(x, z, feetY) {
    const r = RADIUS;
    return this.blockedAt(x - r, z - r, feetY) || this.blockedAt(x + r, z - r, feetY) || this.blockedAt(x - r, z + r, feetY) || this.blockedAt(x + r, z + r, feetY);
  }
  groundAt(x, z) {
    const pa = G.park.poolAt(x, z);
    if (pa) return { y: pa.floorY, pool: pa };
    const g = G.park.grid, k = g.idxAt(x, z);
    let y = 0;
    if (k >= 0 && (g.deck[k] || g.floor[k])) y = 0.04;
    if (z > 63 && z < 112 && Math.abs(x) < 52) y = 0.05;
    return { y, pool: null };
  }

  teleport(x, z, yaw = 0) { this.pos.set(x, 0, z); this.vel.set(0, 0, 0); this.yaw = yaw; this.ride = null; this.climbOut = null; }

  // ---------------------------------------------------------------- update
  update(dt, input) {
    const s = G.settings;
    const sens = 0.0021 * s.sensitivity;
    let dx = input.mouse.dx + input.touch.look.dx * 0.5, dy = input.mouse.dy + input.touch.look.dy * 0.5;
    if (s.invertY) dy = -dy;
    const canLook = input.locked || G.isTouch;
    if (canLook && !G.ui.blocking) {
      if (this.ride && this.ride.phase === 'ride') {
        this.lookOff.yaw = clamp(this.lookOff.yaw - dx * sens, -1.3, 1.3);
        this.lookOff.pitch = clamp(this.lookOff.pitch - dy * sens, -0.7, 0.7);
      } else {
        this.yaw -= dx * sens;
        this.pitch = clamp(this.pitch - dy * sens, -1.52, 1.52);
      }
    }
    this.vmSway = { x: clamp(dx * 0.0004, -0.03, 0.03), y: clamp(dy * 0.0004, -0.03, 0.03) };

    if (this.ride) { this.updateRide(dt, input); this.updateViewmodel(dt, 0); return; }
    if (this.climbOut) { this.updateClimbOut(dt); this.updateCamera(dt); this.updateViewmodel(dt, 0); return; }

    // ---- movement input
    const playing = !G.ui.blocking;
    let mx = 0, mz = 0;
    if (playing) {
      if (input.down('KeyW') || input.down('ArrowUp')) mz += 1;
      if (input.down('KeyS') || input.down('ArrowDown')) mz -= 1;
      if (input.down('KeyA') || input.down('ArrowLeft')) mx -= 1;
      if (input.down('KeyD') || input.down('ArrowRight')) mx += 1;
      mx += input.touch.move.x; mz += input.touch.move.y;
    }
    const len = Math.hypot(mx, mz);
    if (len > 1) { mx /= len; mz /= len; }
    const fwd = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const wish = fwd.multiplyScalar(mz).addScaledVector(right, mx);
    const sprint = playing && (input.down('ShiftLeft') || input.down('ShiftRight'));
    const jumpHeld = playing && (input.down('Space') || input.tdown('jump'));
    const jumpHit = playing && (input.hit('Space') || input.thit('jump'));
    const diveHeld = playing && (input.down('KeyC') || input.down('ControlLeft'));

    const ground = this.groundAt(this.pos.x, this.pos.z);
    const pool = ground.pool;
    const wave = pool && pool.obj.waveAt ? pool.obj.waveAt(this.pos.x, this.pos.z) : 0;
    const waterY = pool ? WATER_Y + wave : -99;
    this.waterY = waterY;
    const depth = pool ? waterY - ground.y : 0;
    const swimming = pool && depth > 1.2 && this.pos.y < waterY - 1.0;
    const wading = pool && !swimming && this.pos.y < waterY - 0.1;
    const wasInWater = this.inWater;
    this.inWater = !!pool && this.pos.y < waterY - 0.15;
    if (this.inWater && !wasInWater && this.vel.y < -2) {
      G.effects.splash(this.pos.x, waterY, this.pos.z, 1.3);
      G.audio.play('splashBig', { vol: 0.9 });
      bus.emit('playerSplash');
    }

    let speed = sprint ? 7.2 : 4.3;
    if (swimming) speed = sprint ? 3.8 : 2.6;
    else if (wading) speed = sprint ? 3.0 : 2.2;
    this.mode = swimming ? 'swim' : 'walk';

    if (swimming) {
      const ctl = 3.5;
      const eyeUnder = this.pos.y + EYE < waterY - 0.05;
      let wy = wish.clone();
      if (eyeUnder && mz !== 0) wy.y = Math.sin(this.pitch) * mz * 0.8;
      this.vel.x = damp(this.vel.x, wy.x * speed, ctl, dt);
      this.vel.z = damp(this.vel.z, wy.z * speed, ctl, dt);
      const floatY = waterY - EYE + 0.18;
      if (diveHeld) this.vel.y = damp(this.vel.y, -2.4, 3, dt);
      else if (jumpHeld) this.vel.y = damp(this.vel.y, 2.2, 3, dt);
      else if (eyeUnder && wy.y) this.vel.y = damp(this.vel.y, wy.y * speed, 3, dt);
      else this.vel.y = damp(this.vel.y, (floatY - this.pos.y) * 2.5, 4, dt);
      if (this.pos.y > floatY + 0.15) this.vel.y -= 9 * dt;
      // climb out at edges
      if (jumpHit && this.pos.y > waterY - EYE - 0.3) this.tryClimbOut();
      if (Math.random() < dt * 3 * len) G.effects.splash(this.pos.x + rand(-0.3, 0.3), waterY, this.pos.z + rand(-0.3, 0.3), 0.12);
    } else {
      const accel = this.onGround ? 14 : 3;
      this.vel.x = damp(this.vel.x, wish.x * speed, accel, dt);
      this.vel.z = damp(this.vel.z, wish.z * speed, accel, dt);
      this.vel.y -= (this.inWater ? 6 : 19) * dt;
      if (this.inWater) this.vel.y *= 1 - 2.5 * dt;
      if (jumpHit && this.onGround) {
        if (this.inWater) this.tryClimbOut();
        else { this.vel.y = 5.4; this.onGround = false; G.audio.play('jump', { vol: 0.3 }); }
      }
    }

    // integrate horizontal with collision
    const nx = this.pos.x + this.vel.x * dt;
    if (!this.collides(nx, this.pos.z, this.pos.y)) this.pos.x = nx; else this.vel.x = 0;
    const nz = this.pos.z + this.vel.z * dt;
    if (!this.collides(this.pos.x, nz, this.pos.y)) this.pos.z = nz; else this.vel.z = 0;
    // vertical
    this.pos.y += this.vel.y * dt;
    const g2 = this.groundAt(this.pos.x, this.pos.z);
    if (this.pos.y <= g2.y) {
      if (this.vel.y < -7 && !this.inWater) G.audio.play('land', { vol: 0.4 });
      this.pos.y = g2.y; this.vel.y = Math.max(0, this.vel.y); this.onGround = true;
    } else this.onGround = this.pos.y - g2.y < 0.05;
    // stuck safety: if inside a blocked cell (e.g. something got built on us) push out
    if (this.collides(this.pos.x, this.pos.z, this.pos.y) && !this.inWater) this.unstick();

    // footsteps & bob
    const hs = Math.hypot(this.vel.x, this.vel.z);
    if (this.onGround && !swimming) {
      this.stepDist += hs * dt;
      if (this.stepDist > (sprint ? 2.1 : 1.6)) { this.stepDist = 0; G.audio.play(this.inWater ? 'stepWater' : (g2.y > 0.02 ? 'stepHard' : 'step'), { vol: 0.25 }); }
      this.bob += hs * dt * 2.1;
      this.bobAmt = damp(this.bobAmt, Math.min(1, hs / 4.3), 8, dt);
    } else { this.bobAmt = damp(this.bobAmt, 0, 6, dt); this.bob += dt * 1.5; }
    this.fovKick = damp(this.fovKick, sprint && hs > 5 ? 6 : 0, 5, dt);

    this.updateCamera(dt);
    this.updateViewmodel(dt, hs);
    this.collectNearby(dt);
  }

  unstick() {
    for (let r = 0.5; r < 6; r += 0.5) for (let a = 0; a < 6.28; a += 0.5) {
      const x = this.pos.x + Math.cos(a) * r, z = this.pos.z + Math.sin(a) * r;
      if (!this.collides(x, z, 0)) { this.pos.x = x; this.pos.z = z; return; }
    }
  }

  tryClimbOut() {
    // find a nearby non-water walkable spot
    const fwd = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    let best = null, bd = 1e9;
    for (let a = -Math.PI; a < Math.PI; a += Math.PI / 8) {
      for (const r of [0.7, 1.0, 1.3]) {
        const dx = Math.cos(a) * r, dz = Math.sin(a) * r;
        const x = this.pos.x + dx, z = this.pos.z + dz;
        if (G.park.poolAt(x, z)) continue;
        if (this.collides(x, z, 0.05)) continue;
        const score = r - (dx * fwd.x + dz * fwd.z) * 0.8;
        if (score < bd) { bd = score; best = new THREE.Vector3(x, 0.04, z); }
      }
    }
    if (best) {
      this.climbOut = { from: this.pos.clone(), to: best, t: 0 };
      G.audio.play('splash', { vol: 0.4 });
      G.effects.splash(this.pos.x, WATER_Y, this.pos.z, 0.5);
    }
  }
  updateClimbOut(dt) {
    const c = this.climbOut;
    c.t += dt / 0.55;
    const k = Math.min(1, c.t);
    this.pos.x = lerp(c.from.x, c.to.x, k); this.pos.z = lerp(c.from.z, c.to.z, k);
    this.pos.y = lerp(c.from.y, c.to.y, Math.sin(k * Math.PI / 2)) + Math.sin(k * Math.PI) * 0.3;
    if (k >= 1) { this.climbOut = null; this.vel.set(0, 0, 0); this.onGround = true; this.inWater = false; }
  }

  updateCamera(dt) {
    const bobY = Math.sin(this.bob * 2) * 0.045 * this.bobAmt;
    const bobX = Math.cos(this.bob) * 0.03 * this.bobAmt;
    const right = _v2.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const swimBob = this.mode === 'swim' ? Math.sin(G.time.real * 1.8) * 0.05 : 0;
    this.cam.position.set(this.pos.x, this.pos.y + EYE + bobY + swimBob, this.pos.z).addScaledVector(right, bobX);
    this.cam.up.set(0, 1, 0);
    this.cam.rotation.set(this.pitch, this.yaw, Math.sin(this.bob) * 0.004 * this.bobAmt, 'YXZ');
    const fov = G.settings.fov + this.fovKick;
    if (Math.abs(this.cam.fov - fov) > 0.05) { this.cam.fov = fov; this.cam.updateProjectionMatrix(); }
    this.updateUnderwater();
  }

  updateUnderwater() {
    const p = this.cam.position;
    const pa = G.park.poolAt(p.x, p.z);
    const wy = pa ? WATER_Y + (pa.obj.waveAt ? pa.obj.waveAt(p.x, p.z) : 0) : -99;
    const uw = !!pa && p.y < wy - 0.02;
    if (uw !== this.underwater) { this.underwater = uw; bus.emit('underwater', uw); }
  }

  updateViewmodel(dt, hs) {
    const vm = this.vmRoot;
    vm.position.copy(this.cam.position);
    vm.quaternion.copy(this.cam.quaternion);
    this.toolAnim = (this.toolAnim || 0) + dt;
    const t = this.tool;
    const tool = this.vmTools[t];
    const act = this.hold.kind ? 1 : 0;
    this.actBlend = damp(this.actBlend || 0, act, 10, dt);
    const sway = this.vmSway || { x: 0, y: 0 };
    const bx = Math.cos(this.bob) * 0.012 * this.bobAmt - sway.x, by = Math.abs(Math.sin(this.bob)) * 0.014 * this.bobAmt + sway.y;
    const hidden = this.ride || this.mode === 'swim' || G.build.active;
    tool.visible = !hidden;
    this.vmArm.visible = !hidden;
    if (hidden) return;
    const a = this.actBlend, at = G.time.real;
    if (t === 0) {
      tool.position.set(0.28 + bx, -0.32 + by + Math.sin(this.pickAnim || 0) * -0.08, -0.35);
      tool.rotation.set(-0.35 + (this.pickAnim ? Math.sin(this.pickAnim) * 0.5 : 0), 0.15, 0.08);
      if (this.pickAnim) { this.pickAnim += dt * 12; if (this.pickAnim > Math.PI) this.pickAnim = 0; }
    } else if (t === 1) {
      tool.position.set(0.32 + bx + Math.sin(at * 5) * 0.08 * a, -0.42 + by, -0.25);
      tool.rotation.set(-0.45 - a * 0.25, 0.12 + Math.sin(at * 5) * 0.25 * a, 0.05);
    } else {
      tool.position.set(0.3 + bx, -0.3 + by, -0.42);
      tool.rotation.set(-0.25 + Math.sin(at * 14) * 0.25 * a, 0.3, Math.sin(at * 14) * 0.4 * a);
    }
    this.vmArm.position.set(tool.position.x + 0.02, tool.position.y - 0.02, tool.position.z + 0.12);
    this.vmArm.rotation.set(-0.4, 0.2, 0);
  }

  // ---------------------------------------------------------------- rides
  startRide(obj) {
    if (this.ride || obj.broken) return false;
    const S = obj.slide;
    const lanes = S.design.lanes.length;
    const lane = lanes > 1 ? (S.lane = (S.lane + 1) % lanes) : 0;
    const start = this.pos.clone();
    this.ride = { obj, phase: 'climb', t: 0, ci: 0, pts: [start, S.entrance.clone(), ...S.climb], lane, cur: start.clone() };
    this.lookOff.yaw = 0; this.lookOff.pitch = 0;
    bus.emit('playerRideStart', obj);
    return true;
  }
  updateRide(dt) {
    const r = this.ride;
    const S = r.obj.slide;
    r.t += dt;
    if (!G.park.objects.has(r.obj.id)) { this.ride = null; return; }
    if (r.phase === 'climb') {
      let remain = 4.5 * dt;
      while (remain > 0 && r.ci < r.pts.length - 1) {
        const b = r.pts[r.ci + 1];
        const d = r.cur.distanceTo(b);
        if (d <= remain) { r.cur.copy(b); remain -= d; r.ci++; }
        else { r.cur.lerp(b, remain / d); remain = 0; }
      }
      const next = r.pts[Math.min(r.pts.length - 1, r.ci + 1)];
      if (next.distanceTo(r.cur) > 0.2) {
        const want = Math.atan2(-(next.x - r.cur.x), -(next.z - r.cur.z));
        this.yaw += angleDiff(this.yaw, want) * Math.min(1, dt * 3);
      }
      this.pitch = damp(this.pitch, 0.05, 3, dt);
      this.pos.copy(r.cur);
      this.cam.position.set(r.cur.x, r.cur.y + EYE + Math.abs(Math.sin(r.t * 7)) * 0.04, r.cur.z);
      this.cam.up.set(0, 1, 0);
      this.cam.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
      if (r.ci >= r.pts.length - 1) {
        r.phase = 'ready'; r.t = 0;
        G.hud.toast('3… 2… 1… GO!', 'gold');
      }
      return;
    }
    if (r.phase === 'ready') {
      // look down the slide for a moment
      samplePath(S.design.lanes[r.lane], 0.5, tmpS);
      _v.copy(tmpS.pos).applyMatrix4(S.matrix);
      const p0 = this.pos;
      const want = Math.atan2(-(_v.x - p0.x), -(_v.z - p0.z));
      this.yaw += angleDiff(this.yaw, want) * Math.min(1, dt * 4);
      this.pitch = damp(this.pitch, -0.35, 4, dt);
      this.cam.position.set(p0.x, p0.y + 1.1, p0.z);
      this.cam.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
      if (r.t > 0.9) { r.phase = 'ride'; r.t = 0; G.audio.startWhoosh(); }
      return;
    }
    if (r.phase === 'ride') {
      const tl = S.design.timelines[r.lane];
      const path = S.design.lanes[r.lane];
      const fpos = r.t / tl.dt;
      const fi = Math.min(tl.frames.length - 2, Math.floor(fpos));
      const fk = Math.min(1, fpos - fi);
      const f0 = tl.frames[fi], f1 = tl.frames[fi + 1];
      const sArc = lerp(f0.s, f1.s, fk), bank = lerp(f0.bank, f1.bank, fk), v = lerp(f0.v, f1.v, fk);
      samplePath(path, sArc, tmpS);
      const R = S.def.R;
      const c = Math.cos(bank), sn = Math.sin(bank);
      const up = tmpS.up.clone().multiplyScalar(c).addScaledVector(tmpS.side, sn);
      const rider = tmpS.pos.clone().addScaledVector(tmpS.up, R).addScaledVector(tmpS.up, -R * c).addScaledVector(tmpS.side, -R * sn);
      rider.applyMatrix4(S.matrix);
      up.transformDirection(S.matrix);
      const fwd = tmpS.tan.clone().transformDirection(S.matrix);
      const eye = rider.clone().addScaledVector(up, 0.62).addScaledVector(fwd, -0.15);
      // apply look offsets
      this.lookOff.yaw = damp(this.lookOff.yaw, 0, 0.8, dt);
      this.lookOff.pitch = damp(this.lookOff.pitch, 0, 0.8, dt);
      const rightV = new THREE.Vector3().crossVectors(fwd, up).normalize();
      const look = fwd.clone().applyAxisAngle(up, this.lookOff.yaw);
      look.applyAxisAngle(rightV, this.lookOff.pitch - 0.12);
      _m.lookAt(eye, eye.clone().add(look), up);
      this.cam.position.copy(eye);
      this.cam.quaternion.setFromRotationMatrix(_m);
      this.pos.set(rider.x, rider.y, rider.z);
      G.audio.setWhoosh(v);
      this.fovKick = damp(this.fovKick, Math.min(18, v * 1.2), 3, dt);
      const fov = G.settings.fov + this.fovKick;
      this.cam.fov = fov; this.cam.updateProjectionMatrix();
      if (Math.random() < dt * v * 0.8) G.effects.spray(rider.x, rider.y + 0.1, rider.z, fwd.x * v * 0.3, 1.5, fwd.z * v * 0.3, 0.06, 0.6);
      this.updateUnderwater();
      if (fpos >= tl.frames.length - 1) this.endRide(fwd, v);
      return;
    }
  }
  endRide(fwd, v) {
    const r = this.ride;
    const S = r.obj.slide;
    G.audio.stopWhoosh();
    const p = this.pos.clone().addScaledVector(fwd, 1.8);
    const pa = G.park.poolAt(p.x, p.z);
    this.pos.set(p.x, pa ? Math.max(pa.floorY, WATER_Y - EYE - 0.5) : 0, p.z);
    this.vel.set(fwd.x * Math.min(4, v * 0.4), -1, fwd.z * Math.min(4, v * 0.4));
    this.yaw = Math.atan2(-fwd.x, -fwd.z);
    this.pitch = 0;
    this.ride = null;
    this.inWater = true;
    G.effects.splash(p.x, WATER_Y, p.z, 2.2);
    G.audio.play('splashBig', { vol: 1 });
    this.fovKick = 0;
    r.obj.condition -= 0.6;
    if (r.obj.condition <= 0) { r.obj.condition = 0; r.obj.broken = true; bus.emit('broken', r.obj); }
    bus.emit('playerRide', r.obj);
  }

  // ---------------------------------------------------------------- pickups
  // Quick successive pickups (litter, coins) build a combo streak
  bumpCombo() {
    const now = G.time.real;
    this.combo = now - (this.comboT ?? -99) < 3.5 ? (this.combo || 0) + 1 : 1;
    this.comboT = now;
    if (this.combo >= 5 && this.combo % 5 === 0) { G.audio.play('quest', { vol: 0.5 }); G.hud.toast(`🔥 Clean-up streak x${this.combo}!`, 'gold'); }
    return this.combo;
  }
  collectNearby(dt) {
    const fx = G.effects;
    const px = this.pos.x, pz = this.pos.z, py = this.pos.y + 0.8;
    for (let i = fx.coins.length - 1; i >= 0; i--) {
      const c = fx.coins[i];
      const dx = px - c.x, dz = pz - c.z, d = Math.hypot(dx, dz);
      if (d < 4.2 && c.vy === 0) {
        const pull = Math.min(d, (4.2 - d) * 3 * dt + 2 * dt);
        c.x += dx / (d || 1) * pull; c.z += dz / (d || 1) * pull;
        c.y = lerp(c.y, py, dt * 3);
      }
      if (d < 0.9) {
        fx.coins.splice(i, 1);
        const combo = this.bumpCombo();
        const bonus = combo > 2 ? Math.min(20, combo) : 0;
        G.park.earn(c.value + bonus, 'tips', false);
        G.hud.floater(`+$${c.value}${bonus ? ' +' + bonus + ' combo' : ''}`, new THREE.Vector3(c.x, c.y + 0.5, c.z), '');
        G.audio.play('coin', { vol: 0.7 });
        fx.sparkle(c.x, c.y, c.z, 0xffd34a, 10);
        bus.emit('coinCollected', c);
      }
    }
    for (let i = fx.ducks.length - 1; i >= 0; i--) {
      const d = fx.ducks[i];
      if (Math.hypot(px - d.x, pz - d.z) < 1.3 && Math.abs(this.pos.y + 1 - WATER_Y) < 2) this.collectDuck(d);
    }
  }
  collectDuck(d) {
    G.effects.removeDuck(d);
    G.park.earn(d.value, 'bonus', true, new THREE.Vector3(d.x, 1.2, d.z));
    G.effects.sparkle(d.x, WATER_Y + 0.3, d.z, d.gold ? 0xffd34a : 0xfff27a, d.gold ? 50 : 24);
    G.audio.play(d.gold ? 'jackpot' : 'duck', { vol: 0.9 });
    bus.emit('duck', d);
  }

  // ---------------------------------------------------------------- interaction
  updateInteraction(dt, input) {
    const hud = G.hud;
    if (G.ui.blocking || this.ride || G.build.active) { hud.setPrompt(''); hud.setInfo(null); hud.setProgress(-1); this.hold.kind = null; return; }
    const cam = this.cam;
    const origin = cam.position.clone();
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
    const ray = new THREE.Ray(origin, dir);
    this.ray.set(origin, dir);
    const eHit = input.hit('KeyE') || input.thit('interact');
    const eHeld = input.down('KeyE') || input.tdown('interact');
    const lHit = input.mouse.leftPressed || input.thit('use');
    const lHeld = input.mouse.left || input.tdown('use');
    let prompt = '', info = null, progress = -1, hold = null;
    const fx = G.effects, park = G.park;

    // 1. drowning guests nearby
    const em = G.guests.emergencies.find((e) => !e.handledBy && Math.hypot(e.guest.pos.x - this.pos.x, e.guest.pos.z - this.pos.z) < 2.6);
    if (em) {
      prompt = key('E') + 'Rescue the swimmer!';
      if (eHit) { G.guests.rescue(em.guest, 'player'); }
    }
    // 2. rubber ducks
    if (!prompt) {
      for (const d of fx.ducks) {
        const p = new THREE.Vector3(d.x, WATER_Y + 0.15, d.z);
        if (p.distanceTo(origin) < 4.5 && ray.distanceSqToPoint(p) < 0.5 * 0.5) {
          prompt = key('E') + (d.gold ? 'Grab the GOLDEN duck!' : 'Grab rubber duck') + `<span class="sub">+${fmtMoney(d.value)}</span>`;
          if (eHit || (lHit && this.tool === 0)) this.collectDuck(d);
          break;
        }
      }
    }
    // 3. tool actions
    if (!prompt && this.tool === 0) {
      let best = null, bd = 3.6;
      for (const t of fx.trash) {
        const p = new THREE.Vector3(t.x, 0.05, t.z);
        const d = p.distanceTo(origin);
        if (d > bd) continue;
        if (ray.distanceSqToPoint(p) < 0.45 * 0.45 * (1 + d * 0.2)) { bd = d; best = t; }
      }
      if (best) {
        prompt = key('E') + 'Pick up litter';
        if (eHit || lHit) {
          fx.removeTrash(best);
          this.pickAnim = 0.01;
          park.today.trashPicked++;
          G.audio.play('pickup', { vol: 0.6 });
          const combo = this.bumpCombo();
          G.hud.floater(combo > 1 ? `Combo x${combo}! +$${combo}` : '+1 Clean', new THREE.Vector3(best.x, 0.6, best.z), combo > 1 ? '' : 'green');
          if (combo > 1) park.earn(combo, 'bonus', false);
          bus.emit('trashPicked');
          prompt = '';
        }
      }
    }
    if (!prompt && this.tool === 1) {
      // aim at pool water
      const tWater = (WATER_Y - origin.y) / dir.y;
      if (dir.y < -0.02 && tWater > 0 && tWater < 7) {
        const hp = origin.clone().addScaledVector(dir, tWater);
        const pa = park.poolAt(hp.x, hp.z);
        if (pa) {
          const o = pa.obj;
          const q = Math.round(o.quality);
          prompt = key('LMB', true) + `Hold to skim ${o.def.kind === 'slide' ? 'landing pool' : o.def.name}<span class="sub">Water quality ${q}%</span>`;
          progress = o.quality / 100;
          if (lHeld) {
            hold = 'skim';
            const before = o.quality;
            o.quality = Math.min(100, o.quality + 11 * dt);
            if (Math.floor(before / 10) !== Math.floor(o.quality / 10)) { park.refreshPoolLook(o); bus.emit('poolCleaned', o); }
            fx.removeLeavesNear(hp.x, hp.z, 1.3);
            if (Math.random() < dt * 14) fx.spray(hp.x + rand(-0.3, 0.3), WATER_Y + 0.05, hp.z + rand(-0.3, 0.3), rand(-0.5, 0.5), 1.2, rand(-0.5, 0.5), 0.07, 0.4);
            if (Math.random() < dt * 3) G.audio.play('swish', { vol: 0.35 });
            for (const t of [...fx.trash]) if ((t.x - hp.x) ** 2 + (t.z - hp.z) ** 2 < 1) fx.removeTrash(t);
          }
        }
      }
      if (!prompt) prompt = '<span class="sub">Aim at pool water and hold the mouse to clean it</span>';
    }
    if (!prompt && this.tool === 2) {
      const o = park.pickObject(ray, 14, (o) => o.def.kind === 'slide');
      if (o) {
        const c = Math.round(o.condition);
        prompt = (o.condition < 100 ? key('LMB', true) + 'Hold to repair ' : '') + o.def.name + `<span class="sub">${o.broken ? '⚠ BROKEN' : 'Condition ' + c + '%'}</span>`;
        progress = o.condition / 100;
        if (lHeld && o.condition < 100) {
          hold = 'repair';
          o.condition = Math.min(100, o.condition + 18 * dt);
          if (Math.random() < dt * 10) { const hp = ray.at(Math.min(6, origin.distanceTo(new THREE.Vector3(o.cx, 1, o.cz))), new THREE.Vector3()); fx.sparkle(hp.x, hp.y, hp.z, 0xffb040, 3); }
          if (Math.random() < dt * 5) G.audio.play('clank', { vol: 0.4 });
          if (o.condition >= 100) { if (o.broken) { o.broken = false; bus.emit('repaired', { obj: o, by: 'player' }); } G.audio.play('fixed', { vol: 0.6 }); }
        }
      }
      if (!prompt) prompt = '<span class="sub">Aim at a slide and hold the mouse to repair it</span>';
    }
    // 4. slides: ride
    if (!prompt || prompt.startsWith('<span class="sub">')) {
      for (const o of park.lists.slides) {
        const e = o.slide.entrance;
        if (Math.hypot(e.x - this.pos.x, e.z - this.pos.z) < 3.2 && Math.abs(this.pos.y) < 1) {
          prompt = o.broken ? `<span class="sub">${o.def.name} is broken — use the Wrench [3]</span>` : key('E') + 'Ride ' + o.def.name + '<span class="sub">Skip the queue — you own the place!</span>';
          if (eHit && !o.broken) this.startRide(o);
          break;
        }
      }
    }
    // 5. restrooms cleaning
    if (!prompt || prompt.startsWith('<span class="sub">')) {
      const o = park.pickObject(ray, 5, (o) => o.def.facility === 'toilet');
      if (o && o.dirt > 5) {
        prompt = key('E', false, true) + 'Hold to clean restrooms' + `<span class="sub">${Math.round(o.dirt)}% dirty</span>`;
        progress = 1 - o.dirt / 100;
        if (eHeld) { hold = 'clean'; o.dirt = Math.max(0, o.dirt - 30 * dt); if (Math.random() < dt * 4) G.audio.play('swish', { vol: 0.3 }); if (o.dirt <= 0) bus.emit('toiletCleaned', o); }
      }
    }
    // 6. land for sale
    if (!prompt || prompt.startsWith('<span class="sub">')) {
      for (const s of G.terrain.saleSigns) {
        const p = new THREE.Vector3(s.x, 1.7, s.z);
        if (p.distanceTo(origin) < 9 && ray.distanceSqToPoint(p) < 1.4 * 1.4) {
          const price = park.landPrice();
          const confirm = this.confirmBuy && this.confirmBuy.plot === s.plot && G.time.real - this.confirmBuy.t < 3;
          prompt = key('E') + (confirm ? 'Press again to confirm purchase' : 'Buy this land') + `<span class="sub">${fmtMoney(price)} · expands your park</span>`;
          if (eHit) {
            if (!park.canAfford(price)) { G.hud.toast('Not enough cash for this land', 'bad'); G.audio.play('error'); }
            else if (confirm) { if (park.buyPlot(s.plot)) { this.confirmBuy = null; } }
            else this.confirmBuy = { plot: s.plot, t: G.time.real };
          }
          break;
        }
      }
    }
    // 6b. swimming hint
    if ((!prompt || prompt.startsWith('<span class="sub">')) && this.inWater && this.pos.y > this.waterY - EYE - 0.4) {
      prompt = key('Space') + 'Climb out' + (this.mode === 'swim' ? '<span class="sub">Hold C to dive · Space to surface</span>' : '');
    }
    // 7. info cards
    if (!info) {
      const g = G.guests.pick(ray, 14);
      if (g) info = guestCard(g);
      else {
        const o = park.pickObject(ray, 18);
        const useful = o && (['pool', 'slide', 'shop', 'building'].includes(o.def.kind) || ['lifeguard', 'toilet'].includes(o.def.facility));
        if (useful) info = objectCard(o);
        else {
          const s = G.staff.list.find((s) => { const c = new THREE.Vector3(s.pos.x, s.posY + 1.1, s.pos.z); return c.distanceTo(origin) < 14 && ray.distanceSqToPoint(c) < 0.16; });
          if (s) info = `<div class="ic-title">${s.name}</div><div class="ic-row">Staff member<b>${s.job ? jobText(s) : 'Idle'}</b></div>`;
        }
      }
    }
    this.hold.kind = hold;
    hud.setPrompt(prompt);
    hud.setInfo(info);
    hud.setProgress(hold ? progress : -1);
    hud.setCrosshairActive(!!prompt && !prompt.startsWith('<span class="sub">'));
  }
}

function key(k, mouse = false, hold = false) { return `<span class="key">${mouse ? '🖱' : k}</span>${hold ? '' : ''}`; }

function bar(v, col) { return `<div class="mini-bar"><div style="width:${Math.round(clamp(v, 0, 1) * 100)}%;background:${col}"></div></div>`; }

function guestCard(g) {
  const h = g.happiness;
  const col = h > 70 ? '#4ce08a' : h > 40 ? '#ffd34a' : '#ff5a5a';
  const face = h > 75 ? '😄' : h > 55 ? '🙂' : h > 35 ? '😐' : '😠';
  let html = `<div class="ic-title">${face} ${g.name}${g.vip ? ' ⭐ VIP' : ''}</div>`;
  html += `<div class="ic-row">Happiness<b>${Math.round(h)}%</b></div>${bar(h / 100, col)}`;
  html += `<div class="ic-row">Wallet<b>${fmtMoney(g.cash)}</b></div>`;
  html += `<div class="ic-row">Hunger / Thirst<b>${Math.round(g.needs.hunger * 100)}% / ${Math.round(g.needs.thirst * 100)}%</b></div>`;
  html += `<div class="ic-row">Energy<b>${Math.round(g.needs.energy * 100)}%</b></div>`;
  html += `<div class="ic-row" style="color:#cfe7f5">${G.guests.activityText(g)}</div>`;
  if (g.thought && G.time.total - g.thoughtT < 240) html += `<div class="ic-thought">“${g.thought.text}”</div>`;
  return html;
}

function objectCard(o) {
  const d = o.def;
  let html = `<div class="ic-title">${d.name}</div>`;
  if (o.pool && d.kind === 'pool') {
    html += `<div class="ic-row">Swimmers<b>${o.pool.swimmers.size} / ${o.pool.capacity}</b></div>`;
    html += `<div class="ic-row">Water quality<b>${Math.round(o.quality)}%</b></div>${bar(o.quality / 100, o.quality > 60 ? '#27d3ff' : '#9a8a3a')}`;
  }
  if (d.kind === 'slide') {
    html += `<div class="ic-row">Status<b style="color:${o.broken ? '#ff5a5a' : '#4ce08a'}">${o.broken ? 'BROKEN' : 'Open'}</b></div>`;
    html += `<div class="ic-row">Condition<b>${Math.round(o.condition)}%</b></div>${bar(o.condition / 100, o.condition > 50 ? '#4ce08a' : '#ff8a3a')}`;
    html += `<div class="ic-row">Queue<b>${o.queue.length} guests</b></div><div class="ic-row">Rides<b>${o.visits}</b></div>`;
  }
  if (d.kind === 'shop') {
    html += `<div class="ic-row">Price<b>${fmtMoney(d.shop.price * G.park.foodMult)}</b></div><div class="ic-row">Sold<b>${o.sales}</b></div><div class="ic-row">Revenue<b>${fmtMoney(o.revenue)}</b></div><div class="ic-row">Queue<b>${o.queue.length}</b></div>`;
  }
  if (d.facility === 'toilet') html += `<div class="ic-row">Cleanliness<b>${Math.round(100 - o.dirt)}%</b></div>`;
  if (d.facility === 'lifeguard') html += `<div class="ic-row">Lifeguard<b>${o.points.guard ? 'On duty' : 'Vacant — hire one!'}</b></div>`;
  if (d.appeal && !html.includes('Queue')) html += `<div class="ic-row">Scenery<b>+${d.appeal}</b></div>`;
  return html;
}

function jobText(s) {
  const j = s.job;
  switch (j.kind) {
    case 'trash': return 'Picking up litter';
    case 'toilet': return 'Cleaning restrooms';
    case 'pool': return 'Treating pool water';
    case 'repair': return 'Repairing ' + j.obj.def.name;
    case 'tower': return 'On watch';
    case 'rescue': return 'RESCUING!';
    default: return 'Patrolling';
  }
}
