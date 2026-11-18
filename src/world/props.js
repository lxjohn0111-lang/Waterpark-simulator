// Procedural prefab library for props, shops and buildings.
import * as THREE from 'three';
import { PrefabBuilder, scaleBoxUV } from '../core/prefab.js';
import { M, plastic, painted, fabric, signMat, applyWind } from '../core/materials.js';
import { TEX, makeSignTexture, makeStripeTexture } from '../core/textures.js';
import { mulberry32, fbm2 } from '../core/utils.js';

const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
export const P = {}; // prefab cache
export const PM = {}; // special materials

function instMat(base) {
  const m = base.clone();
  m.color = new THREE.Color(0xffffff);
  m.userData.instColor = true;
  return m;
}

export function initPropMaterials() {
  PM.cushion = instMat(new THREE.MeshStandardMaterial({ roughness: 0.85 }));
  PM.fabric = instMat(new THREE.MeshStandardMaterial({ roughness: 0.9, side: THREE.DoubleSide }));
  PM.carPaint = instMat(new THREE.MeshPhysicalMaterial({ roughness: 0.35, metalness: 0.4, clearcoat: 1, clearcoatRoughness: 0.1 }));
  PM.flowerA = painted(0xff4f8a, 0.7);
  PM.flowerB = painted(0xffd23a, 0.7);
  PM.flowerC = painted(0xffffff, 0.7);
  PM.flowerD = painted(0xa45cff, 0.7);
  PM.flamingo = painted(0xff8fb8, 0.55);
  PM.grassMat = applyWind(new THREE.MeshStandardMaterial({ map: TEX.grassBlades, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.95, color: 0xe8f0d8 }), 'grass', 1.0);
}

// ---------------------------------------------------------------------------
// Small props (instanced)
function sunbed() {
  const b = new PrefabBuilder();
  const white = plastic(0xf4f4f2, 0.4);
  // frame
  b.box(0.08, 0.05, 1.9, white, -0.33, 0.33, 0);
  b.box(0.08, 0.05, 1.9, white, 0.33, 0.33, 0);
  for (const [x, z] of [[-0.33, -0.85], [0.33, -0.85], [-0.33, 0.55], [0.33, 0.55]]) b.box(0.06, 0.33, 0.06, white, x, 0.165, z);
  // slats
  for (let i = 0; i < 9; i++) b.box(0.62, 0.025, 0.11, white, 0, 0.37, -0.9 + i * 0.14);
  // backrest (tilted)
  const back = new THREE.BoxGeometry(0.66, 0.04, 0.72);
  b.add(back, white, 0, 0.62, 0.62, -0.72, 0, 0);
  // cushion
  b.add(new THREE.BoxGeometry(0.6, 0.06, 1.22), PM.cushion, 0, 0.41, -0.34);
  b.add(new THREE.BoxGeometry(0.6, 0.06, 0.66), PM.cushion, 0, 0.66, 0.6, -0.72, 0, 0);
  b.box(0.6, 0.08, 0.22, PM.cushion, 0, 0.88, 0.86, 0, -0.72);
  return b.build();
}

function umbrella() {
  const b = new PrefabBuilder();
  b.cyl(0.035, 0.035, 2.55, M.woodDark, 0, 1.27, 0, 8);
  b.cyl(0.28, 0.32, 0.12, painted(0x3a3d40, 0.6), 0, 0.06, 0, 16);
  const cone = new THREE.ConeGeometry(1.45, 0.55, 10, 1, true);
  b.add(cone, PM.fabric, 0, 2.38, 0);
  // inner ribs
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    b.beam(V3(0, 2.62, 0), V3(Math.cos(a) * 1.42, 2.11, Math.sin(a) * 1.42), 0.012, M.woodDark, 4);
  }
  b.sphere(0.05, M.woodDark, 0, 2.68, 0);
  // fringe
  const fr = new THREE.CylinderGeometry(1.46, 1.46, 0.12, 20, 1, true);
  b.add(fr, PM.fabric, 0, 2.06, 0);
  return b.build();
}

function bench() {
  const b = new PrefabBuilder();
  const leg = M.steelDark;
  for (const x of [-0.8, 0.8]) {
    b.box(0.06, 0.42, 0.42, leg, x, 0.21, 0);
    b.box(0.06, 0.45, 0.06, leg, x, 0.62, -0.22, 0, 0.25);
  }
  for (let i = 0; i < 4; i++) b.boxUV(1.9, 0.04, 0.1, M.wood, 0, 0.44, -0.16 + i * 0.11, 0, 1);
  for (let i = 0; i < 3; i++) b.add(new THREE.BoxGeometry(1.9, 0.1, 0.035), M.wood, 0, 0.6 + i * 0.13, -0.25 - i * 0.03, 0.25, 0, 0);
  return b.build();
}

function bin() {
  const b = new PrefabBuilder();
  const body = plastic(0x2e8b57, 0.5);
  b.cyl(0.27, 0.24, 0.85, body, 0, 0.425, 0, 16);
  b.cyl(0.3, 0.3, 0.08, plastic(0x1f5f3c, 0.5), 0, 0.88, 0, 16);
  b.cyl(0.16, 0.16, 0.02, M.blackPlastic, 0, 0.925, 0, 12);
  b.box(0.3, 0.16, 0.01, plastic(0xffffff, 0.5), 0, 0.55, 0.255);
  return b.build();
}

function lamp() {
  const b = new PrefabBuilder();
  const pole = painted(0x2b3035, 0.45);
  b.cyl(0.07, 0.1, 4.2, pole, 0, 2.1, 0, 10);
  b.cyl(0.2, 0.24, 0.3, pole, 0, 0.15, 0, 12);
  b.beam(V3(0, 4.1, 0), V3(0, 4.2, 0.7), 0.04, pole);
  b.cyl(0.26, 0.16, 0.22, pole, 0, 4.18, 0.75, 14);
  b.cyl(0.2, 0.2, 0.04, M.lampGlow, 0, 4.06, 0.75, 14);
  return b.build();
}

function palm() {
  const b = new PrefabBuilder();
  const H = 6.2, lean = 0.9;
  const segs = 14, radial = 9;
  const pos = [], uv = [], idx = [];
  const pt = (t) => {
    const x = 2 * (1 - t) * t * lean * 0.25 + t * t * lean;
    return [x, t * H];
  };
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const [cx, cy] = pt(t);
    let r = 0.2 - t * 0.07 + (t < 0.08 ? (0.08 - t) * 2.2 : 0);
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * Math.PI * 2;
      pos.push(cx + Math.cos(a) * r, cy, Math.sin(a) * r);
      uv.push(j / radial, (t * H) / 2.4);
    }
  }
  for (let i = 0; i < segs; i++) for (let j = 0; j < radial; j++) {
    const a = i * (radial + 1) + j, c = a + radial + 1;
    idx.push(a, c, a + 1, c, c + 1, a + 1);
  }
  const trunk = new THREE.BufferGeometry();
  trunk.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  trunk.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  trunk.setIndex(idx);
  trunk.computeVertexNormals();
  b.add(trunk, M.bark);
  const [tx, ty] = pt(1);
  // fronds
  const rng = mulberry32(7);
  const nF = 10;
  for (let f = 0; f < nF; f++) {
    const L = 2.6 + rng() * 0.9, Wd = 0.95;
    const g = new THREE.PlaneGeometry(L, Wd, 10, 2);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i) + L / 2; // 0..L
      const w = p.getY(i);
      const s = x / L;
      const y = s * 0.55 - s * s * 1.7 - Math.abs(w) * 0.25;
      p.setXYZ(i, x, y, w);
    }
    g.computeVertexNormals();
    // uv: plane uv.x already 0..1 along length
    const yaw = (f / nF) * Math.PI * 2 + rng() * 0.3;
    const pitch = -0.1 + rng() * 0.35;
    b.add(g, M.palmLeaf, tx, ty, 0, 0, yaw, pitch);
  }
  // a couple of upright young fronds
  for (let f = 0; f < 3; f++) {
    const g = new THREE.PlaneGeometry(1.6, 0.6, 6, 1);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i) + 0.8; const s = x / 1.6; p.setXYZ(i, x * 0.5, x * 0.85 - s * s * 0.4, p.getY(i)); }
    g.computeVertexNormals();
    b.add(g, M.palmLeaf, tx, ty, 0, 0, f * 2.1, 0);
  }
  const nut = painted(0x5a3d1c, 0.7);
  for (let i = 0; i < 4; i++) { const a = i * 1.7; b.sphere(0.11, nut, tx + Math.cos(a) * 0.18, ty - 0.18, Math.sin(a) * 0.18, 1, 1.15, 1, 8, 6); }
  return b.build();
}

function planter() {
  const b = new PrefabBuilder();
  b.cyl(0.42, 0.34, 0.5, M.concrete, 0, 0.25, 0, 16);
  b.cyl(0.38, 0.38, 0.04, painted(0x3a2a1a, 0.95), 0, 0.48, 0, 16);
  const bush = new THREE.IcosahedronGeometry(0.42, 2);
  displace(bush, 0.08, 3);
  b.add(bush, M.foliage, 0, 0.78, 0, 0, 0, 0, 1, 0.75, 1);
  const rng = mulberry32(3);
  const fl = [PM.flowerA, PM.flowerB, PM.flowerC, PM.flowerD];
  for (let i = 0; i < 18; i++) {
    const a = rng() * Math.PI * 2, r = 0.12 + rng() * 0.28, y = 0.75 + rng() * 0.3;
    b.sphere(0.045, fl[i % 4], Math.cos(a) * r, y + (0.3 - r) * 0.5, Math.sin(a) * r, 1, 1, 1, 6, 4);
  }
  return b.build();
}

function hedge() {
  const b = new PrefabBuilder();
  const g = new THREE.BoxGeometry(1.0, 0.9, 1.0, 4, 4, 4);
  displace(g, 0.05, 4);
  scaleBoxUV(g, 1, 0.9, 1, 1);
  b.add(g, M.foliage, 0, 0.47, 0);
  return b.build();
}

function rock() {
  const b = new PrefabBuilder();
  const g = new THREE.DodecahedronGeometry(0.6, 2);
  displace(g, 0.18, 1.6);
  b.add(g, M.rock, 0, 0.35, 0, 0, 0, 0, 1.2, 0.8, 1);
  const g2 = new THREE.DodecahedronGeometry(0.32, 1);
  displace(g2, 0.1, 2);
  b.add(g2, M.rock, 0.5, 0.18, 0.3);
  return b.build();
}

function tiki() {
  const b = new PrefabBuilder();
  const bamboo = painted(0xb38a4a, 0.7);
  b.cyl(0.045, 0.05, 1.9, bamboo, 0, 0.95, 0, 8);
  for (let i = 1; i < 5; i++) b.cyl(0.055, 0.055, 0.03, painted(0x7d5a2a, 0.8), 0, i * 0.4, 0, 8);
  b.cyl(0.11, 0.06, 0.18, M.steelDark, 0, 1.95, 0, 10);
  b.add(new THREE.ConeGeometry(0.08, 0.32, 8), M.fire, 0, 2.18, 0);
  b.add(new THREE.ConeGeometry(0.05, 0.22, 8), M.lampGlow, 0, 2.13, 0);
  return b.build({ castShadow: true });
}

function flamingo() {
  const b = new PrefabBuilder();
  const pink = PM.flamingo;
  b.sphere(0.22, pink, 0, 0.78, 0, 1, 0.75, 1.5);
  const curve = new THREE.CatmullRomCurve3([V3(0, 0.85, 0.25), V3(0, 1.05, 0.38), V3(0, 1.25, 0.25), V3(0, 1.35, 0.1), V3(0, 1.42, 0.18)]);
  b.add(new THREE.TubeGeometry(curve, 12, 0.045, 6), pink);
  b.sphere(0.08, pink, 0, 1.44, 0.2);
  b.add(new THREE.ConeGeometry(0.035, 0.14, 6), painted(0x222222, 0.5), 0, 1.4, 0.3, Math.PI / 2 + 0.6, 0, 0);
  b.cyl(0.012, 0.012, 0.6, pink, 0.05, 0.3, 0, 4);
  b.cyl(0.012, 0.012, 0.6, pink, -0.05, 0.3, 0, 4);
  b.add(new THREE.ConeGeometry(0.12, 0.3, 6), pink, 0, 0.82, -0.32, -Math.PI / 2 + 0.3, 0, 0);
  return b.build();
}

function flowerBed() {
  const b = new PrefabBuilder();
  b.boxUV(1.9, 0.25, 1.9, M.woodDark, 0, 0.125, 0, 0, 1);
  b.box(1.75, 0.04, 1.75, painted(0x3a2a1a, 0.95), 0, 0.25, 0);
  const rng = mulberry32(17);
  const fl = [PM.flowerA, PM.flowerB, PM.flowerC, PM.flowerD];
  for (let i = 0; i < 14; i++) {
    const x = (rng() - 0.5) * 1.5, z = (rng() - 0.5) * 1.5;
    const g = new THREE.IcosahedronGeometry(0.18, 1);
    b.add(g, M.foliage, x, 0.4, z, 0, 0, 0, 1, 0.8, 1);
    for (let k = 0; k < 4; k++) b.sphere(0.05, fl[(i + k) % 4], x + (rng() - 0.5) * 0.25, 0.52 + rng() * 0.08, z + (rng() - 0.5) * 0.25, 1, 1, 1, 6, 4);
  }
  return b.build();
}

function pathTile(kind) {
  const b = new PrefabBuilder();
  const g = new THREE.BoxGeometry(1, 0.05, 1);
  scaleBoxUV(g, 1, 0.05, 1, 0.5);
  const mat = kind === 'wood' ? M.wood : kind === 'red' ? PM.terracotta || (PM.terracotta = new THREE.MeshStandardMaterial({ map: TEX.deck, normalMap: TEX.deckN, color: 0xd9825a, roughness: 0.8 })) : M.deck;
  b.add(g, mat, 0, 0.025, 0);
  return b.build({ castShadow: false });
}

function picnic() {
  const b = new PrefabBuilder();
  b.boxUV(1.8, 0.05, 0.8, M.wood, 0, 0.75, 0, 0, 1);
  for (const z of [-0.65, 0.65]) b.boxUV(1.8, 0.05, 0.3, M.wood, 0, 0.45, z, 0, 1);
  for (const x of [-0.7, 0.7]) {
    b.add(new THREE.BoxGeometry(0.06, 0.9, 0.06), M.woodDark, x, 0.4, 0.3, 0.55, 0, 0);
    b.add(new THREE.BoxGeometry(0.06, 0.9, 0.06), M.woodDark, x, 0.4, -0.3, -0.55, 0, 0);
    b.box(0.06, 0.06, 1.6, M.woodDark, x, 0.4, 0);
  }
  b.cyl(0.03, 0.03, 2.4, M.steel, 0, 1.2, 0, 6);
  b.add(new THREE.ConeGeometry(1.3, 0.45, 8, 1, true), PM.fabric, 0, 2.3, 0);
  return b.build();
}

function displace(g, amt, freq) {
  const p = g.attributes.position;
  const n = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    n.set(p.getX(i), p.getY(i), p.getZ(i));
    const d = fbm2(n.x * freq + 10, n.z * freq + n.y * freq * 0.7, 3) - 0.5;
    const len = n.length() || 1;
    n.multiplyScalar(1 + (d * amt * 2) / len);
    p.setXYZ(i, n.x, n.y, n.z);
  }
  g.computeVertexNormals();
}

// ---------------------------------------------------------------------------
// Buildings & shops (regular meshes)
function awning(b, w, depth, y, z, tex) {
  const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85, side: THREE.DoubleSide });
  const g = new THREE.PlaneGeometry(w, depth, 1, 1);
  b.add(g, mat, 0, y, z + depth / 2 * Math.cos(0.45), -Math.PI / 2 + 0.45, 0, 0);
  // scalloped edge
  for (let i = 0; i < Math.round(w / 0.4); i++) {
    const cx = -w / 2 + 0.2 + i * 0.4;
    const s = new THREE.CircleGeometry(0.2, 8, Math.PI, Math.PI);
    b.add(s, mat, cx, y - depth * Math.sin(0.45) + 0.0, z + depth * Math.cos(0.45) + 0.01, 0, 0, 0);
  }
}

function kioskBase(b, w, d, h, wallMat, roofMat) {
  b.boxUV(w, 0.15, d, M.concrete, 0, 0.075, 0, 0, 1);
  // back & side walls
  b.boxUV(w, h, 0.12, wallMat, 0, h / 2 + 0.15, -d / 2 + 0.06, 0, 1);
  b.boxUV(0.12, h, d, wallMat, -w / 2 + 0.06, h / 2 + 0.15, 0, 0, 1);
  b.boxUV(0.12, h, d, wallMat, w / 2 - 0.06, h / 2 + 0.15, 0, 0, 1);
  // front lower counter wall + counter top
  b.boxUV(w, 1.0, 0.12, wallMat, 0, 0.65, d / 2 - 0.06, 0, 1);
  b.box(w + 0.1, 0.06, 0.45, painted(0xf2f2f2, 0.3), 0, 1.18, d / 2 - 0.1);
  // front header
  b.boxUV(w, 0.5, 0.12, wallMat, 0, h + 0.15 - 0.25, d / 2 - 0.06, 0, 1);
  // corner posts
  for (const x of [-w / 2 + 0.06, w / 2 - 0.06]) b.box(0.14, h - 1.4, 0.14, wallMat, x, 1.15 + (h - 1.4) / 2, d / 2 - 0.06);
  // roof
  b.box(w + 0.5, 0.18, d + 0.6, roofMat, 0, h + 0.24, 0.1);
}

function drinksKiosk() {
  const b = new PrefabBuilder();
  const w = 2.8, d = 2.4, h = 2.6;
  kioskBase(b, w, d, h, M.wood, painted(0xf4f1ea, 0.6));
  awning(b, w + 0.2, 0.9, h - 0.15, d / 2, makeStripeTexture('#e8463b', '#ffffff', 10));
  // fridge with glowing glass
  b.box(0.8, 1.8, 0.6, painted(0xd8dde2, 0.4), -0.7, 1.05, -0.8);
  b.box(0.7, 1.5, 0.02, M.screen, -0.7, 1.15, -0.49);
  // bottles on shelf
  for (let i = 0; i < 6; i++) b.cyl(0.04, 0.04, 0.22, plastic([0x2fb5ff, 0xff5a3a, 0x3adf6a][i % 3], 0.2), 0.3 + i * 0.12, 1.32, d / 2 - 0.15, 8);
  // big sign on roof
  const sign = makeSignTexture(['COOL DRINKS'], { bg: '#ffffff', fg: '#0b8fd1', w: 512, h: 140, border: '#0b8fd1' });
  b.add(new THREE.PlaneGeometry(2.4, 0.66), signMat(sign, 0.6), 0, h + 0.75, d / 2 - 0.1);
  b.box(2.5, 0.72, 0.08, painted(0x0b8fd1, 0.5), 0, h + 0.75, d / 2 - 0.16);
  // giant cup
  b.cyl(0.32, 0.22, 0.7, plastic(0xff4a4a, 0.3), 0.95, h + 0.75, -0.2, 14);
  b.cyl(0.33, 0.33, 0.08, plastic(0xffffff, 0.3), 0.95, h + 1.12, -0.2, 14);
  b.cyl(0.03, 0.03, 0.5, plastic(0xffde3a, 0.3), 1.0, h + 1.35, -0.2, 6, 0, 0, 0.3);
  return b.build();
}

function iceCream() {
  const b = new PrefabBuilder();
  const body = plastic(0xfff1f6, 0.35);
  b.box(1.6, 0.9, 0.9, body, 0, 0.75, 0);
  b.box(1.65, 0.08, 0.95, plastic(0xff7ab8, 0.3), 0, 1.24, 0);
  b.box(1.5, 0.3, 0.8, M.glass, 0, 1.43, 0);
  for (const x of [-0.6, 0.6]) b.add(new THREE.TorusGeometry(0.22, 0.06, 8, 16), M.rubber, x, 0.24, 0.48);
  b.cyl(0.05, 0.05, 0.45, M.steel, 0.7, 0.4, -0.3, 6, 0, 0, Math.PI / 2);
  // tubs of ice cream
  const cols = [0xfff2c8, 0xff9ec4, 0x8a5a3a, 0x9af0b4];
  for (let i = 0; i < 4; i++) b.sphere(0.12, plastic(cols[i], 0.6), -0.5 + i * 0.33, 1.32, 0, 1, 0.5, 1, 10, 6);
  // umbrella
  b.cyl(0.03, 0.03, 1.8, M.steel, 0, 2.1, -0.1, 6);
  b.add(new THREE.ConeGeometry(1.25, 0.45, 12, 1, true), fabric(0xff7ab8), 0, 3.0, -0.1);
  b.add(new THREE.CylinderGeometry(1.26, 1.26, 0.1, 24, 1, true), fabric(0xffffff), 0, 2.74, -0.1);
  // big cone on top
  b.add(new THREE.ConeGeometry(0.16, 0.45, 12), painted(0xd9a35a, 0.8), 0, 3.48, -0.1, Math.PI, 0, 0);
  b.sphere(0.19, plastic(0xff9ec4, 0.5), 0, 3.75, -0.1);
  return b.build();
}

function burgerShack() {
  const b = new PrefabBuilder();
  const w = 3.8, d = 2.8, h = 2.7;
  kioskBase(b, w, d, h, painted(0xc94a2f, 0.75), painted(0x2c2c2c, 0.7));
  awning(b, w + 0.2, 1.0, h - 0.15, d / 2, makeStripeTexture('#ffcc2a', '#c94a2f', 12));
  b.box(1.2, 0.9, 0.7, M.steel, -1.0, 0.6, -0.9);
  b.box(1.0, 0.04, 0.6, M.steelDark, -1.0, 1.07, -0.9);
  b.box(0.6, 1.6, 0.6, M.steel, 1.2, 0.95, -0.9);
  // menu board
  const menu = makeSignTexture(['BURGERS', 'FRIES · HOT DOGS'], { bg: '#1d1d1d', fg: '#ffd23a', w: 512, h: 200 });
  b.add(new THREE.PlaneGeometry(1.4, 0.55), signMat(menu, 0.5), 0, 2.15, -d / 2 + 0.13);
  // giant burger
  const by = h + 1.0;
  b.cyl(0.62, 0.66, 0.22, painted(0xd99a45, 0.7), 0, by - 0.25, 0, 20);
  b.cyl(0.7, 0.7, 0.06, painted(0x3fae3a, 0.8), 0, by - 0.11, 0, 20);
  b.cyl(0.66, 0.66, 0.16, painted(0x6b3a1e, 0.8), 0, by, 0, 20);
  b.cyl(0.7, 0.68, 0.04, painted(0xffc21a, 0.6), 0, by + 0.1, 0, 4);
  b.sphere(0.66, painted(0xe0a352, 0.6), 0, by + 0.14, 0, 1, 0.55, 1, 20, 10);
  b.cyl(0.08, 0.08, 0.5, M.steelDark, 0, h + 0.4, 0, 6);
  const sign = makeSignTexture(['BURGER BAY'], { bg: '#ffcc2a', fg: '#9b2a12', w: 512, h: 120 });
  b.add(new THREE.PlaneGeometry(2.6, 0.6), signMat(sign, 0.6), 0, h + 0.62, d / 2 + 0.31);
  return b.build();
}

function pizzaStand() {
  const b = new PrefabBuilder();
  const w = 3.0, d = 2.6, h = 2.6;
  kioskBase(b, w, d, h, painted(0x2f8f4a, 0.75), painted(0xf3efe6, 0.6));
  awning(b, w + 0.2, 0.9, h - 0.15, d / 2, makeStripeTexture('#2f8f4a', '#ffffff', 10));
  // brick oven
  b.sphere(0.65, painted(0xb0553a, 0.95), 0, 1.0, -0.7, 1, 0.8, 0.8, 14, 8);
  b.box(0.45, 0.35, 0.1, M.blackPlastic, 0, 0.9, -0.2);
  b.add(new THREE.PlaneGeometry(0.3, 0.2), M.fire, 0, 0.88, -0.14);
  // giant slice
  const slice = new THREE.CylinderGeometry(0.9, 0.9, 0.12, 16, 1, false, 0, Math.PI / 3.2);
  b.add(slice, painted(0xf2b84b, 0.7), 0, h + 1.1, 0, Math.PI / 2, 0, 0);
  for (let i = 0; i < 4; i++) b.cyl(0.07, 0.07, 0.04, painted(0xc0281e, 0.6), Math.sin(0.3 + i * 0.12) * (0.3 + i * 0.12), h + 1.1 + Math.cos(0.3 + i * 0.12) * (0.3 + i * 0.12), 0.07, 10, Math.PI / 2, 0, 0);
  const sign = makeSignTexture(['PIZZA PIER'], { bg: '#ffffff', fg: '#2f8f4a', w: 512, h: 120, border: '#c0281e' });
  b.add(new THREE.PlaneGeometry(2.4, 0.56), signMat(sign, 0.6), 0, h + 0.62, d / 2 + 0.31);
  return b.build();
}

function souvenirShop() {
  const b = new PrefabBuilder();
  const w = 3.8, d = 3.6, h = 2.9;
  kioskBase(b, w, d, h, painted(0x2aa5c9, 0.7), painted(0xffffff, 0.6));
  awning(b, w + 0.2, 1.0, h - 0.15, d / 2, makeStripeTexture('#2aa5c9', '#ffe36a', 12));
  // inflatable rings hanging
  const cols = [0xff4a4a, 0xffd23a, 0x4adf7a, 0xff7ab8, 0x3aa0ff];
  for (let i = 0; i < 5; i++) b.add(new THREE.TorusGeometry(0.25, 0.09, 8, 18), plastic(cols[i], 0.3), -1.4 + i * 0.7, 2.2, d / 2 - 0.25);
  // shelves
  for (let i = 0; i < 3; i++) b.box(3.2, 0.05, 0.5, M.wood, 0, 0.6 + i * 0.55, -d / 2 + 0.4);
  for (let i = 0; i < 12; i++) b.box(0.18, 0.25, 0.18, plastic(cols[i % 5], 0.5), -1.4 + (i % 6) * 0.55, 0.75 + Math.floor(i / 6) * 0.55, -d / 2 + 0.4);
  // big beach ball on roof
  for (let i = 0; i < 6; i++) {
    const seg = new THREE.SphereGeometry(0.6, 12, 10, (i / 6) * Math.PI * 2, Math.PI / 3);
    b.add(seg, plastic(i % 2 ? 0xffffff : cols[i % 5], 0.3), 0, h + 1.0, 0);
  }
  const sign = makeSignTexture(['SURF SHOP'], { bg: '#ffe36a', fg: '#1d6f9a', w: 512, h: 120 });
  b.add(new THREE.PlaneGeometry(2.6, 0.6), signMat(sign, 0.6), 0, h + 0.62, d / 2 + 0.31);
  return b.build();
}

function toilets() {
  const b = new PrefabBuilder();
  const w = 3.8, d = 2.8, h = 2.7;
  b.boxUV(w, h, d, M.stucco, 0, h / 2, 0, 0, 0.5);
  b.box(w + 0.6, 0.2, d + 0.6, painted(0x7a8a95, 0.7), 0, h + 0.1, 0);
  // tile band
  b.boxUV(w + 0.02, 0.9, d + 0.02, M.poolTile, 0, 0.45, 0, 0, 2);
  // doors
  b.box(0.85, 2.0, 0.06, painted(0x2a7fd4, 0.4), -0.9, 1.0, d / 2 + 0.03);
  b.box(0.85, 2.0, 0.06, painted(0xe0559a, 0.4), 0.9, 1.0, d / 2 + 0.03);
  const wc = makeSignTexture(['WC'], { bg: '#ffffff', fg: '#20445a', w: 256, h: 128 });
  b.add(new THREE.PlaneGeometry(0.9, 0.45), signMat(wc, 0.4), 0, 2.35, d / 2 + 0.02);
  // vents
  for (let i = 0; i < 4; i++) b.box(0.6, 0.05, 0.04, painted(0x666666, 0.6), 0, 2.2 + i * 0.08, -d / 2 - 0.02);
  // plants by door
  return b.build();
}

function showers() {
  const b = new PrefabBuilder();
  b.boxUV(2.8, 0.08, 1.6, M.poolTile, 0, 0.04, 0, 0, 2);
  b.boxUV(2.8, 2.2, 0.15, M.stucco, 0, 1.1, -0.72, 0, 0.5);
  for (let i = 0; i < 3; i++) {
    const x = -0.9 + i * 0.9;
    b.cyl(0.03, 0.03, 2.3, M.chrome, x, 1.15, -0.55, 8);
    b.beam(V3(x, 2.28, -0.55), V3(x, 2.28, -0.2), 0.025, M.chrome);
    b.cyl(0.11, 0.07, 0.05, M.chrome, x, 2.25, -0.18, 12);
    b.cyl(0.04, 0.04, 0.12, M.chrome, x + 0.08, 1.2, -0.55, 6, 0, 0, Math.PI / 2);
  }
  b.box(2.6, 0.03, 0.12, M.steelDark, 0, 0.09, 0.6);
  return b.build();
}

function lockers() {
  const b = new PrefabBuilder();
  const w = 4.8, d = 2.8, h = 2.8;
  b.boxUV(w, h, d, M.stucco, 0, h / 2, -0.2, 0, 0.5);
  b.box(w + 0.8, 0.2, d + 1.4, painted(0xf4f1ea, 0.6), 0, h + 0.1, 0.2);
  for (const x of [-w / 2 - 0.25, w / 2 + 0.25]) b.cyl(0.08, 0.08, h, painted(0xf4f1ea, 0.6), x, h / 2, 1.4, 10);
  const cols = [0xff5a3a, 0xffc21a, 0x2ab0ff, 0x3adf7a];
  for (let i = 0; i < 8; i++) for (let j = 0; j < 3; j++) {
    b.box(0.5, 0.62, 0.04, plastic(cols[(i + j) % 4], 0.4), -1.9 + i * 0.54, 0.55 + j * 0.68, d / 2 - 0.18);
    b.box(0.08, 0.03, 0.03, M.steel, -1.8 + i * 0.54, 0.65 + j * 0.68, d / 2 - 0.15);
  }
  const sign = makeSignTexture(['CHANGING & LOCKERS'], { bg: '#20445a', fg: '#ffffff', w: 768, h: 110 });
  b.add(new THREE.PlaneGeometry(3.8, 0.55), signMat(sign, 0.6), 0, h + 0.45, 0.95);
  b.box(3.9, 0.6, 0.06, painted(0x20445a, 0.6), 0, h + 0.45, 0.91);
  return b.build();
}

function firstAid() {
  const b = new PrefabBuilder();
  const w = 2.8, d = 2.8, h = 2.6;
  b.boxUV(w, h, d, painted(0xffffff, 0.7), 0, h / 2, 0, 0, 1);
  b.box(w + 0.4, 0.15, d + 0.4, painted(0xd83a3a, 0.6), 0, h + 0.07, 0);
  b.box(1.0, 2.0, 0.06, M.glassDark, 0, 1.0, d / 2 + 0.03);
  b.box(0.7, 0.2, 0.05, painted(0xd83a3a, 0.5), 0, 2.2 + 0.05, d / 2 + 0.03);
  b.box(0.2, 0.7, 0.05, painted(0xd83a3a, 0.5), 0, 2.2 + 0.05, d / 2 + 0.035);
  b.box(0.5, 0.15, 0.05, painted(0xd83a3a, 0.5), 0, h + 0.5, 0);
  b.box(0.8, 0.8, 0.1, painted(0xffffff, 0.5), 0, h + 0.55, 0);
  b.box(0.6, 0.18, 0.12, painted(0xd83a3a, 0.5), 0, h + 0.55, 0);
  b.box(0.18, 0.6, 0.12, painted(0xd83a3a, 0.5), 0, h + 0.55, 0);
  return b.build();
}

function lifeguardTower() {
  const b = new PrefabBuilder();
  const wood = painted(0xf5f5f0, 0.6);
  const legs = [[-0.6, -0.6], [0.6, -0.6], [-0.6, 0.6], [0.6, 0.6]];
  for (const [x, z] of legs) b.beam(V3(x * 1.2, 0, z * 1.2), V3(x * 0.8, 2.1, z * 0.8), 0.06, wood, 6);
  b.box(1.5, 0.08, 1.5, M.wood, 0, 2.1, 0);
  // seat
  b.box(0.7, 0.06, 0.5, painted(0xd83a3a, 0.5), 0, 2.55, -0.2);
  b.box(0.7, 0.7, 0.06, painted(0xd83a3a, 0.5), 0, 2.9, -0.45);
  for (const x of [-0.3, 0.3]) b.box(0.06, 0.45, 0.06, wood, x, 2.32, -0.2);
  // ladder
  for (let i = 0; i < 6; i++) b.box(0.6, 0.04, 0.06, wood, 0, 0.3 + i * 0.32, 0.75 + i * 0.03);
  for (const x of [-0.3, 0.3]) b.beam(V3(x, 0, 0.75), V3(x, 2.1, 0.95), 0.03, wood, 4);
  // railing
  for (const [x, z, w, d] of [[0, -0.72, 1.5, 0.05], [-0.72, 0, 0.05, 1.5], [0.72, 0, 0.05, 1.5]]) b.box(w, 0.05, d, wood, x, 2.75, z);
  for (const [x, z] of legs) b.box(0.05, 0.65, 0.05, wood, x * 1.2, 2.45, z * 1.2);
  // shade roof
  b.cyl(0.03, 0.03, 1.4, M.steel, 0, 3.4, 0, 6);
  b.add(new THREE.ConeGeometry(1.2, 0.4, 4, 1, true), fabric(0xd83a3a), 0, 4.2, 0, 0, Math.PI / 4, 0);
  // rescue buoy
  b.add(new THREE.TorusGeometry(0.22, 0.07, 8, 16), plastic(0xff5a2a, 0.4), 0.76, 1.6, 0, 0, Math.PI / 2, 0);
  const sign = makeSignTexture(['LIFEGUARD'], { bg: '#d83a3a', fg: '#ffffff', w: 512, h: 100 });
  b.add(new THREE.PlaneGeometry(1.3, 0.26), signMat(sign, 0.3), 0, 1.85, 0.62);
  return b.build();
}

function fountain() {
  const b = new PrefabBuilder();
  const rim = new THREE.TorusGeometry(1.35, 0.14, 10, 40);
  b.add(rim, M.coping, 0, 0.42, 0, Math.PI / 2, 0, 0);
  b.add(new THREE.CylinderGeometry(1.35, 1.4, 0.42, 40, 1, true), M.coping, 0, 0.21, 0);
  b.add(new THREE.CircleGeometry(1.3, 32), M.poolTile, 0, 0.06, 0, -Math.PI / 2, 0, 0);
  b.cyl(0.18, 0.28, 1.2, M.coping, 0, 0.6, 0, 16);
  b.cyl(0.65, 0.4, 0.15, M.coping, 0, 1.2, 0, 24);
  b.cyl(0.1, 0.14, 0.6, M.coping, 0, 1.5, 0, 12);
  b.cyl(0.32, 0.2, 0.1, M.coping, 0, 1.8, 0, 16);
  b.sphere(0.08, M.chrome, 0, 1.9, 0);
  return b.build();
}

function fireworks() {
  const b = new PrefabBuilder();
  b.boxUV(1.8, 0.3, 1.8, M.concreteDark, 0, 0.15, 0, 0, 1);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
    b.cyl(0.12, 0.12, 0.7, painted([0xd83a3a, 0x2a7fd4, 0xffc21a][(i + j) % 3], 0.5), -0.5 + i * 0.5, 0.65, -0.5 + j * 0.5, 10, 0.12 * (i - 1), 0, 0.12 * (j - 1));
  }
  b.box(0.3, 0.4, 0.2, painted(0x333333, 0.6), 0.75, 0.5, 0.75);
  return b.build();
}

function forSaleSign() {
  const b = new PrefabBuilder();
  b.cyl(0.05, 0.05, 2.4, M.woodDark, -0.9, 1.2, 0, 6);
  b.cyl(0.05, 0.05, 2.4, M.woodDark, 0.9, 1.2, 0, 6);
  b.box(2.2, 1.1, 0.06, painted(0xffffff, 0.6), 0, 1.75, 0);
  return b.build();
}

function car() {
  const b = new PrefabBuilder();
  // body
  const shape = new THREE.Shape();
  shape.moveTo(-2.1, 0.35); shape.lineTo(2.1, 0.35); shape.quadraticCurveTo(2.25, 0.4, 2.2, 0.8); shape.lineTo(2.05, 0.95);
  shape.lineTo(-2.0, 0.98); shape.quadraticCurveTo(-2.2, 0.9, -2.15, 0.45); shape.closePath();
  const body = new THREE.ExtrudeGeometry(shape, { depth: 1.7, bevelEnabled: true, bevelSize: 0.08, bevelThickness: 0.08, bevelSegments: 2, curveSegments: 6 });
  body.translate(0, 0, -0.85);
  b.add(body, PM.carPaint, 0, 0, 0, 0, Math.PI / 2, 0);
  const cab = new THREE.Shape();
  cab.moveTo(-1.2, 0.95); cab.lineTo(1.0, 0.95); cab.lineTo(0.45, 1.5); cab.lineTo(-0.95, 1.5); cab.closePath();
  const cabin = new THREE.ExtrudeGeometry(cab, { depth: 1.5, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 1 });
  cabin.translate(0, 0, -0.75);
  b.add(cabin, M.glassDark, 0, 0, 0, 0, Math.PI / 2, 0);
  for (const [x, z] of [[-0.82, 1.35], [0.82, 1.35], [-0.82, -1.35], [0.82, -1.35]]) {
    b.cyl(0.36, 0.36, 0.26, M.rubber, x, 0.36, z, 14, 0, 0, Math.PI / 2);
    b.cyl(0.2, 0.2, 0.28, M.steel, x, 0.36, z, 10, 0, 0, Math.PI / 2);
  }
  b.box(1.4, 0.12, 0.05, M.lampGlow, 0, 0.75, -2.25);
  b.box(1.4, 0.1, 0.05, M.redLight, 0, 0.8, 2.22);
  return b.build();
}

function broadTree() {
  const b = new PrefabBuilder();
  b.cyl(0.18, 0.28, 3.2, M.bark, 0, 1.6, 0, 8);
  const rng = mulberry32(5);
  for (let i = 0; i < 5; i++) {
    const g = new THREE.IcosahedronGeometry(1.3 + rng() * 0.6, 0);
    displace(g, 0.3, 0.8);
    if (i > 2) { g.scale(0.8, 0.8, 0.8); }
    const a = rng() * Math.PI * 2, r = i === 0 ? 0 : 1.0;
    b.add(g, M.foliageDark, Math.cos(a) * r, 3.6 + rng() * 1.4, Math.sin(a) * r);
  }
  return b.build();
}

function pine() {
  const b = new PrefabBuilder();
  b.cyl(0.14, 0.22, 2.0, M.bark, 0, 1.0, 0, 6);
  for (let i = 0; i < 4; i++) {
    const g = new THREE.ConeGeometry(2.0 - i * 0.4, 2.2, 7);
    displace(g, 0.15, 1.2);
    b.add(g, M.foliageDark, 0, 2.2 + i * 1.2, 0);
  }
  return b.build();
}

function grassClump() {
  const b = new PrefabBuilder();
  for (let i = 0; i < 3; i++) {
    const g = new THREE.PlaneGeometry(0.7, 0.5);
    g.translate(0, 0.25, 0);
    const n = g.attributes.normal;
    for (let k = 0; k < n.count; k++) n.setXYZ(k, 0, 1, 0);
    b.add(g, PM.grassMat, 0, 0, 0, 0, (i / 3) * Math.PI, 0);
  }
  return b.build({ castShadow: false });
}

// Prefab registry ------------------------------------------------------------
const BUILDERS = {
  sunbed, umbrella, bench, bin, lamp, palm, planter, hedge, rock, tiki, flamingo, flowerBed, picnic,
  pathStone: () => pathTile('stone'), pathWood: () => pathTile('wood'), pathRed: () => pathTile('red'),
  drinks: drinksKiosk, icecream: iceCream, burger: burgerShack, pizza: pizzaStand, souvenir: souvenirShop,
  toilets, showers, lockers, firstaid: firstAid, lifeguard: lifeguardTower, fountain, fireworks,
  forsale: forSaleSign, car, broadTree, pine, grassClump,
};

export function getPrefab(key) {
  if (!P[key]) {
    const fn = BUILDERS[key];
    if (!fn) throw new Error('No prefab builder: ' + key);
    P[key] = fn();
  }
  return P[key];
}

export function hasPrefab(key) { return !!BUILDERS[key]; }
