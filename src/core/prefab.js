// Prefab construction: build objects from primitives, merge per material,
// and render many copies efficiently with instancing.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();

function normalizeGeom(g) {
  let out = g.index ? g.toNonIndexed() : g;
  for (const k of Object.keys(out.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') out.deleteAttribute(k);
  if (!out.attributes.uv) {
    const n = out.attributes.position.count;
    out.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  }
  if (!out.attributes.normal) out.computeVertexNormals();
  return out;
}

export class PrefabBuilder {
  constructor() { this.parts = new Map(); }

  // Adds a geometry (consumed) with transform
  add(geom, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
    _e.set(rx, ry, rz, 'YXZ');
    _q.setFromEuler(_e);
    _s.set(sx, sy, sz);
    _p.set(x, y, z);
    _m.compose(_p, _q, _s);
    const g = normalizeGeom(geom);
    g.applyMatrix4(_m);
    if (!this.parts.has(mat)) this.parts.set(mat, []);
    this.parts.get(mat).push(g);
    return this;
  }
  addMatrix(geom, mat, matrix) {
    const g = normalizeGeom(geom);
    g.applyMatrix4(matrix);
    if (!this.parts.has(mat)) this.parts.set(mat, []);
    this.parts.get(mat).push(g);
    return this;
  }
  box(w, h, d, mat, x = 0, y = 0, z = 0, ry = 0, rx = 0, rz = 0) {
    return this.add(new THREE.BoxGeometry(w, h, d), mat, x, y, z, rx, ry, rz);
  }
  // box whose UVs are scaled to world meters (for tiled textures)
  boxUV(w, h, d, mat, x = 0, y = 0, z = 0, ry = 0, uvScale = 1) {
    const g = new THREE.BoxGeometry(w, h, d);
    scaleBoxUV(g, w, h, d, uvScale);
    return this.add(g, mat, x, y, z, 0, ry, 0);
  }
  cyl(rt, rb, h, mat, x = 0, y = 0, z = 0, seg = 12, rx = 0, ry = 0, rz = 0, open = false) {
    return this.add(new THREE.CylinderGeometry(rt, rb, h, seg, 1, open), mat, x, y, z, rx, ry, rz);
  }
  sphere(r, mat, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, ws = 14, hs = 10) {
    return this.add(new THREE.SphereGeometry(r, ws, hs), mat, x, y, z, 0, 0, 0, sx, sy, sz);
  }
  // cylinder between two points
  beam(a, b, r, mat, seg = 8) {
    const dir = new THREE.Vector3().subVectors(b, a);
    const len = dir.length();
    if (len < 1e-4) return this;
    const g = new THREE.CylinderGeometry(r, r, len, seg, 1, false);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    const m = new THREE.Matrix4().compose(new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1));
    return this.addMatrix(g, mat, m);
  }
  build(opts = {}) {
    const parts = [];
    const bbox = new THREE.Box3();
    for (const [mat, geoms] of this.parts) {
      const merged = geoms.length === 1 ? geoms[0] : mergeGeometries(geoms, false);
      merged.computeBoundingBox();
      merged.computeBoundingSphere();
      bbox.union(merged.boundingBox);
      parts.push({ geometry: merged, material: mat, castShadow: opts.castShadow !== false && !mat.transparent, receiveShadow: opts.receiveShadow !== false });
    }
    return { parts, bbox };
  }
}

export function scaleBoxUV(g, w, h, d, s = 1) {
  // BoxGeometry face order: +x, -x, +y, -y, +z, -z (4 verts each)
  const uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) {
    for (let v = 0; v < 4; v++) {
      const i = f * 4 + v;
      uv.setXY(i, uv.getX(i) * dims[f][0] * s, uv.getY(i) * dims[f][1] * s);
    }
  }
  uv.needsUpdate = true;
}

// Instantiate a prefab as regular meshes in a Group
export function instantiate(prefab, opts = {}) {
  const g = new THREE.Group();
  for (const p of prefab.parts) {
    const mat = opts.material || p.material;
    const m = new THREE.Mesh(p.geometry, mat);
    m.castShadow = opts.castShadow ?? p.castShadow;
    m.receiveShadow = p.receiveShadow;
    g.add(m);
  }
  return g;
}

// ---------------------------------------------------------------------------
// Instanced pool: one InstancedMesh per prefab part, growable, swap-remove.
export class InstancePool {
  constructor(prefab, parent, cap = 16, opts = {}) {
    this.opts = opts;
    this.prefab = prefab;
    this.parent = parent;
    this.cap = 0;
    this.count = 0;
    this.meshes = [];
    this.handles = [];
    this._grow(cap);
  }
  _grow(cap) {
    const old = this.meshes;
    this.meshes = this.prefab.parts.map((p, idx) => {
      const im = new THREE.InstancedMesh(p.geometry, p.material, cap);
      im.castShadow = p.castShadow && this.opts.shadows !== false;
      im.receiveShadow = p.receiveShadow;
      im.count = this.count;
      im.frustumCulled = false; // bounds change constantly; cheap enough
      if (p.material.userData.instColor || p.instColor) {
        im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(cap * 3).fill(1), 3);
      }
      if (old[idx]) {
        im.instanceMatrix.array.set(old[idx].instanceMatrix.array.subarray(0, this.count * 16));
        if (old[idx].instanceColor && im.instanceColor) im.instanceColor.array.set(old[idx].instanceColor.array.subarray(0, this.count * 3));
        this.parent.remove(old[idx]);
        old[idx].dispose();
      }
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      this.parent.add(im);
      return im;
    });
    this.cap = cap;
  }
  add(matrix, color) {
    if (this.count >= this.cap) this._grow(this.cap * 2);
    const i = this.count++;
    const h = { i, pool: this };
    this.handles[i] = h;
    for (const im of this.meshes) {
      im.setMatrixAt(i, matrix);
      if (im.instanceColor && color) im.setColorAt(i, color);
      im.count = this.count;
      im.instanceMatrix.needsUpdate = true;
      if (im.instanceColor) im.instanceColor.needsUpdate = true;
    }
    return h;
  }
  setMatrix(h, matrix) {
    for (const im of this.meshes) { im.setMatrixAt(h.i, matrix); im.instanceMatrix.needsUpdate = true; }
  }
  setColor(h, color) {
    for (const im of this.meshes) if (im.instanceColor) { im.setColorAt(h.i, color); im.instanceColor.needsUpdate = true; }
  }
  remove(h) {
    if (!h || h.pool !== this || h.i < 0) return;
    const last = this.count - 1;
    const i = h.i;
    if (i !== last) {
      const lh = this.handles[last];
      for (const im of this.meshes) {
        im.getMatrixAt(last, _m);
        im.setMatrixAt(i, _m);
        if (im.instanceColor) { const c = new THREE.Color(); im.getColorAt(last, c); im.setColorAt(i, c); }
      }
      lh.i = i;
      this.handles[i] = lh;
    }
    this.handles[last] = undefined;
    this.count = last;
    h.i = -1;
    for (const im of this.meshes) {
      im.count = this.count;
      im.instanceMatrix.needsUpdate = true;
      if (im.instanceColor) im.instanceColor.needsUpdate = true;
    }
  }
  setVisible(v) { for (const im of this.meshes) im.visible = v; }
  // For pools that never change after creation: enable frustum culling
  freeze() { for (const im of this.meshes) { im.computeBoundingSphere(); im.frustumCulled = true; } }
}
