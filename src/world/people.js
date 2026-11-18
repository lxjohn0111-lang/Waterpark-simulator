// Procedural skinned humans (1 draw call each) with code-driven animation.
import * as THREE from 'three';
import { pick, rand } from '../core/utils.js';

const SKIN = [0xf1c8a8, 0xe8b48f, 0xd29a74, 0xb27752, 0x8d5a3b, 0x6b4128, 0xf6d4bb, 0xc98d66];
const HAIR = [0x1f140c, 0x3a2414, 0x5b3a1e, 0x8a5a2b, 0xc89a5a, 0xe2c27a, 0x2a2a2a, 0xa13a1a, 0x9a9a9a];
const SUIT = [0xe8463b, 0x1e9bff, 0xffc21a, 0x2ed36b, 0xa24bff, 0xff7a1a, 0xff4fa3, 0x18d1c9, 0x1b2a6b, 0x111111, 0xffffff, 0xff8fa0, 0x6be0ff];

// bone indices
const B = { root: 0, spine: 1, head: 2, armL: 3, foreL: 4, armR: 5, foreR: 6, thighL: 7, shinL: 8, thighR: 9, shinR: 10 };
const BONE_COUNT = 11;

function makeBones(s) {
  const bones = [];
  for (let i = 0; i < BONE_COUNT; i++) bones.push(new THREE.Bone());
  const [root, spine, head, armL, foreL, armR, foreR, thighL, shinL, thighR, shinR] = bones;
  root.position.set(0, 0.95 * s, 0);
  spine.position.set(0, 0.1 * s, 0); root.add(spine);
  head.position.set(0, 0.47 * s, 0); spine.add(head);
  armL.position.set(0.19 * s, 0.36 * s, 0); spine.add(armL);
  foreL.position.set(0, -0.27 * s, 0); armL.add(foreL);
  armR.position.set(-0.19 * s, 0.36 * s, 0); spine.add(armR);
  foreR.position.set(0, -0.27 * s, 0); armR.add(foreR);
  thighL.position.set(0.095 * s, -0.04 * s, 0); root.add(thighL);
  shinL.position.set(0, -0.43 * s, 0); thighL.add(shinL);
  thighR.position.set(-0.095 * s, -0.04 * s, 0); root.add(thighR);
  shinR.position.set(0, -0.43 * s, 0); thighR.add(shinR);
  return bones;
}

// Accumulates parts into a single skinned geometry
class Body {
  constructor() { this.pos = []; this.nor = []; this.si = []; this.sw = []; this.part = []; this.idx = []; this.vc = 0; }
  add(geom, matrix, boneFn, partFn) {
    const g = geom.index ? geom : geom;
    g.applyMatrix4(matrix);
    const p = g.attributes.position, n = g.attributes.normal;
    const base = this.vc;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      this.pos.push(x, y, z);
      this.nor.push(n.getX(i), n.getY(i), n.getZ(i));
      const bi = typeof boneFn === 'function' ? boneFn(x, y, z) : boneFn;
      this.si.push(bi, 0, 0, 0);
      this.sw.push(1, 0, 0, 0);
      this.part.push(typeof partFn === 'function' ? partFn(x, y, z) : partFn);
    }
    if (g.index) for (const ii of g.index.array) this.idx.push(base + ii);
    else for (let i = 0; i < p.count; i++) this.idx.push(base + i);
    this.vc += p.count;
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(this.si, 4));
    g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(this.sw, 4));
    g.setAttribute('aPart', new THREE.Float32BufferAttribute(this.part, 1));
    g.setIndex(this.idx);
    g.computeBoundingSphere();
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.9, 0), 1.6);
    return g;
  }
}

const M4 = (x, y, z, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) =>
  new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));

// gender: 'm' | 'f'; style: suit style; hair: 'short'|'long'|'pony'|'bun'|'bald'|'curly'
function buildBodyGeometry({ gender, kid, hair, suit, glasses, floaties, cap }) {
  const s = kid ? 0.62 : 1;
  const hs = kid ? 1.28 : 1; // head scale (relative)
  const b = new Body();
  const female = gender === 'f';
  // torso via lathe
  const prof = female
    ? [[0.001, 0.84], [0.13, 0.86], [0.165, 0.95], [0.15, 1.04], [0.122, 1.12], [0.145, 1.24], [0.158, 1.31], [0.142, 1.4], [0.11, 1.45], [0.05, 1.49], [0.045, 1.55], [0.001, 1.56]]
    : [[0.001, 0.84], [0.135, 0.86], [0.16, 0.95], [0.152, 1.05], [0.142, 1.13], [0.16, 1.26], [0.17, 1.35], [0.15, 1.43], [0.11, 1.47], [0.055, 1.5], [0.05, 1.56], [0.001, 1.57]];
  const pts = prof.map(([r, y]) => new THREE.Vector2(r * s, y * s));
  const torso = new THREE.LatheGeometry(pts, 14);
  const sx = female ? 1.18 : 1.3, sz = female ? 0.78 : 0.74;
  b.add(torso, M4(0, 0, 0, sx, 1, sz), (x, y) => (y < 1.0 * s ? B.root : B.spine), (x, y, z) => {
    const yy = y / s;
    if (yy > 1.47) return 0;
    if (suit === 'trunks') return yy < 1.0 ? 1 : 0;
    if (suit === 'onepiece') return yy < 1.42 ? 1 : 0;
    if (suit === 'bikini') return yy < 1.0 || (yy > 1.22 && yy < 1.36) ? 1 : 0;
    if (suit === 'shirt') return yy < 1.0 ? 3 : 1; // staff: shirt=suit color, shorts=accent
    return 0;
  });
  // head
  const hy = 1.635 * s + (kid ? 0.03 : 0);
  const head = new THREE.SphereGeometry(0.105, 16, 12);
  b.add(head, M4(0, hy, 0.005, 0.93 * s * hs, 1.08 * s * hs, 1.0 * s * hs), B.head, 0);
  // nose & ears
  b.add(new THREE.SphereGeometry(0.02, 6, 5), M4(0, hy - 0.012 * s * hs, 0.104 * s * hs, s * hs, s * hs, 1.2 * s * hs), B.head, 0);
  for (const sgn of [-1, 1]) b.add(new THREE.SphereGeometry(0.022, 6, 5), M4(sgn * 0.097 * s * hs, hy, 0, 0.6 * s * hs, s * hs, s * hs), B.head, 0);
  // eyes
  for (const sgn of [-1, 1]) b.add(new THREE.SphereGeometry(0.015, 6, 5), M4(sgn * 0.036 * s * hs, hy + 0.018 * s * hs, 0.093 * s * hs, s * hs, s * hs, 0.6 * s * hs), B.head, 4);
  if (glasses) b.add(new THREE.BoxGeometry(0.17, 0.04, 0.02), M4(0, hy + 0.018 * s * hs, 0.1 * s * hs, s * hs, s * hs, s * hs), B.head, 4);
  // hair
  if (cap) {
    b.add(new THREE.SphereGeometry(0.115, 16, 8, 0, Math.PI * 2, 0, 1.75), M4(0, hy + 0.005, -0.004, s * hs * 0.95, s * hs * 1.06, s * hs), B.head, 3);
  } else if (hair !== 'bald') {
    const capG = new THREE.SphereGeometry(0.114, 16, 8, 0, Math.PI * 2, 0, hair === 'curly' ? 1.9 : 1.62);
    b.add(capG, M4(0, hy + 0.012, -0.012, s * hs * 0.97, s * hs * (hair === 'curly' ? 1.12 : 1.05), s * hs * 1.02, -0.25), B.head, 2);
    if (hair === 'long') b.add(new THREE.SphereGeometry(0.11, 12, 8), M4(0, hy - 0.1 * s * hs, -0.06 * s * hs, s * hs * 1.0, s * hs * 1.5, s * hs * 0.55), B.head, 2);
    if (hair === 'pony') b.add(new THREE.CapsuleGeometry(0.04, 0.14, 4, 8), M4(0, hy - 0.04 * s * hs, -0.13 * s * hs, s * hs, s * hs, s * hs, 0.5), B.head, 2);
    if (hair === 'bun') b.add(new THREE.SphereGeometry(0.06, 10, 8), M4(0, hy + 0.1 * s * hs, -0.07 * s * hs, s * hs, s * hs, s * hs), B.head, 2);
  }
  // arms
  for (const sgn of [1, -1]) {
    const arm = sgn > 0 ? B.armL : B.armR, fore = sgn > 0 ? B.foreL : B.foreR;
    const ax = sgn * 0.205 * s;
    b.add(new THREE.CapsuleGeometry(female ? 0.042 : 0.05, 0.19, 4, 8), M4(ax, 1.27 * s, 0, s, s, s), arm, suit === 'shirt' ? (x, y) => (y > 1.26 * s ? 1 : 0) : 0);
    b.add(new THREE.CapsuleGeometry(female ? 0.036 : 0.041, 0.2, 4, 8), M4(ax, 1.03 * s, 0, s, s, s), fore, 0);
    b.add(new THREE.SphereGeometry(female ? 0.042 : 0.049, 8, 6), M4(ax, 1.14 * s, 0, s, s, s), fore, 0);
    b.add(new THREE.SphereGeometry(0.045, 8, 6), M4(ax, 0.84 * s, 0.01 * s, 0.75 * s, 1.15 * s, 0.5 * s), fore, 0);
    if (floaties) b.add(new THREE.TorusGeometry(0.07, 0.035, 8, 12), M4(ax, 1.3 * s, 0, s, s, s, Math.PI / 2), arm, 3);
  }
  // legs
  for (const sgn of [1, -1]) {
    const thigh = sgn > 0 ? B.thighL : B.thighR, shin = sgn > 0 ? B.shinL : B.shinR;
    const lx = sgn * 0.095 * s;
    const shortY = suit === 'trunks' ? 0.6 : suit === 'shirt' ? 0.62 : 0.85;
    b.add(new THREE.CapsuleGeometry(female ? 0.068 : 0.074, 0.29, 4, 10), M4(lx, 0.69 * s, 0, s, s, s), thigh, (x, y) => (y > shortY * s ? (suit === 'shirt' ? 3 : 1) : 0));
    b.add(new THREE.CapsuleGeometry(female ? 0.052 : 0.056, 0.33, 4, 8), M4(lx, 0.29 * s, 0, s, s, s), shin, 0);
    b.add(new THREE.SphereGeometry(female ? 0.062 : 0.066, 8, 6), M4(lx, 0.48 * s, 0, s, s, s), shin, 0);
    b.add(new THREE.BoxGeometry(0.085, 0.055, 0.22), M4(lx, 0.03 * s, 0.045 * s, s, s, s), shin, suit === 'shirt' ? 3 : 0);
  }
  return b.build();
}

// Material with per-person colors (one shader program shared by all)
function makePersonMaterial(colors) {
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.62, metalness: 0 });
  const uni = {
    uSkin: { value: new THREE.Color(colors.skin) },
    uSuit: { value: new THREE.Color(colors.suit) },
    uHair: { value: new THREE.Color(colors.hair) },
    uAccent: { value: new THREE.Color(colors.accent) },
    uWet: { value: 0 },
    uFlash: { value: 0 },
  };
  mat.userData.uni = uni;
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uni);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aPart;\nvarying float vPart;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvPart = aPart;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vPart;\nuniform vec3 uSkin, uSuit, uHair, uAccent; uniform float uWet; uniform float uFlash;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec3 pc = vPart < 0.5 ? uSkin : vPart < 1.5 ? uSuit : vPart < 2.5 ? uHair : vPart < 3.5 ? uAccent : vec3(0.03);
        diffuseColor.rgb = pc;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = (vPart < 0.5 ? 0.55 : vPart < 1.5 ? 0.7 : vPart < 2.5 ? 0.85 : vPart < 3.5 ? 0.45 : 0.2) * (1.0 - uWet * 0.55);`)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance += vec3(1.0, 0.85, 0.3) * uFlash;');
  };
  mat.customProgramCacheKey = () => 'person';
  return mat;
}

// --- geometry variants cache ---
const variants = new Map();
function getVariant(key, spec) {
  if (!variants.has(key)) variants.set(key, buildBodyGeometry(spec));
  return variants.get(key);
}

export function randomLook(opts = {}) {
  const kid = opts.kid ?? Math.random() < 0.28;
  const gender = opts.gender || (Math.random() < 0.5 ? 'f' : 'm');
  const hair = gender === 'f' ? pick(['long', 'long', 'pony', 'bun', 'short', 'curly']) : pick(['short', 'short', 'curly', 'bald', 'short']);
  const suit = opts.suit || (gender === 'f' ? (kid ? pick(['onepiece', 'onepiece', 'bikini']) : pick(['bikini', 'onepiece', 'bikini'])) : 'trunks');
  const skin = pick(SKIN);
  return {
    kid, gender, hair: kid && hair === 'bald' ? 'short' : hair, suit,
    glasses: !kid && Math.random() < 0.18,
    floaties: kid && Math.random() < 0.45,
    cap: !opts.staff && Math.random() < 0.06,
    colors: { skin, suit: opts.suitColor ?? pick(SUIT), hair: pick(HAIR), accent: opts.accent ?? pick([0xff8a2a, 0xffd23a, 0xffffff, 0x222222]) },
  };
}

export function createPerson(look) {
  const key = [look.gender, look.kid ? 'k' : 'a', look.hair, look.suit, look.glasses ? 'g' : '', look.floaties ? 'f' : '', look.cap ? 'c' : ''].join('|');
  const geo = getVariant(key, look);
  const mat = makePersonMaterial(look.colors);
  const mesh = new THREE.SkinnedMesh(geo, mat);
  const bones = makeBones(look.kid ? 0.62 : 1);
  mesh.add(bones[0]);
  mesh.updateMatrixWorld(true);
  mesh.bind(new THREE.Skeleton(bones));
  mesh.castShadow = true;
  mesh.receiveShadow = false;
  mesh.frustumCulled = true;
  const rest = bones.map((b) => b.position.clone());
  return { mesh, bones, rest, scale: look.kid ? 0.62 : 1, rot: new Float32Array(BONE_COUNT * 3), uni: mat.userData.uni };
}

// --------------------------------------------------------------------------
// Animation: compute target rotations for a pose, then damp toward them.
const T = new Float32Array(BONE_COUNT * 3);
function setT(b, x, y, z) { T[b * 3] = x; T[b * 3 + 1] = y; T[b * 3 + 2] = z; }

export function animatePerson(p, pose, ph, dt, extra = 0) {
  T.fill(0);
  let rootY = 0, rootZ = 0, rootX = 0;
  const s = p.scale;
  switch (pose) {
    case 'walk':
    case 'run':
    case 'climb': {
      const amp = pose === 'run' ? 0.75 : pose === 'climb' ? 0.6 : 0.45;
      const sn = Math.sin(ph), cs = Math.cos(ph);
      setT(B.thighL, -sn * amp - (pose === 'climb' ? 0.35 : 0), 0, 0);
      setT(B.thighR, sn * amp - (pose === 'climb' ? 0.35 : 0), 0, 0);
      setT(B.shinL, Math.max(0, cs) * amp * 1.3 + (pose === 'climb' ? 0.4 : 0), 0, 0);
      setT(B.shinR, Math.max(0, -cs) * amp * 1.3 + (pose === 'climb' ? 0.4 : 0), 0, 0);
      setT(B.armL, sn * amp * 0.75, 0, 0.1);
      setT(B.armR, -sn * amp * 0.75, 0, -0.1);
      setT(B.foreL, -0.25 - (pose === 'run' ? 0.8 : 0), 0, 0);
      setT(B.foreR, -0.25 - (pose === 'run' ? 0.8 : 0), 0, 0);
      setT(B.spine, pose === 'run' ? 0.15 : pose === 'climb' ? 0.2 : 0.03, sn * 0.08, 0);
      setT(B.root, 0, -sn * 0.06, 0);
      rootY = Math.abs(sn) * 0.035 * s;
      break;
    }
    case 'swim': {
      // head-up breaststroke, body near horizontal
      setT(B.root, 1.2, 0, 0);
      setT(B.head, -0.95, 0, 0);
      const a = Math.sin(ph), c = Math.cos(ph);
      setT(B.armL, -1.5 + a * 0.35, 0, 0.35 + c * 0.5);
      setT(B.armR, -1.5 + a * 0.35, 0, -0.35 - c * 0.5);
      setT(B.foreL, -0.4 - Math.max(0, c) * 0.8, 0, 0);
      setT(B.foreR, -0.4 - Math.max(0, c) * 0.8, 0, 0);
      setT(B.thighL, 0.2 + a * 0.35, 0, 0.15);
      setT(B.thighR, 0.2 - a * 0.35, 0, -0.15);
      setT(B.shinL, 0.4 + Math.max(0, a) * 0.6, 0, 0);
      setT(B.shinR, 0.4 + Math.max(0, -a) * 0.6, 0, 0);
      rootY = -0.15 * s;
      break;
    }
    case 'tread': {
      const a = Math.sin(ph * 0.8);
      setT(B.armL, -0.3, 0, 0.9 + a * 0.3);
      setT(B.armR, -0.3, 0, -0.9 - a * 0.3);
      setT(B.foreL, -0.5, 0, 0); setT(B.foreR, -0.5, 0, 0);
      setT(B.thighL, -0.3 + a * 0.3, 0, 0); setT(B.thighR, -0.3 - a * 0.3, 0, 0);
      setT(B.shinL, 0.6, 0, 0); setT(B.shinR, 0.6, 0, 0);
      break;
    }
    case 'drown': {
      const a = Math.sin(ph * 2.6);
      setT(B.armL, -2.7 + a * 0.5, 0, 0.3 + a * 0.2);
      setT(B.armR, -2.7 - a * 0.5, 0, -0.3 + a * 0.2);
      setT(B.head, -0.4, a * 0.3, 0);
      setT(B.spine, 0, a * 0.2, 0);
      setT(B.thighL, -0.5 + a * 0.4, 0, 0); setT(B.thighR, -0.5 - a * 0.4, 0, 0);
      setT(B.shinL, 0.8, 0, 0); setT(B.shinR, 0.8, 0, 0);
      rootY = Math.sin(ph * 1.7) * 0.12 * s;
      break;
    }
    case 'lie': {
      setT(B.root, -Math.PI / 2, 0, 0);
      setT(B.head, -0.15, Math.sin(ph * 0.1) * 0.2, 0);
      setT(B.armL, -0.1, 0, 0.18); setT(B.armR, -0.1, 0, -0.18);
      setT(B.foreL, -0.3 - extra * 1.2, 0, 0); setT(B.foreR, -0.2, 0, 0);
      setT(B.thighL, -0.12, 0, 0.04); setT(B.thighR, 0.0, 0, -0.04);
      setT(B.shinL, 0.25, 0, 0);
      rootY = -0.95 * s + 0.62; rootZ = 0;
      break;
    }
    case 'slide': {
      setT(B.root, -Math.PI / 2 + 0.25, 0, 0);
      setT(B.head, -0.5, 0, 0);
      setT(B.armL, -0.2, 0, 0.45); setT(B.armR, -0.2, 0, -0.45);
      setT(B.foreL, -1.2, 0, 0); setT(B.foreR, -1.2, 0, 0);
      setT(B.thighL, 0, 0, 0.05); setT(B.thighR, 0, 0, -0.05);
      rootY = -0.95 * s + 0.15;
      break;
    }
    case 'sit': {
      setT(B.thighL, -1.5, 0, 0.06); setT(B.thighR, -1.5, 0, -0.06);
      setT(B.shinL, 1.45, 0, 0); setT(B.shinR, 1.45, 0, 0);
      setT(B.armL, -0.4, 0, 0.12); setT(B.armR, -0.4 - extra * 0.8, 0, -0.12);
      setT(B.foreL, -0.6, 0, 0); setT(B.foreR, -0.6 - extra * 1.2, 0, 0);
      setT(B.spine, -0.08 + Math.sin(ph * 0.3) * 0.03, 0, 0);
      setT(B.head, 0, Math.sin(ph * 0.2) * 0.4, 0);
      rootY = -0.95 * s + 0.5 * s + 0.02;
      rootZ = -0.05;
      break;
    }
    case 'cheer': {
      const a = Math.sin(ph * 2.5);
      setT(B.armL, -2.8 + a * 0.2, 0, 0.35); setT(B.armR, -2.8 - a * 0.2, 0, -0.35);
      setT(B.foreL, -0.3, 0, 0); setT(B.foreR, -0.3, 0, 0);
      rootY = Math.max(0, a) * 0.08 * s;
      break;
    }
    case 'eat': {
      const a = Math.max(0, Math.sin(ph * 0.7));
      setT(B.armR, -0.6 - a * 0.7, 0, -0.15); setT(B.foreR, -1.4 - a * 0.4, 0, 0);
      setT(B.armL, 0, 0, 0.08); setT(B.foreL, -0.2, 0, 0);
      setT(B.head, -0.1 + a * 0.15, 0, 0);
      break;
    }
    case 'bend': {
      setT(B.spine, 0.95, 0, 0); setT(B.head, -0.5, 0, 0);
      setT(B.armL, -0.9, 0, 0.1); setT(B.armR, -1.1, 0, -0.1);
      setT(B.thighL, -0.5, 0, 0); setT(B.thighR, -0.5, 0, 0);
      setT(B.shinL, 0.6, 0, 0); setT(B.shinR, 0.6, 0, 0);
      rootY = -0.12 * s;
      break;
    }
    case 'work': {
      const a = Math.sin(ph * 2.0);
      setT(B.spine, 0.35, a * 0.25, 0);
      setT(B.armL, -1.1 + a * 0.3, 0, 0.25); setT(B.armR, -1.0 - a * 0.3, 0, -0.25);
      setT(B.foreL, -0.6, 0, 0); setT(B.foreR, -0.6, 0, 0);
      setT(B.thighL, -0.2, 0, 0); setT(B.thighR, 0.1, 0, 0);
      break;
    }
    case 'jump': {
      setT(B.armL, -2.6, 0, 0.5); setT(B.armR, -2.6, 0, -0.5);
      setT(B.thighL, -0.9, 0, 0); setT(B.thighR, -0.9, 0, 0);
      setT(B.shinL, 1.2, 0, 0); setT(B.shinR, 1.2, 0, 0);
      break;
    }
    default: { // idle
      const a = Math.sin(ph * 0.5);
      setT(B.armL, a * 0.03, 0, 0.1); setT(B.armR, -a * 0.03, 0, -0.1);
      setT(B.foreL, -0.15, 0, 0); setT(B.foreR, -0.15, 0, 0);
      setT(B.spine, a * 0.02, Math.sin(ph * 0.17) * 0.12, 0);
      setT(B.head, 0, Math.sin(ph * 0.23) * 0.5, 0);
      setT(B.thighR, 0.02, 0, -0.05);
    }
  }
  const k = Math.min(1, dt * 12);
  const r = p.rot, bones = p.bones;
  for (let i = 0; i < BONE_COUNT; i++) {
    const bi = i * 3;
    r[bi] += (T[bi] - r[bi]) * k;
    r[bi + 1] += (T[bi + 1] - r[bi + 1]) * k;
    r[bi + 2] += (T[bi + 2] - r[bi + 2]) * k;
    bones[i].rotation.set(r[bi], r[bi + 1], r[bi + 2]);
  }
  const root = bones[0];
  root.position.set(p.rest[0].x + rootX, p.rest[0].y + rootY, p.rest[0].z + rootZ);
}

export function snapPose(p, pose, ph) {
  // Instantly apply a pose (no blending)
  animatePerson(p, pose, ph, 10);
}

export { SUIT, SKIN, HAIR };
