// Cell grid for placement + guest navigation (A* with path smoothing)
import { GRID_MIN_X, GRID_MIN_Z, GRID_W, GRID_H, PLOT, PARK_MIN, GATE_Z } from '../config.js';

export class Grid {
  constructor() {
    const N = GRID_W * GRID_H;
    this.N = N;
    this.land = new Uint8Array(N);   // 1 owned, 2 public walkway (outside park)
    this.base = new Int32Array(N);   // large object id
    this.prop = new Int32Array(N);   // small prop id
    this.floor = new Int32Array(N);  // path tile id, -1 permanent paving
    this.deck = new Uint8Array(N);
    this.water = new Int32Array(N);  // pool id
    this.block = new Uint8Array(N);  // 1 = blocked for walking
    this.bwalk = new Uint8Array(N);  // base cell is walkable (deck, under high slides)
    this.pblock = new Uint8Array(N); // prop blocks walking
    this.fixed = new Uint8Array(N);  // permanent structures (entrance)
    this.version = 0;
    // A* buffers
    this.gScore = new Float32Array(N);
    this.parent = new Int32Array(N);
    this.stamp = new Uint32Array(N);
    this.closed = new Uint32Array(N);
    this.curStamp = 1;
    this.heap = new Int32Array(N);
    this.heapF = new Float32Array(N);
    this.heapPos = new Int32Array(N);
  }

  idx(ix, iz) { return iz * GRID_W + ix; }
  cellOf(x, z) { return [Math.floor(x - GRID_MIN_X), Math.floor(z - GRID_MIN_Z)]; }
  inBounds(ix, iz) { return ix >= 0 && iz >= 0 && ix < GRID_W && iz < GRID_H; }
  idxAt(x, z) { const ix = Math.floor(x - GRID_MIN_X), iz = Math.floor(z - GRID_MIN_Z); return this.inBounds(ix, iz) ? iz * GRID_W + ix : -1; }
  centerOf(ix, iz) { return [ix + GRID_MIN_X + 0.5, iz + GRID_MIN_Z + 0.5]; }

  setOwnedPlots(owned) {
    this.land.fill(0);
    for (const key of owned) {
      const [i, j] = key.split(',').map(Number);
      const x0 = PARK_MIN + i * PLOT, z0 = PARK_MIN + j * PLOT;
      for (let z = z0; z < z0 + PLOT; z++) for (let x = x0; x < x0 + PLOT; x++) {
        const k = this.idxAt(x + 0.5, z + 0.5);
        if (k >= 0) this.land[k] = 1;
      }
    }
    // Public walkway outside the gate down to the parking lot
    for (let z = GATE_Z; z < 99; z++) for (let x = -14; x < 14; x++) {
      const k = this.idxAt(x + 0.5, z + 0.5);
      if (k >= 0 && !this.land[k]) this.land[k] = 2;
    }
    // Parking lot aisles
    for (let z = 76; z < 99; z++) for (let x = -48; x < 48; x++) {
      const k = this.idxAt(x + 0.5, z + 0.5);
      if (k >= 0 && !this.land[k]) this.land[k] = 2;
    }
    this.recomputeBlock();
  }

  recomputeBlock() {
    const N = this.N;
    for (let k = 0; k < N; k++) {
      let b = 0;
      if (!this.land[k]) b = 1;
      else if (this.water[k]) b = 1;
      else if (this.fixed[k]) b = 1;
      else if (this.base[k] && !this.bwalk[k]) b = 1;
      else if (this.prop[k] && this.pblock[k]) b = 1;
      this.block[k] = b;
    }
    this.version++;
  }

  isWalkable(x, z) {
    const k = this.idxAt(x, z);
    return k >= 0 && !this.block[k];
  }

  // Is this cell plain grass (for grass clumps)?
  isGrass(x, z) {
    const k = this.idxAt(x, z);
    if (k < 0) return true;
    return !this.base[k] && !this.prop[k] && !this.floor[k] && !this.water[k] && !this.deck[k] && !this.fixed[k] && this.land[k] !== 2;
  }

  nearestWalkable(ix, iz, maxR = 6) {
    if (this.inBounds(ix, iz) && !this.block[this.idx(ix, iz)]) return [ix, iz];
    for (let r = 1; r <= maxR; r++) {
      let best = null, bd = 1e9;
      for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
        const x = ix + dx, z = iz + dz;
        if (!this.inBounds(x, z) || this.block[this.idx(x, z)]) continue;
        const d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = [x, z]; }
      }
      if (best) return best;
    }
    return null;
  }

  cellCost(k) {
    if (this.floor[k]) return 0.7;
    if (this.deck[k]) return 0.85;
    if (this.land[k] === 2) return 0.8;
    return 1.15;
  }

  // ---- binary heap ops ----
  _push(k, f) {
    let i = this.heapN++;
    this.heap[i] = k; this.heapF[i] = f; this.heapPos[k] = i;
    this._up(i);
  }
  _up(i) {
    const h = this.heap, hf = this.heapF, hp = this.heapPos;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (hf[p] <= hf[i]) break;
      const tk = h[p], tf = hf[p];
      h[p] = h[i]; hf[p] = hf[i]; hp[h[p]] = p;
      h[i] = tk; hf[i] = tf; hp[tk] = i;
      i = p;
    }
  }
  _pop() {
    const h = this.heap, hf = this.heapF, hp = this.heapPos;
    const top = h[0];
    const n = --this.heapN;
    if (n > 0) {
      h[0] = h[n]; hf[0] = hf[n]; hp[h[0]] = 0;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1, r = l + 1;
        let m = i;
        if (l < n && hf[l] < hf[m]) m = l;
        if (r < n && hf[r] < hf[m]) m = r;
        if (m === i) break;
        const tk = h[m], tf = hf[m];
        h[m] = h[i]; hf[m] = hf[i]; hp[h[m]] = m;
        h[i] = tk; hf[i] = tf; hp[tk] = i;
        i = m;
      }
    }
    return top;
  }

  // Returns array of [x,z] world waypoints or null
  findPath(sx, sz, tx, tz, maxNodes = 30000) {
    let [six, siz] = this.cellOf(sx, sz);
    let [tix, tiz] = this.cellOf(tx, tz);
    const s0 = this.nearestWalkable(six, siz, 8);
    const t0 = this.nearestWalkable(tix, tiz, 6);
    if (!s0 || !t0) return null;
    [six, siz] = s0; [tix, tiz] = t0;
    const W = GRID_W;
    const start = this.idx(six, siz), goal = this.idx(tix, tiz);
    if (start === goal) return [[tx, tz]];
    const stamp = ++this.curStamp;
    const g = this.gScore, par = this.parent, st = this.stamp, cl = this.closed, block = this.block;
    this.heapN = 0;
    g[start] = 0; par[start] = -1; st[start] = stamp;
    const H = (ix, iz) => { const dx = Math.abs(ix - tix), dz = Math.abs(iz - tiz); return (dx + dz + (1.4142 - 2) * Math.min(dx, dz)) * 0.8; };
    this._push(start, H(six, siz) * 1.2);
    let found = false, nodes = 0;
    const DX = [1, -1, 0, 0, 1, 1, -1, -1], DZ = [0, 0, 1, -1, 1, -1, 1, -1];
    while (this.heapN > 0) {
      const cur = this._pop();
      if (cur === goal) { found = true; break; }
      if (cl[cur] === stamp) continue;
      cl[cur] = stamp;
      if (++nodes > maxNodes) break;
      const cx = cur % W, cz = (cur / W) | 0;
      for (let d = 0; d < 8; d++) {
        const nx = cx + DX[d], nz = cz + DZ[d];
        if (nx < 0 || nz < 0 || nx >= W || nz >= GRID_H) continue;
        const nk = nz * W + nx;
        if (block[nk] || cl[nk] === stamp) continue;
        if (d >= 4 && (block[cz * W + nx] || block[nz * W + cx])) continue; // no corner cutting
        const step = (d >= 4 ? 1.4142 : 1) * this.cellCost(nk);
        const ng = g[cur] + step;
        if (st[nk] !== stamp || ng < g[nk]) {
          st[nk] = stamp; g[nk] = ng; par[nk] = cur;
          this._push(nk, ng + H(nx, nz) * 1.2);
        }
      }
    }
    if (!found) return null;
    // reconstruct
    const cells = [];
    for (let k = goal; k !== -1; k = par[k]) cells.push(k);
    cells.reverse();
    // smooth via line of sight
    const pts = [];
    let i = 0;
    const toW = (k) => this.centerOf(k % W, (k / W) | 0);
    pts.push(toW(cells[0]));
    while (i < cells.length - 1) {
      let j = Math.min(cells.length - 1, i + 30);
      const a = toW(cells[i]);
      while (j > i + 1 && !this.lineClear(a[0], a[1], ...toW(cells[j]))) j--;
      pts.push(toW(cells[j]));
      i = j;
    }
    // replace last point with exact target if walkable
    if (this.isWalkable(tx, tz)) pts[pts.length - 1] = [tx, tz];
    pts.shift(); // drop start cell center
    if (!pts.length) pts.push([tx, tz]);
    return pts;
  }

  lineClear(x0, z0, x1, z1) {
    const dx = x1 - x0, dz = z1 - z0;
    const len = Math.hypot(dx, dz);
    const n = Math.ceil(len / 0.35);
    for (let s = 1; s < n; s++) {
      const t = s / n;
      const x = x0 + dx * t, z = z0 + dz * t;
      // check a small radius (people aren't points)
      if (!this.isWalkable(x, z) || !this.isWalkable(x + 0.3, z) || !this.isWalkable(x - 0.3, z) || !this.isWalkable(x, z + 0.3) || !this.isWalkable(x, z - 0.3)) return false;
    }
    return true;
  }

  // Random walkable owned cell (for wandering)
  randomParkPoint(rng = Math.random) {
    for (let t = 0; t < 60; t++) {
      const x = PARK_MIN + rng() * 128, z = PARK_MIN + rng() * 128;
      const k = this.idxAt(x, z);
      if (k >= 0 && this.land[k] === 1 && !this.block[k]) return [x, z];
    }
    return null;
  }
}
