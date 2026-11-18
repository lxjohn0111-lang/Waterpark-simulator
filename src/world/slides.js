// Water slides: path design (turtle/profile), swept chute geometry, towers,
// supports, landing pool and precomputed ride timelines.
import * as THREE from 'three';
import { PrefabBuilder, instantiate } from '../core/prefab.js';
import { M, slideMat, painted, signMat } from '../core/materials.js';
import { TEX, makeSignTexture } from '../core/textures.js';
import { WATER_Y } from '../config.js';
import { buildRectPool } from './pools.js';

const UP = new THREE.Vector3(0, 1, 0);

export const SLIDE_TYPES = {
  kiddie: {
    name: 'Wiggle Kiddie Slide', H: 2.6, kind: 'open', R: 0.45, kids: true, fun: 0.45, thrill: 0.1,
    turtle: [['S', 0.6, 0.3], ['R', 60, 2.2], ['L', 60, 2.2], ['S', 0.8, 0.35]],
    pool: { W: 4, L: 3.5, depth: 0.55 }, friction: 0.55,
  },
  twister: {
    name: 'Twister', H: 8, kind: 'open', R: 0.55, fun: 0.75, thrill: 0.45,
    turtle: [['S', 4.5, 0.3], ['L', 720, 3.4], ['S', 4.5, 0.3]],
    pool: { W: 5, L: 6, depth: 1.1 }, friction: 0.35,
  },
  racer: {
    name: 'Rapid Racer', H: 7, kind: 'open', R: 0.5, fun: 0.8, thrill: 0.55, twin: true,
    profile: 'racer', length: 25, pool: { W: 6, L: 5, depth: 1.1 }, friction: 0.3,
  },
  anaconda: {
    name: 'Anaconda', H: 11, kind: 'tube', R: 0.6, fun: 0.9, thrill: 0.7,
    turtle: [['S', 3.0, 0.25], ['R', 120, 3.2], ['L', 300, 3.6], ['R', 180, 3.2], ['S', 3.5, 0.3]],
    pool: { W: 5, L: 6, depth: 1.2 }, friction: 0.25,
  },
  freefall: {
    name: 'Free Fall', H: 12, kind: 'open', R: 0.55, fun: 1.0, thrill: 1.0,
    profile: 'drop', length: 26, pool: { W: 5, L: 6, depth: 1.3 }, friction: 0.25, brake: 1.6,
  },
  typhoon: {
    name: 'Typhoon Tower', H: 16, kind: 'tube', R: 0.62, fun: 1.15, thrill: 0.9,
    turtle: [['S', 4.5, 0.25], ['L', 450, 4.0], ['R', 90, 3.0], ['S', 3, 0.6], ['R', 360, 3.4], ['S', 4.0, 0.35]],
    pool: { W: 6, L: 6, depth: 1.3 }, friction: 0.22,
  },
};

// --------------------------------------------------------------------------
// Path generation (local coords: tower at origin, slide departs toward +z)
function turtlePath(def) {
  const pts = []; // {x,z,w}
  let x = 0, z = 1.5, a = 0;
  const step = 0.2;
  pts.push({ x, z, w: 0.1 });
  for (const cmd of def.turtle) {
    const [t, v1, v2, wOverride] = cmd;
    if (t === 'S') {
      const n = Math.max(1, Math.round(v1 / step));
      const w = v2 ?? 1;
      for (let i = 0; i < n; i++) { x += Math.sin(a) * (v1 / n); z += Math.cos(a) * (v1 / n); pts.push({ x, z, w }); }
    } else {
      const ang = THREE.MathUtils.degToRad(v1), r = v2;
      const len = ang * r;
      const n = Math.max(2, Math.round(len / step));
      const dir = t === 'L' ? 1 : -1;
      const w = wOverride ?? 1;
      for (let i = 0; i < n; i++) {
        const da = (ang / n) * dir;
        const am = a + da / 2;
        const ds = len / n;
        x += Math.sin(am) * ds; z += Math.cos(am) * ds; a += da;
        pts.push({ x, z, w });
      }
    }
  }
  // heights
  let total = 0;
  for (let i = 1; i < pts.length; i++) total += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z) * pts[i].w;
  const y0 = def.H + 0.05, y1 = WATER_Y + 0.38;
  const k = (y0 - y1) / total;
  let y = y0;
  const out = [new THREE.Vector3(pts[0].x, y0, pts[0].z)];
  for (let i = 1; i < pts.length; i++) {
    y -= Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z) * pts[i].w * k;
    out.push(new THREE.Vector3(pts[i].x, y, pts[i].z));
  }
  smoothHeights(out, 6);
  return [out];
}

function smoothHeights(pts, win) {
  const ys = pts.map((p) => p.y);
  for (let i = 1; i < pts.length - 1; i++) {
    let s = 0, c = 0;
    for (let j = -win; j <= win; j++) { const k = Math.min(pts.length - 1, Math.max(0, i + j)); s += ys[k]; c++; }
    pts[i].y = s / c;
  }
}

function profilePath(def) {
  const lanes = def.twin ? [-0.72, 0.72] : [0];
  const L = def.length, H = def.H;
  const res = [];
  for (const lx of lanes) {
    const pts = [];
    const n = Math.round(L / 0.2);
    for (let i = 0; i <= n; i++) {
      const s = i / n;
      const zz = 1.5 + s * L;
      let y;
      if (def.profile === 'racer') {
        const base = H + 0.05 - (H + 0.05 - (WATER_Y + 0.38)) * Math.pow(s, 1.05);
        const bump = Math.sin(s * Math.PI * 3.0) * 0.55 * (1 - s) * Math.min(1, s * 6);
        y = base + bump;
      } else {
        // free fall: short flat, near-vertical drop, long runout
        const yEnd = WATER_Y + 0.38;
        const d = zz - 1.5;
        if (d < 1.0) y = H + 0.05 - d * 0.05;
        else if (d < 8.0) { const u = (d - 1.0) / 7.0; y = 0.75 + (H - 0.75) * 0.5 * (1 + Math.cos(Math.PI * u)); }
        else { const t = (d - 8.0) / (L - 8.0); y = 0.75 + (yEnd - 0.75) * t; }
      }
      pts.push(new THREE.Vector3(lx, y, zz));
    }
    if (def.profile === 'drop') smoothHeights(pts, 4); else smoothHeights(pts, 2);
    res.push(pts);
  }
  return res;
}

// Resample polyline at uniform arc length, compute frames & curvature
function resample(raw, spacing = 0.1) {
  const curve = new THREE.CatmullRomCurve3(raw, false, 'centripetal', 0.5);
  const L = curve.getLength();
  const n = Math.max(2, Math.ceil(L / spacing));
  const P = curve.getSpacedPoints(n);
  const T = [], Uv = [], S = [], K = [];
  for (let i = 0; i <= n; i++) {
    const a = P[Math.max(0, i - 1)], b = P[Math.min(n, i + 1)];
    T.push(new THREE.Vector3().subVectors(b, a).normalize());
  }
  let prevU = UP.clone();
  for (let i = 0; i <= n; i++) {
    const t = T[i];
    let u;
    if (Math.abs(t.dot(UP)) < 0.985) u = UP.clone().addScaledVector(t, -t.dot(UP)).normalize();
    else u = prevU.clone().addScaledVector(t, -t.dot(prevU)).normalize();
    prevU = u;
    Uv.push(u);
    S.push(new THREE.Vector3().crossVectors(t, u).normalize()); // right
  }
  for (let i = 0; i <= n; i++) {
    const a = T[Math.max(0, i - 2)], b = T[Math.min(n, i + 2)];
    const ds = (Math.min(n, i + 2) - Math.max(0, i - 2)) * (L / n);
    const kv = new THREE.Vector3().subVectors(b, a).divideScalar(ds || 1);
    K.push(kv.dot(S[i])); // lateral curvature (+ = turning right)
  }
  return { P, T, U: Uv, S, K, L, ds: L / n, n };
}

// Speed simulation -> timeline samples at fixed dt
function simulate(path, def) {
  const g = 9.81, dt = 1 / 30;
  const fr = def.friction ?? 0.3;
  let s = 0, v = 1.4, bank = 0;
  const frames = [];
  const { P, ds, n } = path;
  let guard = 0;
  while (s < path.L && guard++ < 20000) {
    const i = Math.min(n - 1, Math.floor(s / ds));
    const slope = (P[i + 1].y - P[i].y) / ds;
    let a = -g * slope / Math.sqrt(1 + slope * slope) - fr - 0.008 * v * v;
    if (def.brake && s > path.L - 10) a -= def.brake;
    v = Math.max(1.2, v + a * dt);
    v = Math.min(v, 17);
    const k = path.K[i];
    const target = Math.max(-1.25, Math.min(1.25, Math.atan2(v * v * k, g)));
    bank += (target - bank) * Math.min(1, dt * 6);
    frames.push({ s, v, bank });
    s += v * dt;
  }
  frames.push({ s: path.L, v, bank: 0 });
  return { frames, dt, duration: frames.length * dt, maxSpeed: Math.max(...frames.map((f) => f.v)) };
}

// Sample rider transform along the path at arc length s with bank angle
const _a = new THREE.Vector3(), _b = new THREE.Vector3();
export function samplePath(path, s, out) {
  const f = Math.max(0, Math.min(path.n - 0.0001, s / path.ds));
  const i = Math.floor(f), t = f - i;
  out.pos.lerpVectors(path.P[i], path.P[i + 1], t);
  out.tan.lerpVectors(path.T[i], path.T[i + 1], t).normalize();
  out.up.lerpVectors(path.U[i], path.U[i + 1], t).normalize();
  out.side.lerpVectors(path.S[i], path.S[i + 1], t).normalize();
  return out;
}

// --------------------------------------------------------------------------
// Geometry: sweep a 2D profile (array of [side, up]) along the path
function sweep(path, profile, from, to, step = 0.25, closed = false) {
  const pos = [], uv = [], idx = [];
  const ringN = profile.length;
  const count = Math.max(2, Math.ceil((to - from) / step) + 1);
  let rings = 0;
  for (let r = 0; r < count; r++) {
    const s = Math.min(to, from + (r * (to - from)) / (count - 1));
    const f = Math.max(0, Math.min(path.n - 0.0001, s / path.ds));
    const i = Math.floor(f), t = f - i;
    _a.lerpVectors(path.P[i], path.P[i + 1], t);
    const U = new THREE.Vector3().lerpVectors(path.U[i], path.U[i + 1], t).normalize();
    const S = new THREE.Vector3().lerpVectors(path.S[i], path.S[i + 1], t).normalize();
    for (let j = 0; j < ringN; j++) {
      const [ps, pu, pv] = profile[j];
      pos.push(_a.x + S.x * ps + U.x * pu, _a.y + S.y * ps + U.y * pu, _a.z + S.z * ps + U.z * pu);
      uv.push(pv ?? j / (ringN - 1), s / 2.0);
    }
    rings++;
  }
  const segs = closed ? ringN : ringN - 1;
  for (let r = 0; r < rings - 1; r++) for (let j = 0; j < segs; j++) {
    const a = r * ringN + j, b = r * ringN + ((j + 1) % ringN), c = a + ringN, d = b + ringN;
    idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function arcProfile(R, a0, a1, n, offsetUp) {
  // angle measured from bottom (-U), positive toward +S (right)
  const out = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + ((a1 - a0) * i) / n;
    out.push([Math.sin(a) * R, -Math.cos(a) * R + offsetUp, i / n]);
  }
  return out;
}

function chuteGeometry(b, path, def, mat, waterMat) {
  const R = def.R;
  const L = path.L;
  const open = THREE.MathUtils.degToRad(102);
  const th = 0.05;
  const addOpen = (s0, s1) => {
    b.add(sweep(path, arcProfile(R, -open, open, 16, R), s0, s1), mat);
    b.add(sweep(path, arcProfile(R + th, open, -open, 16, R), s0, s1), mat);
    // rims
    for (const sgn of [-1, 1]) {
      const a = open * sgn;
      const p0 = [Math.sin(a) * R, -Math.cos(a) * R + R], p1 = [Math.sin(a) * (R + th + 0.03), -Math.cos(a) * (R + th + 0.03) + R + 0.02];
      b.add(sweep(path, sgn > 0 ? [p0, p1] : [p1, p0], s0, s1), mat);
    }
    // water film
    b.add(sweep(path, arcProfile(R - 0.012, -0.55, 0.55, 6, R), s0, s1), waterMat);
  };
  if (def.kind === 'tube') {
    const s0 = 1.2, s1 = L - 2.0;
    addOpen(0, s0 + 0.05);
    b.add(sweep(path, arcProfile(R, -Math.PI, Math.PI, 28, R), s0, s1, 0.25), mat);
    b.add(sweep(path, arcProfile(R + th, Math.PI, -Math.PI, 28, R), s0, s1, 0.25), mat);
    b.add(sweep(path, arcProfile(R - 0.012, -0.55, 0.55, 6, R), s0, s1), waterMat);
    addOpen(s1 - 0.05, L);
    // flange rings
    for (let s = s0 + 1.5; s < s1; s += 3.0) b.add(sweep(path, arcProfile(R + th + 0.035, Math.PI, -Math.PI, 28, R), s, s + 0.12, 0.12), mat);
  } else {
    addOpen(0, L);
    for (let s = 2.0; s < L - 0.5; s += 3.0) b.add(sweep(path, arcProfile(R + th + 0.03, open + 0.05, -open - 0.05, 16, R), s, s + 0.1, 0.1), mat);
  }
}

// Switchback stair tower. Returns climb path points.
function buildTower(b, H, colorMat, structMat) {
  const climb = [];
  const n = H < 3.5 ? 1 : Math.max(3, Math.ceil(H / 1.85) | 1);
  const rise = H / n;
  const laneZ = [-2.0, -3.1];
  const stepMat = painted(0xb9bcc0, 0.8);
  const railMat = painted(0xf4f4f4, 0.5);
  climb.push(new THREE.Vector3(-2.4, 0, -2.0));
  for (let f = 0; f < n; f++) {
    const lane = f % 2, z = laneZ[lane];
    const dir = lane === 0 ? 1 : -1;
    const y0 = f * rise, y1 = (f + 1) * rise;
    const steps = Math.max(4, Math.round(rise / 0.19));
    for (let s = 0; s < steps; s++) {
      const t = (s + 0.5) / steps;
      const x = -1.5 * dir + 3.0 * t * dir;
      b.box(3.0 / steps + 0.02, 0.06, 0.9, stepMat, x, y0 + (rise * (s + 1)) / steps - 0.03, z);
    }
    // stringers
    for (const dz of [-0.47, 0.47]) b.beam(new THREE.Vector3(-1.5 * dir, y0, z + dz), new THREE.Vector3(1.5 * dir, y1, z + dz), 0.04, structMat, 6);
    // handrails
    const outerDz = lane === 0 ? 0.45 : -0.45;
    b.beam(new THREE.Vector3(-1.5 * dir, y0 + 1.0, z + outerDz), new THREE.Vector3(1.5 * dir, y1 + 1.0, z + outerDz), 0.025, railMat, 6);
    for (let k = 0; k <= 3; k++) { const t = k / 3; b.box(0.04, 1.0, 0.04, railMat, -1.5 * dir + 3 * t * dir, y0 + rise * t + 0.5, z + outerDz); }
    climb.push(new THREE.Vector3(-1.5 * dir, y0, z), new THREE.Vector3(1.5 * dir, y1, z));
    // landing
    const lx = 2.0 * dir;
    if (f < n - 1) {
      b.box(1.0, 0.1, 2.1, stepMat, lx, y1 - 0.05, -2.55);
      b.box(0.04, 1.0, 2.1, railMat, lx + 0.48 * dir, y1 + 0.5, -2.55);
      b.beam(new THREE.Vector3(lx + 0.48 * dir, y1 + 1.0, -1.5), new THREE.Vector3(lx + 0.48 * dir, y1 + 1.0, -3.6), 0.025, railMat);
      climb.push(new THREE.Vector3(lx, y1, z), new THREE.Vector3(lx, y1, laneZ[1 - lane]));
    }
  }
  // top: side landing (east) connecting to platform
  b.box(1.0, 0.12, 2.6, stepMat, 2.0, H - 0.06, -1.2);
  climb.push(new THREE.Vector3(2.0, H, -2.0), new THREE.Vector3(2.0, H, -0.6), new THREE.Vector3(0.6, H, -0.2), new THREE.Vector3(0, H, 0.9));
  // platform
  b.boxUV(3.0, 0.14, 3.0, M.concrete, 0, H - 0.07, 0, 0, 1);
  // columns
  const colH = H + 2.4;
  for (const [x, z] of [[-1.45, -1.45], [1.45, -1.45], [-1.45, 1.45], [1.45, 1.45]]) b.cyl(0.1, 0.12, colH, structMat, x, colH / 2, z, 10);
  for (const [x, z] of [[-2.45, -1.55], [2.45, -1.55], [-2.45, -3.55], [2.45, -3.55]]) b.cyl(0.08, 0.1, H, structMat, x, H / 2, z, 8);
  // bracing (X) on the sides of the core
  for (let y = 0; y < H - 1; y += 3) {
    const y2 = Math.min(H - 0.2, y + 3);
    b.beam(new THREE.Vector3(-1.45, y, 1.45), new THREE.Vector3(1.45, y2, 1.45), 0.03, structMat, 4);
    b.beam(new THREE.Vector3(1.45, y, 1.45), new THREE.Vector3(-1.45, y2, 1.45), 0.03, structMat, 4);
  }
  // platform railings
  b.box(0.05, 1.05, 3.0, railMat, -1.5, H + 0.5, 0);
  b.box(0.05, 1.05, 1.5, railMat, 1.5, H + 0.5, 0.75);
  b.box(1.0, 1.05, 0.05, railMat, -1.0, H + 0.5, 1.5);
  b.box(1.0, 1.05, 0.05, railMat, 1.0, H + 0.5, 1.5);
  b.box(3.0, 1.05, 0.05, railMat, 0, H + 0.5, -1.5);
  // roof canopy
  if (H > 3.5) {
    const roof = new THREE.ConeGeometry(2.6, 1.3, 4, 1, true);
    b.add(roof, colorMat, 0, colH + 0.6, 0, 0, Math.PI / 4, 0);
    b.add(new THREE.SphereGeometry(0.16, 10, 8), colorMat, 0, colH + 1.3, 0);
  }
  return climb;
}

function supports(b, path, mat, skipFn) {
  const L = path.L;
  for (let s = 1.5; s < L - 0.5; s += 2.8) {
    const i = Math.min(path.n, Math.round(s / path.ds));
    const p = path.P[i];
    if (p.y < 0.7) continue;
    if (skipFn(p)) continue;
    const top = p.y - 0.08;
    b.cyl(0.075, 0.09, top, mat, p.x, top / 2, p.z, 8);
    b.cyl(0.25, 0.28, 0.12, painted(0x9a9a9a, 0.9), p.x, 0.06, p.z, 10);
    // cradle
    const S = path.S[i];
    b.beam(new THREE.Vector3(p.x - S.x * 0.45, top - 0.02, p.z - S.z * 0.45), new THREE.Vector3(p.x + S.x * 0.45, top - 0.02, p.z + S.z * 0.45), 0.05, mat, 6);
  }
}

// --------------------------------------------------------------------------
// Cache of designed slides (paths + footprint) per type
const DESIGN = {};

export function designSlide(type) {
  if (DESIGN[type]) return DESIGN[type];
  const def = SLIDE_TYPES[type];
  const raw = def.profile ? profilePath(def) : turtlePath(def);
  const lanes = raw.map((r) => resample(r, 0.1));
  // end point & pool
  const endP = lanes.map((l) => l.P[l.n]);
  const endX = endP.reduce((a, p) => a + p.x, 0) / endP.length;
  const endZ = Math.max(...endP.map((p) => p.z));
  const pw = def.pool.W, pl = def.pool.L;
  const pool = { x0: endX - pw / 2, z0: endZ - 0.35, x1: endX + pw / 2, z1: endZ - 0.35 + pl, depth: def.pool.depth };
  const deckW = 1.0;
  // bounds
  let minX = -2.6, maxX = 2.6, minZ = -3.7, maxZ = 1.6;
  for (const l of lanes) for (const p of l.P) { minX = Math.min(minX, p.x - def.R - 0.2); maxX = Math.max(maxX, p.x + def.R + 0.2); minZ = Math.min(minZ, p.z - def.R - 0.2); maxZ = Math.max(maxZ, p.z + def.R + 0.2); }
  minX = Math.min(minX, pool.x0 - deckW); maxX = Math.max(maxX, pool.x1 + deckW); maxZ = Math.max(maxZ, pool.z1 + deckW);
  minX = Math.floor(minX); minZ = Math.floor(minZ); maxX = Math.ceil(maxX); maxZ = Math.ceil(maxZ);
  const w = maxX - minX, d = maxZ - minZ;
  const ox = -(minX + w / 2), oz = -(minZ + d / 2); // shift to center
  const off = new THREE.Vector3(ox, 0, oz);
  // shift everything
  for (const l of lanes) for (const p of l.P) p.add(off);
  pool.x0 += ox; pool.x1 += ox; pool.z0 += oz; pool.z1 += oz;
  const towerC = off.clone();
  // cell mask: 0 free, 1 occupied-walkable, 2 blocked, 3 water, 4 deck
  const mask = new Uint8Array(w * d);
  const setCell = (lx, lz, v) => {
    const ix = Math.floor(lx + w / 2), iz = Math.floor(lz + d / 2);
    if (ix < 0 || iz < 0 || ix >= w || iz >= d) return;
    const k = iz * w + ix;
    mask[k] = Math.max(mask[k], v);
  };
  // tower block
  for (let x = -2.6; x <= 2.6; x += 0.5) for (let z = -3.7; z <= 1.6; z += 0.5) setCell(x + ox, z + oz, 2);
  // path
  for (const l of lanes) {
    for (let i = 0; i <= l.n; i += 3) {
      const p = l.P[i];
      const v = p.y < 2.3 ? 2 : 1;
      for (let dx = -0.8; dx <= 0.8; dx += 0.4) for (let dz = -0.8; dz <= 0.8; dz += 0.4) setCell(p.x + dx, p.z + dz, v);
    }
  }
  // pool (water + deck)
  for (let x = pool.x0 - deckW + 0.5; x < pool.x1 + deckW; x += 1) for (let z = pool.z0 - deckW + 0.5; z < pool.z1 + deckW; z += 1) {
    const inWater = x > pool.x0 && x < pool.x1 && z > pool.z0 && z < pool.z1;
    const ix = Math.floor(x + w / 2), iz = Math.floor(z + d / 2);
    if (ix < 0 || iz < 0 || ix >= w || iz >= d) continue;
    const k = iz * w + ix;
    if (inWater) mask[k] = 3; else if (mask[k] !== 2) mask[k] = 4;
  }
  const timelines = lanes.map((l) => simulate(l, def));
  // climb path placeholder (filled when building tower)
  const design = {
    type, def, lanes, timelines, pool, w, d, mask, off: towerC,
    entrance: new THREE.Vector3(-2.6, 0, -2.0).add(off),
    queueDir: new THREE.Vector3(-1, 0, 0),
    exit: new THREE.Vector3((pool.x0 + pool.x1) / 2, 0, pool.z1 + 0.6),
    exitWater: new THREE.Vector3((pool.x0 + pool.x1) / 2, WATER_Y, pool.z1 - 0.8),
    climb: null,
  };
  DESIGN[type] = design;
  return design;
}

// Build visual object for a slide type with a given color
export function buildSlide(type, color) {
  const design = designSlide(type);
  const def = design.def;
  const b = new PrefabBuilder();
  const mat = slideMat(color);
  const mat2 = def.twin ? slideMat(color === 0xffc21a ? 0x1e9bff : 0xffc21a) : mat;
  const waterMat = getSlideWaterMat();
  design.lanes.forEach((l, i) => chuteGeometry(b, l, def, i === 0 ? mat : mat2, waterMat));
  // tower (in tower-local coords then shifted)
  const tb = new PrefabBuilder();
  const climb = buildTower(tb, def.H, mat, M.steel);
  const towerPrefab = tb.build();
  const off = design.off;
  const tm = new THREE.Matrix4().makeTranslation(off.x, 0, off.z);
  for (const p of towerPrefab.parts) b.addMatrix(p.geometry.clone(), p.material, tm);
  design.climb = climb.map((p) => p.clone().add(off));
  // supports
  const skip = (p) => p.x > off.x - 2.7 && p.x < off.x + 2.7 && p.z > off.z - 3.8 && p.z < off.z + 1.7;
  design.lanes.forEach((l) => supports(b, l, M.steel, skip));
  // entrance sign
  const sign = makeSignTexture([def.name.toUpperCase()], { bg: '#ffffff', fg: '#' + color.toString(16).padStart(6, '0'), w: 512, h: 128, border: '#' + color.toString(16).padStart(6, '0') });
  const sx = design.entrance.x - 0.4, sz = design.entrance.z + 1.2;
  b.cyl(0.04, 0.04, 2.2, M.steelDark, sx, 1.1, sz, 6);
  b.add(new THREE.PlaneGeometry(1.4, 0.36), signMat(sign, 0.5), sx, 2.1, sz + 0.03);
  b.box(1.46, 0.42, 0.04, painted(0x333333, 0.5), sx, 2.1, sz - 0.0);
  // queue rails
  for (let i = 0; i < 4; i++) {
    const x = design.entrance.x - 0.6 - i * 1.0;
    b.cyl(0.03, 0.03, 0.9, M.chrome, x, 0.45, design.entrance.z - 0.55, 6);
    b.cyl(0.03, 0.03, 0.9, M.chrome, x, 0.45, design.entrance.z + 0.55, 6);
  }
  const prefab = b.build();
  const group = instantiate(prefab);
  // landing pool
  const pw = design.pool.x1 - design.pool.x0, pl = design.pool.z1 - design.pool.z0;
  const lp = buildRectPool({ W: pw, L: pl, dS: design.pool.depth, dD: design.pool.depth, deck: 1.0, ladders: false });
  lp.group.position.set((design.pool.x0 + design.pool.x1) / 2, 0, (design.pool.z0 + design.pool.z1) / 2);
  group.add(lp.group);
  return { group, design, prefab, poolMeta: lp.meta, water: lp.water };
}

let _slideWater = null;
export function getSlideWaterMat() {
  if (!_slideWater) {
    const t = TEX.waterN.clone();
    t.repeat.set(1, 1);
    t.needsUpdate = true;
    _slideWater = new THREE.MeshStandardMaterial({ color: 0xbff4ff, transparent: true, opacity: 0.45, roughness: 0.03, metalness: 0.1, normalMap: t, normalScale: new THREE.Vector2(0.6, 0.6), depthWrite: false, envMapIntensity: 1.6 });
  }
  return _slideWater;
}
export function animateSlideWater(dt) {
  if (_slideWater) _slideWater.normalMap.offset.y -= dt * 1.6;
}

// Ghost (preview) object for the build tool
export function buildSlideGhost(type) {
  const r = buildSlide(type, 0xffffff);
  return r;
}
