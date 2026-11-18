// Pool construction: tiled sloped interiors, coping, decks, ladders, lights, water.
import * as THREE from 'three';
import { PrefabBuilder, instantiate, scaleBoxUV } from '../core/prefab.js';
import { M, plastic, painted } from '../core/materials.js';
import { WATER_Y } from '../config.js';
import { makeWaterMesh } from './water.js';

// Geometry accumulator for custom quads
class QuadGeo {
  constructor() { this.pos = []; this.nor = []; this.uv = []; }
  quad(a, b, c, d, n, uva, uvb, uvc, uvd) {
    // a,b,c,d counter-clockwise when viewed from the normal side
    this.pos.push(...a, ...b, ...c, ...a, ...c, ...d);
    for (let i = 0; i < 6; i++) this.nor.push(...n);
    this.uv.push(...uva, ...uvb, ...uvc, ...uva, ...uvc, ...uvd);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    return g;
  }
}

// Floor profile along z for rect pools: shallow plateau -> slope -> deep plateau
export function makeFloorFn(L, dS, dD, beach = false) {
  if (beach) {
    // z = +L/2 beach (y ~ +0.02), deep at -L/2
    return (lz) => {
      const u = (lz + L / 2) / L; // 0 deep end .. 1 beach
      if (u < 0.18) return -dD;
      const t = (u - 0.18) / 0.82;
      return -dD + (dD + 0.03) * Math.pow(t, 0.85);
    };
  }
  if (Math.abs(dS - dD) < 0.01) return () => -dS;
  return (lz) => {
    const u = (lz + L / 2) / L;
    if (u < 0.42) return -dS;
    if (u > 0.72) return -dD;
    const t = (u - 0.42) / 0.3;
    return -dS + (dS - dD) * (t * t * (3 - 2 * t));
  };
}

function interiorRect(W, L, floorFn, beach, tileMat, floorMat) {
  const q = new QuadGeo();
  const qf = new QuadGeo();
  const zs = [];
  const n = Math.max(4, Math.ceil(L / 0.6));
  for (let i = 0; i <= n; i++) zs.push(-L / 2 + (L * i) / n);
  const hw = W / 2;
  // floor (normal up)
  for (let i = 0; i < n; i++) {
    const z0 = zs[i], z1 = zs[i + 1], y0 = floorFn(z0), y1 = floorFn(z1);
    const ny = new THREE.Vector3(0, z1 - z0, -(y1 - y0)).normalize();
    qf.quad([-hw, y0, z0], [-hw, y1, z1], [hw, y1, z1], [hw, y0, z0], [ny.x, ny.y, ny.z], [-hw, z0], [-hw, z1], [hw, z1], [hw, z0]);
  }
  // side walls x = -hw (normal +x) and x = +hw (normal -x)
  for (let i = 0; i < n; i++) {
    const z0 = zs[i], z1 = zs[i + 1], y0 = floorFn(z0), y1 = floorFn(z1);
    if (y0 >= -0.01 && y1 >= -0.01) continue;
    q.quad([-hw, 0, z1], [-hw, y1, z1], [-hw, y0, z0], [-hw, 0, z0], [1, 0, 0], [z1, 0], [z1, y1], [z0, y0], [z0, 0]);
    q.quad([hw, 0, z0], [hw, y0, z0], [hw, y1, z1], [hw, 0, z1], [-1, 0, 0], [z0, 0], [z0, y0], [z1, y1], [z1, 0]);
  }
  // end walls: z = -L/2 (normal +z), z = +L/2 (normal -z) unless beach
  const yA = floorFn(-L / 2), yB = floorFn(L / 2);
  q.quad([-hw, 0, -L / 2], [-hw, yA, -L / 2], [hw, yA, -L / 2], [hw, 0, -L / 2], [0, 0, 1], [-hw, 0], [-hw, yA], [hw, yA], [hw, 0]);
  if (!beach) q.quad([hw, 0, L / 2], [hw, yB, L / 2], [-hw, yB, L / 2], [-hw, 0, L / 2], [0, 0, -1], [hw, 0], [hw, yB], [-hw, yB], [-hw, 0]);
  return { walls: q.build(), floor: qf.build() };
}

function ladder(b, x, z, ry, depth) {
  // chrome ladder hooked over the coping; local: wall at z=0, pool toward +z
  const mat = M.chrome;
  const pts = (dx) => [
    new THREE.Vector3(dx, -depth, 0.16), new THREE.Vector3(dx, -0.2, 0.16), new THREE.Vector3(dx, 0.55, 0.12),
    new THREE.Vector3(dx, 0.85, -0.1), new THREE.Vector3(dx, 0.7, -0.35), new THREE.Vector3(dx, 0.02, -0.42),
  ];
  const m = new THREE.Matrix4().makeRotationY(ry).setPosition(x, 0, z);
  for (const dx of [-0.28, 0.28]) {
    const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts(dx)), 24, 0.025, 8);
    b.addMatrix(g, mat, m);
  }
  for (let i = 0; i < 3; i++) {
    const g = new THREE.BoxGeometry(0.56, 0.03, 0.1);
    g.translate(0, -0.25 - i * 0.3, 0.18);
    b.addMatrix(g, M.steel, m);
  }
}

// ----------------------------------------------------------------------------
// Rect pool. Returns { group, water, meta }
export function buildRectPool(def) {
  const W = def.W, L = def.L, dS = def.dS, dD = def.dD, deckW = def.deck ?? 1.5;
  const beach = !!def.beach;
  const floorFn = makeFloorFn(L, dS, dD, beach);
  const b = new PrefabBuilder();
  const tile = def.tileMat || M.poolTile;
  const { walls, floor } = interiorRect(W, L, floorFn, beach, tile);
  b.add(walls, tile);
  b.add(floor, def.floorMat || tile);

  // lane stripes / decorative floor bands
  if (def.lanes) {
    const n = def.lanes;
    for (let i = 1; i < n; i++) {
      const x = -W / 2 + (W * i) / n;
      const g = new THREE.PlaneGeometry(0.22, L - 2.4).rotateX(-Math.PI / 2);
      b.add(g, M.poolTileDark, x, floorFn(0) + 0.01, 0);
      b.add(new THREE.PlaneGeometry(0.22, 1.0).rotateX(0), M.poolTileDark, x, -0.55, -L / 2 + 0.01);
    }
  }
  if (def.band) {
    // dark tile band just below waterline
    for (const [x, z, w, d, ry] of [[0, -L / 2 + 0.005, W, 0.01, 0], [0, L / 2 - 0.005, W, 0.01, 0], [-W / 2 + 0.005, 0, 0.01, L, 0], [W / 2 - 0.005, 0, 0.01, L, 0]]) {
      if (beach && z > 0 && w > 1) continue;
      b.box(w, 0.16, d, def.band, x, -0.2, z, ry);
    }
  }

  // coping (rounded stone edge)
  const cw = 0.34, ch = 0.075;
  const cop = (x, z, w, d) => { const g = new THREE.BoxGeometry(w, ch, d); scaleBoxUV(g, w, ch, d, 1); b.add(g, M.coping, x, ch / 2 - 0.005, z); };
  cop(0, -L / 2 - cw / 2 + 0.05, W + cw * 2 - 0.1, cw);
  if (!beach) cop(0, L / 2 + cw / 2 - 0.05, W + cw * 2 - 0.1, cw);
  cop(-W / 2 - cw / 2 + 0.05, 0, cw, L - 0.1 + (beach ? 0 : 0));
  cop(W / 2 + cw / 2 - 0.05, 0, cw, L - 0.1);

  // deck ring
  const OW = W + deckW * 2, OL = L + deckW * 2;
  const dk = (x, z, w, d) => { if (w <= 0.01 || d <= 0.01) return; const g = new THREE.BoxGeometry(w, 0.04, d); scaleBoxUV(g, w, 0.04, d, 0.5); b.add(g, def.deckMat || M.deck, x, 0.015, z); };
  dk(0, -L / 2 - deckW / 2, OW, deckW);
  dk(0, L / 2 + deckW / 2, OW, deckW);
  dk(-W / 2 - deckW / 2, 0, deckW, L);
  dk(W / 2 + deckW / 2, 0, deckW, L);

  // underwater lights
  const lightsPer = Math.max(1, Math.floor(L / 5));
  for (let i = 0; i < lightsPer; i++) {
    const z = -L / 2 + (L * (i + 0.5)) / lightsPer;
    const y = Math.max(floorFn(z) + 0.25, -0.55);
    if (y > WATER_Y - 0.2) continue;
    b.add(new THREE.CircleGeometry(0.13, 16), M.poolLight, -W / 2 + 0.012, y, z, 0, Math.PI / 2, 0);
    b.add(new THREE.CircleGeometry(0.13, 16), M.poolLight, W / 2 - 0.012, y, z, 0, -Math.PI / 2, 0);
  }

  // ladders
  if (def.ladders !== false && !beach) {
    const dz = L * 0.3;
    ladder(b, -W / 2, -dz, Math.PI / 2, Math.min(1.0, -floorFn(-dz) - 0.1));
    ladder(b, W / 2, dz, -Math.PI / 2, Math.min(1.0, -floorFn(dz) - 0.1));
  }
  if (def.extras) def.extras(b, floorFn);

  const prefab = b.build();
  const group = instantiate(prefab);
  group.traverse((o) => { if (o.isMesh) { o.castShadow = o.material !== M.deck && o.material !== M.coping ? o.castShadow : false; } });

  // water
  let wgeo;
  if (def.wave) {
    wgeo = new THREE.PlaneGeometry(W, L, Math.ceil(W * 1.5), Math.ceil(L * 1.5));
  } else {
    wgeo = new THREE.PlaneGeometry(W + 0.02, L + 0.02, 1, 1);
  }
  wgeo.rotateX(-Math.PI / 2);
  const water = makeWaterMesh(wgeo, { wave: !!def.wave });
  water.position.y = WATER_Y;
  group.add(water);

  const meta = {
    shape: 'rect', hw: W / 2, hl: L / 2, floorFn: (lx, lz) => floorFn(lz), beach, deckW,
    holeLocal: [-W / 2, -L / 2, W / 2, L / 2],
    depthMax: Math.max(dS, dD),
  };
  return { group, water, meta, prefab };
}

// Round hot tub
export function buildJacuzzi(def) {
  const R = def.R || 1.6, depth = def.depth || 0.9, deckHalf = def.deckHalf || 2.5;
  const b = new PrefabBuilder();
  const tile = M.poolTileWarm;
  const flip = (g) => {
    const nn = g.attributes.normal;
    for (let i = 0; i < nn.count; i++) nn.setXYZ(i, -nn.getX(i), 0, -nn.getZ(i));
    const idx = g.index.array;
    for (let i = 0; i < idx.length; i += 3) { const t = idx[i]; idx[i] = idx[i + 2]; idx[i + 2] = t; }
    return g;
  };
  const wall = flip(new THREE.CylinderGeometry(R, R, depth, 36, 1, true));
  b.add(wall, tile, 0, -depth / 2, 0);
  // seat ring
  const seat = new THREE.RingGeometry(R - 0.45, R, 36, 1).rotateX(-Math.PI / 2);
  b.add(seat, tile, 0, -depth * 0.5, 0);
  const seatWall = flip(new THREE.CylinderGeometry(R - 0.45, R - 0.45, depth * 0.5, 36, 1, true));
  b.add(seatWall, tile, 0, -depth * 0.75, 0);
  b.add(new THREE.CircleGeometry(R - 0.45, 36).rotateX(-Math.PI / 2), tile, 0, -depth, 0);
  // coping torus
  b.add(new THREE.TorusGeometry(R + 0.12, 0.13, 10, 48), M.coping, 0, 0.0, 0, Math.PI / 2, 0, 0);
  // deck square (with round hole approximated by 4 boxes + corner fill)
  const S = deckHalf * 2;
  const ring = new THREE.Shape();
  ring.moveTo(-deckHalf, -deckHalf); ring.lineTo(deckHalf, -deckHalf); ring.lineTo(deckHalf, deckHalf); ring.lineTo(-deckHalf, deckHalf); ring.closePath();
  const hole = new THREE.Path(); hole.absarc(0, 0, R + 0.05, 0, Math.PI * 2, true);
  ring.holes.push(hole);
  const dg = new THREE.ShapeGeometry(ring, 32).rotateX(-Math.PI / 2);
  const uv = dg.attributes.uv; const pp = dg.attributes.position;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, pp.getX(i) * 0.5, pp.getZ(i) * 0.5);
  b.add(dg, M.woodDark, 0, 0.035, 0);
  // jets
  for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; b.add(new THREE.CircleGeometry(0.05, 10), M.chrome, Math.cos(a) * (R - 0.01), -depth * 0.3, Math.sin(a) * (R - 0.01), 0, -a - Math.PI / 2, 0); }
  for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2 + 0.4; b.add(new THREE.CircleGeometry(0.1, 12), M.poolLight, Math.cos(a) * (R - 0.46), -depth * 0.62, Math.sin(a) * (R - 0.46), 0, -a - Math.PI / 2, 0); }
  // little steps rail
  b.add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(R - 0.2, -0.4, 0.4), new THREE.Vector3(R - 0.1, 0.5, 0.4), new THREE.Vector3(R + 0.3, 0.75, 0.4), new THREE.Vector3(R + 0.55, 0.02, 0.4)]), 16, 0.025, 6), M.chrome);
  void S;
  const prefab = b.build();
  const group = instantiate(prefab);
  const wgeo = new THREE.CircleGeometry(R + 0.02, 40).rotateX(-Math.PI / 2);
  const water = makeWaterMesh(wgeo);
  water.position.y = WATER_Y;
  group.add(water);
  const meta = { shape: 'circle', r: R, floorFn: (lx, lz) => (Math.hypot(lx, lz) > R - 0.45 ? -depth * 0.5 : -depth), deckW: deckHalf - R, depthMax: depth, holeLocal: null };
  return { group, water, meta, prefab };
}

// Decorative kids pool features
export function kidsExtras(b) {
  // mushroom fountain
  b.cyl(0.12, 0.16, 1.6, plastic(0xffffff, 0.4), 0, 0.35, 0, 12);
  const cap = new THREE.SphereGeometry(0.95, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2.2);
  b.add(cap, plastic(0xff4a4a, 0.35), 0, 1.0, 0);
  for (let i = 0; i < 7; i++) { const a = (i / 7) * Math.PI * 2; b.sphere(0.12, plastic(0xffffff, 0.4), Math.cos(a) * 0.55, 1.62, Math.sin(a) * 0.55, 1, 0.5, 1); }
  // frog sprayers
  for (const [x, z] of [[-2.0, -1.8], [2.0, 1.8]]) {
    b.sphere(0.32, plastic(0x3adf6a, 0.35), x, -0.3, z, 1, 0.8, 1.1);
    b.sphere(0.09, plastic(0xffffff, 0.3), x - 0.12, -0.05, z + 0.25);
    b.sphere(0.09, plastic(0xffffff, 0.3), x + 0.12, -0.05, z + 0.25);
  }
  // slide-like ramp
}

export function waveMachine(b, W, L) {
  // housing at the deep end (-z), sits on the deck
  const z = -L / 2 - 1.3;
  b.boxUV(W + 1.2, 3.2, 1.6, M.stucco, 0, 1.6, z, 0, 0.5);
  b.box(W + 1.6, 0.25, 2.0, painted(0x1a7fb8, 0.5), 0, 3.3, z);
  for (let i = 0; i < 5; i++) {
    const x = -W / 2 + 1.2 + i * ((W - 2.4) / 4);
    b.box(1.6, 0.9, 0.06, M.steelDark, x, -0.55, -L / 2 + 0.03);
    for (let k = 0; k < 5; k++) b.box(1.5, 0.05, 0.08, M.steel, x, -0.9 + k * 0.18, -L / 2 + 0.05);
  }
}
