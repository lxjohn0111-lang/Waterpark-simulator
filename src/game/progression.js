// XP, levels, unlocks, tutorial chain & generated quests.
import * as THREE from 'three';
import { G, bus } from '../core/context.js';
import { ITEMS, STAFF, xpForLevel } from './catalog.js';
import { fmtMoney, pick, rand } from '../core/utils.js';

// One goal at a time once the tutorial is done. Every goal says how to do it (hint on PC,
// hintTouch on phones); goals with a place in the world get arrows (see tutorial.js).
const an = (name) => (/^[aeiou]/i.test(name) ? 'an ' : 'a ') + name;
const CAT_NAMES = { pools: 'Pools', slides: 'Slides', food: 'Food & Shops', facility: 'Facilities', decor: 'Decoration', paths: 'Paths' };
function questTemplates(level) {
  const L = level;
  const unlocked = Object.values(ITEMS).filter((d) => d.level <= L && d.cost > 0);
  const t = [
    () => { const n = Math.round((900 + L * 650) / 100) * 100; return { text: `Earn ${fmtMoney(n)} today`, goal: n, ev: 'earnToday', cash: Math.round(n * 0.18), xp: 60 + L * 10, hint: 'Tickets, food and shops all count. More attractions bring more money.' }; },
    () => { const n = 25 + L * 10; return { text: `Welcome ${n} guests today`, goal: n, ev: 'guestEntered', cash: 200 + L * 80, xp: 50 + L * 8, hint: 'A good rating and a fair ticket price bring more guests (Manage → Prices).' }; },
    () => { const n = 15 + L * 6; return { text: `Guests ride slides ${n} times`, goal: n, ev: 'ride', cash: 200 + L * 80, xp: 50 + L * 8, hint: 'Build more slides and repair broken ones with the Wrench.' }; },
    () => { const n = 8 + L * 2; return { text: `Pick up ${n} pieces of litter`, goal: n, ev: 'trashPicked', cash: 120 + L * 50, xp: 50, hint: 'Follow the arrow, look at the litter and press E.', hintTouch: 'Follow the arrow, aim at the litter and tap PICK UP.' }; },
    () => { const n = 4 + Math.floor(L / 2); return { text: `Place ${n} decorations`, goal: n, ev: 'placed', filter: (o) => o.def.cat === 'decor', cash: 150 + L * 60, xp: 50, hint: 'Press B → Decoration and place palms, flowers and more.', hintTouch: 'Tap BUILD → Decor and place palms, flowers and more.' }; },
    () => { const n = 20 + L * 8; return { text: `Sell ${n} food & drinks`, goal: n, ev: 'sale', cash: 200 + L * 70, xp: 60, hint: 'Hungry guests buy food. Build food stands next to busy paths.' }; },
    () => { const n = 6 + L * 2; return { text: `Collect ${n} tip coins`, goal: n, ev: 'coinCollected', cash: 150 + L * 50, xp: 50, hint: 'Happy guests drop coins. Follow the arrow and walk over them.' }; },
    () => { const n = 2 + Math.floor(L / 3); return { text: `Ride slides yourself ${n} times`, goal: n, ev: 'playerRide', cash: 150 + L * 60, xp: 60, hint: 'Follow the arrow to a slide entrance and press E.', hintTouch: 'Follow the arrow to a slide entrance and tap RIDE.' }; },
    () => { const n = 30 + L * 12; return { text: `Have ${n} guests in the park at once`, goal: n, ev: 'guestsNow', cash: 300 + L * 100, xp: 80, hint: 'Run an advertising campaign (Manage → Overview) or add attractions.' }; },
    () => { const r = Math.min(5, Math.floor((G.park.rating + 0.6) * 2) / 2); return { text: `Reach a ${r.toFixed(1)}★ rating`, goal: r, ev: 'rating', cash: 300 + L * 100, xp: 80, decimal: true, hint: 'Keep the park clean and guests happy, and add scenery.' }; },
    () => { const n = 10 + L * 4; return { text: `Guests take ${n} swims`, goal: n, ev: 'swam', cash: 180 + L * 60, xp: 50, hint: 'Clean pools attract swimmers. Build another pool for more.' }; },
    () => { const n = 1 + Math.floor(L / 4); return { text: `Catch ${n} fare dodger${n > 1 ? 's' : ''}`, goal: n, ev: 'dodgerCaught', cash: 250 + L * 80, xp: 80, hint: 'Cheaters have a $ icon. Sprint into them (Shift) or click to bonk.', hintTouch: 'Cheaters have a $ icon. Sprint into them or tap BONK.' }; },
    () => {
      const items = unlocked.filter((d) => ['pools', 'slides', 'food'].includes(d.cat));
      const d = pick(items);
      const cat = CAT_NAMES[d.cat] || 'Build';
      return { text: `Build ${an(d.name)}`, goal: 1, ev: 'placed', filter: (o) => o.key === d.key, cash: Math.round(d.cost * 0.3), xp: 60 + L * 5, hint: `Press B → ${cat} → ${d.name}.`, hintTouch: `Tap BUILD → ${cat} → ${d.name}.` };
    },
  ];
  return t;
}

function firstGoal(level) {
  const food = Object.values(ITEMS).filter((d) => d.cat === 'food' && d.level <= level && d.cost > 0).sort((a, b) => a.cost - b.cost);
  const d = food.find((f) => !G.park.lists.all.some((o) => o.key === f.key)) || food[0];
  if (!d) return null;
  return { text: `Build ${an(d.name)}`, goal: 1, ev: 'placed', filter: (o) => o.key === d.key, cash: Math.round(d.cost * 0.5), xp: 70, hint: `Hungry guests spend money. Press B → Food & Shops → ${d.name}.`, hintTouch: `Hungry guests spend money. Tap BUILD → Food → ${d.name}.` };
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
    ev('dodgerCaught', (d) => { this.addXP(d.by === 'player' ? 30 : 10); this.progress('dodgerCaught', 1, d); });
    ev('cash', (d) => { if (d.delta > 0 && ['tickets', 'food', 'shops', 'tips', 'lockers'].includes(d.cat)) this.progress('earnToday', d.delta); });
  }

  // ---------------------------------------------------------------- quests
  refreshQuests() {
    this.quests = this.quests.filter((q) => !q.done || G.time.real - q.doneAt < 2.5);
    const active = () => this.quests.filter((q) => !q.done);
    // goals start once the guided tutorial is over; one at a time keeps it clear
    const ready = !G.tutorial || !G.tutorial.active;
    let guard = 0;
    while (ready && active().length < 1 && guard++ < 12) {
      const tpls = questTemplates(this.level);
      // the first goal after the tutorial: open a food stand (a clear next step for a new park)
      const cand = this.completedQuests === 0 && !this.lastEv ? firstGoal(this.level) || pick(tpls)() : pick(tpls)();
      if (this.lastEv && cand.ev === this.lastEv && guard < 6) continue;
      cand.progress = 0; cand.done = false; cand.uid = ++this.questCounter;
      if (cand.ev === 'rating' && G.park.rating >= cand.goal) { cand.goal = Math.min(5, cand.goal + 0.5); cand.text = `Reach a ${cand.goal.toFixed(1)}★ rating`; }
      if (cand.ev === 'rating' && G.park.rating >= cand.goal) continue;
      this.lastEv = cand.ev;
      this.quests.push(cand);
    }
    bus.emit('quests');
  }

  progress(ev, amount, data) {
    if (G.tutorial) G.tutorial.onEvent(ev, amount, data);
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
    this.completedQuests++;
    G.park.earn(q.cash, 'bonus', false);
    G.audio.play('quest', { vol: 0.9 });
    G.hud.toast(`✅ Goal complete: ${q.text} · +${fmtMoney(q.cash)} · +${q.xp} XP`, 'good');
    G.hud.floater('+' + fmtMoney(q.cash), new THREE.Vector3(G.camera.position.x, G.camera.position.y + 0.4, G.camera.position.z).add(new THREE.Vector3(0, 0, -2).applyQuaternion(G.camera.quaternion)), '');
    this.addXP(q.xp);
    setTimeout(() => this.refreshQuests(), 2600);
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
    return { xp: this.xp, level: this.level, tut: this.tutIndex, tutDone: [...this.tutDone], quests: this.quests.filter((q) => !q.done).map((q) => ({ text: q.text, goal: q.goal, ev: q.ev, cash: q.cash, xp: q.xp, progress: q.progress, hint: q.hint, hintTouch: q.hintTouch, decimal: q.decimal })), seen: [...this.seenUnlocks], done: this.completedQuests };
  }
  restore(d) {
    if (!d) return;
    this.xp = d.xp || 0; this.level = d.level || 1; this.tutIndex = d.tut || 0;
    this.completedQuests = d.done || 0;
    this.tutDone = new Set(d.tutDone || []);
    this.seenUnlocks = new Set(d.seen || []);
    this.quests = [];
    for (const q of d.quests || []) {
      if (q.tut) continue; // goals of the old tutorial chain are replaced by the guided tutorial
      if (q.ev === 'placed') continue; // build goals lose their filter when saved; regenerate
      this.quests.push({ ...q, done: false, uid: ++this.questCounter });
    }
    this.quests = this.quests.slice(0, 1);
    this.refreshQuests();
  }
}
