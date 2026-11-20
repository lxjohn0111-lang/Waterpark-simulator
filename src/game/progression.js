// XP, levels, unlocks, tutorial chain & generated quests.
import * as THREE from 'three';
import { G, bus } from '../core/context.js';
import { ITEMS, STAFF, xpForLevel } from './catalog.js';
import { fmtMoney, pick, rand } from '../core/utils.js';

const TUTORIAL = [
  { id: 't_trash', text: 'Pick up 3 pieces of litter', hint: 'Aim at litter on the ground and press E', hintTouch: 'Aim the dot at litter and tap PICK UP', goal: 3, ev: 'trashPicked', cash: 150, xp: 40 },
  { id: 't_ride', text: 'Ride the Twister slide', hint: 'Walk to the slide\'s queue entrance and press E', hintTouch: 'Walk to the slide\'s queue entrance and tap RIDE', goal: 1, ev: 'playerRide', cash: 250, xp: 50 },
  { id: 't_build', text: 'Place 2 Sun Loungers', hint: 'Press B → Facilities → Sun Lounger', hintTouch: 'Tap BUILD → Facilities → Sun Lounger', goal: 2, ev: 'placed', filter: (o) => o.key === 'sunbed', cash: 250, xp: 50 },
  { id: 't_skim', text: 'Skim a pool for 4 seconds', hint: 'Press 2 for the skimmer, aim at water, hold left mouse', hintTouch: 'Pick the Skimmer, aim at water, hold USE', goal: 4, ev: 'skimSec', cash: 200, xp: 40 },
  { id: 't_hire', text: 'Hire a Pool Technician', hint: 'Press Tab → Staff (unlocks at level 2)', hintTouch: 'Tap MANAGE → Staff (unlocks at level 2)', goal: 1, ev: 'hired', filter: (t) => t === 'pooltech', cash: 300, xp: 60, minLevel: 2 },
  { id: 't_coins', text: 'Collect 5 tip coins', hint: 'Happy guests drop coins — walk over them', goal: 5, ev: 'coinCollected', cash: 200, xp: 50 },
  { id: 't_food', text: 'Build a Burger Bay', hint: 'Unlocks at level 2 · B → Food & Shops', hintTouch: 'Unlocks at level 2 · BUILD → Food & Shops', goal: 1, ev: 'placed', filter: (o) => o.key === 'burger', cash: 400, xp: 80, minLevel: 2 },
  { id: 't_rating', text: 'Reach a 3★ park rating', hint: 'Keep guests happy, the park clean & add scenery', goal: 3, ev: 'rating', cash: 600, xp: 100 },
];

function questTemplates(level) {
  const L = level;
  const unlocked = Object.values(ITEMS).filter((d) => d.level <= L && d.cost > 0);
  const t = [
    () => { const n = Math.round((900 + L * 650) / 100) * 100; return { text: `Earn ${fmtMoney(n)} today`, goal: n, ev: 'earnToday', cash: Math.round(n * 0.18), xp: 60 + L * 10 }; },
    () => { const n = 25 + L * 10; return { text: `Welcome ${n} guests today`, goal: n, ev: 'guestEntered', cash: 200 + L * 80, xp: 50 + L * 8 }; },
    () => { const n = 15 + L * 6; return { text: `Guests ride slides ${n} times`, goal: n, ev: 'ride', cash: 200 + L * 80, xp: 50 + L * 8 }; },
    () => { const n = 8 + L * 2; return { text: `Pick up ${n} pieces of litter`, goal: n, ev: 'trashPicked', cash: 120 + L * 50, xp: 50 }; },
    () => { const n = 4 + Math.floor(L / 2); return { text: `Place ${n} decorations`, goal: n, ev: 'placed', filter: (o) => o.def.cat === 'decor', cash: 150 + L * 60, xp: 50 }; },
    () => { const n = 20 + L * 8; return { text: `Sell ${n} food & drinks`, goal: n, ev: 'sale', cash: 200 + L * 70, xp: 60 }; },
    () => { const n = 6 + L * 2; return { text: `Collect ${n} tip coins`, goal: n, ev: 'coinCollected', cash: 150 + L * 50, xp: 50 }; },
    () => { const n = 2 + Math.floor(L / 3); return { text: `Ride slides yourself ${n} times`, goal: n, ev: 'playerRide', cash: 150 + L * 60, xp: 60 }; },
    () => { const n = 30 + L * 12; return { text: `Have ${n} guests in the park at once`, goal: n, ev: 'guestsNow', cash: 300 + L * 100, xp: 80 }; },
    () => { const r = Math.min(5, Math.floor((G.park.rating + 0.6) * 2) / 2); return { text: `Reach a ${r.toFixed(1)}★ rating`, goal: r, ev: 'rating', cash: 300 + L * 100, xp: 80, decimal: true }; },
    () => { const n = 10 + L * 4; return { text: `Guests take ${n} swims`, goal: n, ev: 'swam', cash: 180 + L * 60, xp: 50 }; },
    () => { const n = 1 + Math.floor(L / 4); return { text: `Catch ${n} fare dodger${n > 1 ? 's' : ''}`, goal: n, ev: 'dodgerCaught', cash: 250 + L * 80, xp: 80, hint: 'They jump the turnstile or run off from shops — bonk them!' }; },
    () => {
      const items = unlocked.filter((d) => ['pools', 'slides', 'food'].includes(d.cat));
      const d = pick(items);
      return { text: `Build a ${d.name}`, goal: 1, ev: 'placed', filter: (o) => o.key === d.key, cash: Math.round(d.cost * 0.3), xp: 60 + L * 5 };
    },
  ];
  return t;
}

export class Progression {
  constructor() {
    this.xp = 0;
    this.level = 1;
    this.tutIndex = 0;
    this.quests = [];
    this.seenUnlocks = new Set(Object.values(ITEMS).filter((d) => d.level <= 1).map((d) => d.key));
    this.questCounter = 0;
    this.completedQuests = 0;
    this.tutDone = new Set();
    this._wire();
  }

  get xpNext() { return xpForLevel(this.level + 1); }
  get xpPrev() { return xpForLevel(this.level); }

  addXP(n, pos) {
    if (n <= 0) return;
    this.xp += n;
    if (pos && n >= 5) G.hud.floater(`+${n} XP`, pos, 'xp');
    while (this.xp >= this.xpNext) {
      this.level++;
      this.onLevelUp();
    }
    bus.emit('xp');
  }

  onLevelUp() {
    const lv = this.level;
    const bonus = 400 + lv * 300;
    G.park.earn(bonus, 'bonus', false);
    const unlocks = Object.values(ITEMS).filter((d) => d.level === lv && d.kind !== 'tool');
    const staff = Object.entries(STAFF).filter(([, s]) => s.level === lv).map(([, s]) => s);
    G.hud.levelUp(lv, bonus, unlocks, staff);
    G.audio.play('levelup', { vol: 1 });
    G.effects.confetti(G.camera.position.x, G.camera.position.y + 2, G.camera.position.z, 160);
    G.sdk.happytime();
    for (const u of unlocks) this.seenUnlocks.delete(u.key);
    // late tutorial steps unlock with levels
    this.refreshQuests();
  }

  _wire() {
    const ev = (name, fn) => bus.on(name, fn);
    ev('trashPicked', () => { this.addXP(3); this.progress('trashPicked', 1); });
    ev('guestEntered', () => { this.addXP(2); this.progress('guestEntered', 1); });
    ev('sale', (d) => { this.addXP(1); this.progress('sale', 1); });
    ev('ride', () => { this.addXP(1); this.progress('ride', 1); });
    ev('swam', () => { this.progress('swam', 1); });
    ev('playerRide', (o) => { this.addXP(10, new THREE.Vector3(G.camera.position.x, G.camera.position.y + 0.5, G.camera.position.z)); this.progress('playerRide', 1); });
    ev('placed', (o) => { this.addXP(Math.max(2, Math.round(o.def.cost / 70))); this.progress('placed', 1, o); });
    ev('repaired', (d) => { this.addXP(d.by === 'player' ? 25 : 5); });
    ev('rescued', (d) => {
      if (d.by === 'player') { this.addXP(45); G.park.earn(250, 'bonus', true, new THREE.Vector3(d.guest.pos.x, 2, d.guest.pos.z)); }
      else this.addXP(8);
    });
    ev('coinCollected', () => { this.addXP(1); this.progress('coinCollected', 1); });
    ev('duck', (d) => { this.addXP(d.gold ? 120 : 25); });
    ev('landBought', () => { this.addXP(150); });
    ev('hired', (t) => { this.progress('hired', 1, t); });
    ev('poolCleaned', () => { this.addXP(4); });
    ev('dodgerCaught', (d) => { this.addXP(d.by === 'player' ? 30 : 10); this.progress('dodgerCaught', 1); });
    ev('cash', (d) => { if (d.delta > 0 && ['tickets', 'food', 'shops', 'tips', 'lockers'].includes(d.cat)) this.progress('earnToday', d.delta); });
  }

  // ---------------------------------------------------------------- quests
  refreshQuests() {
    this.quests = this.quests.filter((q) => !q.done || G.time.real - q.doneAt < 2.5);
    const active = () => this.quests.filter((q) => !q.done);
    let tutCount = active().filter((q) => q.tut).length;
    for (let i = 0; i < TUTORIAL.length && tutCount < 2 && active().length < 3; i++) {
      const t = TUTORIAL[i];
      if (this.tutDone.has(t.id) || this.quests.some((q) => q.id === t.id && !q.done)) continue;
      if (t.minLevel && this.level < t.minLevel) continue;
      this.quests.push({ ...t, tut: true, progress: 0, done: false, uid: ++this.questCounter });
      tutCount++;
    }
    // generated goals only once the first tutorial steps are done
    const minGen = this.tutDone.size >= 3 ? 3 : 0;
    let guard = 0;
    while (active().length < Math.max(minGen, Math.min(3, active().length)) && guard++ < 10) {
      const tpls = questTemplates(this.level);
      const cand = pick(tpls)();
      if (active().some((a) => a.ev === cand.ev)) continue;
      cand.progress = 0; cand.done = false; cand.uid = ++this.questCounter;
      if (cand.ev === 'rating' && G.park.rating >= cand.goal) { cand.goal = Math.min(5, cand.goal + 0.5); cand.text = `Reach a ${cand.goal.toFixed(1)}★ rating`; }
      this.quests.push(cand);
    }
    bus.emit('quests');
  }

  progress(ev, amount, data) {
    let changed = false;
    for (const q of this.quests) {
      if (q.done || q.ev !== ev) continue;
      if (q.filter && !q.filter(data)) continue;
      q.progress = Math.min(q.goal, q.progress + amount);
      changed = true;
      if (q.progress >= q.goal) this.complete(q);
    }
    if (changed) bus.emit('quests');
  }
  setValue(ev, value) {
    for (const q of this.quests) {
      if (q.done || q.ev !== ev) continue;
      q.progress = Math.min(q.goal, value);
      if (value >= q.goal) this.complete(q);
    }
  }

  complete(q) {
    q.done = true;
    q.doneAt = G.time.real;
    if (q.tut) this.tutDone.add(q.id);
    this.completedQuests++;
    G.park.earn(q.cash, 'bonus', false);
    G.audio.play('quest', { vol: 0.9 });
    G.hud.toast(`✅ Goal complete: ${q.text} · +${fmtMoney(q.cash)} · +${q.xp} XP`, 'good');
    G.hud.floater('+' + fmtMoney(q.cash), new THREE.Vector3(G.camera.position.x, G.camera.position.y + 0.4, G.camera.position.z).add(new THREE.Vector3(0, 0, -2).applyQuaternion(G.camera.quaternion)), '');
    this.addXP(q.xp);
    setTimeout(() => this.refreshQuests(), 2200);
    bus.emit('quests');
  }

  update() {
    // polled goals
    this.setValue('guestsNow', G.guests.list.filter((g) => g.inPark).length);
    this.setValue('rating', Math.round(G.park.rating * 2) / 2);
  }

  onNewDay() {
    // reset 'today' goals
    for (const q of this.quests) if (!q.done && q.ev === 'earnToday') q.progress = 0;
    bus.emit('quests');
  }

  serialize() {
    return { xp: this.xp, level: this.level, tut: this.tutIndex, tutDone: [...this.tutDone], quests: this.quests.filter((q) => !q.done).map((q) => ({ text: q.text, goal: q.goal, ev: q.ev, cash: q.cash, xp: q.xp, progress: q.progress, tut: q.tut, id: q.id, hint: q.hint })), seen: [...this.seenUnlocks], done: this.completedQuests };
  }
  restore(d) {
    if (!d) return;
    this.xp = d.xp || 0; this.level = d.level || 1; this.tutIndex = d.tut || 0;
    this.completedQuests = d.done || 0;
    this.tutDone = new Set(d.tutDone || []);
    this.seenUnlocks = new Set(d.seen || []);
    this.quests = [];
    for (const q of d.quests || []) {
      // re-attach filters from tutorial definitions
      const base = q.tut ? TUTORIAL.find((t) => t.id === q.id) : null;
      if (q.ev === 'placed' && !base) continue; // generated build quests lose their filter; regenerate
      this.quests.push({ ...q, filter: base ? base.filter : undefined, hintTouch: base ? base.hintTouch : undefined, done: false, uid: ++this.questCounter });
    }
    this.refreshQuests();
  }
}
