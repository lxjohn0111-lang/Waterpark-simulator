import * as THREE from 'three';

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const TAU = Math.PI * 2;

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
export const randInt = (a, b) => Math.floor(a + Math.random() * (b - a + 1));
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const chance = (p) => Math.random() < p;

export function angleDiff(a, b) {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
}

export function fmtMoney(v) {
  const neg = v < 0; v = Math.abs(Math.round(v));
  const s = v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (neg ? '-$' : '$') + s;
}
export function fmtTime(min) {
  min = ((min % 1440) + 1440) % 1440;
  const h = Math.floor(min / 60), m = Math.floor(min % 60);
  return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
}

// ---------- Tileable value noise (for texture generation) ----------
export function makeTileNoise(period, rng) {
  const g = new Float32Array(period * period);
  for (let i = 0; i < g.length; i++) g[i] = rng();
  return (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const x0 = ((xi % period) + period) % period, y0 = ((yi % period) + period) % period;
    const x1 = (x0 + 1) % period, y1 = (y0 + 1) % period;
    const u = xf * xf * xf * (xf * (xf * 6 - 15) + 10);
    const v = yf * yf * yf * (yf * (yf * 6 - 15) + 10);
    const a = g[y0 * period + x0], b = g[y0 * period + x1], c = g[y1 * period + x0], d = g[y1 * period + x1];
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
}

// Fills a Float32Array (size*size) with tileable fBm in [0,1]
export function fbmField(size, basePeriod, octaves, seed, gain = 0.5) {
  const rng = mulberry32(seed);
  const fns = [];
  for (let o = 0; o < octaves; o++) fns.push(makeTileNoise(basePeriod << o, rng));
  const out = new Float32Array(size * size);
  let norm = 0, amp = 1;
  for (let o = 0; o < octaves; o++) { norm += amp; amp *= gain; }
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let v = 0; amp = 1;
      for (let o = 0; o < octaves; o++) {
        const p = basePeriod << o;
        v += fns[o]((x / size) * p, (y / size) * p) * amp;
        amp *= gain;
      }
      out[y * size + x] = v / norm;
    }
  }
  return out;
}

// Simple 2D value noise (non-tileable) for world-space use
const _perm = new Uint8Array(512);
(() => { const r = mulberry32(1337); const p = [...Array(256).keys()]; for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; } for (let i = 0; i < 512; i++) _perm[i] = p[i & 255]; })();
export function noise2(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const X = xi & 255, Y = yi & 255;
  const h = (i, j) => _perm[_perm[X + i] + Y + j] / 255;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = h(0, 0), b = h(1, 0), c = h(0, 1), d = h(1, 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
export function fbm2(x, y, oct = 4) {
  let v = 0, a = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { v += noise2(x * f, y * f) * a; f *= 2.03; a *= 0.5; }
  return v / (1 - Math.pow(0.5, oct));
}

// Rotate local (lx, lz) by rot quarter turns, matching Object3D.rotation.y = rot*PI/2
export function rotXZ(lx, lz, rot) {
  switch (((rot % 4) + 4) % 4) {
    case 0: return [lx, lz];
    case 1: return [lz, -lx];
    case 2: return [-lx, -lz];
    default: return [-lz, lx];
  }
}

export const tmpV = new THREE.Vector3();
export const tmpV2 = new THREE.Vector3();
export const tmpV3 = new THREE.Vector3();
export const tmpM = new THREE.Matrix4();
export const tmpQ = new THREE.Quaternion();
export const tmpE = new THREE.Euler();
export const tmpC = new THREE.Color();

export function nextFrame() { return new Promise((r) => requestAnimationFrame(() => r())); }
export function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

export const FIRST_NAMES = ['Ava','Liam','Mia','Noah','Zoe','Leo','Ella','Max','Lily','Sam','Ivy','Jack','Ruby','Finn','Luna','Theo','Nora','Owen','Isla','Eli','Maya','Kai','Chloe','Ben','Aria','Jude','Sofia','Milo','Grace','Ezra','Hana','Omar','Lena','Ravi','Yuki','Diego','Ines','Tomas','Amara','Felix','Nina','Hugo','Elsa','Marco','Priya','Jonas','Layla','Rosa','Aiden','Emma'];
export const LAST_INITIALS = 'ABCDEFGHJKLMNOPRSTVWY';
