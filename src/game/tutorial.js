// Guided first play: one clear step at a time. A beacon and arrows painted on the ground lead
// the way; once the player gets there a short line says exactly what to do. When the tutorial
// is over the same card shows the current park goal (with arrows where a goal has a place).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { G, bus } from '../core/context.js';
import { fmtMoney, rand, clamp } from '../core/utils.js';

const $ = (id) => document.getElementById(id);
const K = (k) => `<kbd>${k}</kbd>`;          // keyboard key
const B = (b) => `<b class="tbtn">${b}</b>`;  // on-screen button (phones)
const touch = () => G.isTouch;

// ------------------------------------------------------------------ helpers
const P = () => G.player;
const dist = (a) => Math.hypot(a.x - P().pos.x, a.z - P().pos.z);

// a free, walkable spot around the player, preferably in front of them
function spotNear(minR, maxR, ahead = true) {
  const grid = G.park.grid, p = P();
  for (let t = 0; t < 60; t++) {
    const a = (ahead ? p.yaw : rand(0, 6.28)) + rand(-0.5, 0.5) * (t < 15 ? 1 : 4);
    const r = rand(minR, maxR);
    const x = p.pos.x - Math.sin(a) * r, z = p.pos.z - Math.cos(a) * r;
    const k = grid.idxAt(x, z);
    if (k >= 0 && grid.land[k] === 1 && !grid.block[k] && !G.park.poolAt(x, z) && grid.lineClear(p.pos.x, p.pos.z, x, z)) return new THREE.Vector3(x, 0, z);
  }
  for (let t = 0; t < 60; t++) {
    const pt = G.park.grid.randomParkPoint();
    if (pt && Math.hypot(pt[0] - p.pos.x, pt[1] - p.pos.z) < maxR * 2.5) return new THREE.Vector3(pt[0], 0, pt[1]);
  }
  return new THREE.Vector3(p.pos.x, 0, p.pos.z - 4);
}
function nearest(list, maxD = 1e9) {
  let best = null, bd = maxD;
  for (const o of list) { const d = dist(o); if (d < bd) { bd = d; best = o; } }
  return best;
}
const nearestTrash = (maxD) => nearest(G.effects.trash, maxD);
const nearestCoin = (maxD) => nearest(G.effects.coins.filter((c) => c.vy === 0 || c.t > 0.8), maxD);
function nearestSlide() {
  const list = G.park.lists.slides.filter((o) => !o.broken).map((o) => ({ x: o.slide.entrance.x, z: o.slide.entrance.z, o }));
  return nearest(list);
}
function nearestPool() {
  let best = null, bd = 1e9;
  for (const o of G.park.lists.pools) { if (o.pool.jacuzzi) continue; const d = Math.hypot(o.cx - P().pos.x, o.cz - P().pos.z); if (d < bd) { bd = d; best = o; } }
  return best;
}
function nearestDodger() {
  return nearest(G.guests.list.filter((g) => g.dodger && g.inPark && !g.dead && !g.hidden).map((g) => ({ x: g.pos.x, z: g.pos.z, y: (g.posY || 0) + 2.1 * g.scale })));
}
function guestTarget(g) { return g && !g.dead ? { x: g.pos.x, z: g.pos.z, y: (g.posY || 0) + 2.1 * g.scale } : null; }

function ensureLitter(n) {
  const fx = G.effects;
  let have = fx.trash.filter((t) => dist(t) < 16).length;
  for (let i = 0; have < n && i < 12; i++) { const p = spotNear(3, 9); fx.addTrash(p.x, p.z); have++; }
}
function coinTrail(n) {
  const p = P();
  const s = spotNear(5, 7);
  const dx = s.x - p.pos.x, dz = s.z - p.pos.z, l = Math.hypot(dx, dz) || 1;
  for (let i = 0; i < n; i++) {
    const t = 2.2 + i * 1.3;
    let x = p.pos.x + dx / l * t, z = p.pos.z + dz / l * t;
    if (!G.park.grid.isWalkable(x, z)) { const q = spotNear(2, 8); x = q.x; z = q.z; }
    G.effects.addCoin(x, 1.3, z, Math.round(rand(6, 12)));
  }
}

// ------------------------------------------------------------------ steps
// go(): text while walking there · now(): text once there · target(): where the arrows point
const STEPS = [
  {
    id: 'walk', title: 'Welcome, park owner!', cash: 50, xp: 15,
    start(S) { S.spot = G.time.day === 1 && Math.hypot(P().pos.x, P().pos.z - 59.5) < 3 ? new THREE.Vector3(0, 0, 52.5) : spotNear(6, 8); },
    target: (S) => S.spot, reach: 1.7, reachDone: true,
    go: () => (touch() ? `Drag the ${B('JOYSTICK')} to walk and swipe the screen to look. Follow the yellow arrows!` : `Walk with ${K('W')}${K('A')}${K('S')}${K('D')} and look around with the mouse. Follow the yellow arrows!`),
  },
  {
    id: 'litter', title: 'Pick up litter', count: 3, ev: 'trashPicked', cash: 100, xp: 25,
    start() { ensureLitter(3); P().setTool(0); },
    tick(S, dt) { S.chk = (S.chk || 0) - dt; if (S.chk <= 0) { S.chk = 1; if (!nearestTrash(30)) ensureLitter(2); } },
    target: () => nearestTrash(40), reach: 3.4,
    go: () => 'Litter makes guests unhappy. Walk to the litter.',
    now: () => (touch() ? `Point the dot at the litter and tap ${B('PICK UP')}` : `Look at the litter and press ${K('E')}`),
  },
  {
    id: 'coins', title: 'Collect the tips', count: 4, ev: 'coinCollected', cash: 100, xp: 25,
    start() { coinTrail(5); },
    tick(S, dt) { S.chk = (S.chk || 0) - dt; if (S.chk <= 0) { S.chk = 1; if (!nearestCoin(40)) coinTrail(4); } },
    target: () => nearestCoin(60), reach: 3.5,
    go: () => 'Happy guests leave tip coins. Go and grab them!',
    now: () => 'Just walk through the coins.',
  },
  {
    id: 'dodger', title: 'Stop the fare dodger!', ev: 'dodgerCaught', cash: 0, xp: 40,
    start(S) { S.g = spawnDodger(); P().setTool(0); },
    tick(S) {
      const g = S.g;
      if (!g || g.dead || (!g.dodger && !g.ragdoll)) { if (!g || g.dead) S.g = spawnDodger(); return; }
      // between sprints they stop and taunt you instead of wandering off
      if (g.dodger && !g.fleeing && !g.ragdoll) { g.decideCD = Math.max(g.decideCD || 0, 1); if (!g.task) g.pose = 'cheer'; }
    },
    // phones: the BONK / CATCH buttons appear within 2.8 m, so that is where the "do it" text starts
    target: (S) => guestTarget(S.g), reach: () => (touch() ? 2.8 : 5),
    go: () => (touch() ? `This guest sneaked in without paying! Push the ${B('JOYSTICK')} all the way to sprint after them.` : `This guest sneaked in without paying! Hold ${K('Shift')} to sprint after them.`),
    now: () => (touch() ? `Tap ${B('BONK')} or sprint right into them to knock them over!` : `Sprint into them to knock them over, or ${K('Left click')} to bonk them!`),
    doneMsg: 'Caught! Grab the fine coins. (Only bonk cheaters: paying guests hate it.)',
  },
  {
    id: 'ride', title: 'Test your water slide', ev: 'playerRide', cash: 150, xp: 30,
    skip: () => !G.park.lists.slides.length,
    start() { for (const o of G.park.lists.slides) { if (o.broken || o.condition < 60) { o.broken = false; o.condition = 100; } } },
    target: () => nearestSlide(), reach: 3,
    go: () => 'Every owner tests their rides. Walk to the slide entrance.',
    now: () => (touch() ? `Tap ${B('RIDE')}!` : `Press ${K('E')} to ride the slide!`),
  },
  {
    id: 'skim', title: 'Clean the pool', count: 4, ev: 'skimSec', cash: 150, xp: 30,
    skip: () => !nearestPool(),
    start(S) {
      const o = nearestPool();
      S.pool = o;
      if (o.quality > 45) { o.quality = 42; G.park.refreshPoolLook(o); }
    },
    tick(S, dt) {
      S.chk = (S.chk || 0) - dt;
      if (S.chk <= 0) { S.chk = 0.5; S.edge = G.park.poolEdgePoint(S.pool, P().pos.x, P().pos.z) || new THREE.Vector3(S.pool.cx, 0, S.pool.cz); }
      if (S.pool.quality > 85) { S.pool.quality = 60; G.park.refreshPoolLook(S.pool); }
    },
    target: (S) => S.edge, reach: 2.6,
    go: () => 'Leaves are floating in the pool. Walk to the pool edge.',
    now: () => (P().tool === 1
      ? (touch() ? `Aim at the water and hold ${B('SKIM')}` : `Aim at the water and hold ${K('Left click')}`)
      : (touch() ? `Tap the ${B('SKIMMER')} in the bar below, then aim at the water and hold ${B('SKIM')}` : `Press ${K('2')} for the skimmer, aim at the water and hold ${K('Left click')}`)),
    glow: () => (P().tool !== 1 ? { slot: 'tool1' } : null),
    unit: 's',
  },
  {
    id: 'build', title: 'Plant a palm tree', ev: 'placed', filter: (o) => o && o.key === 'palm', cash: 300, xp: 40,
    start() { G.menus.catTab = 'decor'; },
    target: null,
    phase: () => (G.build.active && G.build.def && G.build.def.key === 'palm' ? 'now' : 'go'),
    go: () => {
      if (G.menus.open === 'catalog') return touch() ? `Tap the glowing ${B('Palm Tree')} in Decoration.` : 'Click the glowing <b>Palm Tree</b> in Decoration.';
      return touch() ? `Scenery makes guests happy. Tap ${B('BUILD')} below.` : `Scenery makes guests happy. Press ${K('B')} to open the build menu.`;
    },
    now: () => (touch() ? `Aim at an empty grass spot and tap ${B('PLACE')}.` : `Aim at an empty grass spot and ${K('Left click')} to plant it.`),
    glow: () => (G.build.active ? null : { slot: 'build', tab: 'decor', card: 'palm' }),
  },
  {
    id: 'hire', title: 'Hire your staff', cash: 0, xp: 30,
    start(S) {
      S.wait = 0.9;
      // make sure pool technicians, lifeguards and security can be hired here
      const pr = G.progression;
      if (pr.level < 2) pr.addXP(pr.xpNext - pr.xp);
    },
    tick(S, dt) {
      if (S.opened) return;
      S.wait -= dt;
      if (S.wait <= 0 && !G.menus.open && !G.build.active && !P().ride) { S.opened = true; G.menus.showHire(() => G.tutorial.completeStep()); }
    },
    target: null,
    go: () => 'Staff keep the park running while you build. Pick who to hire!',
  },
];

function spawnDodger() {
  const g = G.guests.spawn(true);
  G.guests.clearTask(g);
  const p = spotNear(7, 9);
  g.pos.set(p.x, 0, p.z); g.posY = 0;
  g.inPark = true;
  g.tutorial = true;
  g.yaw = P().yaw;
  G.guests.makeDodger(g, 25, 'ticket', null, true);
  g.decideCD = 2;
  return g;
}

// Goals after the tutorial: where to point the arrows
const GOAL_TARGETS = {
  trashPicked: () => nearestTrash(60),
  coinCollected: () => nearestCoin(60),
  playerRide: () => nearestSlide(),
  dodgerCaught: () => nearestDodger(),
};

// ------------------------------------------------------------------ tutorial
export class Tutorial {
  constructor(scene) {
    this.active = false;
    this.finished = false;
    this.i = 0;
    this.count = 0;
    this.phase = 'go';
    this.S = {};
    this.el = $('tut');
    this.html = '';
    this.pathT = 0;
    this.path = null;
    this.glow = null;
    this._buildMarkers(scene);
  }

  get step() { return this.active ? STEPS[this.i] : null; }

  begin(from = 0) {
    this.active = true;
    this.finished = false;
    this.i = clamp(from, 0, STEPS.length - 1);
    if (G.progression) G.progression.quests = []; // goals wait until the tutorial is over
    document.body.classList.add('tut-on');
    this._startStep();
  }
  restart() { if (G.menus.open) G.menus.close(false); this.begin(0); G.hud.toast('🎓 Tutorial restarted. Follow the yellow arrows!', 'gold'); }
  skip() { if (this.active) this.finish(true); }

  _startStep() {
    const s = this.step;
    if (!s) return;
    if (s.skip && s.skip()) { this.i++; if (this.i >= STEPS.length) this.finish(false); else this._startStep(); return; }
    this.count = 0;
    this.phase = 'go';
    this.S = {};
    this.doneT = 0;
    this.path = null; this.pathT = 0;
    if (s.start) s.start(this.S);
    this.render(true);
  }

  completeStep() {
    const s = this.step;
    if (!s || this.phase === 'done') return;
    this.phase = 'done';
    this.doneT = s.doneMsg ? 3.2 : 1.7;
    if (s.cash) G.park.earn(s.cash, 'bonus', false);
    if (s.xp) G.progression.addXP(s.xp);
    G.audio.play('quest', { vol: 0.9 });
    G.effects.sparkle(P().pos.x, P().pos.y + 1.4, P().pos.z, 0xffd34a, 24);
    this.render(true);
  }

  finish(skipped) {
    this.active = false;
    this.finished = true;
    this.phase = 'go';
    document.body.classList.remove('tut-on');
    this._setGlow(null);
    if (!skipped) {
      G.park.earn(500, 'bonus', false);
      G.audio.play('jackpot', { vol: 0.9 });
      G.effects.confetti(P().pos.x, P().pos.y + 2.5, P().pos.z, 140);
      G.hud.toast('🎓 <b>Tutorial complete!</b> +$500 to grow your park. The goal card at the top shows what to do next.', 'gold');
      this.celebrateT = 4;
    } else G.hud.toast('Tutorial skipped. You can replay it from Manage → Goals.', '');
    G.progression.refreshQuests();
    G.saveGame && G.saveGame();
    this.render(true);
  }

  // progress events (forwarded by Progression)
  onEvent(ev, amount, data) {
    const s = this.step;
    if (!s || this.phase === 'done' || s.ev !== ev) return;
    if (s.filter && !s.filter(data)) return;
    this.count += amount;
    if (this.count >= (s.count || 1)) this.completeStep();
    else this.render(true);
  }

  // where the arrows should point right now (null = nowhere)
  currentTarget() {
    if (P().ride) return null;
    if (this.active) {
      const s = this.step;
      if (!s || this.phase === 'done' || !s.target) return null;
      return s.target(this.S);
    }
    const q = this.goal();
    if (!q || q.done) return null;
    const fn = GOAL_TARGETS[q.ev];
    return fn ? fn() : null;
  }

  goal() {
    const qs = G.progression.quests;
    return qs.find((q) => !q.done) || qs.find((q) => q.done) || null;
  }

  update(dt) {
    if (this.celebrateT > 0) this.celebrateT -= dt;
    let tgt = null;
    if (this.active) {
      const s = this.step;
      if (this.phase === 'done') {
        this.doneT -= dt;
        if (this.doneT <= 0) { this.i++; if (this.i >= STEPS.length) this.finish(false); else this._startStep(); }
      } else {
        if (s.tick) s.tick(this.S, dt);
        if (this.phase === 'done') { this._markers(null, dt); this.render(); return; }
        tgt = s.target ? s.target(this.S) : null;
        const reach = typeof s.reach === 'function' ? s.reach() : s.reach || 3;
        const near = tgt ? dist(tgt) < reach : false;
        if (s.reachDone && near) { this.completeStep(); this._markers(null, dt); return; }
        const ph = s.phase ? s.phase(this.S) : near ? 'now' : 'go';
        if (ph !== this.phase) { if (ph === 'now') G.audio.play('tick', { vol: 0.6 }); this.phase = ph; }
        this._setGlow(s.glow ? s.glow() : null);
      }
    } else {
      tgt = this.currentTarget();
    }
    if (P().ride) tgt = null;
    this._markers(tgt, dt);
    this.render();
  }

  // ---------------------------------------------------------------- card
  render() {
    const el = this.el;
    if (!el) return;
    let html = '', cls = '';
    if (this.active) {
      const s = this.step;
      const dots = STEPS.map((_, k) => `<i class="${k < this.i ? 'on' : k === this.i ? 'cur' : ''}"></i>`).join('');
      if (this.phase === 'done') {
        cls = 'done';
        html = `<div class="tut-top"><span>TUTORIAL</span><span class="tut-dots">${dots}</span></div><div class="tut-title">✓ ${s.doneMsg ? 'Nice!' : 'Done!'}${s.cash ? ` <span class="tut-cash">+${fmtMoney(s.cash)}</span>` : ''}</div>${s.doneMsg ? `<div class="tut-text">${s.doneMsg}</div>` : ''}`;
      } else {
        const now = this.phase === 'now' && s.now;
        cls = now ? 'now' : '';
        const text = now ? s.now() : s.go();
        const n = s.count || 1;
        const shown = s.unit === 's' ? Math.min(n, Math.floor(this.count)) : Math.min(n, this.count);
        const prog = n > 1 ? `<div class="tut-prog"><div class="tut-bar"><i style="width:${Math.round(clamp(this.count / n, 0, 1) * 100)}%"></i></div><span>${shown}${s.unit || ''} / ${n}${s.unit || ''}</span></div>` : '';
        html = `<div class="tut-top"><span>TUTORIAL · STEP ${this.i + 1} OF ${STEPS.length}</span><span class="tut-dots">${dots}</span></div><div class="tut-title">${s.title}</div><div class="tut-text">${now ? '👉 ' : ''}${text}</div>${prog}`;
      }
    } else if (this.finished) {
      const q = this.goal();
      if (!q) { html = ''; }
      else {
        cls = 'goal' + (q.done ? ' done' : '');
        const hint = (touch() && q.hintTouch) || q.hint || '';
        const pr = q.decimal ? q.progress.toFixed(1) + ' / ' + q.goal.toFixed(1) : (q.goal > 200 ? fmtMoney(q.progress) + ' / ' + fmtMoney(q.goal) : Math.floor(q.progress) + ' / ' + q.goal);
        html = `<div class="tut-top"><span>${q.done ? 'GOAL COMPLETE' : 'GOAL'}</span><span class="tut-cash">+${fmtMoney(q.cash)}</span></div><div class="tut-title">${q.done ? '✓ ' : ''}${q.text}</div>${hint && !q.done ? `<div class="tut-text">${hint}</div>` : ''}<div class="tut-prog"><div class="tut-bar"><i style="width:${Math.round(clamp(q.progress / q.goal, 0, 1) * 100)}%"></i></div><span>${pr}</span></div>`;
      }
    }
    const key = cls + '|' + html;
    if (key === this.html) return;
    const popKey = cls + '|' + (this.active ? this.i : 'g' + ((this.goal() || {}).uid || 0));
    const pop = popKey !== this.popKey;
    this.html = key;
    this.popKey = popKey;
    el.className = cls;
    el.innerHTML = html;
    el.classList.toggle('hidden', !html);
    if (pop && html) { el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
  }

  _setGlow(g) {
    const key = g ? JSON.stringify(g) : '';
    if (key === this.glowKey) return;
    this.glowKey = key;
    this.glow = g;
    document.querySelectorAll('.tut-glow').forEach((e) => e.classList.remove('tut-glow'));
    if (g && g.slot) { const e = document.querySelector(`#hotbar .slot[data-id="${g.slot}"]`); if (e) e.classList.add('tut-glow'); }
    if (G.menus.open === 'catalog') G.menus.renderCatalog();
  }
  glows(kind, key) { return !!(this.glow && this.glow[kind] === key); }

  // ---------------------------------------------------------------- 3D markers
  _buildMarkers(scene) {
    const gold = 0xffc61a;
    const g = new THREE.Group();
    g.visible = false;
    // bouncing arrow (always drawn on top, with a dark outline)
    const cone = new THREE.ConeGeometry(0.38, 0.6, 24); cone.rotateX(Math.PI); cone.translate(0, 0.3, 0);
    const shaft = new THREE.CylinderGeometry(0.14, 0.14, 0.55, 16); shaft.translate(0, 0.85, 0);
    const arrowGeo = mergeGeometries([cone.toNonIndexed(), shaft.toNonIndexed()]);
    const front = new THREE.MeshBasicMaterial({ color: gold, depthTest: false, depthWrite: false, transparent: true, toneMapped: false });
    const back = new THREE.MeshBasicMaterial({ color: 0x6b3500, side: THREE.BackSide, depthTest: false, depthWrite: false, transparent: true, toneMapped: false });
    const arrow = new THREE.Group();
    const a1 = new THREE.Mesh(arrowGeo, front); a1.renderOrder = 1001;
    const a2 = new THREE.Mesh(arrowGeo, back); a2.renderOrder = 1000; a2.scale.setScalar(1.18); a2.position.y = -0.06;
    arrow.add(a2, a1);
    g.add(arrow);
    // light beam that can be seen from across the park
    const cv = document.createElement('canvas'); cv.width = 4; cv.height = 64;
    const cx = cv.getContext('2d'); const gr = cx.createLinearGradient(0, 0, 0, 64);
    gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(255,255,255,1)');
    cx.fillStyle = gr; cx.fillRect(0, 0, 4, 64);
    const fade = new THREE.CanvasTexture(cv);
    const beamGeo = new THREE.CylinderGeometry(0.42, 0.42, 9, 20, 1, true); beamGeo.translate(0, 4.5, 0);
    const beam = new THREE.Mesh(beamGeo, new THREE.MeshBasicMaterial({ color: gold, alphaMap: fade, transparent: true, opacity: 0.38, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false }));
    g.add(beam);
    // pulsing ring on the ground
    const ringGeo = new THREE.RingGeometry(0.7, 0.95, 48); ringGeo.rotateX(-Math.PI / 2);
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: gold, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    g.add(ring);
    scene.add(g);
    // chevrons painted on the ground along the way
    const sh = new THREE.Shape();
    sh.moveTo(0, 0.34); sh.lineTo(0.5, -0.1); sh.lineTo(0.5, -0.34); sh.lineTo(0, 0.08); sh.lineTo(-0.5, -0.34); sh.lineTo(-0.5, -0.1); sh.closePath();
    const chevGeo = new THREE.ShapeGeometry(sh); chevGeo.rotateX(-Math.PI / 2);
    const chevMat = new THREE.MeshBasicMaterial({ color: gold, transparent: true, opacity: 0.92, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const chev = new THREE.InstancedMesh(chevGeo, chevMat, 22);
    chev.count = 0; chev.frustumCulled = false; chev.renderOrder = 5;
    scene.add(chev);
    this.mk = { g, arrow, beam, ring, chev };
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3(); this._up = new THREE.Vector3(0, 1, 0);
  }

  _markers(tgt, dt) {
    const M = this.mk;
    if (!tgt) { M.g.visible = false; M.chev.count = 0; this.markerPos = null; return; }
    const t = G.time.real;
    const gy = G.player.groundAt(tgt.x, tgt.z).y;
    const baseY = tgt.y != null ? tgt.y : Math.max(0, gy) + 1.3;
    M.g.visible = true;
    M.g.position.set(tgt.x, 0, tgt.z);
    M.arrow.position.y = baseY + Math.sin(t * 4.2) * 0.22;
    M.arrow.rotation.y = t * 1.6;
    const d = dist(tgt);
    const far = this.phase !== 'now' || !this.active;
    M.beam.visible = far && d > 6;
    M.beam.position.y = Math.max(0, gy);
    M.ring.visible = tgt.y == null;
    M.ring.position.y = Math.max(0, gy) + 0.07;
    const k = (t * 0.9) % 1;
    M.ring.scale.setScalar(0.7 + k * 0.9);
    M.ring.material.opacity = 0.9 * (1 - k);
    this.markerPos = { x: tgt.x, y: baseY, z: tgt.z, d };
    // ground chevrons from the player towards the target
    const showPath = far && d > 3.2 && !G.player.inWater;
    if (!showPath) { M.chev.count = 0; return; }
    this.pathT -= dt;
    if (this.pathT <= 0 || !this.path) {
      this.pathT = 0.4;
      const p = G.player.pos;
      const way = G.park.grid.findPath(p.x, p.z, tgt.x, tgt.z, 12000);
      this.path = [[p.x, p.z], ...(way || [[tgt.x, tgt.z]])];
    }
    // walk the polyline, a chevron every 1.15 m, starting just ahead of the player
    const pts = this.path.slice();
    pts[0] = [G.player.pos.x, G.player.pos.z];
    let n = 0, carry = 1.4;
    const maxN = 18;
    for (let i = 0; i < pts.length - 1 && n < maxN; i++) {
      const [x0, z0] = pts[i], [x1, z1] = pts[i + 1];
      const seg = Math.hypot(x1 - x0, z1 - z0);
      if (seg < 1e-3) continue;
      const yaw = Math.atan2(-(x1 - x0), -(z1 - z0));
      let s = carry;
      while (s < seg && n < maxN) {
        const x = x0 + (x1 - x0) * (s / seg), z = z0 + (z1 - z0) * (s / seg);
        if (Math.hypot(x - tgt.x, z - tgt.z) < 1.3) { n = maxN + 1; break; }
        const wave = Math.max(0, Math.sin(t * 6 - n * 0.75));
        const sc = 0.62 + wave * 0.32;
        this._q.setFromAxisAngle(this._up, yaw);
        this._p.set(x, Math.max(0, G.player.groundAt(x, z).y) + 0.06, z);
        this._s.set(sc, 1, sc);
        M.chev.setMatrixAt(Math.min(n, maxN - 1), this._m.compose(this._p, this._q, this._s));
        n++;
        s += 1.15;
      }
      carry = s - seg;
    }
    M.chev.count = Math.min(n, maxN);
    M.chev.instanceMatrix.needsUpdate = true;
  }

  // ---------------------------------------------------------------- save
  serialize() { return { i: this.i, active: this.active, finished: this.finished }; }
  restore(d, level) {
    if (d && d.finished) { this.finished = true; this.active = false; return; }
    if (d && d.active) { this.begin(d.i || 0); return; }
    // saves from before the tutorial existed: teach newer players, leave veterans alone
    if (level <= 3) this.begin(0); else { this.finished = true; }
  }
}

export const TUTORIAL_STEPS = STEPS.length;
void bus;
