// Shared walking-agent behaviour for guests and staff.
import * as THREE from 'three';
import { G } from '../core/context.js';
import { createPerson, animatePerson } from '../world/people.js';
import { angleDiff } from '../core/utils.js';
import { TEX } from '../core/textures.js';

// ---- path request budget ----
const pathQueue = [];
export function requestPath(agent, x, z, cb) {
  agent.pathPending = true;
  agent.pathReqId = (agent.pathReqId || 0) + 1;
  pathQueue.push({ agent, x, z, cb, id: agent.pathReqId });
}
export function processPaths(budget = 8) {
  let n = 0;
  while (pathQueue.length && n < budget) {
    const r = pathQueue.shift();
    if (r.agent.dead || r.id !== r.agent.pathReqId) continue;
    const path = G.park.grid.findPath(r.agent.pos.x, r.agent.pos.z, r.x, r.z, 25000);
    r.agent.pathPending = false;
    r.cb(path);
    n++;
  }
}
export function cancelPaths(agent) { agent.pathReqId = (agent.pathReqId || 0) + 1; agent.pathPending = false; }

// ---- icon sprites ----
const spriteMats = {};
function iconMat(name) {
  if (!spriteMats[name]) spriteMats[name] = new THREE.SpriteMaterial({ map: TEX[name], depthTest: true, transparent: true, fog: false });
  return spriteMats[name];
}

export class Agent {
  constructor(look) {
    this.look = look;
    this.person = createPerson(look);
    this.mesh = this.person.mesh;
    this.scale = this.person.scale;
    this.pos = new THREE.Vector3();
    this.yaw = 0;
    this.path = null; this.pi = 0;
    this.onArrive = null;
    this.speed = 1.25;
    this.pose = 'idle';
    this.ph = Math.random() * 10;
    this.posY = 0;
    this.icon = null; this.iconName = null;
    this.hidden = false;
    this.dead = false;
    this.animTick = 0;
    this.customOrient = false;
    G.scene.add(this.mesh);
  }

  setIcon(name) {
    if (name === this.iconName) return;
    this.iconName = name;
    if (!name) { if (this.icon) this.icon.visible = false; return; }
    if (!this.icon) { this.icon = new THREE.Sprite(iconMat(name)); this.icon.scale.set(0.55, 0.55, 0.55); this.icon.renderOrder = 10; G.scene.add(this.icon); }
    this.icon.material = iconMat(name);
    this.icon.visible = true;
  }

  walkTo(x, z, cb, failCb) {
    this.path = null;
    requestPath(this, x, z, (path) => {
      if (!path) { failCb ? failCb() : cb && cb(false); return; }
      this.path = path; this.pi = 0;
      this.onArrive = () => cb && cb(true);
    });
  }
  // walk directly (no pathfinding) through given points
  walkDirect(points, cb) {
    this.path = points.map((p) => (Array.isArray(p) ? p : [p.x, p.z]));
    this.pi = 0;
    this.onArrive = () => cb && cb(true);
  }
  stop() { this.path = null; this.onArrive = null; cancelPaths(this); }

  stepPath(sdt) {
    if (!this.path) return false;
    const target = this.path[this.pi];
    if (!target) { this.path = null; const f = this.onArrive; this.onArrive = null; f && f(); return false; }
    const dx = target[0] - this.pos.x, dz = target[1] - this.pos.z;
    const d = Math.hypot(dx, dz);
    let sp = this.speed;
    const k = G.park.grid.idxAt(this.pos.x, this.pos.z);
    if (k >= 0 && (G.park.grid.floor[k] || G.park.grid.deck[k])) sp *= 1.12;
    const step = sp * sdt;
    if (d <= step + 0.02) {
      this.pos.x = target[0]; this.pos.z = target[1];
      this.pi++;
      if (this.pi >= this.path.length) { this.path = null; const f = this.onArrive; this.onArrive = null; f && f(); }
    } else {
      this.pos.x += (dx / d) * step; this.pos.z += (dz / d) * step;
      const want = Math.atan2(dx, dz);
      this.yaw += angleDiff(this.yaw, want) * Math.min(1, sdt * 8);
    }
    return true;
  }

  faceTo(x, z, sdt = 1) {
    const want = Math.atan2(x - this.pos.x, z - this.pos.z);
    this.yaw += angleDiff(this.yaw, want) * Math.min(1, sdt * 6);
  }

  render(dt, sdt, camPos, animate = true) {
    const m = this.mesh;
    m.visible = !this.hidden;
    if (this.hidden) { if (this.icon) this.icon.visible = false; return; }
    if (!this.customOrient) {
      m.position.set(this.pos.x, this.posY, this.pos.z);
      m.rotation.set(0, this.yaw, 0);
    }
    const dist2 = (this.pos.x - camPos.x) ** 2 + (this.pos.z - camPos.z) ** 2;
    this.ph += sdt * (this.pose === 'run' ? 9 : this.pose === 'walk' || this.pose === 'climb' ? 6.2 * this.speed / 1.25 : 3);
    // animation LOD
    this.animTick++;
    const every = dist2 > 80 * 80 ? 6 : dist2 > 40 * 40 ? 2 : 1;
    if (animate && this.animTick % every === 0) animatePerson(this.person, this.pose, this.ph, dt * every, this.poseExtra || 0, this.pose === 'run' ? Math.max(this.speed, 3.2) : this.speed);
    if (this.icon && this.iconName) {
      this.icon.visible = true;
      this.icon.position.set(this.pos.x, (this.iconY ?? this.posY + 2.15 * this.scale + 0.15), this.pos.z);
      // shrink when the camera is right next to us so the bubble doesn't hide the character
      this.icon.scale.setScalar(0.55 * Math.min(1, Math.max(0.3, Math.sqrt(dist2) / 6)));
    }
  }

  dispose() {
    this.dead = true;
    G.scene.remove(this.mesh);
    if (this.person.dispose) this.person.dispose();
    else this.mesh.material.dispose();
    if (this.icon) G.scene.remove(this.icon);
  }
}

// Simple separation so people don't stand inside each other
const hash = new Map();
export function separate(agents, sdt) {
  hash.clear();
  for (const a of agents) {
    if (a.hidden || a.noSep) continue;
    const key = (Math.floor(a.pos.x / 1.5) * 73856093) ^ (Math.floor(a.pos.z / 1.5) * 19349663);
    let arr = hash.get(key);
    if (!arr) { arr = []; hash.set(key, arr); }
    arr.push(a);
  }
  for (const arr of hash.values()) {
    if (arr.length < 2) continue;
    for (let i = 0; i < arr.length; i++) for (let j = i + 1; j < arr.length; j++) {
      const a = arr[i], b = arr[j];
      const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z;
      const d2 = dx * dx + dz * dz;
      const r = 0.42 * (a.scale + b.scale);
      if (d2 > 0.0001 && d2 < r * r) {
        const d = Math.sqrt(d2), push = (r - d) * 0.5 * Math.min(1, sdt * 6);
        const nx = dx / d, nz = dz / d;
        const ma = a.path ? 1 : 0.3, mb = b.path ? 1 : 0.3;
        if (G.park.grid.isWalkable(a.pos.x - nx * push * ma, a.pos.z - nz * push * ma)) { a.pos.x -= nx * push * ma; a.pos.z -= nz * push * ma; }
        if (G.park.grid.isWalkable(b.pos.x + nx * push * mb, b.pos.z + nz * push * mb)) { b.pos.x += nx * push * mb; b.pos.z += nz * push * mb; }
      }
    }
  }
}
