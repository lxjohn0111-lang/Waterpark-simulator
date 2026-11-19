// In-game HUD (DOM overlay)
import * as THREE from 'three';
import { G, bus } from '../core/context.js';
import { fmtMoney, fmtTime, clamp } from '../core/utils.js';
import { TOOLS } from '../game/player.js';
import { OPEN_HOUR, CLOSE_HOUR, PARK_MIN, PLOT, GRID_MIN_X, GRID_MIN_Z, GRID_W, GRID_H } from '../config.js';

const $ = (id) => document.getElementById(id);

export class HUD {
  constructor() {
    this.el = $('hud');
    this.cashShown = 0;
    this.deltaT = 0;
    this.deltaAcc = 0;
    this.floaters = [];
    this.floaterPool = [];
    this.shakeT = 0;
    this.lastPrompt = null;
    this.lastInfo = null;
    this.minimapT = 0;
    this.mm = $('minimap').getContext('2d');
    this.toastsEl = $('toasts');
    this.lastQuestHtml = '';
    this._buildHotbar();
    bus.on('cash', (d) => this.onCash(d));
    bus.on('quests', () => this.renderQuests());
    bus.on('xp', () => this.renderXP());
    bus.on('tool', () => this.renderHotbar());
    bus.on('buildMode', () => this.renderHotbar());
    this.renderXP();
  }

  show() { this.el.classList.remove('hidden'); this.cashShown = G.park.cash; }

  _buildHotbar() {
    const hb = $('hotbar');
    const svg = {
      hand: '<svg viewBox="0 0 32 32"><path d="M6 26 L22 8" stroke="#cfd8df" stroke-width="3" stroke-linecap="round"/><path d="M20 6l6-2-2 6z" fill="#ff7a1a"/><rect x="3" y="24" width="6" height="6" rx="2" fill="#333"/></svg>',
      skimmer: '<svg viewBox="0 0 32 32"><path d="M4 28 L20 12" stroke="#cfd8df" stroke-width="3" stroke-linecap="round"/><ellipse cx="23" cy="9" rx="6" ry="6" fill="none" stroke="#27a8ff" stroke-width="3"/><path d="M19 10q4 8 8-2" fill="rgba(255,255,255,.6)"/></svg>',
      wrench: '<svg viewBox="0 0 32 32"><path d="M8 26 L20 14" stroke="#dfe6ec" stroke-width="5" stroke-linecap="round"/><circle cx="22" cy="10" r="6" fill="none" stroke="#dfe6ec" stroke-width="4"/><path d="M22 4v6h6" stroke="#0b1a26" stroke-width="3"/></svg>',
      build: '<svg viewBox="0 0 32 32"><path d="M4 26h24v3H4z" fill="#ffd34a"/><path d="M8 26V14l8-6 8 6v12" fill="#27d3ff"/><rect x="13" y="18" width="6" height="8" fill="#0b6fa8"/></svg>',
      tablet: '<svg viewBox="0 0 32 32"><rect x="6" y="3" width="20" height="26" rx="3" fill="#dfe6ec"/><rect x="8.5" y="6" width="15" height="18" rx="1" fill="#27d3ff"/><path d="M11 20l3-4 3 2 4-6" stroke="#fff" stroke-width="2" fill="none"/></svg>',
    };
    const slots = [
      ...TOOLS.map((t, i) => ({ k: String(i + 1), n: t.name, icon: svg[t.key], act: () => G.player.setTool(i), id: 'tool' + i })),
      { k: 'B', n: 'Build', icon: svg.build, act: () => G.menus.toggleCatalog(), id: 'build' },
      { k: 'Tab', n: 'Manage', icon: svg.tablet, act: () => G.menus.toggleTablet(), id: 'tablet' },
    ];
    hb.innerHTML = slots.map((s) => `<div class="slot" data-id="${s.id}"><span class="k">${s.k}</span>${s.icon}<span class="n">${s.n}</span></div>`).join('');
    hb.querySelectorAll('.slot').forEach((el, i) => el.addEventListener('click', (e) => { e.stopPropagation(); slots[i].act(); }));
    this.renderHotbar();
  }
  renderHotbar() {
    const hb = $('hotbar');
    hb.querySelectorAll('.slot').forEach((el) => {
      const id = el.dataset.id;
      let on = false;
      if (id.startsWith('tool')) on = !G.build?.active && G.player && G.player.tool === Number(id.slice(4));
      if (id === 'build') on = !!G.build?.active;
      el.classList.toggle('active', on);
    });
  }

  onCash(d) {
    if (d.popup !== false && d.pos && d.delta > 0) this.floater('+' + fmtMoney(d.delta), d.pos, d.cat === 'tips' ? '' : 'green');
    this.deltaAcc += d.delta;
    this.deltaT = 1.6;
    const el = $('cash-delta');
    el.textContent = (this.deltaAcc > 0 ? '+' : '') + fmtMoney(this.deltaAcc);
    el.className = this.deltaAcc >= 0 ? 'pos' : 'neg';
  }

  // ---------------------------------------------------------------- per-frame
  update(dt) {
    const park = G.park;
    // cash counter animation
    const target = park.cash;
    const diff = target - this.cashShown;
    this.cashShown += Math.abs(diff) < 1 ? diff : diff * Math.min(1, dt * 8);
    $('cash').textContent = fmtMoney(this.cashShown);
    this.deltaT -= dt;
    if (this.deltaT <= 0 && this.deltaAcc !== 0) { this.deltaAcc = 0; $('cash-delta').className = ''; }
    $('guest-count').textContent = G.guests.list.filter((g) => g.inPark).length;
    // stars
    const r = park.rating;
    const stars = $('stars');
    let html = '';
    for (let i = 1; i <= 5; i++) html += `<span class="${r >= i - 0.25 ? 'full' : r >= i - 0.75 ? 'half' : ''}">★</span>`;
    if (stars.innerHTML !== html) stars.innerHTML = html;
    $('rating-num').textContent = r.toFixed(1);
    // clock
    $('clock').textContent = fmtTime(G.time.minutes);
    $('day-label').textContent = 'Day ' + G.time.day;
    $('speed-label').textContent = G.time.speed + 'x';
    $('weather-ico').textContent = G.env.nightF > 0.5 ? (G.env.weather === 'rain' ? '🌧️' : '🌙') : G.env.weatherInfo.icon;
    $('weather-ico').title = G.env.weatherInfo.label + ' ' + G.env.temp + '°C';
    const open = G.time.minutes >= OPEN_HOUR && G.time.minutes < CLOSE_HOUR;
    const ps = $('park-status');
    ps.textContent = open ? `OPEN · ${G.env.temp}°C ${G.env.weatherInfo.label.toUpperCase()}` : 'CLOSED';
    ps.classList.toggle('closed', !open);
    this.updateFloaters(dt);
    if (G.isTouch) this.updateTouch();
    this.updateAlerts();
    this.minimapT -= dt;
    if (this.minimapT <= 0) { this.minimapT = 0.2; this.drawMinimap(); }
    // screen shake
    if (this.shakeT > 0) {
      this.shakeT -= dt;
      const k = this.shakeT * 0.08;
      G.camera.position.x += (Math.random() - 0.5) * k; G.camera.position.y += (Math.random() - 0.5) * k;
    }
  }

  shake(t) { this.shakeT = Math.max(this.shakeT, t); }

  // Contextual labels/visibility for the on-screen touch buttons
  updateTouch() {
    if (!this.tEls) {
      const q = (id) => document.getElementById(id);
      this.tEls = { act: q('tb-act'), actLbl: q('tb-act-lbl'), use: q('tb-use'), useLbl: q('tb-use-lbl'), useIco: q('tb-use-ico'), jumpLbl: q('tb-jump-lbl'), dive: q('tb-dive'), rot: q('bb-rotate'), col: q('bb-color') };
      this.tState = {};
    }
    const E = this.tEls, S = this.tState, P = G.player, B = G.build;
    const ctx = P.ctx || {};
    const set = (k, v, fn) => { if (S[k] !== v) { S[k] = v; fn(v); } };
    const toolIco = ['✋', '🥅', '🔧'][P.tool], toolLbl = ['Grab', 'Skim', 'Fix'][P.tool];
    let useLbl, useIco;
    if (B.active) {
      useIco = B.mode === 'sell' ? '🔨' : '🏗️';
      useLbl = B.mode === 'sell' ? 'Demolish' : B.mode === 'move' && !B.moving ? 'Pick up' : B.def && B.def.kind === 'path' ? 'Paint' : 'Place';
    } else { useIco = toolIco; useLbl = ctx.use || toolLbl; }
    set('useLbl', useLbl, (v) => (E.useLbl.textContent = v));
    set('useIco', useIco, (v) => (E.useIco.textContent = v));
    const act = !B.active && !P.ride ? ctx.act : null;
    set('act', act || '', (v) => { E.act.classList.toggle('off', !v); if (v) E.actLbl.textContent = v; });
    set('jump', ctx.jump || 'Jump', (v) => (E.jumpLbl.textContent = v));
    set('dive', !!(P.inWater && P.mode === 'swim' && !P.ride), (v) => E.dive.classList.toggle('off', !v));
    const canColor = B.active && B.mode === 'place' && B.def && (B.def.colorable || B.def.kind === 'slide') && !B.moving;
    const canRot = B.active && (B.mode === 'place' || !!B.moving);
    set('col', !!canColor, (v) => E.col.classList.toggle('off', !v));
    set('rot', !!canRot, (v) => E.rot.classList.toggle('off', !v));
  }

  renderXP() {
    const p = G.progression;
    if (!p) return;
    $('lvl-num').textContent = p.level;
    $('level-badge').textContent = p.level;
    const a = p.xp - p.xpPrev, b = p.xpNext - p.xpPrev;
    $('xp-fill').style.width = Math.round(clamp(a / b, 0, 1) * 100) + '%';
    $('xp-text').textContent = `${a.toLocaleString()} / ${b.toLocaleString()} XP`;
  }

  renderQuests() {
    const p = G.progression;
    if (!p) return;
    const html = p.quests.map((q) => {
      const pr = q.decimal ? q.progress.toFixed(1) + ' / ' + q.goal.toFixed(1) : (q.goal > 200 ? fmtMoney(q.progress) + ' / ' + fmtMoney(q.goal) : Math.floor(q.progress) + ' / ' + q.goal);
      return `<div class="quest ${q.done ? 'done' : ''} ${q.tut ? 'tut' : ''}"><div class="q-title"><span>${q.done ? '✅ ' : ''}${q.text}</span><span class="q-rew">+${fmtMoney(q.cash)}</span></div>${(G.isTouch ? q.hintTouch || q.hint : q.hint) && !q.done ? `<div class="q-hint">${G.isTouch ? q.hintTouch || q.hint : q.hint}</div>` : ''}<div class="q-bar"><div style="width:${Math.round(clamp(q.progress / q.goal, 0, 1) * 100)}%"></div></div><div class="q-hint" style="text-align:right">${pr}</div></div>`;
    }).join('');
    if (html !== this.lastQuestHtml) { $('quests').innerHTML = html; this.lastQuestHtml = html; }
    if (G.isTouch && !this.questTap) {
      this.questTap = true;
      $('quests').addEventListener('click', (e) => { e.stopPropagation(); if (!G.menus.open) G.menus.toggleTablet('goals'); });
    }
  }

  setPrompt(html) { if (html !== this.lastPrompt) { $('prompt').innerHTML = html; this.lastPrompt = html; } }
  setInfo(html) {
    if (html === this.lastInfo) return;
    this.lastInfo = html;
    const el = $('infocard');
    if (!html) el.classList.add('hidden'); else { el.innerHTML = html; el.classList.remove('hidden'); }
  }
  setProgress(p) {
    const el = $('progress-ring');
    if (p < 0) { el.classList.add('hidden'); return; }
    el.classList.remove('hidden');
    $('ring-fg').style.strokeDashoffset = (100.5 * (1 - clamp(p, 0, 1))).toFixed(1);
  }
  setCrosshairActive(v) { $('crosshair').classList.toggle('active', v); }
  setBuildPanel(html) {
    const el = $('build-panel');
    if (!html) { el.classList.add('hidden'); return; }
    el.classList.remove('hidden');
    if (el.innerHTML !== html) el.innerHTML = html;
  }
  setCrosshairVisible(v) { $('crosshair').style.display = v ? '' : 'none'; }

  toast(text, kind = '') {
    const el = document.createElement('div');
    el.className = 'toast ' + kind;
    el.innerHTML = text;
    this.toastsEl.prepend(el);
    while (this.toastsEl.children.length > 5) this.toastsEl.lastChild.remove();
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 500); }, 4200);
  }

  floater(text, pos, cls = '') {
    let el = this.floaterPool.pop();
    if (!el) { el = document.createElement('div'); $('floaters').appendChild(el); }
    el.className = 'floater ' + cls;
    el.textContent = text;
    el.style.display = '';
    this.floaters.push({ el, pos: pos.clone(), t: 0 });
    if (this.floaters.length > 40) { const f = this.floaters.shift(); f.el.style.display = 'none'; this.floaterPool.push(f.el); }
  }
  updateFloaters(dt) {
    const cam = G.camera;
    const w = window.innerWidth, h = window.innerHeight;
    const v = new THREE.Vector3();
    for (let i = this.floaters.length - 1; i >= 0; i--) {
      const f = this.floaters[i];
      f.t += dt;
      if (f.t > 1.6) { f.el.style.display = 'none'; this.floaterPool.push(f.el); this.floaters.splice(i, 1); continue; }
      v.copy(f.pos); v.y += f.t * 0.9;
      const dist = v.distanceTo(cam.position);
      v.project(cam);
      if (v.z > 1 || dist > 60) { f.el.style.opacity = 0; continue; }
      const sc = clamp(10 / dist, 0.55, 1.5);
      f.el.style.opacity = f.t < 1.1 ? 1 : 1 - (f.t - 1.1) / 0.5;
      f.el.style.transform = `translate(-50%,-50%) translate(${(v.x * 0.5 + 0.5) * w}px, ${(-v.y * 0.5 + 0.5) * h}px) scale(${sc})`;
    }
  }

  updateAlerts() {
    const al = $('alerts');
    const list = [];
    for (const em of G.guests.emergencies) list.push(`<div class="alert">🆘 Swimmer in trouble at ${em.obj.def.kind === 'slide' ? em.obj.def.name + ' pool' : em.obj.def.name}! ${Math.max(0, Math.ceil(em.timeout - em.t))}s</div>`);
    const broken = G.park.lists.slides.filter((o) => o.broken);
    if (broken.length) list.push(`<div class="alert warn">🔧 ${broken.map((o) => o.def.name).join(', ')} broken</div>`);
    const html = list.join('');
    if (al.innerHTML !== html) al.innerHTML = html;
    // direction arrows for emergencies
    const ca = $('compass-arrows');
    const targets = G.guests.emergencies.filter((e) => !e.handledBy).map((e) => ({ x: e.guest.pos.x, y: 0.5, z: e.guest.pos.z, label: 'HELP!' }));
    let ahtml = '';
    const cam = G.camera, w = window.innerWidth, h = window.innerHeight;
    for (const t of targets) {
      const v = new THREE.Vector3(t.x, t.y, t.z);
      const d = v.distanceTo(cam.position);
      v.project(cam);
      let x = v.x, y = v.y;
      const behind = v.z > 1;
      if (behind) { x = -x; y = -y; }
      const onScreen = !behind && Math.abs(x) < 0.9 && Math.abs(y) < 0.85;
      if (!onScreen) { const m = Math.max(Math.abs(x) / 0.9, Math.abs(y) / 0.85); x /= m; y /= m; }
      const ang = Math.atan2(x, y);
      const sx = (x * 0.5 + 0.5) * w, sy = (-y * 0.5 + 0.5) * h;
      ahtml += `<div class="cmp-arrow" style="left:${sx}px;top:${sy}px"><div class="tri" style="transform:rotate(${onScreen ? 180 : ang * 180 / Math.PI}deg)"></div><div class="lbl">${t.label} ${Math.round(d)}m</div></div>`;
    }
    if (ca.innerHTML !== ahtml) ca.innerHTML = ahtml;
  }

  drawMinimap() {
    const ctx = this.mm, S = 200;
    const park = G.park;
    // world window centered on park area
    const x0 = -70, z0 = -70, size = 145;
    const sc = S / size;
    const tx = (x) => (x - x0) * sc, tz = (z) => (z - z0) * sc;
    ctx.fillStyle = '#26402c'; ctx.fillRect(0, 0, S, S);
    // land
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      const owned = park.owned.includes(`${i},${j}`);
      ctx.fillStyle = owned ? '#4f8a45' : '#31503a';
      ctx.fillRect(tx(PARK_MIN + i * PLOT) + 0.5, tz(PARK_MIN + j * PLOT) + 0.5, PLOT * sc - 1, PLOT * sc - 1);
    }
    // plaza
    ctx.fillStyle = '#c9bfa8'; ctx.fillRect(tx(-14), tz(64), 28 * sc, 9 * sc);
    for (const o of park.lists.all) {
      const d = o.def;
      if (d.kind === 'path') { ctx.fillStyle = '#d8ccb0'; ctx.fillRect(tx(o.x0), tz(o.z0), o.W * sc + 0.5, o.D * sc + 0.5); }
    }
    for (const o of park.lists.all) {
      const d = o.def;
      if (d.kind === 'pool') {
        ctx.fillStyle = '#d9cfb8'; ctx.fillRect(tx(o.x0), tz(o.z0), o.W * sc, o.D * sc);
        if (o.hole && !o.hole.circle) { ctx.fillStyle = o.quality > 50 ? '#2ec5ef' : '#7a9a4a'; ctx.fillRect(tx(o.hole.x0), tz(o.hole.z0), (o.hole.x1 - o.hole.x0) * sc, (o.hole.z1 - o.hole.z0) * sc); }
        else if (o.hole) { ctx.fillStyle = '#ffb36a'; ctx.beginPath(); ctx.arc(tx(o.cx), tz(o.cz), o.hole.r * sc, 0, 6.3); ctx.fill(); }
      } else if (d.kind === 'slide') {
        ctx.strokeStyle = '#' + (o.color || 0xffffff).toString(16).padStart(6, '0'); ctx.lineWidth = 2.2;
        for (const lane of o.slide.design.lanes) {
          ctx.beginPath();
          for (let i = 0; i <= lane.n; i += 10) { const p = lane.P[i].clone().applyMatrix4(o.slide.matrix); if (i === 0) ctx.moveTo(tx(p.x), tz(p.z)); else ctx.lineTo(tx(p.x), tz(p.z)); }
          ctx.stroke();
        }
        if (o.hole) { ctx.fillStyle = '#2ec5ef'; ctx.fillRect(tx(o.hole.x0), tz(o.hole.z0), (o.hole.x1 - o.hole.x0) * sc, (o.hole.z1 - o.hole.z0) * sc); }
        ctx.fillStyle = o.broken ? '#ff4444' : '#e0e0e0'; const e = o.slide.entrance; ctx.fillRect(tx(e.x) - 2, tz(e.z) - 2, 4, 4);
      } else if (d.kind === 'shop') { ctx.fillStyle = '#ffb02a'; ctx.fillRect(tx(o.x0), tz(o.z0), o.W * sc, o.D * sc); }
      else if (d.kind === 'building') { ctx.fillStyle = '#b8c4cc'; ctx.fillRect(tx(o.x0), tz(o.z0), o.W * sc, o.D * sc); }
      else if (d.prefab === 'palm') { ctx.fillStyle = '#2f7a2a'; ctx.beginPath(); ctx.arc(tx(o.cx), tz(o.cz), 1.6, 0, 6.3); ctx.fill(); }
    }
    // trash
    ctx.fillStyle = '#c08a40';
    for (const t of G.effects.trash) ctx.fillRect(tx(t.x) - 0.7, tz(t.z) - 0.7, 1.4, 1.4);
    // guests & staff
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    for (const g of G.guests.list) ctx.fillRect(tx(g.pos.x) - 0.8, tz(g.pos.z) - 0.8, 1.6, 1.6);
    for (const s of G.staff.list) { ctx.fillStyle = '#' + (({ janitor: 0x3adf7a, lifeguard: 0xff4a4a, pooltech: 0x3a9aff, mechanic: 0xffa02a })[s.type]).toString(16); ctx.fillRect(tx(s.pos.x) - 1.3, tz(s.pos.z) - 1.3, 2.6, 2.6); }
    // emergencies
    const pulse = 3 + Math.sin(G.time.real * 8) * 1.5;
    for (const em of G.guests.emergencies) { ctx.strokeStyle = '#ff2a2a'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(tx(em.guest.pos.x), tz(em.guest.pos.z), pulse + 2, 0, 6.3); ctx.stroke(); }
    // gate
    ctx.fillStyle = '#27d3ff'; ctx.fillRect(tx(-4), tz(63.2), 8 * sc, 2);
    // player
    const p = G.player.pos;
    ctx.save();
    ctx.translate(tx(p.x), tz(p.z));
    ctx.rotate(-G.player.yaw);
    ctx.fillStyle = '#ffd34a'; ctx.strokeStyle = '#000'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(4.5, 5); ctx.lineTo(0, 2.5); ctx.lineTo(-4.5, 5); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
  }

  levelUp(level, bonus, unlocks, staff) {
    const el = $('levelup');
    const items = unlocks.slice(0, 6).map((d, i) => `<div class="lu-item" style="animation-delay:${0.15 + i * 0.08}s">${G.thumbs && G.thumbs[d.key] ? `<img src="${G.thumbs[d.key]}">` : ''}${d.name}</div>`).join('') + staff.map((s) => `<div class="lu-item">${s.icon} Hire ${s.name}s</div>`).join('');
    el.innerHTML = `<div class="lu-title">LEVEL ${level}!</div><div class="lu-sub">+${fmtMoney(bonus)} bonus${unlocks.length ? ' · New items unlocked' : ''}</div><div class="lu-unlocks">${items}</div>`;
    el.classList.remove('hidden');
    clearTimeout(this.luTimer);
    this.luTimer = setTimeout(() => el.classList.add('hidden'), 5200);
  }
}
