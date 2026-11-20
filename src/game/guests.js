// Guest simulation: arrivals, needs, decisions, activities, thoughts, tips.
import * as THREE from 'three';
import { G, bus } from '../core/context.js';
import { Agent, processPaths, separate, cancelPaths } from './agents.js';
import { randomLook } from '../world/people.js';
import { samplePath } from '../world/slides.js';
import { WATER_Y, OPEN_HOUR, CLOSE_HOUR, GATE_Z, GAME_MIN_PER_SEC } from '../config.js';
import { clamp, rand, pick, chance, FIRST_NAMES, LAST_INITIALS, lerp, fmtMoney } from '../core/utils.js';

const GATE_OUT = new THREE.Vector3(0, 0, GATE_Z + 3.2);
const GATE_IN = new THREE.Vector3(0, 0, GATE_Z - 2.5);
const tmp = { pos: new THREE.Vector3(), tan: new THREE.Vector3(), up: new THREE.Vector3(), side: new THREE.Vector3() };
const _m = new THREE.Matrix4(), _x = new THREE.Vector3(), _y = new THREE.Vector3(), _z = new THREE.Vector3();

const THOUGHTS = {
  slideGreat: ['That slide was AMAZING!', 'Wooo! Again!', 'Best slide ever!', 'My heart is racing!'],
  slideOk: ['That was fun!', 'Nice little slide.'],
  poolClean: ['The water is crystal clear!', 'Such a refreshing swim.'],
  poolDirty: ['Eww, this water is gross...', 'Somebody clean this pool!'],
  trash: ['There is litter everywhere.', 'This park is so dirty.'],
  scenery: ['What a beautiful park!', 'Love all these palm trees.', 'So pretty here!'],
  hungryNone: ['I\'m starving, where is the food?'],
  thirstyNone: ['So thirsty... no drinks anywhere?'],
  toiletNone: ['I really need a restroom!'],
  toiletDirty: ['These restrooms are disgusting!'],
  tooExpensive: ['The ticket is way too expensive!', 'I\'m not paying that much!'],
  foodPricey: ['That was a rip-off.', 'Overpriced snacks...'],
  foodGood: ['Yum, delicious!', 'Just what I needed.'],
  queueLong: ['This line is too long!', 'I\'ve been waiting forever.'],
  broken: ['The slide is broken?!', 'Ugh, it\'s closed.'],
  tired: ['I need a place to lie down.'],
  crowded: ['It\'s so crowded here.'],
  boring: ['There\'s not much to do here.'],
  happyLeave: ['Best day ever! I\'ll be back!', 'What a great waterpark!'],
  sadLeave: ['I want to go home.', 'Not coming back here.'],
  rescued: ['Thank you lifeguard!'],
  rain: ['Ugh, rain...'],
  fireworks: ['Wow, fireworks!!'],
  bonked: ['Ouch! What was that for?!', 'Hey! Watch it!', 'Did the owner just bonk me?!', 'My head is spinning...'],
  sawBonk: ['The owner is bonking guests!', 'Yikes, did you see that?'],
  busted: ['Okay, okay, I\'ll pay!', 'Busted...', 'Worth a try...'],
  runAway: ['Can\'t catch me!', 'Free entry, haha!', 'Run!!'],
  dineDash: ['Free burger, see ya!', 'Who needs to pay?'],
  wheee: ['WHEEEE!', 'I can fly!!'],
};

let nextGuestId = 1;

export class Guests {
  constructor() {
    this.list = [];
    this.spawnAcc = 0;
    this.thoughtFeed = []; // {text, kind, count, t}
    this.decisionIdx = 0;
    this.maxGuests = 80;
    this.emergencies = [];
  }

  setQuality(q) { this.maxGuests = q === 'high' ? 110 : q === 'medium' ? 80 : 45; }

  // ------------------------------------------------------------ spawning
  spawn(inside = false) {
    const look = randomLook();
    const a = new Agent(look);
    const g = a;
    g.id = nextGuestId++;
    g.name = pick(FIRST_NAMES) + ' ' + LAST_INITIALS[Math.floor(Math.random() * LAST_INITIALS.length)] + '.';
    g.kid = look.kid;
    g.speed = (g.kid ? 1.35 : 1.2) * rand(0.88, 1.12);
    g.needs = { hunger: rand(0.05, 0.4), thirst: rand(0.1, 0.45), energy: rand(0.75, 1), bladder: rand(0, 0.35), fun: rand(0.0, 0.25) };
    g.happiness = rand(62, 80);
    g.cash = Math.round(rand(25, 110)) + (g.kid ? 0 : 20);
    g.spent = 0;
    g.thrill = g.kid ? rand(0, 0.5) : rand(0.2, 1);
    g.vip = !g.kid && chance(0.025 + (G.park.rating > 3.5 ? 0.02 : 0));
    if (g.vip) { g.cash += 300; g.happiness = 70; }
    g.stayMin = rand(140, 330);
    g.enteredAt = G.time.total;
    g.task = null;
    g.wet = 0;
    g.thought = null;
    g.thoughtT = 0;
    g.carrying = null;
    g.eatT = 0;
    g.decideCD = rand(0, 1.5);
    g.inPark = inside;
    g.lockerDone = false;
    g.showered = false;
    g.envT = rand(0, 10);
    g.posY = 0;
    g.rides = 0;
    g.visited = new Set();
    if (inside) {
      const p = G.park.grid.randomParkPoint() || [0, 50];
      g.pos.set(p[0], 0, p[1]);
      g.enteredAt = G.time.total - rand(0, 60);
    } else {
      // parking lot
      const side = Math.random() < 0.5 ? -1 : 1;
      g.pos.set(side * rand(8, 44), 0, pick([81, 90, 99.5]) + rand(-0.5, 0.5));
      if (Math.random() < 0.35) g.pos.set(rand(-3, 3), 0, rand(95, 98));
      this.setTask(g, { type: 'arrive' });
    }
    g.yaw = Math.random() * 6.28;
    if (g.vip) g.setIcon('iconVip');
    this.list.push(g);
    return g;
  }

  despawn(g) {
    if (g.ragdoll) { g.person.endRagdoll(); g.ragdoll = null; }
    this.clearTask(g);
    g.dispose();
    const i = this.list.indexOf(g);
    if (i >= 0) this.list.splice(i, 1);
  }

  // ------------------------------------------------------------ thoughts
  think(g, key, kind = 'neutral') {
    const arr = THOUGHTS[key];
    const text = arr ? pick(arr) : key;
    g.thought = { text, kind };
    g.thoughtT = G.time.total;
    const f = this.thoughtFeed.find((t) => t.key === key);
    if (f) { f.count++; f.t = G.time.total; f.text = text; }
    else { this.thoughtFeed.push({ key, text, kind, count: 1, t: G.time.total }); if (this.thoughtFeed.length > 24) this.thoughtFeed.shift(); }
  }
  addHappy(g, v) { if (Number.isFinite(v)) g.happiness = clamp(g.happiness + v, 0, 100); }
  // An unmet need: think about it (and lose a little happiness) at most every 45 game minutes
  unmet(g, key) {
    g.unmetT = g.unmetT || {};
    if (G.time.total - (g.unmetT[key] ?? -999) < 45) return;
    g.unmetT[key] = G.time.total;
    this.think(g, key, 'bad');
    this.addHappy(g, -3);
  }

  // ------------------------------------------------------------ tasks
  setTask(g, task) {
    this.clearTask(g);
    g.task = task;
    task.phase = task.phase || 'start';
    task.t = 0;
    task.dtMin = 0;
    this.runTask(g, 0);
  }
  clearTask(g) {
    const t = g.task;
    if (!t) return;
    if (t.obj) {
      const o = t.obj;
      const qi = o.queue.indexOf(g); if (qi >= 0) o.queue.splice(qi, 1);
      o.users.delete(g);
      if (o.pool) o.pool.swimmers.delete(g);
      if (t.seat && t.seat.taken === g) t.seat.taken = null;
      if (t.spot && t.spot.taken === g) t.spot.taken = null;
    }
    g.hidden = false;
    g.customOrient = false;
    g.noSep = false;
    g.task = null;
    g.stop();
    g.posY = 0;
    if (g.iconName === 'iconHelp') g.setIcon(g.vip ? 'iconVip' : null);
    g.poseExtra = 0;
  }
  fail(g, thoughtKey) {
    if (thoughtKey) { this.think(g, thoughtKey, 'bad'); this.addHappy(g, -4); }
    this.clearTask(g);
    g.decideCD = rand(0.5, 2);
  }

  // ------------------------------------------------------------ decisions
  decide(g) {
    const park = G.park;
    const n = g.needs;
    const minutesIn = G.time.total - g.enteredAt;
    const closing = G.time.minutes >= CLOSE_HOUR || G.time.minutes < OPEN_HOUR - 30;
    if (closing || g.happiness < 12 || (minutesIn > g.stayMin && chance(0.3)) || (n.energy < 0.06)) {
      this.setTask(g, { type: 'leave' });
      return;
    }
    // first: lockers after arrival
    if (!g.lockerDone && (park.lists.fac.lockers || []).length && !g.kid) {
      g.lockerDone = true;
      const o = this.best(g, park.lists.fac.lockers, (o) => o.queue.length < 6, 0.5);
      if (o) { this.setTask(g, { type: 'service', obj: o, kind: 'lockers' }); return; }
    }
    if (g.carrying && chance(0.6)) {
      const seats = this.allSeats(['picnic', 'bench']);
      const s = this.bestSeat(g, seats, 18);
      if (s) { this.setTask(g, { type: 'seat', obj: s.obj, seat: s.seat, dur: rand(14, 26) }); return; }
    }
    if (n.bladder > 0.72) {
      const o = this.best(g, park.lists.fac.toilet || [], (o) => o.queue.length < 6);
      if (o) { this.setTask(g, { type: 'service', obj: o, kind: 'toilet' }); return; }
      this.unmet(g, 'toiletNone');
    }
    if (n.thirst > 0.6 && !g.carrying) {
      const o = this.best(g, park.lists.shops.filter((o) => o.def.shop.type === 'drink' || (o.def.shop.type === 'snack' && n.thirst < 0.8)), (o) => o.queue.length < 7);
      if (o) { this.setTask(g, { type: 'service', obj: o, kind: 'shop' }); return; }
      this.unmet(g, 'thirstyNone');
    }
    if (n.hunger > 0.62 && !g.carrying) {
      const o = this.best(g, park.lists.shops.filter((o) => o.def.shop.type === 'food' || o.def.shop.type === 'snack'), (o) => o.queue.length < 7);
      if (o) { this.setTask(g, { type: 'service', obj: o, kind: 'shop' }); return; }
      this.unmet(g, 'hungryNone');
    }
    if (n.energy < 0.35) {
      const jac = (park.lists.pools.filter((o) => o.pool.jacuzzi && o.pool.swimmers.size < o.pool.capacity));
      if (jac.length && chance(0.35)) { this.setTask(g, { type: 'pool', obj: this.best(g, jac, null), dur: rand(18, 35), rest: true }); return; }
      const seats = this.allSeats(['sunbed', 'bench', 'picnic']);
      const s = this.bestSeat(g, seats, 50);
      if (s) { this.setTask(g, { type: 'seat', obj: s.obj, seat: s.seat, dur: rand(25, 55) }); return; }
      this.unmet(g, 'tired');
    }
    // fun
    const opts = [];
    const slides = park.lists.slides.filter((o) => !o.broken && (!o.def.kidsOnly || g.kid) && (g.kid ? o.slide.def.thrill < 0.75 || g.thrill > 0.4 : true));
    for (const o of slides) {
      const want = (o.slide.def.fun * 1.2 + (g.thrill - o.slide.def.thrill * 0.6) * 0.8 + (g.visited.has(o.id) ? -0.25 : 0.25)) * (o.def.kidsOnly ? 1.5 : 1);
      opts.push([want - o.queue.length * 0.06, () => this.setTask(g, { type: 'slide', obj: o })]);
    }
    for (const o of park.lists.pools) {
      if (o.pool.jacuzzi && n.energy > 0.7) continue;
      if (o.pool.kids && !g.kid && chance(0.85)) continue;
      if (!o.pool.kids && g.kid && chance(0.25)) continue;
      if (o.pool.swimmers.size >= o.pool.capacity) continue;
      const want = o.def.fun * 1.1 + (o.quality - 60) / 200 + (o.pool.wave ? 0.5 : 0) + (g.wet < 0.2 ? 0.15 : 0);
      opts.push([want, () => this.setTask(g, { type: 'pool', obj: o, dur: rand(25, 60) })]);
    }
    if (!g.showered && (park.lists.fac.shower || []).length && chance(0.5)) {
      g.showered = true;
      const o = this.best(g, park.lists.fac.shower, (o) => o.queue.length < 4);
      if (o) opts.push([1.4, () => this.setTask(g, { type: 'service', obj: o, kind: 'shower' })]);
    }
    for (const o of park.lists.shops.filter((o) => o.def.shop.type === 'souvenir')) {
      if (g.cash > 20 && g.happiness > 55) opts.push([0.35 + (g.happiness - 55) / 100, () => this.setTask(g, { type: 'service', obj: o, kind: 'shop' })]);
    }
    for (const o of park.lists.fountains) opts.push([0.3, () => this.setTask(g, { type: 'view', obj: o })]);
    if (n.energy < 0.6 || chance(0.15)) {
      const s = this.bestSeat(g, this.allSeats(['sunbed']), 40);
      if (s) opts.push([0.55 + (0.6 - n.energy), () => this.setTask(g, { type: 'seat', obj: s.obj, seat: s.seat, dur: rand(20, 45) })]);
    }
    opts.push([0.22, () => this.setTask(g, { type: 'wander' })]);
    if (opts.length === 1) this.unmet(g, 'boring');
    // weighted random among top options
    opts.sort((a, b) => b[0] - a[0]);
    const top = opts.slice(0, 4);
    let sum = 0;
    for (const o of top) sum += Math.max(0.05, o[0]);
    let r = Math.random() * sum;
    for (const o of top) { r -= Math.max(0.05, o[0]); if (r <= 0) { o[1](); return; } }
    top[0][1]();
  }

  best(g, list, filter, distW = 0.04) {
    let best = null, bs = -1e9;
    for (const o of list) {
      if (!o) continue;
      if (filter && !filter(o)) continue;
      const d = Math.hypot(o.cx - g.pos.x, o.cz - g.pos.z);
      const s = -d * distW - o.queue.length * 0.3 + Math.random() * 0.6 + (o.condition || 100) / 400;
      if (s > bs) { bs = s; best = o; }
    }
    return best;
  }
  allSeats(types) {
    const out = [];
    for (const t of types) for (const o of G.park.lists.fac[t] || []) for (const s of o.points.seats || []) if (!s.taken) out.push({ obj: o, seat: s });
    return out;
  }
  bestSeat(g, seats, maxD) {
    let best = null, bd = maxD;
    for (const s of seats) {
      const d = Math.hypot(s.seat.pos.x - g.pos.x, s.seat.pos.z - g.pos.z) + Math.random() * 6;
      if (d < bd) { bd = d; best = s; }
    }
    return best;
  }

  // ------------------------------------------------------------ task runner
  runTask(g, sdt) {
    const t = g.task;
    if (!t) return;
    t.t += sdt;
    const park = G.park;
    switch (t.type) {
      case 'arrive': return this.taskArrive(g, t, sdt);
      case 'leave': return this.taskLeave(g, t, sdt);
      case 'wander': {
        if (t.phase === 'start') {
          t.phase = 'walk';
          let p = park.grid.randomParkPoint();
          // bias towards scenery
          const deco = park.lists.decor;
          if (deco.length && chance(0.5)) { const d = pick(deco); p = [d.cx + rand(-3, 3), d.cz + rand(-3, 3)]; }
          if (!p) return this.fail(g);
          g.pose = 'walk';
          g.walkTo(p[0], p[1], (ok) => { if (!ok) return this.fail(g); t.phase = 'look'; t.t = 0; t.dur = rand(3, 7); g.pose = 'idle'; });
        } else if (t.phase === 'look' && t.t > t.dur) {
          const ap = park.appealAt(g.pos.x, g.pos.z);
          if (ap > 14 && chance(0.4)) { this.think(g, 'scenery', 'good'); this.addHappy(g, 3); }
          this.clearTask(g);
        }
        return;
      }
      case 'view': {
        const o = t.obj;
        if (t.phase === 'start') {
          t.phase = 'walk';
          const p = pick(o.points.view);
          g.pose = 'walk';
          g.walkTo(p.x, p.z, (ok) => { if (!ok) return this.fail(g); t.phase = 'look'; t.t = 0; g.pose = 'idle'; });
        } else if (t.phase === 'look') {
          g.faceTo(o.cx, o.cz, sdt);
          if (t.t > 6) { this.addHappy(g, 5); g.needs.fun += 0.08; if (chance(0.3)) this.think(g, 'scenery', 'good'); this.maybeTip(g, 0.15); this.clearTask(g); }
        }
        return;
      }
      case 'seat': return this.taskSeat(g, t, sdt);
      case 'service': return this.taskService(g, t, sdt);
      case 'pool': return this.taskPool(g, t, sdt);
      case 'slide': return this.taskSlide(g, t, sdt);
      case 'bin': {
        if (t.phase === 'start') {
          t.phase = 'walk'; g.pose = 'walk';
          const p = t.obj.points.use;
          g.walkTo(p.x, p.z, (ok) => { if (!ok) { this.dropLitter(g, 1); return this.fail(g); } t.phase = 'use'; t.t = 0; g.pose = 'idle'; });
        } else if (t.phase === 'use') { g.faceTo(t.obj.cx, t.obj.cz, sdt); if (t.t > 0.8) { g.litter = 0; this.clearTask(g); } }
        return;
      }
      case 'drown': return this.taskDrown(g, t, sdt);
    }
  }

  taskArrive(g, t) {
    if (t.phase === 'start') {
      t.phase = 'toGate'; g.pose = 'walk';
      g.walkTo(GATE_OUT.x + rand(-1.6, 1.6), GATE_OUT.z + rand(0, 1.5), (ok) => {
        if (!ok) { g.walkDirect([[0, 75], [GATE_OUT.x, GATE_OUT.z]], () => { t.phase = 'pay'; t.t = 0; g.pose = 'idle'; }); return; }
        t.phase = 'pay'; t.t = 0; g.pose = 'idle';
      });
    } else if (t.phase === 'pay' && t.t > 0.6) {
      const park = G.park;
      const will = 9 + park.rating * 5.5 + Math.min(12, park.lists.slides.length * 2 + park.lists.pools.length) + (g.vip ? 30 : 0) + rand(-4, 6);
      const price = park.ticketPrice * (g.kid ? 0.6 : 1);
      if (price > will * 1.25 || (price > will && chance(0.6))) {
        this.think(g, 'tooExpensive', 'bad');
        bus.emit('guestRefused', g);
        t.phase = 'goHome'; g.pose = 'walk';
        g.walkTo(rand(-30, 30), 97, () => this.despawn(g), () => this.despawn(g));
        return;
      }
      // some guests jump the turnstile instead of paying (more of them when the ticket feels pricey)
      const dodgeP = (price > will * 0.85 ? 0.14 : 0.05) * (G.time.day === 1 && G.time.minutes < OPEN_HOUR + 40 ? 0 : 1);
      if (!g.vip && !g.kid && price > 0 && chance(dodgeP)) {
        park.today.guestsIn++; park.records.totalGuests++;
        g.inPark = true; g.enteredAt = G.time.total;
        this.makeDodger(g, Math.round(price), 'ticket');
        t.phase = 'enter'; g.pose = 'run'; g.speed = 3.2;
        g.walkDirect([[clamp(g.pos.x, -1.8, 1.8), GATE_Z + 1.5], [rand(-3, 3), GATE_IN.z - 3]], () => { g.speed = 1.3; this.clearTask(g); });
        return;
      }
      const paid = Math.min(g.cash + 40, Math.round(price));
      park.earn(paid, 'tickets', true, new THREE.Vector3(g.pos.x, 2.2, g.pos.z));
      park.today.guestsIn++;
      park.records.totalGuests++;
      if (price > will * 0.85) this.addHappy(g, -6);
      if (price < will * 0.5) this.addHappy(g, 5);
      g.inPark = true;
      g.enteredAt = G.time.total;
      bus.emit('guestEntered', g);
      t.phase = 'enter'; g.pose = 'walk';
      g.walkDirect([[clamp(g.pos.x, -1.8, 1.8), GATE_Z + 1.5], [rand(-1.5, 1.5), GATE_IN.z]], () => this.clearTask(g));
    }
  }

  taskLeave(g, t) {
    if (t.phase === 'start') {
      t.phase = 'toGate'; g.pose = 'walk';
      if (!g.inPark) { g.walkTo(rand(-30, 30), 97, () => this.despawn(g), () => this.despawn(g)); return; }
      g.walkTo(rand(-1.5, 1.5), GATE_IN.z, (ok) => {
        const park = G.park;
        park.today.guestsOut++;
        park.today.happySum += g.happiness; park.today.happyN++;
        if (g.happiness > 75) { this.think(g, 'happyLeave', 'good'); }
        else if (g.happiness < 35) this.think(g, 'sadLeave', 'bad');
        if (g.vip && g.happiness > 70) { park.earn(400, 'bonus', true, new THREE.Vector3(g.pos.x, 2.2, g.pos.z)); bus.emit('vipHappy', g); }
        bus.emit('guestLeft', g);
        g.inPark = false;
        g.walkDirect([[clamp(g.pos.x, -1.8, 1.8), GATE_Z + 1.5], [rand(-2, 2), GATE_OUT.z + 1]], () => {
          g.walkTo(rand(-30, 30), pick([81, 90, 97]), () => this.despawn(g), () => this.despawn(g));
        });
      }, () => {
        // stuck: just teleport-despawn when not visible
        this.despawn(g);
      });
    }
  }

  taskSeat(g, t) {
    const s = t.seat;
    if (t.phase === 'start') {
      if (s.taken && s.taken !== g) return this.fail(g);
      s.taken = g;
      t.phase = 'walk'; g.pose = 'walk';
      g.walkTo(s.approach.x, s.approach.z, (ok) => {
        if (!ok) return this.fail(g);
        t.phase = 'sit'; t.t = 0;
        g.pos.set(s.pos.x, 0, s.pos.z); g.yaw = s.yaw; g.pose = s.pose; g.noSep = true;
        if (s.pose === 'lie') g.posY = 0;
      });
    } else if (t.phase === 'sit') {
      g.pos.set(s.pos.x, 0, s.pos.z); g.yaw = s.yaw;
      g.needs.energy = Math.min(1, g.needs.energy + 0.012 * t.dtMin);
      if (g.carrying) { g.poseExtra = 1; }
      if (t.t * GAME_MIN_PER_SEC > (t.dur || 30)) {
        // umbrella shade bonus
        if (t.obj.def.facility === 'sunbed') {
          const shade = G.park.lists.all.some((o) => o.key === 'umbrella' && Math.hypot(o.cx - g.pos.x, o.cz - g.pos.z) < 2.6);
          this.addHappy(g, shade ? 7 : 4);
        } else this.addHappy(g, 3);
        this.maybeTip(g, 0.08);
        this.clearTask(g);
      }
    }
  }

  taskService(g, t, sdt) {
    const o = t.obj;
    const park = G.park;
    if (t.phase === 'start') {
      if (!park.objects.has(o.id)) return this.fail(g);
      if (t.kind === 'toilet' && o.dirt > 85) return this.fail(g, 'toiletDirty');
      t.phase = 'walk'; g.pose = 'walk';
      const p = o.points.service;
      g.walkTo(p.x + o.points.queueDir.x * 2, p.z + o.points.queueDir.z * 2, (ok) => {
        if (!ok) return this.fail(g);
        o.queue.push(g); t.phase = 'queue'; t.t = 0;
      });
    } else if (t.phase === 'queue') {
      const i = o.queue.indexOf(g);
      if (i < 0) return this.fail(g);
      const p = o.points.service, q = o.points.queueDir;
      const tx = p.x + q.x * i * 0.8, tz = p.z + q.z * i * 0.8;
      const d = Math.hypot(tx - g.pos.x, tz - g.pos.z);
      if (d > 0.08) { g.pose = 'walk'; const st = Math.min(d, g.speed * sdt); g.pos.x += (tx - g.pos.x) / d * st; g.pos.z += (tz - g.pos.z) / d * st; g.faceTo(tx, tz, sdt); }
      else { g.pose = 'idle'; g.faceTo(p.x - q.x, p.z - q.z, sdt); }
      if (t.t > 40 && i > 1) { this.think(g, 'queueLong', 'bad'); this.addHappy(g, -6); return this.fail(g); }
      const cap = t.kind === 'toilet' ? 2 : t.kind === 'shower' ? 3 : 1;
      if (i < cap && d < 0.3 && o.users.size < cap) {
        o.queue.splice(i, 1); o.users.add(g);
        t.phase = 'use'; t.t = 0;
        if (t.kind === 'toilet') { const door = o.points.doors[Math.floor(Math.random() * 2)]; g.walkDirect([door], () => { g.hidden = true; }); g.pose = 'walk'; }
        if (t.kind === 'shower') { const spot = o.points.spots.find((s) => !s.taken); if (spot) { spot.taken = g; t.spot = spot; g.walkDirect([spot.pos], () => { g.yaw = spot.yaw; g.pose = 'idle'; }); g.pose = 'walk'; } }
      }
    } else if (t.phase === 'use') {
      if (t.kind === 'shop' || t.kind === 'lockers') {
        g.pose = 'idle';
        g.faceTo(o.points.clerk.x, o.points.clerk.z, sdt);
        if (t.t > (o.def.service ? o.def.service[1] : 2)) this.completeService(g, t);
      } else if (t.kind === 'toilet') {
        if (t.t > 4) { g.hidden = false; g.needs.bladder = 0; o.dirt = Math.min(100, o.dirt + 3); this.completeService(g, t); }
      } else if (t.kind === 'shower') {
        if (t.spot && Math.random() < 0.7) G.effects.spray(t.spot.head.x, t.spot.head.y, t.spot.head.z, 0, -2.5, 0, 0.08, 0.5);
        g.wet = 1;
        if (t.t > 3.5) { this.addHappy(g, 2); this.completeService(g, t); }
      }
    }
  }

  completeService(g, t) {
    const o = t.obj, park = G.park;
    o.users.delete(g);
    if (t.kind === 'shop') {
      const sh = o.def.shop;
      const price = Math.round(sh.price * park.foodMult * (g.vip ? 1.5 : 1));
      const fair = sh.price * 1.35;
      if (!g.dodger && !g.vip && !g.kid && chance(0.035)) {
        // dine & dash: grabs the food and runs without paying
        if (sh.needs) for (const [k, v] of Object.entries(sh.needs)) g.needs[k] = clamp(g.needs[k] + v, 0, 1);
        if (sh.type !== 'souvenir') { g.carrying = sh.type; g.eatT = 0; g.litter = 1; }
        this.makeDodger(g, price, 'food', o);
        this.think(g, 'dineDash', 'bad');
        g.fleeing = true; g.fleeT = 3; g.fleeFrom = { x: o.cx, z: o.cz };
      } else if (g.cash >= price && !(price > fair * 1.6 && chance(0.7))) {
        g.cash -= price; g.spent += price;
        park.earn(price, sh.type === 'souvenir' ? 'shops' : 'food', true, new THREE.Vector3(o.points.service.x, 2.4, o.points.service.z));
        park.today.sales++;
        o.sales++; o.revenue += price;
        if (sh.needs) for (const [k, v] of Object.entries(sh.needs)) g.needs[k] = clamp(g.needs[k] + v, 0, 1);
        this.addHappy(g, (sh.happy || 2) - (price > fair ? 5 : 0));
        if (price > fair) this.think(g, 'foodPricey', 'bad'); else if (chance(0.3)) this.think(g, 'foodGood', 'good');
        if (sh.type !== 'souvenir') { g.carrying = sh.type; g.eatT = 0; g.litter = 1; }
        bus.emit('sale', { obj: o, guest: g, price });
      } else {
        this.think(g, 'foodPricey', 'bad');
        this.addHappy(g, -5);
      }
    } else if (t.kind === 'lockers') {
      if (g.cash >= 3) { g.cash -= 3; park.earn(3, 'lockers', true, new THREE.Vector3(o.points.service.x, 2.4, o.points.service.z)); this.addHappy(g, 3); }
    } else if (t.kind === 'toilet') {
      this.addHappy(g, 2);
      if (o.dirt > 60) { this.think(g, 'toiletDirty', 'bad'); this.addHappy(g, -8); }
    }
    this.clearTask(g);
  }

  // ----- pools -----
  swimY(g, o, x, z) {
    const pa = G.park.poolAt(x, z);
    const floor = pa ? pa.floorY : -1.2;
    const wave = o.waveAt ? o.waveAt(x, z) : 0;
    const standY = floor + 0.02;
    const swimY = WATER_Y + wave - 1.08 * g.scale;
    return { y: Math.max(standY, swimY), deep: swimY > standY + 0.05, floor };
  }

  taskPool(g, t, sdt) {
    const o = t.obj;
    const park = G.park;
    if (!park.objects.has(o.id)) return this.fail(g);
    if (t.phase === 'start') {
      const edge = park.poolEdgePoint(o, g.pos.x, g.pos.z);
      if (!edge) return this.fail(g);
      t.edge = edge;
      t.phase = 'walk'; g.pose = 'walk';
      g.walkTo(edge.x, edge.z, (ok) => {
        if (!ok) return this.fail(g);
        t.phase = 'enter'; t.t = 0;
        t.from = g.pos.clone();
        t.to = park.waterEntryFrom(o, t.edge);
        o.pool.swimmers.add(g);
        g.noSep = true;
        if (o.quality < 40) { this.think(g, 'poolDirty', 'bad'); this.addHappy(g, -6); }
      });
    } else if (t.phase === 'enter') {
      const k = Math.min(1, t.t / 1.2);
      g.pos.lerpVectors(t.from, t.to, k);
      const sy = this.swimY(g, o, g.pos.x, g.pos.z);
      g.posY = lerp(0.03, sy.y, Math.min(1, k * 1.4));
      g.faceTo(t.to.x, t.to.z, sdt);
      g.pose = k < 0.5 ? 'jump' : sy.deep ? 'swim' : 'walk';
      if (k >= 1) {
        G.effects.splash(g.pos.x, WATER_Y, g.pos.z, g.kid ? 0.6 : 0.9);
        G.audio && G.audio.play('splash', { pos: g.pos, vol: 0.5 });
        G.park.today.swims++;
        t.phase = 'swim'; t.t = 0; t.target = null; g.wet = 1;
      }
    } else if (t.phase === 'swim') {
      if (!t.target || Math.hypot(t.target.x - g.pos.x, t.target.z - g.pos.z) < 0.3) {
        t.target = park.randomSwimPoint(o, g.kid);
        t.pause = chance(0.3) ? rand(1, 4) : 0;
        if (!t.target) t.target = g.pos.clone();
      }
      if (t.pause > 0) { t.pause -= sdt; }
      else {
        const dx = t.target.x - g.pos.x, dz = t.target.z - g.pos.z, d = Math.hypot(dx, dz);
        const sp = (o.pool.jacuzzi ? 0.15 : 0.62) * sdt;
        if (d > 0.01) { g.pos.x += dx / d * Math.min(sp, d); g.pos.z += dz / d * Math.min(sp, d); g.faceTo(t.target.x, t.target.z, sdt * 0.6); }
      }
      const sy = this.swimY(g, o, g.pos.x, g.pos.z);
      g.posY = sy.y;
      g.pose = o.pool.jacuzzi ? 'sit' : sy.deep ? (t.pause > 0 ? 'tread' : 'swim') : (t.pause > 0 ? 'idle' : 'walk');
      if (o.pool.jacuzzi) { g.posY = -0.95 * g.scale + 0.45 * g.scale - 0.45 + 0.02; g.needs.energy = Math.min(1, g.needs.energy + 0.02 * t.dtMin); }
      g.needs.fun = Math.min(1, g.needs.fun + 0.01 * t.dtMin);
      g.needs.energy = Math.max(0, g.needs.energy - (o.pool.jacuzzi ? 0 : 0.002) * t.dtMin);
      // drowning risk in deep water
      if (sy.deep && sy.floor < -1.3 && !o.pool.jacuzzi && Math.random() < 0.00012 * t.dtMin * (g.kid ? 2.2 : 1) && G.time.minutes > OPEN_HOUR + 30) {
        return this.startDrowning(g, o);
      }
      if (G.player && Math.random() < 0.02 * sdt) G.effects.splash(g.pos.x, WATER_Y, g.pos.z, 0.25);
      if (t.t * GAME_MIN_PER_SEC > (t.dur || 40)) {
        t.phase = 'toExit'; t.t = 0;
        const edge = park.poolEdgePoint(o, g.pos.x, g.pos.z);
        if (!edge) { t.phase = 'exit'; t.edge = g.pos.clone(); t.from = g.pos.clone(); return; }
        t.edge = edge;
        t.exitWater = park.waterEntryFrom(o, edge);
      }
    } else if (t.phase === 'toExit') {
      const dx = t.exitWater.x - g.pos.x, dz = t.exitWater.z - g.pos.z, d = Math.hypot(dx, dz);
      const sp = 0.75 * sdt;
      if (d > 0.05) { g.pos.x += dx / d * Math.min(sp, d); g.pos.z += dz / d * Math.min(sp, d); g.faceTo(t.exitWater.x, t.exitWater.z, sdt); }
      const sy = this.swimY(g, o, g.pos.x, g.pos.z);
      g.posY = sy.y; g.pose = sy.deep ? 'swim' : 'walk';
      if (d <= 0.05 || t.t > 25) { t.phase = 'exit'; t.t = 0; t.from = g.pos.clone(); }
    } else if (t.phase === 'exit') {
      const k = Math.min(1, t.t / 1.0);
      g.pos.lerpVectors(t.from, t.edge, k);
      g.posY = lerp(g.posY, 0.03, k);
      g.pose = 'climb';
      if (k >= 1) {
        o.pool.swimmers.delete(g);
        const q = o.quality;
        if (q > 75) { this.addHappy(g, 6 + (o.def.fun ?? 0.5) * 6); if (chance(0.25)) this.think(g, 'poolClean', 'good'); }
        else if (q < 45) { this.addHappy(g, -4); this.think(g, 'poolDirty', 'bad'); }
        else this.addHappy(g, 3);
        g.visited.add(o.id);
        this.maybeTip(g, 0.2);
        bus.emit('swam', { guest: g, obj: o });
        this.clearTask(g);
      }
    }
  }

  startDrowning(g, o) {
    this.clearTask(g);
    g.task = { type: 'drown', obj: o, phase: 'drown', t: 0, real: 0 };
    o.pool.swimmers.add(g);
    g.noSep = true;
    g.setIcon('iconHelp');
    const em = { guest: g, obj: o, t: 0, timeout: 40, handledBy: null };
    this.emergencies.push(em);
    g.emergency = em;
    bus.emit('drowning', em);
  }
  taskDrown(g, t, sdt) {
    const sy = this.swimY(g, t.obj, g.pos.x, g.pos.z);
    g.posY = sy.y + 0.12;
    g.pose = 'drown';
    if (Math.random() < 0.25) G.effects.splash(g.pos.x, WATER_Y, g.pos.z, 0.18);
  }
  rescue(g, by) {
    const em = g.emergency;
    if (!em) return;
    const i = this.emergencies.indexOf(em); if (i >= 0) this.emergencies.splice(i, 1);
    g.emergency = null;
    this.think(g, 'rescued', 'good');
    g.happiness = Math.max(40, g.happiness - 10);
    const o = g.task && g.task.obj;
    this.clearTask(g);
    if (o) {
      // pull guest to the pool edge
      const edge = G.park.poolEdgePoint(o, g.pos.x, g.pos.z);
      if (edge) g.pos.copy(edge);
    }
    g.posY = 0;
    g.needs.energy = Math.min(g.needs.energy, 0.3);
    bus.emit('rescued', { guest: g, by });
  }
  failRescue(em) {
    const g = em.guest;
    const i = this.emergencies.indexOf(em); if (i >= 0) this.emergencies.splice(i, 1);
    g.emergency = null;
    bus.emit('rescueFailed', em);
    // paramedics take the guest away
    for (const o of this.list) if (Math.hypot(o.pos.x - g.pos.x, o.pos.z - g.pos.z) < 25) this.addHappy(o, -12);
    this.despawn(g);
  }

  // ----- slides -----
  taskSlide(g, t, sdt) {
    const o = t.obj;
    const park = G.park;
    if (!park.objects.has(o.id)) return this.fail(g);
    const S = o.slide;
    if (o.broken && (t.phase === 'start' || t.phase === 'walk' || t.phase === 'queue')) return this.fail(g, 'broken');
    if (t.phase === 'start') {
      t.phase = 'walk'; g.pose = 'walk';
      const e = S.entrance, q = S.queueDir;
      const n = o.queue.length;
      g.walkTo(e.x + q.x * (n * 0.75 + 0.5), e.z + q.z * (n * 0.75 + 0.5), (ok) => {
        if (!ok) return this.fail(g);
        if (o.queue.length > 12) { this.think(g, 'queueLong', 'bad'); this.addHappy(g, -4); return this.fail(g); }
        o.queue.push(g); t.phase = 'queue'; t.t = 0;
      });
    } else if (t.phase === 'queue') {
      const i = o.queue.indexOf(g);
      if (i < 0) return this.fail(g);
      const e = S.entrance, q = S.queueDir;
      const tx = e.x + q.x * (i * 0.75 + 0.3), tz = e.z + q.z * (i * 0.75 + 0.3);
      const d = Math.hypot(tx - g.pos.x, tz - g.pos.z);
      if (d > 0.08) { g.pose = 'walk'; const st = Math.min(d, g.speed * sdt); g.pos.x += (tx - g.pos.x) / d * st; g.pos.z += (tz - g.pos.z) / d * st; g.faceTo(tx, tz, sdt); }
      else { g.pose = 'idle'; g.faceTo(e.x, e.z, sdt); }
      if (t.t > 70) { this.think(g, 'queueLong', 'bad'); this.addHappy(g, -8); return this.fail(g); }
      const now = G.time.sim;
      if (i === 0 && d < 0.4 && now >= (S.nextClimb || 0)) {
        o.queue.shift();
        S.nextClimb = now + 2.6;
        t.phase = 'climb'; t.t = 0; t.ci = 0;
        g.noSep = true;
        t.climb = [g.pos.clone(), ...S.climb];
      }
    } else if (t.phase === 'climb') {
      g.pose = 'climb';
      const pts = t.climb;
      let remain = 1.15 * sdt;
      while (remain > 0 && t.ci < pts.length - 1) {
        const a = g.pos, b = pts[t.ci + 1];
        const d = Math.hypot(b.x - a.x, b.y - g.posY, b.z - a.z);
        if (d <= remain) { g.pos.set(b.x, 0, b.z); g.posY = b.y; remain -= d; t.ci++; }
        else {
          const k = remain / d;
          g.pos.x += (b.x - a.x) * k; g.pos.z += (b.z - a.z) * k; g.posY += (b.y - g.posY) * k;
          g.faceTo(b.x, b.z, sdt * 2);
          remain = 0;
        }
      }
      if (t.ci >= pts.length - 1) {
        // choose lane & ride
        const lanes = S.design.lanes.length;
        t.lane = lanes > 1 ? (S.lane = (S.lane + 1) % lanes) : 0;
        t.phase = 'ride'; t.t = 0; t.fi = 0;
        g.customOrient = true;
        o.users.add(g);
        g.pose = 'slide';
      }
    } else if (t.phase === 'ride') {
      const tl = S.design.timelines[t.lane];
      const fi = Math.min(tl.frames.length - 1, Math.floor(t.t / tl.dt));
      const f = tl.frames[fi];
      const path = S.design.lanes[t.lane];
      samplePath(path, f.s, tmp);
      const R = S.def.R;
      const b = f.bank;
      // local -> world
      const c = Math.cos(b), s = Math.sin(b);
      _y.copy(tmp.up).multiplyScalar(c).addScaledVector(tmp.side, s);
      const local = tmp.pos.clone().addScaledVector(tmp.up, R).addScaledVector(tmp.up, -R * c).addScaledVector(tmp.side, -R * s);
      local.applyMatrix4(S.matrix);
      _y.transformDirection(S.matrix);
      _z.copy(tmp.tan).transformDirection(S.matrix);
      _x.crossVectors(_y, _z).normalize();
      _z.crossVectors(_x, _y).normalize();
      _m.makeBasis(_x, _y, _z);
      g.mesh.quaternion.setFromRotationMatrix(_m);
      g.mesh.position.copy(local);
      g.pos.set(local.x, 0, local.z);
      g.posY = local.y;
      if (fi >= tl.frames.length - 1) {
        // splash down
        g.customOrient = false;
        o.users.delete(g);
        const exitDir = _z.clone();
        g.pos.x += exitDir.x * 1.6; g.pos.z += exitDir.z * 1.6;
        G.effects.splash(g.pos.x, WATER_Y, g.pos.z, 1.5);
        G.audio && G.audio.play('splash', { pos: g.pos, vol: 0.9 });
        t.phase = 'swimOut'; t.t = 0;
        o.pool.swimmers.add(g);
        g.yaw = Math.atan2(exitDir.x, exitDir.z);
        g.wet = 1;
        // ride effects
        o.condition -= rand(0.4, 0.9);
        o.visits++;
        park.today.rides++;
        g.rides++;
        const fun = S.def.fun;
        g.needs.fun = Math.min(1, g.needs.fun + 0.3 * fun);
        g.needs.energy = Math.max(0, g.needs.energy - 0.04);
        const qPen = o.quality < 40 ? -5 : 0;
        this.addHappy(g, 8 + fun * 10 + (g.thrill - S.def.thrill * 0.5) * 6 + qPen);
        this.think(g, fun > 0.7 ? 'slideGreat' : 'slideOk', 'good');
        g.visited.add(o.id);
        bus.emit('ride', { guest: g, obj: o });
        if (o.condition <= 0) { o.condition = 0; o.broken = true; bus.emit('broken', o); }
        // fast slides sometimes launch riders head over heels into the pool
        const vEnd = tl.frames[tl.frames.length - 1].v;
        if (g.person.isMini && chance(0.18 + Math.min(0.3, vEnd * 0.025))) {
          o.pool.swimmers.delete(g);
          this.tumble(g, exitDir.clone().multiplyScalar(Math.min(9, vEnd * 0.8)).add(new THREE.Vector3(0, 3.5, 0)), rand(-5, 5));
          if (chance(0.5)) this.think(g, 'wheee', 'good');
          return;
        }
      }
    } else if (t.phase === 'swimOut') {
      const tgt = S.exitWater;
      const dx = tgt.x - g.pos.x, dz = tgt.z - g.pos.z, d = Math.hypot(dx, dz);
      const sp = 0.85 * sdt;
      if (d > 0.05) { g.pos.x += dx / d * Math.min(sp, d); g.pos.z += dz / d * Math.min(sp, d); g.faceTo(tgt.x, tgt.z, sdt); }
      const sy = this.swimY(g, o, g.pos.x, g.pos.z);
      g.posY = t.t < 0.6 ? lerp(sy.y - 0.6, sy.y, t.t / 0.6) : sy.y;
      g.pose = sy.deep ? 'swim' : 'walk';
      if (d <= 0.05 || t.t > 15) { t.phase = 'climbOut'; t.t = 0; t.from = g.pos.clone(); }
    } else if (t.phase === 'climbOut') {
      const k = Math.min(1, t.t / 1.0);
      g.pos.lerpVectors(t.from, S.exit, k);
      g.posY = lerp(g.posY, 0.03, k);
      g.pose = 'climb';
      if (k >= 1) {
        o.pool.swimmers.delete(g);
        g.pose = 'cheer';
        this.maybeTip(g, 0.3);
        this.clearTask(g);
        g.decideCD = 1.2;
        g.pose = 'cheer';
      }
    }
  }

  maybeTip(g, p) {
    if (g.happiness < 72 || !chance(p * (g.vip ? 2.5 : 1))) return;
    const v = g.vip ? Math.round(rand(20, 50)) : Math.round(rand(2, 9));
    if (g.cash < v) return;
    g.cash -= v;
    G.effects.addCoin(g.pos.x + rand(-0.4, 0.4), 1.4, g.pos.z + rand(-0.4, 0.4), v);
    bus.emit('tipDropped', { guest: g, value: v });
  }

  dropLitter(g) {
    if (!g.litter) return;
    g.litter = 0;
    if (!G.park.grid.isWalkable(g.pos.x, g.pos.z)) return;
    G.effects.addTrash(g.pos.x + rand(-0.3, 0.3), g.pos.z + rand(-0.3, 0.3));
  }

  // ------------------------------------------------------------ ragdolls, bonking & fare dodgers
  makeDodger(g, owes, kind, obj) {
    g.dodger = { owes: Math.max(5, owes), kind, t: G.time.real };
    g.setIcon('iconThief');
    if (chance(0.6)) this.think(g, 'runAway', 'bad');
    bus.emit('dodger', { guest: g, kind, obj });
  }

  // Can this guest be knocked over right now?
  canTumble(g) {
    if (g.dead || g.hidden || g.ragdoll || !g.person.isMini || !g.inPark && !(g.task && g.task.type === 'arrive')) return false;
    const t = g.task;
    if (t && t.type === 'slide' && (t.phase === 'climb' || t.phase === 'ride')) return false;
    if (t && t.type === 'service' && t.phase === 'use' && t.kind === 'toilet') return false;
    return true;
  }

  // Start a ragdoll without any judgement (slides, bumps...)
  tumble(g, vel, spin = 0) {
    if (g.ragdoll) { g.ragdoll.kick(vel); return; }
    const task = g.task;
    if (task && task.obj && task.obj.pool) task.obj.pool.swimmers.delete(g);
    if (task) { const keep = task.obj; this.clearTask(g); g.lastObj = keep; }
    g.stop();
    g.fleeing = false;
    g.customOrient = true;
    g.noSep = true;
    g.ragdoll = g.person.startRagdoll(vel, spin);
  }

  // The owner (or security) bonks a guest
  hit(g, vel, source = 'player') {
    if (!this.canTumble(g)) return false;
    const wasDodger = !!g.dodger;
    this.tumble(g, vel, rand(-7, 7));
    const head = new THREE.Vector3(g.pos.x, g.posY + 1.6 * g.scale, g.pos.z);
    G.audio && G.audio.play('bonk', { pos: head, vol: 1 });
    G.effects.sparkle(head.x, head.y, head.z, 0xfff27a, 16);
    G.hud && G.hud.floater(pick(['BONK!', 'POW!', 'WHACK!', 'BOINK!', 'KAPOW!']), head, 'red');
    if (wasDodger) this.catchDodger(g, source);
    else if (source === 'player' || source === 'bump') {
      this.addHappy(g, source === 'bump' ? -10 : -28);
      this.think(g, 'bonked', 'bad');
      g.bonks = (g.bonks || 0) + 1;
      if (source === 'player') for (const o of this.list) {
        if (o === g || o.dead || o.sawBonkT > G.time.real - 30) continue;
        if (Math.hypot(o.pos.x - g.pos.x, o.pos.z - g.pos.z) < 9) { o.sawBonkT = G.time.real; this.addHappy(o, -4); if (chance(0.4)) this.think(o, 'sawBonk', 'bad'); }
      }
      bus.emit('guestBonked', { guest: g, source });
    }
    return true;
  }

  catchDodger(g, source) {
    const d = g.dodger;
    if (!d) return;
    const fine = Math.max(30, Math.round(d.owes * 3));
    g.dodger = null;
    g.caught = true;
    g.setIcon(null);
    const pos = new THREE.Vector3(g.pos.x, 1.6, g.pos.z);
    if (source === 'player') {
      // the fine bursts out as coins for the owner to grab
      const n = Math.max(3, Math.min(10, Math.round(fine / 12)));
      for (let i = 0; i < n; i++) G.effects.addCoin(g.pos.x + rand(-1.3, 1.3), 1.2 + Math.random(), g.pos.z + rand(-1.3, 1.3), Math.round(fine / n));
    } else G.park.earn(fine, 'bonus', true, pos);
    G.park.today.dodgersCaught = (G.park.today.dodgersCaught || 0) + 1;
    this.think(g, 'busted', 'bad');
    bus.emit('dodgerCaught', { guest: g, fine, by: source });
  }

  updateRagdoll(g, dt) {
    g.ragdoll.step(dt);
    if (g.icon && g.iconName) { g.ragdoll.headPos(g.icon.position); g.icon.position.y += 0.7; g.icon.visible = true; }
    g.pos.x = g.ragdoll.x[0].x; g.pos.z = g.ragdoll.x[0].z;
    if (!g.ragdoll.done()) return;
    const s = g.person.endRagdoll();
    g.ragdoll = null;
    g.customOrient = false;
    g.noSep = false;
    g.pos.set(s.pos.x, 0, s.pos.z);
    g.yaw = s.yaw;
    g.posY = 0;
    const pa = G.park.poolAt(g.pos.x, g.pos.z);
    if (pa) {
      // still in a pool: swim to the edge and climb out
      const o = pa.obj;
      o.pool.swimmers.add(g);
      g.task = { type: 'pool', obj: o, phase: 'swim', t: 0, dur: 3, target: null, dtMin: 0, pause: 0 };
      g.posY = this.swimY(g, o, g.pos.x, g.pos.z).y;
    } else {
      const grid = G.park.grid;
      if (!grid.isWalkable(g.pos.x, g.pos.z)) {
        const [ix, iz] = grid.cellOf(g.pos.x, g.pos.z);
        const c = grid.nearestWalkable(ix, iz, 10);
        if (c) { const [x, z] = grid.centerOf(c[0], c[1]); g.pos.set(x, 0, z); }
      }
      g.pose = 'angry';
      g.decideCD = 1.6;
    }
    if (g.caught) { g.caught = false; g.decideCD = 0; this.setTask(g, { type: 'leave' }); }
  }

  // Nearest owner/security guard chasing this dodger (or null)
  chaser(g) {
    let best = null, bd = 9;
    const P = G.player;
    if (P && !P.ride && !P.inWater) { const d = Math.hypot(P.pos.x - g.pos.x, P.pos.z - g.pos.z); if (d < bd) { bd = d; best = { x: P.pos.x, z: P.pos.z, d }; } }
    for (const s of G.staff.list) if (s.type === 'security') { const d = Math.hypot(s.pos.x - g.pos.x, s.pos.z - g.pos.z); if (d < bd) { bd = d; best = { x: s.pos.x, z: s.pos.z, d }; } }
    return best;
  }

  fleeStep(g, sdt) {
    if (g.hidden || g.customOrient) return false;
    const t = g.task;
    const busy = t && ((t.type === 'pool' && t.phase !== 'walk' && t.phase !== 'start') || (t.type === 'slide' && t.phase !== 'walk' && t.phase !== 'queue') || t.type === 'drown');
    if (busy) return false;
    const ch = this.chaser(g);
    if (ch) {
      if (!g.fleeing) { this.clearTask(g); g.fleeing = true; if (chance(0.5)) this.think(g, 'runAway', 'bad'); }
      g.fleeT = 2.5; g.fleeFrom = ch;
    }
    if (!g.fleeing) return false;
    g.fleeT -= sdt;
    if (g.fleeT <= 0) { g.fleeing = false; g.pose = 'idle'; g.decideCD = 0.5; return false; }
    const from = g.fleeFrom || { x: g.pos.x, z: g.pos.z + 1 };
    let ax = g.pos.x - from.x, az = g.pos.z - from.z;
    const l = Math.hypot(ax, az) || 1; ax /= l; az /= l;
    const grid = G.park.grid, sp = 3.3 * sdt;
    for (const ang of [0, 0.5, -0.5, 1.1, -1.1, 1.7, -1.7, 2.4, -2.4, Math.PI]) {
      const c = Math.cos(ang), s = Math.sin(ang);
      const dx = ax * c - az * s, dz = ax * s + az * c;
      const nx = g.pos.x + dx * sp, nz = g.pos.z + dz * sp;
      const k = grid.idxAt(nx, nz);
      if (k >= 0 && grid.land[k] === 1 && !grid.block[k]) { g.pos.x = nx; g.pos.z = nz; g.faceTo(nx + dx, nz + dz, sdt * 2); break; }
    }
    g.pose = 'run';
    g.speed = 3.3;
    return true;
  }

  // ------------------------------------------------------------ update
  update(dt, sdt, dtMin) {
    const park = G.park;
    // arrivals
    const m = G.time.minutes;
    const open = m >= OPEN_HOUR && m < CLOSE_HOUR - 60;
    if (open) {
      const hour = m / 60;
      const curve = clamp((hour - 9) / 2.5, 0, 1) * clamp((19.5 - hour) / 3, 0, 1) * (hour > 11.5 && hour < 16 ? 1.15 : 1);
      const ratingF = 0.45 + park.rating / 5 * 1.25;
      let draw = 0;
      for (const o of park.lists.pools) draw += o.pool.capacity * 0.6;
      for (const o of park.lists.slides) draw += (o.def.appeal || 5) * 1.2;
      draw += park.lists.shops.length * 1.5 + park.lists.decor.length * 0.15;
      const attF = clamp(draw / 22, 0.5, 4.5);
      const weatherF = G.env ? G.env.weatherInfo.arrive : 1;
      const mkt = park.marketing > 0 ? 1.6 : 1;
      const rate = 0.16 * curve * ratingF * attF * weatherF * mkt;
      this.spawnAcc += rate * dtMin;
      const inside = this.list.length;
      while (this.spawnAcc >= 1) {
        this.spawnAcc -= 1;
        if (inside < this.maxGuests) this.spawn(false);
      }
    }
    if (this.list.length > park.records.maxGuests) park.records.maxGuests = this.list.length;
    if (this.list.length > park.today.peakGuests) park.today.peakGuests = this.list.length;

    processPaths(10);
    const camPos = G.camera.position;
    // emergencies
    for (let i = this.emergencies.length - 1; i >= 0; i--) {
      const em = this.emergencies[i];
      em.t += dt;
      if (!em.handledBy && em.t > em.timeout) this.failRescue(em);
    }

    const n = this.list.length;
    for (let i = 0; i < n; i++) {
      const g = this.list[i];
      if (!g || g.dead) continue;
      if (g.ragdoll) { this.updateRagdoll(g, dt); continue; }
      // needs (game minutes)
      if (g.inPark) {
        const N = g.needs, w = G.env ? G.env.weatherInfo.thirst : 1;
        N.hunger = Math.min(1, N.hunger + 0.0022 * dtMin);
        N.thirst = Math.min(1, N.thirst + 0.0028 * dtMin * w);
        N.bladder = Math.min(1, N.bladder + 0.0021 * dtMin);
        N.energy = Math.max(0, N.energy - 0.0013 * dtMin);
        N.fun = Math.max(0, N.fun - 0.002 * dtMin);
        let dh = 0.02; // a sunny day at a waterpark is pleasant by default
        if (N.hunger > 0.85) dh -= 0.25;
        if (N.thirst > 0.85) dh -= 0.3;
        if (N.bladder > 0.9) dh -= 0.35;
        if (N.energy < 0.15) dh -= 0.15;
        if (N.fun < 0.1) dh -= 0.08;
        g.happiness = clamp(g.happiness + dh * dtMin, 0, 100);
        g.wet = Math.max(0, g.wet - 0.01 * dtMin);
        g.person.uni.uWet.value = g.wet;
        // eating
        if (g.carrying) {
          g.eatT += dtMin;
          if (!g.task || g.task.type !== 'seat') g.poseExtra = 0;
          if (g.eatT > 16) {
            g.carrying = null;
            // litter
            if (g.litter) {
              const bins = park.lists.fac.bin || [];
              let near = null, nd = 14;
              for (const b of bins) { const d = Math.hypot(b.cx - g.pos.x, b.cz - g.pos.z); if (d < nd) { nd = d; near = b; } }
              if (near && (!g.task || g.task.type === 'wander')) this.setTask(g, { type: 'bin', obj: near });
              else if (near && chance(0.75)) g.litter = 0;
              else if (chance(0.6)) this.dropLitter(g);
              else g.litter = 0;
            }
          }
        }
        // environment checks
        g.envT -= dtMin;
        if (g.envT <= 0) {
          g.envT = rand(8, 14);
          const tr = G.effects.trashNear(g.pos.x, g.pos.z, 7);
          if (tr > 2) { this.addHappy(g, -tr * 0.8); if (chance(0.3)) this.think(g, 'trash', 'bad'); }
          const ap = park.appealAt(g.pos.x, g.pos.z);
          this.addHappy(g, Math.min(3, ap * 0.08));
          if (G.env && G.env.weather === 'rain' && !(g.task && g.task.type === 'pool')) { this.addHappy(g, -2); if (chance(0.15)) this.think(g, 'rain', 'bad'); }
          if (this.list.length > 40 + park.lists.pools.reduce((a, o) => a + o.pool.capacity, 0) * 1.4 + park.lists.slides.length * 8) { this.addHappy(g, -2); if (chance(0.1)) this.think(g, 'crowded', 'bad'); }
          if (g.happiness < 25 && !g.vip) g.setIcon(g.iconName === 'iconHelp' ? 'iconHelp' : 'iconAngry');
          else if (g.iconName === 'iconAngry') g.setIcon(null);
        }
      }
      // fare dodgers run from the owner and security
      if (g.dodger && g.inPark && this.fleeStep(g, sdt)) { g.render(dt, sdt, camPos); continue; }
      // task logic
      if (g.task) {
        g.task.dtMin = dtMin;
        this.runTask(g, sdt);
      } else if (g.inPark) {
        g.decideCD -= sdt;
        if ((g.pose === 'cheer' || g.pose === 'angry') && g.decideCD > 0) {/* keep emoting */}
        else g.pose = 'idle';
        if (g.decideCD <= 0 && !g.pathPending) { g.decideCD = rand(0.4, 1.2); this.decide(g); }
      }
      if (g.dead) continue;
      if (g.path) { g.stepPath(sdt); if (g.pose !== 'walk' && g.pose !== 'run' && g.pose !== 'climb' && !g.hidden) g.pose = 'walk'; }
      if (g.carrying && g.pose === 'idle') g.pose = 'eat';
      g.render(dt, sdt, camPos);
    }
    separate(this.list, sdt);
  }

  // guest the player is aiming at
  pick(ray, maxD = 12) {
    let best = null, bd = maxD;
    const c = new THREE.Vector3();
    for (const g of this.list) {
      if (g.hidden) continue;
      c.set(g.pos.x, g.posY + 1.1 * g.scale, g.pos.z);
      if (g.ragdoll) g.ragdoll.headPos(c);
      else if (g.customOrient) c.copy(g.mesh.position);
      const d = ray.origin.distanceTo(c);
      if (d > bd) continue;
      if (ray.distanceSqToPoint(c) < 0.38 * 0.38) { bd = d; best = g; }
    }
    return best;
  }

  activityText(g) {
    const t = g.task;
    if (!t) return 'Deciding what to do';
    switch (t.type) {
      case 'arrive': return 'Arriving';
      case 'leave': return 'Heading home';
      case 'wander': return 'Strolling around';
      case 'view': return 'Admiring the fountain';
      case 'seat': return t.seat && t.seat.pose === 'lie' ? 'Sunbathing' : 'Resting';
      case 'service': return t.kind === 'toilet' ? 'Using the restroom' : t.kind === 'shower' ? 'Showering' : t.kind === 'lockers' ? 'Renting a locker' : 'Buying from ' + t.obj.def.name;
      case 'pool': return (t.obj.pool.jacuzzi ? 'Relaxing in the ' : 'Swimming in the ') + t.obj.def.name;
      case 'slide': return t.phase === 'queue' ? 'Queueing for ' + t.obj.def.name : t.phase === 'ride' ? 'Riding ' + t.obj.def.name + '!' : 'Going to ' + t.obj.def.name;
      case 'drown': return 'DROWNING! Needs help!';
      case 'bin': return 'Throwing away trash';
    }
    return '';
  }
}
