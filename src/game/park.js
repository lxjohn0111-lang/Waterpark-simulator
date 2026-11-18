// Park state: placed objects, grid occupancy, economy, rating, persistence.
import * as THREE from 'three';
import { G, bus } from '../core/context.js';
import { Grid } from './grid.js';
import { ITEMS, STAFF, LAND_PRICES } from './catalog.js';
import { getPrefab } from '../world/props.js';
import { instantiate, InstancePool } from '../core/prefab.js';
import { buildRectPool, buildJacuzzi, kidsExtras, waveMachine } from '../world/pools.js';
import { buildSlide, designSlide, SLIDE_TYPES } from '../world/slides.js';
import { setWaterDirt, waveHeight } from '../world/water.js';
import { rotXZ, clamp, rand, fmtMoney, damp } from '../core/utils.js';
import { WATER_Y, START_CASH, START_PLOTS, PLOT, PARK_MIN, GRID_MIN_X, GRID_MIN_Z, GRID_W, SAVE_VERSION, COLORS } from '../config.js';
import { M } from '../core/materials.js';

function newDayStats() {
  return { tickets: 0, food: 0, shops: 0, tips: 0, lockers: 0, bonus: 0, wages: 0, upkeep: 0, build: 0, land: 0, guestsIn: 0, guestsOut: 0, happySum: 0, happyN: 0, rides: 0, swims: 0, sales: 0, peakGuests: 0, trashPicked: 0 };
}

export class Park {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    scene.add(this.root);
    this.grid = new Grid();
    this.objects = new Map();
    this.nextId = 1;
    this.owned = [...START_PLOTS];
    this.cash = START_CASH;
    this.ticketPrice = 15;
    this.foodMult = 1.0;
    this.today = newDayStats();
    this.history = [];
    this.records = { bestDay: 0, maxGuests: 0, totalGuests: 0, totalEarned: 0 };
    this.rating = 2.5;
    this.ratingTarget = 2.5;
    this.ratingParts = { happy: 0.5, clean: 0.8, attractions: 0.3, scenery: 0.2, safety: 0.3 };
    this.staff = { janitor: 1, lifeguard: 0, pooltech: 0, mechanic: 0 };
    this.instPools = new Map();
    this.lists = { pools: [], slides: [], shops: [], fac: {}, decor: [], lights: [], fireworks: [], fountains: [], all: [] };
    this.holes = [];
    this.appealGrid = new Float32Array(20 * 20);
    this.ratingTimer = 0;
    this.saveTimer = 0;
    this.parkName = 'Splash Haven';
    this.flags = {};
    this.marketing = 0; // remaining minutes of ad campaign
    this._reserveEntrance();
    this.grid.setOwnedPlots(this.owned);
  }

  // ---------------------------------------------------------------- setup
  _reserveEntrance() {
    const g = this.grid;
    // permanent entrance structures block walking
    const block = (x0, z0, x1, z1) => {
      for (let z = z0; z < z1; z++) for (let x = x0; x < x1; x++) { const k = g.idxAt(x + 0.5, z + 0.5); if (k >= 0) g.fixed[k] = 1; }
    };
    block(-9, 62, -6, 66); block(6, 62, 9, 66); // pillars
    block(-6, 63, -3, 66); block(3, 63, 6, 66); // booths
    block(-17, 64, -9, 66); block(9, 64, 17, 66); // front planters/wall
    // reserved walkway inside gate: no building allowed (fixed=2 means "no build but walkable")
    this.reserved = (x, z) => x >= -4 && x < 4 && z >= 56 && z < 64.5;
    // permanent plaza paving
    for (let z = 64; z < 73; z++) for (let x = -14; x < 14; x++) { const k = g.idxAt(x + 0.5, z + 0.5); if (k >= 0 && !g.fixed[k]) g.floor[k] = -1; }
  }

  // ---------------------------------------------------------------- dimensions
  dimsFor(def) {
    if (def.kind === 'pool') {
      const p = def.pool;
      if (p.jacuzzi) return [p.deckHalf * 2, p.deckHalf * 2];
      return [p.W + p.deck * 2, p.L + p.deck * 2];
    }
    if (def.kind === 'slide') { const d = designSlide(def.slide); return [d.w, d.d]; }
    return def.size || [1, 1];
  }
  rotDims(def, rot) { const [w, d] = this.dimsFor(def); return rot % 2 ? [d, w] : [w, d]; }

  // local cell type function for an item: returns 'B' blocked base, 'W' walkable base, 'water', 'deck', 'prop', 'propw', 'floor', or null
  cellType(def, lx, lz, w, d) {
    switch (def.kind) {
      case 'pool': {
        const p = def.pool;
        if (p.jacuzzi) return Math.hypot(lx, lz) < p.R + 0.35 ? 'water' : 'deck';
        const hw = p.W / 2, hl = p.L / 2;
        if (Math.abs(lx) <= hw + 0.01 && Math.abs(lz) <= hl + 0.01) return 'water';
        if (p.wave && lz < -hl - 0.4) return 'B';
        return 'deck';
      }
      case 'slide': {
        const ds = designSlide(def.slide);
        const ix = Math.floor(lx + w / 2), iz = Math.floor(lz + d / 2);
        const v = ds.mask[iz * w + ix];
        return v === 0 ? null : v === 1 ? 'W' : v === 2 ? 'B' : v === 3 ? 'water' : 'deck';
      }
      case 'path': return 'floor';
      case 'prop': return def.blocks ? 'prop' : 'propw';
      default: return 'B';
    }
  }

  // Iterate footprint cells: cb(worldCellX, worldCellZ, type)
  forFootprint(def, x0, z0, rot, cb) {
    const [w, d] = this.dimsFor(def);
    const [W, D] = rot % 2 ? [d, w] : [w, d];
    const cx = x0 + W / 2, cz = z0 + D / 2;
    for (let iz = 0; iz < d; iz++) for (let ix = 0; ix < w; ix++) {
      const lx = ix - w / 2 + 0.5, lz = iz - d / 2 + 0.5;
      const t = this.cellType(def, lx, lz, w, d);
      if (!t) continue;
      const [rx, rz] = rotXZ(lx, lz, rot);
      cb(Math.floor(cx + rx), Math.floor(cz + rz), t);
    }
  }

  canPlace(def, x0, z0, rot, ignoreId = 0) {
    const g = this.grid;
    let reason = null;
    if (def.kind === 'pool' && !def.pool.jacuzzi && this.holes.length >= 38) return { ok: false, reason: 'Too many pools' };
    this.forFootprint(def, x0, z0, rot, (x, z, t) => {
      if (reason) return;
      const k = g.idxAt(x + 0.5, z + 0.5);
      if (k < 0 || g.land[k] !== 1) { reason = 'Outside your land'; return; }
      if (g.fixed[k]) { reason = 'Blocked'; return; }
      const base = g.base[k], prop = g.prop[k];
      const baseOk = !base || base === ignoreId;
      const propOk = !prop || prop === ignoreId;
      if (t === 'floor') { if (!baseOk) reason = 'Blocked'; else if (g.floor[k] > 0 && g.floor[k] !== ignoreId) reason = 'Already paved'; return; }
      if (this.reserved(x + 0.5, z + 0.5)) { reason = 'Keep the entrance clear'; return; }
      if (t === 'prop' || t === 'propw') {
        if (!propOk) { reason = 'Space occupied'; return; }
        if (!baseOk && !(g.deck[k] && def.onDeck)) reason = 'Space occupied';
        return;
      }
      if (!baseOk || !propOk) reason = 'Space occupied';
    });
    return { ok: !reason, reason };
  }

  // ---------------------------------------------------------------- placement
  place(key, x0, z0, rot, opts = {}) {
    const def = ITEMS[key];
    if (!def) return null;
    const id = opts.id || this.nextId++;
    if (opts.id && opts.id >= this.nextId) this.nextId = opts.id + 1;
    const [W, D] = this.rotDims(def, rot);
    const obj = {
      id, key, def, x0, z0, rot, W, D, cx: x0 + W / 2, cz: z0 + D / 2, yaw: rot * Math.PI / 2,
      color: opts.color ?? (def.colorable || def.kind === 'slide' ? COLORS[def.kind === 'slide' ? 'slide' : 'fabric'][Math.floor(Math.random() * 8)] : null),
      seed: opts.seed ?? Math.random(),
      condition: 100, broken: false, dirt: 0, quality: opts.quality ?? 100,
      queue: [], users: new Set(), revenue: 0, sales: 0, visits: 0,
      group: null, inst: null, cells: [],
    };
    obj.toWorld = (lx, lz) => { const [rx, rz] = rotXZ(lx, lz, obj.rot); return [obj.cx + rx, obj.cz + rz]; };
    obj.toLocal = (x, z) => rotXZ(x - obj.cx, z - obj.cz, (4 - obj.rot) % 4);
    this._buildVisual(obj);
    this._occupy(obj);
    this._registerLists(obj, true);
    this.objects.set(id, obj);
    if (!opts.free) {
      this.spend(def.cost, 'build');
    }
    if (!opts.silent) bus.emit('placed', obj);
    this._dirtyNav();
    return obj;
  }

  _buildVisual(obj) {
    const def = obj.def;
    const pos = new THREE.Vector3(obj.cx, 0, obj.cz);
    if (def.kind === 'pool') {
      const p = def.pool;
      let built;
      if (p.jacuzzi) built = buildJacuzzi(p);
      else {
        const pdef = { ...p };
        if (p.kids) pdef.extras = (b) => kidsExtras(b);
        if (p.wave) pdef.extras = (b) => waveMachine(b, p.W, p.L);
        if (p.band) pdef.band = M.poolTileDark;
        built = buildRectPool(pdef);
      }
      built.group.position.copy(pos);
      built.group.rotation.y = obj.yaw;
      this.root.add(built.group);
      obj.group = built.group;
      const meta = built.meta;
      obj.pool = {
        shape: meta.shape, hw: meta.hw, hl: meta.hl, r: meta.r, floorFn: meta.floorFn, beach: meta.beach,
        water: built.water, mat: built.water.material, swimmers: new Set(), wave: !!p.wave, kids: !!p.kids, jacuzzi: !!p.jacuzzi,
        capacity: def.capacity || 10, depthMax: meta.depthMax,
      };
      obj.waveAt = p.wave ? (x, z) => { const [lx, lz] = obj.toLocal(x, z); return waveHeight(lx, lz, G.time.real); } : null;
      obj.poolLocal = obj.toLocal;
      obj.poolToWorld = obj.toWorld;
      setWaterDirt(obj.pool.mat, 1 - obj.quality / 100);
    } else if (def.kind === 'slide') {
      const built = buildSlide(def.slide, obj.color);
      built.group.position.copy(pos);
      built.group.rotation.y = obj.yaw;
      this.root.add(built.group);
      obj.group = built.group;
      const ds = built.design;
      const m = new THREE.Matrix4().makeRotationY(obj.yaw).setPosition(pos);
      obj.slide = {
        design: ds, def: SLIDE_TYPES[def.slide], matrix: m, riders: [], nextDispatch: [0, 0], lane: 0,
        entrance: ds.entrance.clone().applyMatrix4(m), exit: ds.exit.clone().applyMatrix4(m), exitWater: ds.exitWater.clone().applyMatrix4(m),
        queueDir: ds.queueDir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), obj.yaw),
        climb: ds.climb.map((p) => p.clone().applyMatrix4(m)),
        top: ds.climb[ds.climb.length - 1].clone().applyMatrix4(m),
      };
      // landing pool acts as a pool for swimming physics
      const pw = ds.pool.x1 - ds.pool.x0, pl = ds.pool.z1 - ds.pool.z0;
      const pcx = (ds.pool.x0 + ds.pool.x1) / 2, pcz = (ds.pool.z0 + ds.pool.z1) / 2;
      obj.landing = { lcx: pcx, lcz: pcz, hw: pw / 2, hl: pl / 2, depth: ds.pool.depth, water: built.water, mat: built.water.material };
    } else if (def.kind === 'prop' || def.kind === 'path') {
      const pf = getPrefab(def.prefab);
      let pool = this.instPools.get(def.prefab);
      if (!pool) { pool = new InstancePool(pf, this.root, 32); this.instPools.set(def.prefab, pool); }
      const yaw = obj.yaw + (def.randomYaw ? obj.seed * Math.PI * 2 : 0);
      const sc = def.prefab === 'palm' ? 0.85 + obj.seed * 0.45 : def.prefab === 'rock' ? 0.8 + obj.seed * 0.6 : 1;
      const m = new THREE.Matrix4().compose(pos, new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw), new THREE.Vector3(sc, sc, sc));
      obj.inst = pool.add(m, obj.color != null ? new THREE.Color(obj.color) : new THREE.Color(0xffffff));
      obj.instPool = pool;
      obj.matrix = m;
    } else {
      const g = instantiate(getPrefab(def.prefab));
      g.position.copy(pos);
      g.rotation.y = obj.yaw;
      this.root.add(g);
      obj.group = g;
    }
    // bounding box for picking
    obj.bbox = new THREE.Box3();
    if (obj.group) { obj.group.updateMatrixWorld(true); obj.bbox.setFromObject(obj.group); }
    else {
      const pf = getPrefab(def.prefab);
      obj.bbox.copy(pf.bbox).applyMatrix4(obj.matrix);
      if (def.kind === 'path') { obj.bbox.min.y = 0; obj.bbox.max.y = 0.12; }
    }
    // night lights
    if (def.light) {
      const [lx, lz] = def.prefab === 'lamp' ? obj.toWorld(0, 0.75) : obj.toWorld(0, 0);
      obj.light = { x: lx, y: def.prefab === 'lamp' ? 3.9 : 2.3, z: lz, color: def.lightColor || 0xffd7a0, intensity: def.prefab === 'lamp' ? 70 : 22, range: def.prefab === 'lamp' ? 24 : 12 };
    }
    this._setupPoints(obj);
  }

  _setupPoints(obj) {
    const def = obj.def;
    const W = (lx, lz, y = 0) => { const [x, z] = obj.toWorld(lx, lz); return new THREE.Vector3(x, y, z); };
    const [w, d] = this.dimsFor(def);
    obj.points = {};
    if (def.kind === 'shop' || def.facility === 'lockers' || def.facility === 'firstaid') {
      obj.points.service = W(0, d / 2 + 0.6);
      obj.points.queueDir = W(0, d / 2 + 1.6).sub(obj.points.service).normalize();
      obj.points.clerk = W(0, d / 2 - 1.0);
    }
    if (def.facility === 'toilet') {
      obj.points.doors = [W(-0.9, d / 2 + 0.5), W(0.9, d / 2 + 0.5)];
      obj.points.service = W(0, d / 2 + 1.0);
      obj.points.queueDir = W(0, d / 2 + 2).sub(obj.points.service).normalize();
    }
    if (def.facility === 'shower') {
      obj.points.spots = [-0.9, 0, 0.9].map((x) => ({ pos: W(x, -0.15), yaw: obj.yaw + Math.PI, taken: null, head: W(x, -0.18, 2.24) }));
      obj.points.service = W(0, d / 2 + 0.7);
      obj.points.queueDir = W(0, d / 2 + 2).sub(obj.points.service).normalize();
    }
    if (def.facility === 'sunbed') obj.points.seats = [{ pos: W(0, 0), approach: W(0.9, 0), yaw: obj.yaw + Math.PI, taken: null, pose: 'lie' }];
    if (def.facility === 'bench') obj.points.seats = [-0.45, 0.45].map((x) => ({ pos: W(x, 0.05), approach: W(x, 0.8), yaw: obj.yaw, taken: null, pose: 'sit' }));
    if (def.facility === 'picnic') obj.points.seats = [[-0.5, 0.65, Math.PI], [0.5, 0.65, Math.PI], [-0.5, -0.65, 0], [0.5, -0.65, 0]].map(([x, z, a]) => ({ pos: W(x, z), approach: W(x, z * 1.9), yaw: obj.yaw + a, taken: null, pose: 'sit' }));
    if (def.facility === 'lifeguard') { obj.points.seat = W(0, -0.2, 2.6); obj.points.ladder = W(0, 1.4); obj.points.guard = null; }
    if (def.facility === 'bin') obj.points.use = W(0, 0.8);
    if (def.fountain) obj.points.view = [0, 1, 2, 3, 4, 5].map((i) => { const a = (i / 6) * Math.PI * 2; return W(Math.cos(a) * 2.3, Math.sin(a) * 2.3); });
    if (def.kind === 'pool' && !def.pool.jacuzzi) obj.points.center = W(0, 0);
  }

  _occupy(obj) {
    const g = this.grid;
    obj.cells = [];
    this.forFootprint(obj.def, obj.x0, obj.z0, obj.rot, (x, z, t) => {
      const k = g.idxAt(x + 0.5, z + 0.5);
      if (k < 0) return;
      obj.cells.push([k, t]);
      if (t === 'floor') {
        g.floor[k] = obj.id;
      } else if (t === 'prop' || t === 'propw') {
        g.prop[k] = obj.id; g.pblock[k] = t === 'prop' ? 1 : 0;
      } else {
        // base: remove any path tile under it
        if (g.floor[k] > 0) { const pobj = this.objects.get(g.floor[k]); if (pobj) this.remove(pobj, 0, true); }
        g.base[k] = obj.id;
        g.bwalk[k] = t === 'W' || t === 'deck' ? 1 : 0;
        if (t === 'water') g.water[k] = obj.id;
        if (t === 'deck') g.deck[k] = 1;
      }
    });
    // ground holes
    if (obj.pool && obj.pool.shape === 'rect') {
      const p = obj.pool;
      const c = [[-p.hw, -p.hl], [p.hw, p.hl]].map(([lx, lz]) => obj.toWorld(lx, lz));
      obj.hole = { x0: Math.min(c[0][0], c[1][0]), z0: Math.min(c[0][1], c[1][1]), x1: Math.max(c[0][0], c[1][0]), z1: Math.max(c[0][1], c[1][1]) };
    } else if (obj.pool && obj.pool.shape === 'circle') {
      obj.hole = { circle: true, x: obj.cx, z: obj.cz, r: obj.pool.r + 0.02 };
    } else if (obj.landing) {
      const L = obj.landing;
      const c = [[L.lcx - L.hw, L.lcz - L.hl], [L.lcx + L.hw, L.lcz + L.hl]].map(([lx, lz]) => obj.toWorld(lx, lz));
      obj.hole = { x0: Math.min(c[0][0], c[1][0]), z0: Math.min(c[0][1], c[1][1]), x1: Math.max(c[0][0], c[1][0]), z1: Math.max(c[0][1], c[1][1]) };
      // treat the landing pool as a rect pool for physics
      obj.pool = {
        shape: 'rect', hw: L.hw, hl: L.hl, floorFn: () => -L.depth, water: L.water, mat: L.mat, swimmers: new Set(), landing: true,
        lcx: L.lcx, lcz: L.lcz, capacity: 4, depthMax: L.depth,
      };
      // landing pool local coords are offset; provide converters
      obj.poolLocal = (x, z) => { const [lx, lz] = obj.toLocal(x, z); return [lx - L.lcx, lz - L.lcz]; };
      obj.poolToWorld = (lx, lz) => obj.toWorld(lx + L.lcx, lz + L.lcz);
    }
    if (obj.hole) { this.holes.push(obj.hole); this._updateHoles(); }
  }

  _updateHoles() { G.terrain && G.terrain.setHoles(this.holes); }

  _release(obj) {
    const g = this.grid;
    for (const [k, t] of obj.cells) {
      if (t === 'floor') { if (g.floor[k] === obj.id) g.floor[k] = 0; }
      else if (t === 'prop' || t === 'propw') { if (g.prop[k] === obj.id) { g.prop[k] = 0; g.pblock[k] = 0; } }
      else if (g.base[k] === obj.id) { g.base[k] = 0; g.bwalk[k] = 0; g.water[k] = 0; g.deck[k] = 0; }
    }
    obj.cells = [];
    if (obj.hole) { const i = this.holes.indexOf(obj.hole); if (i >= 0) this.holes.splice(i, 1); obj.hole = null; this._updateHoles(); }
  }

  remove(obj, refundFrac = 0.5, silent = false) {
    if (!this.objects.has(obj.id)) return;
    // props sitting on a pool deck go too when the pool is removed
    if (obj.def.kind === 'pool' || obj.def.kind === 'slide') {
      const onDeck = new Set();
      for (const [k, t] of obj.cells) if (t === 'deck' && this.grid.prop[k]) onDeck.add(this.grid.prop[k]);
      for (const pid of onDeck) { const po = this.objects.get(pid); if (po) this.remove(po, refundFrac, true); }
    }
    this._release(obj);
    this._registerLists(obj, false);
    if (obj.group) { this.root.remove(obj.group); if (obj.def.kind === 'pool' || obj.def.kind === 'slide') disposeGroup(obj.group); }
    if (obj.inst) obj.instPool.remove(obj.inst);
    this.objects.delete(obj.id);
    if (refundFrac > 0) this.earn(Math.round(obj.def.cost * refundFrac), 'bonus', false);
    bus.emit('removed', obj);
    if (!silent) this._dirtyNav();
    else this._dirtyNav();
  }

  _registerLists(obj, add) {
    const L = this.lists;
    const def = obj.def;
    const upd = (arr) => { if (add) arr.push(obj); else { const i = arr.indexOf(obj); if (i >= 0) arr.splice(i, 1); } };
    upd(L.all);
    if (def.kind === 'pool') upd(L.pools);
    if (def.kind === 'slide') upd(L.slides);
    if (def.kind === 'shop') upd(L.shops);
    if (def.facility) { L.fac[def.facility] = L.fac[def.facility] || []; upd(L.fac[def.facility]); }
    if (def.appeal && (def.cat === 'decor' || def.cat === 'paths')) upd(L.decor);
    if (obj.light) upd(L.lights);
    if (def.fireworks) upd(L.fireworks);
    if (def.fountain) upd(L.fountains);
    if (G.env) G.env.lightAnchors = L.lights.map((o) => o.light);
    this._rebuildAppeal();
  }

  _dirtyNav() {
    this.grid.recomputeBlock();
    bus.emit('navChanged');
    if (G.terrain) G.terrain.refreshGrass(G.camera ? G.camera.position : new THREE.Vector3(), true);
  }

  // scenery appeal on an 8m grid
  _rebuildAppeal() {
    const A = this.appealGrid;
    A.fill(0);
    for (const o of this.lists.all) {
      const ap = o.def.appeal || 0;
      if (!ap) continue;
      const r = o.def.kind === 'slide' || o.def.kind === 'pool' ? 2 : 1;
      const ix = Math.floor((o.cx + 80) / 8), iz = Math.floor((o.cz + 80) / 8);
      for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
        const x = ix + dx, z = iz + dz;
        if (x < 0 || z < 0 || x >= 20 || z >= 20) continue;
        A[z * 20 + x] += ap / (1 + Math.abs(dx) + Math.abs(dz));
      }
    }
  }
  appealAt(x, z) {
    const ix = Math.floor((x + 80) / 8), iz = Math.floor((z + 80) / 8);
    if (ix < 0 || iz < 0 || ix >= 20 || iz >= 20) return 0;
    return this.appealGrid[iz * 20 + ix];
  }

  // ---------------------------------------------------------------- money
  earn(amount, cat = 'other', popup = true, pos = null) {
    if (amount <= 0) return;
    this.cash += amount;
    if (this.today[cat] !== undefined) this.today[cat] += amount;
    this.records.totalEarned += amount;
    bus.emit('cash', { delta: amount, cat, pos, popup });
  }
  spend(amount, cat = 'build') {
    if (amount <= 0) return;
    this.cash -= amount;
    if (this.today[cat] !== undefined) this.today[cat] += amount;
    bus.emit('cash', { delta: -amount, cat });
  }
  canAfford(a) { return this.cash >= a; }

  landPrice() { return LAND_PRICES[Math.min(LAND_PRICES.length - 1, this.owned.length - 3)] || 150000; }
  canBuyPlot(key) {
    if (this.owned.includes(key)) return false;
    const [i, j] = key.split(',').map(Number);
    if (i < 0 || j < 0 || i > 3 || j > 3) return false;
    return [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([a, b]) => this.owned.includes(`${i + a},${j + b}`));
  }
  buyPlot(key) {
    const price = this.landPrice();
    if (!this.canBuyPlot(key) || this.cash < price) return false;
    this.spend(price, 'land');
    this.owned.push(key);
    this.grid.setOwnedPlots(this.owned);
    this._dirtyNav();
    G.terrain.rebuildFence(this.owned);
    G.terrain.rebuildSaleSigns(this.owned, () => this.landPrice());
    bus.emit('landBought', key);
    return true;
  }

  // ---------------------------------------------------------------- queries
  poolAt(x, z) {
    // returns {obj, lx, lz, floorY} if (x,z) is over pool water
    const k = this.grid.idxAt(x, z);
    if (k < 0) return null;
    // check neighbouring cells' pools (water edges)
    const ids = new Set();
    for (const [dx, dz] of [[0, 0], [0.6, 0], [-0.6, 0], [0, 0.6], [0, -0.6]]) { const kk = this.grid.idxAt(x + dx, z + dz); if (kk >= 0 && this.grid.water[kk]) ids.add(this.grid.water[kk]); }
    for (const id of ids) {
      const o = this.objects.get(id);
      if (!o || !o.pool) continue;
      const [lx, lz] = o.poolLocal(x, z);
      const p = o.pool;
      if (p.shape === 'circle') { if (Math.hypot(lx, lz) < p.r) return { obj: o, lx, lz, floorY: p.floorFn(lx, lz) }; }
      else if (Math.abs(lx) < p.hw && Math.abs(lz) < p.hl) return { obj: o, lx, lz, floorY: p.floorFn(lx, lz) };
    }
    return null;
  }

  // random point inside a pool's water (world coords) where depth suits
  randomSwimPoint(o, kid = false) {
    const p = o.pool;
    for (let t = 0; t < 12; t++) {
      let lx, lz;
      if (p.shape === 'circle') { const a = Math.random() * 6.28, r = Math.sqrt(Math.random()) * (p.r - 0.5); lx = Math.cos(a) * r; lz = Math.sin(a) * r; }
      else { lx = (Math.random() - 0.5) * (p.hw * 2 - 1.0); lz = (Math.random() - 0.5) * (p.hl * 2 - 1.0); }
      const fy = p.floorFn(lx, lz);
      if (kid && fy < -1.1 && !p.kids) continue;
      if (fy > WATER_Y - 0.25) continue;
      const [x, z] = o.poolToWorld(lx, lz);
      return new THREE.Vector3(x, 0, z);
    }
    return null;
  }

  // nearest deck (walkable) point next to the pool water from a world position
  poolEdgePoint(o, x, z) {
    let best = null, bd = 1e9;
    for (const [k, t] of o.cells) {
      if (t !== 'deck') continue;
      if (this.grid.block[k] || this.grid.prop[k]) continue;
      const ix = k % GRID_W, iz = Math.floor(k / GRID_W);
      const wx = ix + GRID_MIN_X + 0.5, wz = iz + GRID_MIN_Z + 0.5;
      // must touch water
      let touches = false;
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const kk = this.grid.idxAt(wx + dx, wz + dz); if (kk >= 0 && this.grid.water[kk] === o.id) touches = true; }
      if (!touches) continue;
      const dd = (wx - x) ** 2 + (wz - z) ** 2;
      if (dd < bd) { bd = dd; best = new THREE.Vector3(wx, 0, wz); }
    }
    return best;
  }

  // closest point in the water just inside the edge
  waterEntryFrom(o, deckPt) {
    const p = o.pool;
    let [lx, lz] = o.poolLocal(deckPt.x, deckPt.z);
    if (p.shape === 'circle') { const r = Math.hypot(lx, lz) || 1; lx = (lx / r) * (p.r - 0.6); lz = (lz / r) * (p.r - 0.6); }
    else { lx = clamp(lx, -p.hw + 0.6, p.hw - 0.6); lz = clamp(lz, -p.hl + 0.6, p.hl - 0.6); }
    const [x, z] = o.poolToWorld(lx, lz);
    return new THREE.Vector3(x, 0, z);
  }

  pickObject(ray, maxDist = 30, filter = null) {
    let best = null, bd = maxDist;
    const hit = new THREE.Vector3();
    for (const o of this.lists.all) {
      if (filter && !filter(o)) continue;
      if (ray.intersectBox(o.bbox, hit)) {
        const d = hit.distanceTo(ray.origin);
        // prefer small objects when overlapping big ones (e.g. props on pool decks)
        const bias = o.def.kind === 'pool' || o.def.kind === 'slide' ? 2.5 : 0;
        if (d + bias < bd) { bd = d + bias; best = o; }
      }
    }
    return best;
  }

  // ---------------------------------------------------------------- simulation tick (game minutes)
  tick(dtMin, dtReal) {
    // pools: quality drops with swimmers
    for (const o of this.lists.pools.concat(this.lists.slides)) {
      if (!o.pool) continue;
      const swimmers = o.pool.swimmers.size;
      const before = o.quality;
      o.quality = clamp(o.quality - swimmers * 0.045 * dtMin - 0.004 * dtMin * (G.env && G.env.weather === 'rain' ? 3 : 1), 0, 100);
      if (Math.floor(before / 6) !== Math.floor(o.quality / 6)) this.refreshPoolLook(o);
    }
    for (const o of this.lists.slides) {
      if (o.broken) continue;
    }
    if (this.marketing > 0) this.marketing = Math.max(0, this.marketing - dtMin);
    // rating
    this.ratingTimer -= dtReal;
    if (this.ratingTimer <= 0) { this.ratingTimer = 1.5; this.computeRating(); }
    this.rating = damp(this.rating, this.ratingTarget, 0.5, dtReal);
  }

  refreshPoolLook(o) {
    const dirt = 1 - o.quality / 100;
    setWaterDirt(o.pool.mat, Math.pow(dirt, 0.8));
    const area = o.pool.shape === 'circle' ? Math.PI * o.pool.r * o.pool.r : o.pool.hw * o.pool.hl * 4;
    G.effects && G.effects.setPoolDebris(o, Math.round(Math.max(0, dirt - 0.15) * area * 1.1));
  }

  computeRating() {
    const guests = G.guests ? G.guests.list : [];
    const n = guests.length;
    let hs = 0;
    for (const g of guests) hs += g.happiness;
    const happy = n ? hs / n / 100 : 0.6;
    const trash = G.effects ? G.effects.trash.length : 0;
    let pq = 0, pc = 0;
    for (const o of this.lists.pools) { pq += o.quality; pc++; }
    for (const o of this.lists.slides) { pq += o.quality; pc++; }
    const toiletsDirty = (this.lists.fac.toilet || []).reduce((a, o) => a + o.dirt, 0) / Math.max(1, (this.lists.fac.toilet || []).length);
    const clean = clamp(1 - trash / (12 + n * 0.35), 0, 1) * 0.5 + (pc ? pq / pc / 100 : 1) * 0.35 + (1 - toiletsDirty / 100) * 0.15;
    const pools = this.lists.pools.length, slides = this.lists.slides.length;
    const broken = this.lists.slides.filter((o) => o.broken).length;
    const variety = new Set(this.lists.all.filter((o) => o.def.kind === 'pool' || o.def.kind === 'slide' || o.def.kind === 'shop').map((o) => o.key)).size;
    const attractions = clamp((pools * 1.0 + (slides - broken) * 1.4 + variety * 0.6) / 14, 0, 1);
    let appeal = 0;
    for (const o of this.lists.all) appeal += o.def.appeal || 0;
    const area = this.owned.length * PLOT * PLOT;
    const scenery = clamp(appeal / (area / 45), 0, 1);
    const f = this.lists.fac;
    const lifeguardCover = this.staff.lifeguard > 0 && (f.lifeguard || []).length ? Math.min(1, this.staff.lifeguard / Math.max(1, pools * 0.5)) : 0;
    const safety = clamp((f.toilet && f.toilet.length ? 0.3 : 0) + lifeguardCover * 0.35 + (f.firstaid && f.firstaid.length ? 0.2 : 0) + Math.min(0.15, (f.bin || []).length * 0.02), 0, 1);
    this.ratingParts = { happy, clean, attractions, scenery, safety };
    const r = happy * 0.36 + clean * 0.22 + attractions * 0.22 + scenery * 0.1 + safety * 0.1;
    this.ratingTarget = clamp(r * 5.05, 0.5, 5);
  }

  // ---------------------------------------------------------------- daily
  endOfDay() {
    // wages & upkeep
    let wages = 0;
    for (const [k, n] of Object.entries(this.staff)) wages += STAFF[k].wage * n;
    let upkeep = 0;
    for (const o of this.lists.all) upkeep += o.def.upkeep || 0;
    this.spend(wages, 'wages');
    this.spend(upkeep, 'upkeep');
    const t = this.today;
    const income = t.tickets + t.food + t.shops + t.tips + t.lockers + t.bonus;
    const expenses = t.wages + t.upkeep + t.build + t.land;
    const profit = income - t.wages - t.upkeep;
    const summary = { day: G.time.day, income, expenses, profit, stats: { ...t }, rating: this.rating, cash: this.cash, newRecord: profit > this.records.bestDay && G.time.day > 1 };
    if (profit > this.records.bestDay) this.records.bestDay = profit;
    this.history.push({ day: G.time.day, income, profit, guests: t.guestsIn, rating: this.rating });
    if (this.history.length > 14) this.history.shift();
    this.today = newDayStats();
    return summary;
  }

  // ---------------------------------------------------------------- persistence
  serialize() {
    const objs = [];
    for (const o of this.objects.values()) objs.push([o.key, o.x0, o.z0, o.rot, o.color, Math.round(o.seed * 1000) / 1000, Math.round(o.quality), Math.round(o.condition), o.id]);
    return {
      v: SAVE_VERSION, objs, owned: this.owned, cash: Math.round(this.cash), ticket: this.ticketPrice, food: this.foodMult,
      staff: this.staff, history: this.history, records: this.records, today: this.today, flags: this.flags, marketing: this.marketing,
    };
  }
  restore(data) {
    this.owned = data.owned || [...START_PLOTS];
    this.grid.setOwnedPlots(this.owned);
    this.cash = data.cash ?? START_CASH;
    this.ticketPrice = data.ticket ?? 15;
    this.foodMult = data.food ?? 1;
    this.staff = Object.assign({ janitor: 0, lifeguard: 0, pooltech: 0, mechanic: 0 }, data.staff || {});
    this.history = data.history || [];
    this.records = Object.assign(this.records, data.records || {});
    this.today = Object.assign(newDayStats(), data.today || {});
    this.flags = data.flags || {};
    this.marketing = data.marketing || 0;
    for (const [key, x0, z0, rot, color, seed, quality, condition, id] of data.objs || []) {
      if (!ITEMS[key]) continue;
      const ok = this.canPlace(ITEMS[key], x0, z0, rot).ok;
      if (!ok) continue;
      const o = this.place(key, x0, z0, rot, { free: true, silent: true, color, seed, quality, id });
      if (o) { o.condition = condition ?? 100; if (o.pool) this.refreshPoolLook(o); }
    }
    this._dirtyNav();
  }
}

// Pools and slides build unique geometry; dispose it when demolished.
export function disposeGroup(g) {
  g.traverse((o) => {
    if (o.isMesh) {
      if (o.geometry) o.geometry.dispose();
      if (o.material && o.material.userData && o.material.userData.isWater) o.material.dispose();
    }
  });
}
