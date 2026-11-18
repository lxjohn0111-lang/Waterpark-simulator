// Staff AI: janitors, lifeguards, pool technicians, mechanics.
import * as THREE from 'three';
import { G, bus } from '../core/context.js';
import { Agent, separate } from './agents.js';
import { randomLook } from '../world/people.js';
import { STAFF } from './catalog.js';
import { WATER_Y } from '../config.js';
import { rand, pick, clamp, lerp } from '../core/utils.js';

export class Staff {
  constructor() { this.list = []; }

  spawn(type) {
    const def = STAFF[type];
    const look = randomLook({ kid: false, suit: 'shirt', suitColor: def.color, accent: 0x1b2a4a, staff: true });
    look.cap = type === 'lifeguard' || type === 'janitor';
    look.colors.hair = look.colors.hair;
    const a = new Agent(look);
    a.type = type;
    a.speed = 1.45;
    a.pos.set(rand(-2, 2), 0, 59);
    a.job = null;
    a.cd = rand(0.2, 1);
    a.name = def.name;
    this.list.push(a);
    return a;
  }

  sync() {
    const want = G.park.staff;
    for (const type of Object.keys(STAFF)) {
      const have = this.list.filter((s) => s.type === type);
      for (let i = have.length; i < (want[type] || 0); i++) this.spawn(type);
      for (let i = want[type] || 0; i < have.length; i++) this.remove(have[i]);
    }
  }
  remove(s) {
    this.endJob(s);
    s.dispose();
    const i = this.list.indexOf(s); if (i >= 0) this.list.splice(i, 1);
  }
  endJob(s) {
    const j = s.job;
    if (j) {
      if (j.trash) j.trash.claimed = null;
      if (j.obj && j.obj.servicedBy === s) j.obj.servicedBy = null;
      if (j.tower && j.tower.points.guard === s) j.tower.points.guard = null;
      if (j.em && j.em.handledBy === s) j.em.handledBy = null;
    }
    s.job = null;
    s.stop();
    s.posY = 0;
    s.noSep = false;
  }

  // -------------------------------------------------------------- update
  update(dt, sdt) {
    const camPos = G.camera.position;
    for (const s of this.list) {
      s.cd -= sdt;
      if (!s.job && s.cd <= 0 && !s.pathPending) { s.cd = rand(0.6, 1.4); this.findJob(s); }
      if (s.job) this.runJob(s, sdt);
      if (s.path) { s.stepPath(sdt); if (s.pose !== 'run') s.pose = 'walk'; }
      s.render(dt, sdt, camPos);
    }
    separate(this.list, sdt);
  }

  findJob(s) {
    const park = G.park, fx = G.effects;
    switch (s.type) {
      case 'janitor': {
        const t = fx.nearestTrash(s.pos.x, s.pos.z, 70, true);
        if (t) { t.claimed = s; s.job = { kind: 'trash', trash: t, phase: 'go', t: 0 }; s.walkTo(t.x, t.z, (ok) => { if (!ok) { t.claimed = null; this.endJob(s); return; } s.job.phase = 'pick'; s.job.t = 0; s.pose = 'bend'; }); return; }
        const toilets = (park.lists.fac.toilet || []).filter((o) => o.dirt > 25 && !o.servicedBy).sort((a, b) => b.dirt - a.dirt);
        if (toilets.length) { const o = toilets[0]; o.servicedBy = s; s.job = { kind: 'toilet', obj: o, phase: 'go', t: 0 }; const p = o.points.service; s.walkTo(p.x, p.z, (ok) => { if (!ok) { this.endJob(s); return; } s.job.phase = 'work'; s.job.t = 0; s.pose = 'work'; }); return; }
        this.patrol(s);
        return;
      }
      case 'lifeguard': {
        const em = G.guests.emergencies.find((e) => !e.handledBy && Math.hypot(e.obj.cx - s.pos.x, e.obj.cz - s.pos.z) < 45);
        if (em) return this.respond(s, em);
        const tower = (park.lists.fac.lifeguard || []).find((o) => !o.points.guard || o.points.guard === s);
        if (tower) {
          tower.points.guard = s;
          s.job = { kind: 'tower', tower, phase: 'go', t: 0 };
          const p = tower.points.ladder;
          s.walkTo(p.x, p.z, (ok) => { if (!ok) { this.endJob(s); return; } s.job.phase = 'climb'; s.job.t = 0; s.job.from = s.pos.clone(); });
          return;
        }
        this.patrol(s, true);
        return;
      }
      case 'pooltech': {
        const pools = park.lists.pools.concat(park.lists.slides).filter((o) => o.pool && o.quality < 82 && !o.servicedBy).sort((a, b) => a.quality - b.quality);
        if (pools.length) {
          const o = pools[0];
          const edge = park.poolEdgePoint(o, s.pos.x, s.pos.z);
          if (edge) {
            o.servicedBy = s;
            s.job = { kind: 'pool', obj: o, phase: 'go', t: 0 };
            s.walkTo(edge.x, edge.z, (ok) => { if (!ok) { this.endJob(s); return; } s.job.phase = 'work'; s.job.t = 0; s.pose = 'work'; });
            return;
          }
        }
        this.patrol(s);
        return;
      }
      case 'mechanic': {
        const slides = park.lists.slides.filter((o) => (o.broken || o.condition < 65) && !o.servicedBy).sort((a, b) => (b.broken - a.broken) || (a.condition - b.condition));
        if (slides.length) {
          const o = slides[0];
          o.servicedBy = s;
          s.job = { kind: 'repair', obj: o, phase: 'go', t: 0 };
          const e = o.slide.entrance;
          s.walkTo(e.x - o.slide.queueDir.z * 1.2, e.z + o.slide.queueDir.x * 1.2, (ok) => { if (!ok) { this.endJob(s); return; } s.job.phase = 'work'; s.job.t = 0; s.pose = 'work'; });
          return;
        }
        this.patrol(s);
      }
    }
  }

  patrol(s, nearPools = false) {
    let p;
    const pools = G.park.lists.pools;
    if (nearPools && pools.length) { const o = pick(pools); p = G.park.poolEdgePoint(o, o.cx + rand(-8, 8), o.cz + rand(-8, 8)); p = p ? [p.x, p.z] : null; }
    else p = G.park.grid.randomParkPoint();
    if (!p) return;
    s.job = { kind: 'patrol', phase: 'go', t: 0 };
    s.walkTo(p[0], p[1], () => { if (s.job && s.job.kind === 'patrol') { s.job.phase = 'wait'; s.job.t = 0; s.pose = 'idle'; } });
  }

  respond(s, em) {
    this.endJob(s);
    em.handledBy = s;
    s.job = { kind: 'rescue', em, phase: 'run', t: 0 };
    s.pose = 'run';
    const g = em.guest;
    const edge = G.park.poolEdgePoint(em.obj, g.pos.x, g.pos.z);
    if (!edge) { em.handledBy = null; this.endJob(s); return; }
    G.audio && G.audio.play('whistle', { pos: s.pos, vol: 0.8 });
    s.speed = 3.6;
    s.walkTo(edge.x, edge.z, (ok) => {
      if (!ok || !s.job) { em.handledBy = null; s.speed = 1.45; this.endJob(s); return; }
      s.job.phase = 'swim'; s.job.t = 0;
      G.effects.splash(s.pos.x, WATER_Y, s.pos.z, 1.2);
      G.audio && G.audio.play('splash', { pos: s.pos, vol: 0.8 });
      s.noSep = true;
    });
  }

  runJob(s, sdt) {
    const j = s.job;
    j.t += sdt;
    switch (j.kind) {
      case 'trash':
        if (j.phase === 'pick') {
          s.pose = 'bend';
          if (j.t > 1.1) {
            if (G.effects.removeTrash(j.trash)) bus.emit('staffTrash', s);
            this.endJob(s);
          }
        } else if (!G.effects.trash.includes(j.trash)) this.endJob(s);
        break;
      case 'toilet':
        if (j.phase === 'work') { s.faceTo(j.obj.cx, j.obj.cz, sdt); if (j.t > 4) { j.obj.dirt = 0; this.endJob(s); } }
        break;
      case 'pool':
        if (j.phase === 'work') {
          s.faceTo(j.obj.cx, j.obj.cz, sdt);
          const o = j.obj;
          o.quality = Math.min(100, o.quality + 3.2 * sdt);
          if (Math.random() < sdt * 2) G.park.refreshPoolLook(o);
          if (j.t > 9 || o.quality >= 100) { G.park.refreshPoolLook(o); this.endJob(s); }
        }
        break;
      case 'repair':
        if (j.phase === 'work') {
          const o = j.obj;
          s.faceTo(o.slide.entrance.x, o.slide.entrance.z, sdt);
          if (Math.random() < sdt * 6) G.effects.sparkle(s.pos.x + Math.sin(s.yaw) * 0.6, 1.0, s.pos.z + Math.cos(s.yaw) * 0.6, 0xffc060, 2);
          if (j.t > 6) { o.condition = 100; if (o.broken) { o.broken = false; bus.emit('repaired', { obj: o, by: 'staff' }); } this.endJob(s); }
        }
        break;
      case 'tower': {
        const tw = j.tower;
        if (!G.park.objects.has(tw.id)) { this.endJob(s); break; }
        if (j.phase === 'climb') {
          const k = Math.min(1, j.t / 1.5);
          s.pos.lerpVectors(j.from, tw.points.seat, k);
          s.posY = lerp(0, tw.points.seat.y, k);
          s.pose = 'climb';
          if (k >= 1) { j.phase = 'sit'; s.yaw = tw.yaw; s.noSep = true; }
        } else if (j.phase === 'sit') {
          s.pos.set(tw.points.seat.x, 0, tw.points.seat.z);
          s.posY = tw.points.seat.y - 0.52;
          s.yaw = tw.yaw;
          s.pose = 'sit';
          // watch for emergencies in nearby pools
          const em = G.guests.emergencies.find((e) => !e.handledBy && Math.hypot(e.obj.cx - tw.cx, e.obj.cz - tw.cz) < 30);
          if (em) { s.posY = 0; s.pos.copy(tw.points.ladder); this.respond(s, em); }
        }
        break;
      }
      case 'rescue': {
        const em = j.em, g = em.guest;
        if (g.dead || !g.emergency) { s.speed = 1.45; this.endJob(s); break; }
        if (j.phase === 'swim') {
          const dx = g.pos.x - s.pos.x, dz = g.pos.z - s.pos.z, d = Math.hypot(dx, dz);
          const sp = 1.8 * sdt;
          if (d > 0.6) { s.pos.x += dx / d * sp; s.pos.z += dz / d * sp; s.faceTo(g.pos.x, g.pos.z, sdt); }
          const pa = G.park.poolAt(s.pos.x, s.pos.z);
          s.posY = Math.max(pa ? pa.floorY : -1, WATER_Y - 1.05);
          s.pose = 'swim';
          if (d <= 0.6 || j.t > 20) {
            G.guests.rescue(g, 'lifeguard');
            j.phase = 'out'; j.t = 0;
            const edge = G.park.poolEdgePoint(em.obj, s.pos.x, s.pos.z);
            j.from = s.pos.clone(); j.edge = edge || s.pos.clone();
          }
        } else if (j.phase === 'out') {
          const k = Math.min(1, j.t / 1.5);
          s.pos.lerpVectors(j.from, j.edge, k);
          s.posY = lerp(s.posY, 0, k);
          s.pose = 'climb';
          if (k >= 1) { s.speed = 1.45; s.noSep = false; this.endJob(s); s.cd = 2; }
        }
        break;
      }
      case 'patrol':
        if (j.phase === 'wait' && j.t > rand(2, 6)) this.endJob(s);
        break;
    }
  }
}
