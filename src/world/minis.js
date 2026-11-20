// Guests & staff built from Kenney's "Mini Characters" (CC0, see public/models/CREDITS.txt).
// Loads the 12 rigged models, recolours their clothes into swimwear using the shared
// palette texture, drives their 32 built-in animations and hosts ragdolls.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Ragdoll } from './ragdoll.js';

export const MALE = ['mini_male_a', 'mini_male_b', 'mini_male_c', 'mini_male_d', 'mini_male_e', 'mini_male_f'];
export const FEMALE = ['mini_female_a', 'mini_female_b', 'mini_female_c', 'mini_female_d', 'mini_female_e', 'mini_female_f'];
const PACK_URL = 'models/minis.json'; // all 12 GLBs as base64 (npm run pack-models)
const ADULT = 1.9, KID = 1.25;            // model is ~0.72 m tall
const CELL_W = 32, CELL_H = 128;           // palette layout of Kenney's colormap

// Bright palette cells (col,row) for swimwear and staff shirts
export const SUIT_CELLS = [[2, 2], [4, 2], [6, 2], [8, 2], [10, 2], [12, 2], [14, 2], [0, 1], [5, 2], [11, 2]];
const STAFF_CELL = { 0x2e9e5a: [3, 2], 0xd83a3a: [9, 2], 0x1e7fd8: [11, 2], 0xff8a1a: [7, 2], 0x1b2a6b: [5, 3] };
const PANTS_CELL = [1, 3];
// skin tones in Kenney's colormap: light, tan, brown, peach (flat + gradient columns)
const SKIN_CELLS = new Set(['0,2', '1,2', '10,3', '11,3', '12,3', '13,3', '14,3', '15,3']);

export const MINIS = { ready: false, bases: {}, clips: null };

// Decode embedded textures straight from their bytes (createImageBitmap on a Blob) instead of
// through blob: URLs, which locked-down hosts (sandboxed iframes, strict CSPs) may refuse to fetch.
const GL_FILTERS = { 9728: THREE.NearestFilter, 9729: THREE.LinearFilter, 9984: THREE.NearestMipmapNearestFilter, 9985: THREE.LinearMipmapNearestFilter, 9986: THREE.NearestMipmapLinearFilter, 9987: THREE.LinearMipmapLinearFilter };
const GL_WRAPS = { 33071: THREE.ClampToEdgeWrapping, 33648: THREE.MirroredRepeatWrapping, 10497: THREE.RepeatWrapping };
class BitmapTextures {
  constructor(parser) { this.parser = parser; this.name = 'SH_bitmap_textures'; }
  loadTexture(index) {
    if (typeof createImageBitmap !== 'function') return null;
    const parser = this.parser, json = parser.json;
    const def = json.textures[index];
    const img = json.images && json.images[def.source];
    if (!img || img.bufferView === undefined) return null;
    return parser.getDependency('bufferView', img.bufferView)
      .then((bv) => createImageBitmap(new Blob([bv], { type: img.mimeType || 'image/png' }), { premultiplyAlpha: 'none', colorSpaceConversion: 'none' }))
      .then((bmp) => {
        const tex = new THREE.Texture(bmp);
        tex.flipY = false;
        const sm = (json.samplers || [])[def.sampler] || {};
        tex.magFilter = GL_FILTERS[sm.magFilter] || THREE.LinearFilter;
        tex.minFilter = GL_FILTERS[sm.minFilter] || THREE.LinearMipmapLinearFilter;
        tex.wrapS = GL_WRAPS[sm.wrapS] || THREE.RepeatWrapping;
        tex.wrapT = GL_WRAPS[sm.wrapT] || THREE.RepeatWrapping;
        tex.needsUpdate = true;
        parser.associations.set(tex, { textures: index });
        return tex;
      });
  }
}

export async function loadMinis(progress) {
  const loader = new GLTFLoader();
  loader.register((parser) => new BitmapTextures(parser));
  const names = [...MALE, ...FEMALE];
  const res = await fetch(PACK_URL);
  if (!res.ok) throw new Error('character models: HTTP ' + res.status);
  const pack = await res.json();
  progress && progress(0.3);
  let done = 0;
  await Promise.all(names.map(async (name) => {
    const bin = atob(pack[name]);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const gltf = await loader.parseAsync(bytes.buffer, '');
    MINIS.bases[name] = prepareBase(gltf, name);
    if (!MINIS.clips) MINIS.clips = gltf.animations;
    progress && progress(0.3 + 0.7 * ++done / names.length);
  }));
  MINIS.ready = true;
}

// ---------------------------------------------------------------- base preparation
function plainGeometry(geom, srcBones, dstBones) {
  // de-quantise attributes to plain floats and remap joints onto the body skeleton
  const g = new THREE.BufferGeometry();
  const n = geom.attributes.position.count;
  const copy = (name, size) => {
    const a = geom.attributes[name];
    const out = new Float32Array(n * size);
    for (let i = 0; i < n; i++) for (let k = 0; k < size; k++) out[i * size + k] = a.getComponent(i, k);
    return out;
  };
  g.setAttribute('position', new THREE.BufferAttribute(copy('position', 3), 3));
  if (geom.attributes.normal) g.setAttribute('normal', new THREE.BufferAttribute(copy('normal', 3), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(copy('uv', 2), 2));
  const si = geom.attributes.skinIndex, sw = geom.attributes.skinWeight;
  const idx = new Uint16Array(n * 4), wts = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) for (let k = 0; k < 4; k++) {
    const j = si.getComponent(i, k);
    const bone = srcBones[j];
    const d = dstBones.indexOf(bone);
    idx[i * 4 + k] = d >= 0 ? d : 0;
    wts[i * 4 + k] = sw.getComponent(i, k);
  }
  g.setAttribute('skinIndex', new THREE.BufferAttribute(idx, 4));
  g.setAttribute('skinWeight', new THREE.BufferAttribute(wts, 4));
  if (geom.index) g.setIndex(Array.from(geom.index.array));
  return g;
}

function sameBind(a, b) {
  if (!a.bindMatrix.equals(b.bindMatrix)) return false;
  for (let i = 0; i < b.skeleton.bones.length; i++) {
    const j = a.skeleton.bones.indexOf(b.skeleton.bones[i]);
    if (j < 0) return false;
    const e1 = a.skeleton.boneInverses[j].elements, e2 = b.skeleton.boneInverses[i].elements;
    for (let k = 0; k < 16; k++) if (Math.abs(e1[k] - e2[k]) > 1e-4) return false;
  }
  return true;
}

// Move a rigidly skinned geometry from one skin's bind space into another's (same bones),
// so the head can share the body's draw call even when the two skins were bound differently.
function rebind(geom, src, dst, bones) {
  const dstBindInv = new THREE.Matrix4().copy(dst.bindMatrix).invert();
  const mats = bones.map((b, j) => {
    const hi = src.skeleton.bones.indexOf(b);
    if (hi < 0) return null;
    const m = new THREE.Matrix4().copy(dst.skeleton.boneInverses[j]).invert();
    m.premultiply(dstBindInv).multiply(src.skeleton.boneInverses[hi]).multiply(src.bindMatrix);
    return { m, n: new THREE.Matrix3().getNormalMatrix(m) };
  });
  const pos = geom.attributes.position, nor = geom.attributes.normal, si = geom.attributes.skinIndex;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    const M = mats[si.getX(i)];
    if (!M) continue;
    v.fromBufferAttribute(pos, i).applyMatrix4(M.m); pos.setXYZ(i, v.x, v.y, v.z);
    if (nor) { v.fromBufferAttribute(nor, i).applyMatrix3(M.n).normalize(); nor.setXYZ(i, v.x, v.y, v.z); }
  }
}

const _e1 = new THREE.Vector3(), _e2 = new THREE.Vector3();
let paletteData = null;
function readPalette(tex) {
  if (paletteData) return paletteData;
  const img = tex.image;
  const c = document.createElement('canvas');
  c.width = img.width; c.height = img.height;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  paletteData = { w: c.width, h: c.height, data: ctx.getImageData(0, 0, c.width, c.height).data };
  return paletteData;
}

function prepareBase(gltf, name) {
  const scene = gltf.scene;
  scene.updateMatrixWorld(true);
  const skinned = [];
  scene.traverse((o) => { if (o.isSkinnedMesh) skinned.push(o); });
  const body = skinned.find((m) => /body/i.test(m.name)) || skinned[0];
  const head = skinned.find((m) => m !== body);
  const bones = body.skeleton.bones;
  // merge head into body => one draw call per character
  let bodyGeom = plainGeometry(body.geometry, bones, bones);
  let headStart = bodyGeom.index ? bodyGeom.index.count : bodyGeom.attributes.position.count;
  const bodyVerts = bodyGeom.attributes.position.count;
  if (head) {
    const hg = plainGeometry(head.geometry, head.skeleton.bones, bones);
    if (!sameBind(body, head)) rebind(hg, head, body, bones);
    const merged = mergeGeometries([bodyGeom, hg]);
    if (merged) { bodyGeom = merged; head.removeFromParent(); }
  }
  void headStart;
  body.geometry = bodyGeom;
  body.castShadow = true;
  body.frustumCulled = true;
  bodyGeom.computeBoundingSphere();
  bodyGeom.boundingSphere.radius *= 2.5; // room for animated & ragdolled limbs
  const mat = body.material;
  mat.roughness = 0.55;
  mat.metalness = 0;
  // bone lookup
  const byName = (n) => bones.find((b) => b.name === n);
  const B = { root: byName('root'), legL: byName('leg-left'), legR: byName('leg-right'), torso: byName('torso'), armL: byName('arm-left'), armR: byName('arm-right'), head: byName('head') };
  const boneIdx = {};
  for (const [k, b] of Object.entries(B)) boneIdx[k] = bones.indexOf(b);
  // vertex analysis in bind pose: tips of limbs (for the ragdoll) and palette cells
  const pos = bodyGeom.attributes.position, uv = bodyGeom.attributes.uv, si = bodyGeom.attributes.skinIndex;
  const n = pos.count;
  const tex = mat.map;
  tex.updateMatrix();
  const M = tex.matrix.clone(), Minv = M.clone().invert();
  const pal = readPalette(tex);
  const v = new THREE.Vector3(), t2 = new THREE.Vector2();
  const vBone = new Int8Array(n), vLocal = [], vPix = new Float32Array(n * 2);
  // bone-space position exactly as the skinning shader sees it: boneInverse * bindMatrix * v
  const inv = Object.fromEntries(Object.entries(boneIdx).map(([k, i]) => [k, body.skeleton.boneInverses[i]]));
  const idxToKey = Object.fromEntries(Object.entries(boneIdx).map(([k, i]) => [i, k]));
  for (let i = 0; i < n; i++) {
    v.fromBufferAttribute(pos, i).applyMatrix4(body.bindMatrix);
    const key = idxToKey[si.getX(i)] || 'root';
    vBone[i] = Object.keys(B).indexOf(key);
    vLocal.push(v.clone().applyMatrix4(inv[key]));
    t2.fromBufferAttribute(uv, i).applyMatrix3(M);
    vPix[i * 2] = Math.min(pal.w - 1, Math.max(0, t2.x * pal.w));
    vPix[i * 2 + 1] = Math.min(pal.h - 1, Math.max(0, t2.y * pal.h));
  }
  const keys = Object.keys(B);
  const tip = (k, fn) => {
    const bi = keys.indexOf(k);
    let best = null, bv = -1e9;
    for (let i = 0; i < n; i++) if (vBone[i] === bi) { const s = fn(vLocal[i]); if (s > bv) { bv = s; best = vLocal[i]; } }
    return best ? best.clone() : new THREE.Vector3();
  };
  const tips = {
    legL: tip('legL', (p) => -p.y), legR: tip('legR', (p) => -p.y),
    armL: tip('armL', (p) => p.length()), armR: tip('armR', (p) => p.length()),
    head: tip('head', (p) => p.y),
  };
  // the head particle sits in the middle of the (big) head
  { const hi = keys.indexOf('head'); const c = new THREE.Vector3(); let cnt = 0;
    for (let i = 0; i < n; i++) if (vBone[i] === hi) { c.add(vLocal[i]); cnt++; }
    if (cnt) tips.head.set(0, (c.y / cnt + tips.head.y) * 0.5, c.z / cnt); }
  // keep tips on the bone axis (centre of hand / foot / head top)
  tips.legL.x = 0; tips.legL.z = 0; tips.legR.x = 0; tips.legR.z = 0;
  tips.head.x = 0;
  // skin cell: the skin-tone palette cell covering the most area on the forward-facing lower
  // half of the face, plus the hands (area, not vertex count: eyes and mouth are tiny but
  // vertex-dense; beards, masks, sleeves and gloves aren't skin tones so they never win)
  const counts = new Map();
  const cellOf = (i) => Math.floor(vPix[i * 2] / CELL_W) + ',' + Math.floor(vPix[i * 2 + 1] / CELL_H);
  const idx = bodyGeom.index ? bodyGeom.index.array : null;
  const tri = (fn, w, front) => {
    const m = idx ? idx.length : n;
    for (let t = 0; t + 2 < m; t += 3) {
      const a = idx ? idx[t] : t, b = idx ? idx[t + 1] : t + 1, c = idx ? idx[t + 2] : t + 2;
      if (!fn(a) || !fn(b) || !fn(c)) continue;
      const cr = _e1.subVectors(vLocal[b], vLocal[a]).cross(_e2.subVectors(vLocal[c], vLocal[a]));
      const area = cr.length();
      if (front && cr.z < area * 0.8) continue;
      const cell = cellOf(a);
      if (SKIN_CELLS.has(cell)) counts.set(cell, (counts.get(cell) || 0) + area * w);
    }
  };
  { const hi = keys.indexOf('head'); let yMin = 1e9, yMax = -1e9;
    for (let i = 0; i < n; i++) if (vBone[i] === hi) { yMin = Math.min(yMin, vLocal[i].y); yMax = Math.max(yMax, vLocal[i].y); }
    tri((i) => vBone[i] === hi && vLocal[i].y < yMin + (yMax - yMin) * 0.55, 1, true);
  }
  for (const k of ['armL', 'armR']) { const bi = keys.indexOf(k), len = tips[k].length(); tri((i) => vBone[i] === bi && vLocal[i].length() > len * 0.72, 0.5, false); }
  let skin = '1,2', sc = 0;
  for (const [c, k] of counts) if (k > sc) { sc = k; skin = c; }
  const skinCell = skin.split(',').map(Number);
  // one shade for all bare skin (keeping each vertex's own shade turns old socks and shoes into stripes)
  let syS = 0, syN = 0;
  for (let i = 0; i < n; i++) if (cellOf(i) === skin) { syS += vPix[i * 2 + 1] % CELL_H; syN++; }
  const skinY = syN ? syS / syN : CELL_H * 0.3;
  // torso height range for bikini split
  let tyMin = 1e9, tyMax = -1e9;
  const ti = keys.indexOf('torso');
  for (let i = 0; i < n; i++) if (vBone[i] === ti) { tyMin = Math.min(tyMin, vLocal[i].y); tyMax = Math.max(tyMax, vLocal[i].y); }
  const box = new THREE.Box3().setFromObject(scene);
  return {
    name, scene, gltf, B, tips, mat, bodyName: body.name, height: box.max.y - box.min.y,
    analysis: { n, vBone, vLocal, vPix, keys, skinCell, skinY, tyMin, tyMax, bodyVerts, M, Minv, pal },
    variants: new Map(),
  };
}

// Build a recoloured copy of the base geometry (swimwear or staff uniform)
function variantGeometry(base, mode, cellA, cellB) {
  const key = mode + cellA + '|' + cellB;
  if (base.variants.has(key)) return base.variants.get(key);
  const src = base.scene.getObjectByName(base.bodyName).geometry;
  // one colour per triangle: with shared vertices a triangle straddling the suit/skin line
  // would blend its UVs across the whole palette and show rainbow stripes
  const g = src.index ? src.toNonIndexed() : src.clone();
  if (src.boundingSphere) g.boundingSphere = src.boundingSphere.clone();
  const orig = src.index ? src.index.array : null;
  const uv = g.attributes.uv;
  const A = base.analysis;
  const [scol, srow] = A.skinCell;
  const t = new THREE.Vector2(), c = new THREE.Vector3();
  const setCell = (k, col, row, fixedY) => {
    for (let j = 0; j < 3; j++) {
      const v = k * 3 + j, i = orig ? orig[v] : v;
      const py = A.vPix[i * 2 + 1];
      const yIn = fixedY ?? py - Math.floor(py / CELL_H) * CELL_H; // keep the vertical shading gradient
      t.set((col * CELL_W + CELL_W / 2) / A.pal.w, (row * CELL_H + Math.min(CELL_H - 2, Math.max(2, yIn))) / A.pal.h).applyMatrix3(A.Minv);
      uv.setXY(v, t.x, t.y);
    }
  };
  const legLen = { 1: Math.abs(base.tips.legL.y) || 0.18, 2: Math.abs(base.tips.legR.y) || 0.18 };
  const triCount = g.attributes.position.count / 3;
  for (let k = 0; k < triCount; k++) {
    const i0 = orig ? orig[k * 3] : k * 3, i1 = orig ? orig[k * 3 + 1] : k * 3 + 1, i2 = orig ? orig[k * 3 + 2] : k * 3 + 2;
    if (i0 >= A.bodyVerts) continue; // head keeps its own colours
    const b = A.keys[A.vBone[i0]];
    const col = Math.floor(A.vPix[i0 * 2] / CELL_W), row = Math.floor(A.vPix[i0 * 2 + 1] / CELL_H);
    const isSkin = col === scol && row === srow;
    const p = c.copy(A.vLocal[i0]).add(A.vLocal[i1]).add(A.vLocal[i2]).multiplyScalar(1 / 3);
    if (mode === 'staff') {
      if (isSkin) continue;
      if (b === 'torso' || b === 'armL' || b === 'armR') setCell(k, cellA[0], cellA[1]);
      else if (b === 'legL' || b === 'legR') { const f = -p.y / legLen[A.vBone[i0]]; if (f < 0.7) setCell(k, PANTS_CELL[0], PANTS_CELL[1]); }
      continue;
    }
    if (b === 'armL' || b === 'armR') { if (!isSkin) setCell(k, scol, srow, A.skinY); continue; }
    if (b === 'torso') {
      const f = (p.y - A.tyMin) / Math.max(0.001, A.tyMax - A.tyMin);
      if (mode === 'trunks') { if (f < 0.12) setCell(k, cellA[0], cellA[1]); else if (!isSkin) setCell(k, scol, srow, A.skinY); }
      else if (mode === 'bikini') { if (f > 0.45 || f < 0.12) setCell(k, cellA[0], cellA[1]); else setCell(k, scol, srow, A.skinY); }
      else setCell(k, cellA[0], cellA[1]); // one-piece
      continue;
    }
    if (b === 'legL' || b === 'legR') {
      const f = -p.y / legLen[A.vBone[i0]];
      if (f < 0.42) setCell(k, cellA[0], cellA[1]);
      else setCell(k, scol, srow, A.skinY); // bare legs and feet
    }
  }
  uv.needsUpdate = true;
  base.variants.set(key, g);
  return g;
}

// ---------------------------------------------------------------- people
export function randomMiniLook(opts = {}) {
  const kid = opts.kid ?? Math.random() < 0.25;
  const female = opts.gender ? opts.gender === 'f' : Math.random() < 0.5;
  const base = (female ? FEMALE : MALE)[Math.floor(Math.random() * 6)];
  const suit = opts.suit === 'shirt' ? 'staff' : female ? (kid || Math.random() < 0.45 ? 'onepiece' : 'bikini') : 'trunks';
  const cell = SUIT_CELLS[Math.floor(Math.random() * SUIT_CELLS.length)];
  return { kid, gender: female ? 'f' : 'm', base, suit, cell: opts.suit === 'shirt' ? (STAFF_CELL[opts.suitColor] || [11, 2]) : cell };
}

// Animation table: clip + timing + offsets of the inner group (y in metres, pitch in radians)
const POSES = {
  idle: { clip: 'idle' },
  walk: { clip: 'walk', speed: 0.85 },
  run: { clip: 'sprint', speed: 2.4 },
  climb: { clip: 'walk', speed: 0.85 },
  swim: { clip: 'sprint', ts: 0.55, pitch: 1.35, y: 0.62 },
  tread: { clip: 'fall', ts: 0.45, y: -0.05 },
  drown: { clip: 'fall', ts: 1.8, y: 0.05 },
  lie: { clip: 'die', once: true, y: 0.44 },
  slide: { clip: 'sit', y: 0.02 },
  sit: { clip: 'sit', y: 0.42 },
  cheer: { clip: 'emote-yes' },
  angry: { clip: 'emote-no' },
  eat: { clip: 'interact-right', ts: 0.6 },
  bend: { clip: 'pick-up', ts: 0.8 },
  work: { clip: 'interact-right' },
  jump: { clip: 'jump', once: true },
};

export class MiniPerson {
  constructor(look) {
    const base = MINIS.bases[look.base];
    this.isMini = true;
    this.base = base;
    this.look = look;
    const model = SkeletonUtils.clone(base.scene);
    const body = model.getObjectByName(base.bodyName);
    body.geometry = variantGeometry(base, look.suit, look.cell, null);
    body.castShadow = true;
    this.body = body;
    const s = look.kid ? KID : ADULT;
    model.scale.setScalar(s);
    this.model = model;
    this.inner = new THREE.Group();
    this.inner.add(model);
    this.mesh = new THREE.Group();
    this.mesh.add(this.inner);
    this.height = base.height * s;
    this.scale = this.height / 1.7;
    const by = (n) => model.getObjectByName(n);
    this.bones = { root: by('root'), legL: by('leg-left'), legR: by('leg-right'), torso: by('torso'), armL: by('arm-left'), armR: by('arm-right'), head: by('head') };
    this.rest = Object.fromEntries(Object.entries(this.bones).map(([k, b]) => [k, { p: b.position.clone(), q: b.quaternion.clone() }]));
    this.mixer = new THREE.AnimationMixer(model);
    this.actions = {};
    this.cur = null;
    this.curPose = null;
    this.uni = { uWet: { value: 0 } };
    this.rot = null;
    this.ragdoll = null;
    this.play('idle', 0);
  }

  action(clipName) {
    if (!this.actions[clipName]) {
      const clip = THREE.AnimationClip.findByName(MINIS.clips, clipName) || THREE.AnimationClip.findByName(MINIS.clips, 'idle');
      this.actions[clipName] = this.mixer.clipAction(clip);
    }
    return this.actions[clipName];
  }

  play(pose, fade = 0.18) {
    const P = POSES[pose] || POSES.idle;
    const a = this.action(P.clip);
    if (this.cur !== a) {
      a.reset();
      if (P.once) { a.setLoop(THREE.LoopOnce, 1); a.clampWhenFinished = true; } else a.setLoop(THREE.LoopRepeat, Infinity);
      if (this.cur && fade > 0) { a.play(); this.cur.crossFadeTo(a, fade, false); } else { if (this.cur) this.cur.stop(); a.play(); }
      this.cur = a;
    }
    this.curPose = pose;
    this.inner.position.y = P.y || 0;
    this.inner.rotation.x = P.pitch || 0;
    return P;
  }

  animate(pose, dt, speed = 1.25) {
    if (this.ragdoll) return;
    const P = this.curPose === pose ? POSES[pose] || POSES.idle : this.play(pose);
    // shorter legs (kids) need a quicker stride for the same ground speed
    this.cur.timeScale = P.speed ? Math.max(0.4, speed / (P.speed * this.model.scale.x / ADULT)) : P.ts || 1;
    this.mixer.update(dt);
  }

  // ----- ragdoll -----
  startRagdoll(vel, spin = 0) {
    if (this.ragdoll) { this.ragdoll.kick(vel); return this.ragdoll; }
    this.mesh.updateMatrixWorld(true);
    this.body.frustumCulled = false;
    this.ragdoll = new Ragdoll(this, vel, spin);
    return this.ragdoll;
  }
  endRagdoll() {
    const r = this.ragdoll;
    if (!r) return null;
    const out = r.summary();
    this.ragdoll = null;
    for (const [k, b] of Object.entries(this.bones)) { b.position.copy(this.rest[k].p); b.quaternion.copy(this.rest[k].q); }
    this.body.frustumCulled = true;
    if (this.cur) { this.cur.stop(); this.cur = null; }
    this.play('idle', 0);
    return out;
  }

  dispose() {
    this.mixer.stopAllAction();
    this.mixer.uncacheRoot(this.model);
    if (this.mesh.parent) this.mesh.parent.remove(this.mesh);
  }
}
