// Procedural texture generation (no external image assets needed).
import * as THREE from 'three';
import { fbmField, mulberry32, clamp, makeTileNoise } from './utils.js';

export const TEX = {};
let maxAniso = 4;

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function finishTex(tex, srgb = true, repeat = true) {
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { tex.wrapS = tex.wrapT = THREE.RepeatWrapping; }
  tex.anisotropy = maxAniso;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

function canvasTex(c, srgb = true, repeat = true) { return finishTex(new THREE.CanvasTexture(c), srgb, repeat); }

// Height field (Float32, size*size, tileable) -> normal map DataTexture
function normalFromHeight(h, size, strength) {
  const data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    const ym = ((y - 1 + size) % size) * size, yp = ((y + 1) % size) * size, yr = y * size;
    for (let x = 0; x < size; x++) {
      const xm = (x - 1 + size) % size, xp = (x + 1) % size;
      const dx = (h[yr + xm] - h[yr + xp]) * strength;
      const dy = (h[ym + x] - h[yp + x]) * strength;
      const inv = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      const i = (yr + x) * 4;
      data[i] = (dx * inv * 0.5 + 0.5) * 255;
      data[i + 1] = (dy * inv * 0.5 + 0.5) * 255;
      data[i + 2] = (inv * 0.5 + 0.5) * 255;
      data[i + 3] = 255;
    }
  }
  const t = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  return finishTex(t, false, true);
}

function fieldToCanvas(size, fn) {
  const c = canvas(size, size);
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = (y * size + x) * 4;
    const col = fn(x, y, y * size + x);
    d[i] = clamp(col[0], 0, 255); d[i + 1] = clamp(col[1], 0, 255); d[i + 2] = clamp(col[2], 0, 255); d[i + 3] = col[3] === undefined ? 255 : col[3];
  }
  ctx.putImageData(img, 0, 0);
  return c;
}

// ---------------------------------------------------------------------------
function makePoolTiles() {
  // 512px = 1 m, 16x16 mosaic tiles
  const S = 512, N = 16, T = S / N;
  const rng = mulberry32(11);
  const tileCol = [];
  for (let i = 0; i < N * N; i++) {
    const r = rng();
    const l = 0.80 + rng() * 0.12 - (r < 0.12 ? 0.12 : 0);
    const hue = 0.53 + (rng() - 0.5) * 0.03;
    const sat = 0.42 + rng() * 0.25;
    const c = new THREE.Color().setHSL(hue, sat, l * 0.86);
    tileCol.push([c.r * 255, c.g * 255, c.b * 255]);
  }
  const noise = fbmField(S, 32, 3, 5);
  const h = new Float32Array(S * S);
  const c = fieldToCanvas(S, (x, y, i) => {
    const tx = Math.floor(x / T), ty = Math.floor(y / T);
    const lx = x - tx * T, ly = y - ty * T;
    const e = Math.min(lx, ly, T - 1 - lx, T - 1 - ly);
    const grout = e < 1.6;
    const bevel = clamp((e - 1.0) / 3.0, 0, 1);
    h[i] = grout ? 0 : 0.35 + bevel * 0.65 + noise[i] * 0.08;
    if (grout) { const g = 222 + noise[i] * 18; return [g - 8, g, g + 2]; }
    const col = tileCol[ty * N + tx];
    const n = 0.94 + noise[i] * 0.12 + (lx < 4 && ly < 4 ? 0.06 : 0);
    return [col[0] * n, col[1] * n, col[2] * n];
  });
  TEX.poolTile = canvasTex(c);
  TEX.poolTileN = normalFromHeight(h, S, 2.2);
}

function makeDeck() {
  // 512px = 2 m, 4x4 stone slabs (travertine)
  const S = 512, N = 4, T = S / N;
  const rng = mulberry32(21);
  const slab = [];
  for (let i = 0; i < N * N; i++) slab.push([0.92 + rng() * 0.1, rng() * 1000]);
  const n1 = fbmField(S, 8, 5, 22);
  const n2 = fbmField(S, 64, 2, 23);
  const pits = new Float32Array(S * S);
  for (let k = 0; k < 900; k++) { const px = Math.floor(rng() * S), py = Math.floor(rng() * S); const r = 1 + Math.floor(rng() * 2); for (let yy = -r; yy <= r; yy++) for (let xx = -r; xx <= r; xx++) { if (xx * xx + yy * yy <= r * r) pits[((py + yy + S) % S) * S + ((px + xx + S) % S)] = 1; } }
  const h = new Float32Array(S * S);
  const c = fieldToCanvas(S, (x, y, i) => {
    const tx = Math.floor(x / T), ty = Math.floor(y / T);
    const lx = x - tx * T, ly = y - ty * T;
    const e = Math.min(lx, ly, T - 1 - lx, T - 1 - ly);
    const grout = e < 2;
    const s = slab[ty * N + tx];
    const veins = Math.abs(Math.sin((x * 0.02 + n1[i] * 6 + s[1]) * 1.3)) ;
    h[i] = grout ? 0 : 0.6 + n1[i] * 0.25 - pits[i] * 0.4 + clamp(e / 4, 0, 1) * 0.2;
    if (grout) return [150, 140, 124];
    const b = s[0] * (0.86 + n1[i] * 0.22 + n2[i] * 0.06) * (0.96 + veins * 0.05) - pits[i] * 0.18;
    return [228 * b, 214 * b, 188 * b];
  });
  TEX.deck = canvasTex(c);
  TEX.deckN = normalFromHeight(h, S, 3.5);
}

function makeGrass() {
  const S = 1024;
  const n1 = fbmField(S, 4, 5, 31);
  const n2 = fbmField(S, 32, 3, 32);
  const rng = mulberry32(33);
  const blade = new Float32Array(S * S);
  // Directional blade streaks
  for (let k = 0; k < 60000; k++) {
    const x0 = rng() * S, y0 = rng() * S, len = 4 + rng() * 9, a = -Math.PI / 2 + (rng() - 0.5) * 0.9, v = 0.5 + rng() * 0.5;
    for (let t = 0; t < len; t++) {
      const x = Math.floor(x0 + Math.cos(a) * t + S) % S, y = Math.floor(y0 + Math.sin(a) * t + S) % S;
      blade[y * S + x] = Math.max(blade[y * S + x], v * (1 - t / len * 0.5));
    }
  }
  const h = new Float32Array(S * S);
  const c = fieldToCanvas(S, (x, y, i) => {
    const m = n1[i], d = n2[i], b = blade[i];
    h[i] = b * 0.8 + d * 0.4;
    const dry = clamp((m - 0.55) * 2.2, 0, 1);
    let r = 62 + dry * 40, g = 108 + dry * 22, bl = 38 + dry * 8;
    const f = 0.62 + b * 0.55 + (d - 0.5) * 0.25;
    return [r * f, g * f, bl * f];
  });
  TEX.grass = canvasTex(c);
  TEX.grassN = normalFromHeight(h, S, 1.6);
}

function makeConcrete() {
  const S = 512;
  const n1 = fbmField(S, 8, 5, 41);
  const n2 = fbmField(S, 64, 2, 42);
  const h = new Float32Array(S * S);
  const c = fieldToCanvas(S, (x, y, i) => {
    h[i] = n1[i] * 0.6 + n2[i] * 0.4;
    const v = 182 * (0.86 + n1[i] * 0.2 + (n2[i] - 0.5) * 0.08);
    return [v, v * 0.99, v * 0.96];
  });
  TEX.concrete = canvasTex(c);
  TEX.concreteN = normalFromHeight(h, S, 1.4);
}

function makeWood() {
  // 512px; 5 planks along v
  const S = 512, P = 5, PW = S / P;
  const n1 = fbmField(S, 4, 4, 51);
  const rng = mulberry32(52);
  const tone = [];
  for (let i = 0; i < P; i++) tone.push([0.85 + rng() * 0.25, rng() * 100]);
  const h = new Float32Array(S * S);
  const c = fieldToCanvas(S, (x, y, i) => {
    const p = Math.floor(x / PW), lx = x - p * PW;
    const t = tone[p];
    const gap = lx < 3 || lx > PW - 3;
    const grain = Math.sin((y * 0.06 + n1[i] * 9 + t[1]) * 2.0) * 0.5 + 0.5;
    const ring = Math.pow(Math.abs(Math.sin((lx * 0.15 + n1[i] * 4 + t[1]))), 6);
    h[i] = gap ? 0 : 0.7 + grain * 0.1;
    if (gap) return [60, 40, 25];
    const v = t[0] * (0.8 + grain * 0.15 - ring * 0.12);
    return [176 * v, 122 * v, 76 * v];
  });
  TEX.wood = canvasTex(c);
  TEX.woodN = normalFromHeight(h, S, 2.5);
}

function makeAsphalt() {
  const S = 512;
  const n1 = fbmField(S, 16, 4, 61);
  const rng = mulberry32(62);
  const h = new Float32Array(S * S);
  const c = fieldToCanvas(S, (x, y, i) => {
    const sp = rng();
    h[i] = n1[i] + (sp > 0.97 ? 0.4 : 0);
    let v = 58 + n1[i] * 26 + (sp > 0.96 ? 40 : sp < 0.03 ? -20 : 0);
    return [v, v, v * 1.03];
  });
  TEX.asphalt = canvasTex(c);
  TEX.asphaltN = normalFromHeight(h, S, 1.2);
}

function makeSand() {
  const S = 512;
  const n1 = fbmField(S, 8, 5, 71);
  const rng = mulberry32(72);
  const h = new Float32Array(S * S);
  const c = fieldToCanvas(S, (x, y, i) => {
    const g = rng();
    h[i] = n1[i] * 0.7 + g * 0.3;
    const v = 0.85 + n1[i] * 0.2 + (g - 0.5) * 0.12;
    return [236 * v, 214 * v, 170 * v];
  });
  TEX.sand = canvasTex(c);
  TEX.sandN = normalFromHeight(h, S, 1.5);
}

function makeBark() {
  // Palm trunk: horizontal rings along v
  const S = 256;
  const n1 = fbmField(S, 8, 4, 81);
  const h = new Float32Array(S * S);
  const c = fieldToCanvas(S, (x, y, i) => {
    const ring = (y % 32) / 32;
    const lip = Math.pow(1 - ring, 3);
    h[i] = lip * 0.8 + n1[i] * 0.3;
    const v = 0.55 + lip * 0.45 + (n1[i] - 0.5) * 0.25;
    return [150 * v, 118 * v, 82 * v];
  });
  TEX.bark = canvasTex(c);
  TEX.barkN = normalFromHeight(h, S, 4);
}

function makePalmLeaf() {
  const W = 512, H = 128;
  const c = canvas(W, H);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  const rng = mulberry32(91);
  // leaflets
  for (let i = 0; i < 70; i++) {
    const t = i / 70;
    const x = 10 + t * (W - 20);
    const len = (1 - Math.pow(t, 1.6)) * 58 + 8;
    for (const side of [-1, 1]) {
      const ang = side * (0.95 + rng() * 0.25);
      const ex = x + Math.cos(ang - side * 0.1) * len * 0.5 + len * 0.55;
      const ey = H / 2 + Math.sin(ang) * len;
      const g = ctx.createLinearGradient(x, H / 2, ex, ey);
      g.addColorStop(0, `rgb(${50 + rng() * 15},${100 + rng() * 25},${30 + rng() * 10})`);
      g.addColorStop(1, `rgb(${85 + rng() * 25},${140 + rng() * 25},${45 + rng() * 15})`);
      ctx.strokeStyle = g;
      ctx.lineWidth = 6 - t * 3;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x, H / 2);
      ctx.quadraticCurveTo(x + len * 0.3, H / 2 + Math.sin(ang) * len * 0.6, ex, ey);
      ctx.stroke();
    }
  }
  // rib
  ctx.strokeStyle = '#7a8a3a';
  ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();
  TEX.palmLeaf = canvasTex(c, true, false);
}

function makeGrassBlades() {
  const W = 256, H = 256;
  const c = canvas(W, H);
  const ctx = c.getContext('2d');
  const rng = mulberry32(101);
  for (let i = 0; i < 46; i++) {
    const x = 20 + rng() * (W - 40);
    const h = H * (0.45 + rng() * 0.55);
    const bend = (rng() - 0.5) * 60;
    const w = 5 + rng() * 6;
    const g = ctx.createLinearGradient(0, H, 0, H - h);
    const dark = 0.75 + rng() * 0.3;
    g.addColorStop(0, `rgb(${62 * dark},${98 * dark},${36 * dark})`);
    g.addColorStop(1, `rgb(${105 * dark + 25},${150 * dark + 20},${55 * dark})`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(x - w / 2, H);
    ctx.quadraticCurveTo(x - w / 4 + bend * 0.4, H - h * 0.5, x + bend, H - h);
    ctx.quadraticCurveTo(x + w / 4 + bend * 0.4, H - h * 0.5, x + w / 2, H);
    ctx.closePath();
    ctx.fill();
  }
  TEX.grassBlades = canvasTex(c, true, false);
}

function makeWaterNormals() {
  // Tileable sum-of-waves height field with analytic-ish normals
  const S = 512;
  const rng = mulberry32(111);
  const waves = [];
  for (let i = 0; i < 36; i++) {
    let kx = Math.round((rng() - 0.5) * 30), ky = Math.round((rng() - 0.5) * 30);
    if (kx === 0 && ky === 0) kx = 3;
    const k = Math.hypot(kx, ky);
    waves.push({ kx, ky, a: 1 / Math.pow(k, 1.25), p: rng() * Math.PI * 2 });
  }
  const nz = fbmField(S, 16, 3, 112);
  const h = new Float32Array(S * S);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    let v = 0;
    const u = x / S, w = y / S;
    for (const wv of waves) v += Math.sin((wv.kx * u + wv.ky * w) * Math.PI * 2 + wv.p) * wv.a;
    h[y * S + x] = v + nz[y * S + x] * 0.6;
  }
  TEX.waterN = normalFromHeight(h, S, 2.0);
}

function makeMacroNoise() {
  const S = 256;
  const n = fbmField(S, 4, 5, 121);
  const data = new Uint8Array(S * S * 4);
  for (let i = 0; i < S * S; i++) { const v = n[i] * 255; data[i * 4] = v; data[i * 4 + 1] = v; data[i * 4 + 2] = v; data[i * 4 + 3] = 255; }
  TEX.macro = finishTex(new THREE.DataTexture(data, S, S, THREE.RGBAFormat), false, true);
}

function makeFoliage() {
  // Generic leafy clump texture for hedges/bushes (tileable)
  const S = 256;
  const n1 = fbmField(S, 16, 4, 131);
  const rng = mulberry32(132);
  const leaf = new Float32Array(S * S);
  for (let k = 0; k < 2600; k++) {
    const cx = rng() * S, cy = rng() * S, r = 2 + rng() * 4, v = 0.4 + rng() * 0.6;
    for (let yy = -r; yy <= r; yy++) for (let xx = -r; xx <= r; xx++) {
      const d = (xx * xx) / (r * r) + (yy * yy) / (r * r * 0.4);
      if (d < 1) { const i = (((Math.floor(cy + yy)) % S + S) % S) * S + (((Math.floor(cx + xx)) % S + S) % S); leaf[i] = Math.max(leaf[i], v * (1 - d * 0.5)); }
    }
  }
  const h = new Float32Array(S * S);
  const c = fieldToCanvas(S, (x, y, i) => {
    h[i] = leaf[i];
    const f = 0.35 + leaf[i] * 0.75 + (n1[i] - 0.5) * 0.3;
    return [48 * f, 104 * f, 36 * f];
  });
  TEX.foliage = canvasTex(c);
  TEX.foliageN = normalFromHeight(h, S, 3);
}

function makeRock() {
  const S = 256;
  const n1 = fbmField(S, 8, 5, 141);
  const h = new Float32Array(S * S);
  const c = fieldToCanvas(S, (x, y, i) => {
    h[i] = n1[i];
    const v = 0.55 + n1[i] * 0.5;
    return [150 * v, 138 * v, 122 * v];
  });
  TEX.rock = canvasTex(c);
  TEX.rockN = normalFromHeight(h, S, 5);
}

function makeThatch() {
  const S = 256;
  const rng = mulberry32(151);
  const c = canvas(S, S);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#8a6a3a'; ctx.fillRect(0, 0, S, S);
  for (let i = 0; i < 2200; i++) {
    const x = rng() * S, y = rng() * S, l = 10 + rng() * 26;
    const v = 120 + rng() * 90;
    ctx.strokeStyle = `rgba(${v},${v * 0.78},${v * 0.42},0.8)`;
    ctx.lineWidth = 1 + rng() * 1.5;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (rng() - 0.5) * 4, y + l); ctx.stroke();
  }
  TEX.thatch = canvasTex(c);
}

function makeFencePickets() {
  const W = 256, H = 128;
  const c = canvas(W, H);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#f3f3ee';
  // rails
  ctx.fillRect(0, 26, W, 9); ctx.fillRect(0, 92, W, 9);
  for (let i = 0; i < 8; i++) {
    const x = i * 32 + 6;
    ctx.beginPath();
    ctx.moveTo(x, H); ctx.lineTo(x, 12); ctx.lineTo(x + 10, 2); ctx.lineTo(x + 20, 12); ctx.lineTo(x + 20, H); ctx.closePath();
    ctx.fill();
  }
  ctx.strokeStyle = 'rgba(0,0,0,0.15)'; ctx.lineWidth = 1;
  for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.moveTo(i * 32 + 26, 14); ctx.lineTo(i * 32 + 26, H); ctx.stroke(); }
  TEX.fence = canvasTex(c, true, true);
}

export function makeStripeTexture(colA, colB, n = 8) {
  const c = canvas(256, 64);
  const ctx = c.getContext('2d');
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = i % 2 ? colB : colA;
    ctx.fillRect((i * 256) / n, 0, 256 / n + 1, 64);
  }
  return canvasTex(c);
}

export function makeSignTexture(lines, opts = {}) {
  const W = opts.w || 512, H = opts.h || 128;
  const c = canvas(W, H);
  const ctx = c.getContext('2d');
  const r = opts.radius ?? 18;
  const bg = opts.bg || '#1aa7e0';
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = bg;
  roundRect(ctx, 0, 0, W, H, r); ctx.fill();
  if (opts.bg2) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, bg); g.addColorStop(1, opts.bg2);
    ctx.fillStyle = g; roundRect(ctx, 0, 0, W, H, r); ctx.fill();
  }
  if (opts.border) { ctx.strokeStyle = opts.border; ctx.lineWidth = opts.borderW || 8; roundRect(ctx, 6, 6, W - 12, H - 12, r - 4); ctx.stroke(); }
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const arr = Array.isArray(lines) ? lines : [lines];
  const lh = H / (arr.length + 0.2);
  arr.forEach((ln, i) => {
    const size = (opts.size || 0.62) * lh * (i === 0 ? 1 : 0.62);
    ctx.font = `${opts.italic ? 'italic ' : ''}900 ${size}px "Arial Black", "Segoe UI", system-ui, sans-serif`;
    const y = lh * (i + 0.6);
    if (opts.shadow !== false) { ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillText(ln, W / 2 + 3, y + 4); }
    ctx.fillStyle = opts.fg || '#ffffff';
    ctx.fillText(ln, W / 2, y);
  });
  const t = canvasTex(c, true, false);
  return t;
}

export function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function makeLogoSign() {
  const W = 1024, H = 320;
  const c = canvas(W, H);
  const ctx = c.getContext('2d');
  // base panel
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#22c3f5'); g.addColorStop(0.6, '#0c84c9'); g.addColorStop(1, '#075a92');
  ctx.fillStyle = g; roundRect(ctx, 10, 10, W - 20, H - 20, 60); ctx.fill();
  ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 12; roundRect(ctx, 22, 22, W - 44, H - 44, 50); ctx.stroke();
  // sun
  const sg = ctx.createRadialGradient(W * 0.82, 92, 10, W * 0.82, 92, 80);
  sg.addColorStop(0, '#fff7b8'); sg.addColorStop(0.5, '#ffd34a'); sg.addColorStop(1, 'rgba(255,160,40,0)');
  ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(W * 0.82, 92, 80, 0, Math.PI * 2); ctx.fill();
  // waves
  for (let k = 0; k < 2; k++) {
    ctx.fillStyle = k ? 'rgba(255,255,255,0.95)' : 'rgba(150,235,255,0.7)';
    ctx.beginPath();
    const base = H - 70 + k * 16;
    ctx.moveTo(30, H - 30);
    for (let x = 30; x <= W - 30; x += 8) ctx.lineTo(x, base + Math.sin(x * 0.025 + k * 2) * 12);
    ctx.lineTo(W - 30, H - 30);
    ctx.closePath(); ctx.fill();
  }
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = 'italic 900 128px "Arial Black", "Segoe UI", system-ui, sans-serif';
  ctx.fillStyle = '#064a78'; ctx.fillText('SPLASH HAVEN', W / 2 + 6, H * 0.42 + 8);
  ctx.fillStyle = '#ffffff'; ctx.fillText('SPLASH HAVEN', W / 2, H * 0.42);
  ctx.font = '900 34px "Arial Black", "Segoe UI", system-ui, sans-serif';
  ctx.fillStyle = '#0a5d93'; ctx.fillText('W A T E R P A R K', W / 2, H - 52);
  TEX.logo = canvasTex(c, true, false);
}

function makeParkingLines() {
  const W = 512, H = 512;
  const c = canvas(W, H);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = 'rgba(240,240,235,0.9)';
  // stall lines every 2.6m over a 20x20m tile -> 512px/20m
  const ppm = W / 20;
  for (let i = 0; i <= 7; i++) { const x = i * 2.6 * ppm + 10; ctx.fillRect(x, 0, 4, 5 * ppm); ctx.fillRect(x, H - 5 * ppm, 4, 5 * ppm); }
  const t = canvasTex(c, true, true);
  TEX.parkingLines = t;
}

function makeRoadLines() {
  const c = canvas(64, 256);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 64, 256);
  ctx.fillStyle = 'rgba(255,214,60,0.95)';
  ctx.fillRect(28, 0, 8, 150);
  TEX.roadLine = canvasTex(c, true, true);
}

// Icon sprites used above guests' heads
function makeIcons() {
  const draw = (fn) => { const c = canvas(128, 128); const ctx = c.getContext('2d'); fn(ctx); return canvasTex(c, true, false); };
  const bubble = (ctx, col) => {
    ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.beginPath(); ctx.arc(66, 62, 54, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = col; ctx.beginPath(); ctx.arc(64, 58, 52, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 7; ctx.stroke();
  };
  const face = (ctx, mouth) => {
    ctx.fillStyle = '#3a2a00';
    ctx.beginPath(); ctx.arc(46, 48, 7, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(82, 48, 7, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#3a2a00'; ctx.lineWidth = 7; ctx.lineCap = 'round';
    ctx.beginPath();
    if (mouth === 'happy') ctx.arc(64, 64, 22, 0.15 * Math.PI, 0.85 * Math.PI);
    else ctx.arc(64, 96, 22, 1.2 * Math.PI, 1.8 * Math.PI);
    ctx.stroke();
  };
  TEX.iconHappy = draw((ctx) => { bubble(ctx, '#ffd23a'); face(ctx, 'happy'); });
  TEX.iconAngry = draw((ctx) => { bubble(ctx, '#ff5a3a'); face(ctx, 'sad'); });
  TEX.iconHelp = draw((ctx) => { bubble(ctx, '#ff2a2a'); ctx.fillStyle = '#fff'; ctx.font = '900 80px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('!', 64, 62); });
  TEX.iconWrench = draw((ctx) => { bubble(ctx, '#ff9a1a'); ctx.fillStyle = '#fff'; ctx.font = '900 64px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('✖', 64, 60); });
  TEX.iconVip = draw((ctx) => { bubble(ctx, '#b06cff'); ctx.fillStyle = '#ffe36a'; ctx.font = '900 56px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('★', 64, 60); });
  TEX.iconThief = draw((ctx) => { bubble(ctx, '#ff7a1a'); ctx.fillStyle = '#fff'; ctx.font = '900 70px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('$', 64, 62); ctx.strokeStyle = '#fff'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(30, 92); ctx.lineTo(98, 26); ctx.stroke(); });
  TEX.iconDirty = draw((ctx) => { bubble(ctx, '#7a9a3a'); ctx.fillStyle = '#fff'; ctx.font = '900 54px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('~', 64, 58); });
  TEX.spark = draw((ctx) => {
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,0.8)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  });
}

export async function generateTextures(renderer, progress) {
  maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const steps = [
    ['Tiling the pools', makePoolTiles],
    ['Laying stone decks', makeDeck],
    ['Growing grass', makeGrass],
    ['Pouring concrete', makeConcrete],
    ['Sawing planks', makeWood],
    ['Paving roads', makeAsphalt],
    ['Raking sand', makeSand],
    ['Planting palms', () => { makeBark(); makePalmLeaf(); makeGrassBlades(); makeFoliage(); }],
    ['Making waves', makeWaterNormals],
    ['Painting signs', () => { makeMacroNoise(); makeRock(); makeThatch(); makeFencePickets(); makeLogoSign(); makeParkingLines(); makeRoadLines(); makeIcons(); }],
  ];
  for (let i = 0; i < steps.length; i++) {
    progress && progress(i / steps.length, steps[i][0] + '…');
    await new Promise((r) => setTimeout(r, 0));
    steps[i][1]();
  }
}
