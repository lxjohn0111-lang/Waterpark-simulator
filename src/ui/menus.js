// Overlay menus: build catalog, management tablet, pause, day summary, settings.
import { G, bus } from '../core/context.js';
import { CATEGORIES, ITEMS, STAFF } from '../game/catalog.js';
import { fmtMoney, clamp } from '../core/utils.js';
import { PLOTS } from '../config.js';

const root = () => document.getElementById('overlay-root');

export class Menus {
  constructor() {
    this.open = null; // 'catalog' | 'tablet' | 'pause' | 'summary'
    this.catTab = 'pools';
    this.tabletTab = 'overview';
    this.el = null;
    this.refreshT = 0;
    bus.on('cash', () => { if (this.open === 'catalog') this.updateAffordability(); });
  }

  close(relock = true) {
    if (this.el) { this.el.remove(); this.el = null; }
    const was = this.open;
    this.open = null;
    G.ui.blocking = false;
    if (relock && !G.isTouch) G.input.lock();
    if (was === 'pause' || was === 'summary') G.sdk.gameplayStart();
    G.hud.setCrosshairVisible(true);
    return was;
  }

  _mount(html, cls = '') {
    if (this.el) this.el.remove();
    const el = document.createElement('div');
    el.className = 'overlay ' + cls;
    el.innerHTML = html;
    root().appendChild(el);
    this.el = el;
    G.ui.blocking = true;
    G.hud.setCrosshairVisible(false);
    el.addEventListener('mousedown', (e) => e.stopPropagation());
    return el;
  }

  // ------------------------------------------------------------ catalog
  toggleCatalog() {
    if (this.open === 'catalog') { this.close(); return; }
    if (this.open) this.close(false);
    if (G.build.active && G.build.moving) G.build.cancelMove();
    this.open = 'catalog';
    G.input.unlock();
    this.renderCatalog();
    G.audio.play('open', { vol: 0.5 });
  }
  renderCatalog() {
    const lvl = G.progression.level;
    const tabs = CATEGORIES.map((c) => `<div class="tab ${c.key === this.catTab ? 'active' : ''}" data-cat="${c.key}"><span class="tico">${c.icon}</span><span class="tn">${c.name}</span><span class="ts">${c.short}</span></div>`).join('');
    const items = Object.values(ITEMS).filter((d) => d.cat === this.catTab);
    const cards = items.map((d) => {
      const locked = d.level > lvl;
      const afford = G.park.cash >= d.cost;
      const isNew = !locked && !G.progression.seenUnlocks.has(d.key);
      const thumb = G.thumbs && G.thumbs[d.key] ? `<img class="thumb" src="${G.thumbs[d.key]}">` : `<div class="thumb" style="display:flex;align-items:center;justify-content:center;font-size:42px">${d.kind === 'tool' ? (d.tool === 'sell' ? '🔨' : '✋') : '🏗️'}</div>`;
      return `<div class="card ${locked ? 'locked' : ''}" data-key="${d.key}">${thumb}${locked ? `<div class="lock">🔒 Level ${d.level}</div>` : ''}${isNew ? '<div class="new">NEW</div>' : ''}<div class="c-body"><div class="c-name">${d.name}</div><div class="c-desc">${d.desc}</div><div class="c-foot"><span class="c-price ${afford || d.cost === 0 ? '' : 'bad'}" data-cost="${d.cost}">${d.cost ? fmtMoney(d.cost) : 'Free'}</span>${d.size ? `<span class="c-tag">${d.size[0]}×${d.size[1]}</span>` : d.kind === 'pool' || d.kind === 'slide' ? `<span class="c-tag">${G.park.dimsFor(d).join('×')}</span>` : ''}</div></div></div>`;
    }).join('');
    const el = this._mount(`<div class="window"><div class="win-head"><div class="win-title">🏗️ Build</div><div class="win-cash" id="cat-cash">${fmtMoney(G.park.cash)}</div><button class="btn x gray" id="cat-close">✕</button></div><div class="win-body"><div class="tabs">${tabs}</div><div class="content"><div class="grid">${cards}</div></div></div></div>`);
    el.querySelectorAll('.tab').forEach((t) => t.addEventListener('click', () => { this.catTab = t.dataset.cat; G.audio.play('tick', { vol: 0.4 }); this.renderCatalog(); }));
    el.querySelectorAll('.card').forEach((c) => c.addEventListener('click', () => {
      const d = ITEMS[c.dataset.key];
      if (d.level > G.progression.level) { G.audio.play('error', { vol: 0.5 }); return; }
      if (G.park.cash < d.cost) { G.audio.play('error', { vol: 0.5 }); G.hud.toast('Not enough cash', 'bad'); return; }
      G.progression.seenUnlocks.add(d.key);
      this.close(true);
      G.build.start(d.key);
      G.audio.play('click', { vol: 0.6 });
    }));
    el.querySelector('#cat-close').addEventListener('click', () => this.close());
    el.addEventListener('click', (e) => { if (e.target === el) this.close(); });
  }
  updateAffordability() {
    if (!this.el) return;
    const c = this.el.querySelector('#cat-cash'); if (c) c.textContent = fmtMoney(G.park.cash);
    this.el.querySelectorAll('.c-price').forEach((p) => p.classList.toggle('bad', Number(p.dataset.cost) > G.park.cash));
  }

  // ------------------------------------------------------------ tablet
  toggleTablet(tab) {
    if (this.open === 'tablet' && !tab) { this.close(); return; }
    if (this.open) this.close(false);
    if (G.build.active) G.build.stop();
    this.open = 'tablet';
    if (tab) this.tabletTab = tab;
    G.input.unlock();
    this.renderTablet();
    G.audio.play('open', { vol: 0.5 });
  }
  renderTablet() {
    const T = [
      ['overview', '📊', 'Overview', 'Stats'], ['finance', '💰', 'Finances', 'Money'], ['prices', '🏷️', 'Prices', 'Prices'], ['staff', '👷', 'Staff', 'Staff'],
      ['guests', '💭', 'Guests', 'Guests'], ['land', '🗺️', 'Land', 'Land'], ['goals', '🎯', 'Goals', 'Goals'], ['settings', '⚙️', 'Settings', 'Settings'],
    ];
    const tabs = T.map(([k, i, n, sh]) => `<div class="tab ${k === this.tabletTab ? 'active' : ''}" data-tab="${k}"><span class="tico">${i}</span><span class="tn">${n}</span><span class="ts">${sh}</span></div>`).join('');
    const el = this._mount(`<div class="window tablet"><div class="win-head"><div class="win-title">📱 ${G.park.parkName} Manager</div><div class="win-cash" id="tab-cash">${fmtMoney(G.park.cash)}</div><button class="btn x gray" id="tab-close">✕</button></div><div class="win-body"><div class="tabs">${tabs}</div><div class="content" id="tab-content"></div></div></div>`);
    el.querySelectorAll('.tab').forEach((t) => t.addEventListener('click', () => { this.tabletTab = t.dataset.tab; G.audio.play('tick', { vol: 0.4 }); this.renderTablet(); }));
    el.querySelector('#tab-close').addEventListener('click', () => this.close());
    el.addEventListener('click', (e) => { if (e.target === el) this.close(); });
    this.renderTabletContent();
  }
  renderTabletContent() {
    const c = this.el && this.el.querySelector('#tab-content');
    if (!c) return;
    const park = G.park;
    const cashEl = this.el.querySelector('#tab-cash'); if (cashEl) cashEl.textContent = fmtMoney(park.cash);
    const t = park.today;
    const inc = t.tickets + t.food + t.shops + t.tips + t.lockers + t.bonus;
    const guestsIn = G.guests.list.filter((g) => g.inPark);
    const avgH = guestsIn.length ? guestsIn.reduce((a, g) => a + g.happiness, 0) / guestsIn.length : 0;
    const rp = park.ratingParts;
    const bar = (v, col = '#27d3ff') => `<div class="mini-bar" style="height:8px"><div style="width:${Math.round(clamp(v, 0, 1) * 100)}%;background:${col}"></div></div>`;
    switch (this.tabletTab) {
      case 'overview': {
        c.innerHTML = `
          <div class="kpis">
            <div class="kpi"><div class="kl">Cash</div><div class="kv gold">${fmtMoney(park.cash)}</div></div>
            <div class="kpi"><div class="kl">Guests in park</div><div class="kv">${guestsIn.length}</div></div>
            <div class="kpi"><div class="kl">Avg. happiness</div><div class="kv ${avgH > 65 ? 'green' : avgH < 40 ? 'red' : ''}">${Math.round(avgH)}%</div></div>
            <div class="kpi"><div class="kl">Rating</div><div class="kv gold">${park.rating.toFixed(1)}★</div></div>
            <div class="kpi"><div class="kl">Income today</div><div class="kv green">${fmtMoney(inc)}</div></div>
            <div class="kpi"><div class="kl">Visitors today</div><div class="kv">${t.guestsIn}</div></div>
          </div>
          <div class="section-title">Rating breakdown</div>
          <div class="row rb"><div class="r-main"><div class="r-title">😊 Guest happiness</div>${bar(rp.happy, '#4ce08a')}</div></div>
          <div class="row rb"><div class="r-main"><div class="r-title">🧽 Cleanliness</div><div class="r-sub">Litter: ${G.effects.trash.length} · Pools & restrooms condition</div>${bar(rp.clean)}</div></div>
          <div class="row rb"><div class="r-main"><div class="r-title">🎢 Attractions</div><div class="r-sub">${park.lists.pools.length} pools · ${park.lists.slides.length} slides · ${park.lists.shops.length} shops</div>${bar(rp.attractions, '#ffd34a')}</div></div>
          <div class="row rb"><div class="r-main"><div class="r-title">🌴 Scenery</div><div class="r-sub">Palms, flowers, fountains & decorations</div>${bar(rp.scenery, '#7cffd4')}</div></div>
          <div class="row rb"><div class="r-main"><div class="r-title">🛟 Safety & facilities</div><div class="r-sub">Restrooms, lifeguards on towers, first aid, bins</div>${bar(rp.safety, '#ff8a6a')}</div></div>
          <div class="section-title">Boosts</div>
          <div class="row"><div class="r-ico">📣</div><div class="r-main"><div class="r-title">Advertising campaign</div><div class="r-sub">+60% visitors for 6 in-game hours ${park.marketing > 0 ? `· <b style="color:#4ce08a">ACTIVE ${Math.ceil(park.marketing / 60)}h left</b>` : ''}</div></div><button class="btn small gold" id="btn-ad" ${park.marketing > 0 ? 'disabled' : ''}>${fmtMoney(this.adCost())}</button></div>
          <div class="row"><div class="r-ico">🎬</div><div class="r-main"><div class="r-title">Sponsor deal</div><div class="r-sub">Watch a short ad to receive ${fmtMoney(this.sponsorValue())}</div></div><button class="btn small green" id="btn-sponsor" ${this.sponsorCD() > 0 ? 'disabled' : ''}>${this.sponsorCD() > 0 ? Math.ceil(this.sponsorCD()) + 's' : '▶ Watch'}</button></div>
          <div class="row"><div class="r-ico">⏩</div><div class="r-main"><div class="r-title">Game speed</div><div class="r-sub">${G.isTouch ? 'Faster days, faster money' : 'Press T to cycle'}</div></div><div class="seg" id="seg-speed">${[1, 2, 3].map((s) => `<button class="${G.time.speed === s ? 'on' : ''}" data-s="${s}">${s}x</button>`).join('')}</div></div>`;
        c.querySelector('#btn-ad').addEventListener('click', () => { const cost = this.adCost(); if (park.cash >= cost) { park.spend(cost, 'upkeep'); park.marketing = 360; G.audio.play('cash'); G.hud.toast('📣 Advertising campaign launched!', 'good'); this.renderTabletContent(); } else G.audio.play('error'); });
        c.querySelector('#btn-sponsor').addEventListener('click', () => this.watchSponsor());
        c.querySelectorAll('#seg-speed button').forEach((b) => b.addEventListener('click', () => { G.time.speed = Number(b.dataset.s); this.renderTabletContent(); }));
        break;
      }
      case 'finance': {
        const hist = park.history.slice(-10);
        const maxV = Math.max(100, ...hist.map((h) => Math.abs(h.profit)));
        const bars = hist.map((h) => `<div class="b ${h.profit < 0 ? 'neg' : ''}" style="height:${Math.max(2, Math.abs(h.profit) / maxV * 100)}%" title="${fmtMoney(h.profit)}"><span>D${h.day}</span></div>`).join('') || '<div style="color:#9fb6c6">Finish your first day to see history.</div>';
        c.innerHTML = `
          <div class="section-title">Today</div>
          <table class="sum-table">
            <tr><td>🎟️ Tickets</td><td class="pos">${fmtMoney(t.tickets)}</td></tr>
            <tr><td>🍔 Food & drinks</td><td class="pos">${fmtMoney(t.food)}</td></tr>
            <tr><td>🛍️ Shops</td><td class="pos">${fmtMoney(t.shops)}</td></tr>
            <tr><td>🪙 Tips</td><td class="pos">${fmtMoney(t.tips)}</td></tr>
            <tr><td>🔐 Lockers</td><td class="pos">${fmtMoney(t.lockers)}</td></tr>
            <tr><td>🎁 Bonuses & rewards</td><td class="pos">${fmtMoney(t.bonus)}</td></tr>
            <tr><td>🏗️ Construction</td><td class="neg">-${fmtMoney(t.build)}</td></tr>
            <tr><td>🗺️ Land</td><td class="neg">-${fmtMoney(t.land)}</td></tr>
            <tr><td>👷 Wages (due at close)</td><td class="neg">-${fmtMoney(Object.entries(park.staff).reduce((a, [k, n]) => a + STAFF[k].wage * n, 0))}</td></tr>
            <tr><td>🔧 Upkeep (due at close)</td><td class="neg">-${fmtMoney(park.lists.all.reduce((a, o) => a + (o.def.upkeep || 0), 0))}</td></tr>
          </table>
          <div class="section-title" style="margin-top:18px">Daily profit</div>
          <div class="bars">${bars}</div>
          <div class="section-title" style="margin-top:26px">Records</div>
          <div class="kpis"><div class="kpi"><div class="kl">Best day</div><div class="kv gold">${fmtMoney(park.records.bestDay)}</div></div><div class="kpi"><div class="kl">Most guests at once</div><div class="kv">${park.records.maxGuests}</div></div><div class="kpi"><div class="kl">Total visitors</div><div class="kv">${park.records.totalGuests}</div></div><div class="kpi"><div class="kl">Total earned</div><div class="kv green">${fmtMoney(park.records.totalEarned)}</div></div></div>`;
        break;
      }
      case 'prices': {
        const will = Math.round(9 + park.rating * 5.5 + Math.min(12, park.lists.slides.length * 2 + park.lists.pools.length));
        c.innerHTML = `
          <div class="row"><div class="r-ico">🎟️</div><div class="r-main"><div class="r-title">Entry ticket <span style="color:#ffd34a" id="tp-val">${fmtMoney(park.ticketPrice)}</span></div><div class="r-sub">Guests currently think a fair price is around <b>${fmtMoney(will)}</b>. Kids pay 60%.</div></div><input type="range" min="0" max="120" step="1" value="${park.ticketPrice}" id="tp"></div>
          <div class="row"><div class="r-ico">🍔</div><div class="r-main"><div class="r-title">Food & drink prices <span style="color:#ffd34a" id="fp-val">${Math.round(park.foodMult * 100)}%</span></div><div class="r-sub">Higher prices earn more per sale but annoy guests above ~135%.</div></div><input type="range" min="50" max="250" step="5" value="${Math.round(park.foodMult * 100)}" id="fp"></div>
          <div class="section-title" style="margin-top:14px">Menu</div>
          ${Object.values(ITEMS).filter((d) => d.shop).map((d) => `<div class="row"><div class="r-main"><div class="r-title">${d.name}</div><div class="r-sub">${d.desc}</div></div><b style="color:#ffd34a">${fmtMoney(d.shop.price * park.foodMult)}</b></div>`).join('')}`;
        c.querySelector('#tp').addEventListener('input', (e) => { park.ticketPrice = Number(e.target.value); c.querySelector('#tp-val').textContent = fmtMoney(park.ticketPrice); });
        c.querySelector('#fp').addEventListener('input', (e) => { park.foodMult = Number(e.target.value) / 100; c.querySelector('#fp-val').textContent = Math.round(park.foodMult * 100) + '%'; });
        break;
      }
      case 'staff': {
        c.innerHTML = Object.entries(STAFF).map(([k, s]) => {
          const locked = s.level > G.progression.level;
          return `<div class="row" style="${locked ? 'opacity:.5' : ''}"><div class="r-ico">${s.icon}</div><div class="r-main"><div class="r-title">${s.name}s ${locked ? `<span style="color:#ffd34a;font-size:12px">🔒 Level ${s.level}</span>` : ''}</div><div class="r-sub">${s.desc} · ${fmtMoney(s.wage)}/day each</div></div>
            <button class="btn small gray" data-fire="${k}" ${locked || !park.staff[k] ? 'disabled' : ''}>−</button><div class="count">${park.staff[k] || 0}</div><button class="btn small green" data-hire="${k}" ${locked ? 'disabled' : ''}>+ Hire</button></div>`;
        }).join('') + `<div class="r-sub" style="margin-top:10px;color:#9fb6c6">Lifeguards sit on Lifeguard Towers (build them next to pools). Wages are paid at the end of each day.</div>`;
        c.querySelectorAll('[data-hire]').forEach((b) => b.addEventListener('click', () => {
          const k = b.dataset.hire;
          if ((park.staff[k] || 0) >= 12) return;
          park.staff[k] = (park.staff[k] || 0) + 1; G.staff.sync(); G.audio.play('click'); bus.emit('hired', k); this.renderTabletContent();
          if (k === 'lifeguard' && !(park.lists.fac.lifeguard || []).length) G.hud.toast('Tip: build a Lifeguard Tower next to your pools!', 'gold');
        }));
        c.querySelectorAll('[data-fire]').forEach((b) => b.addEventListener('click', () => { const k = b.dataset.fire; park.staff[k] = Math.max(0, (park.staff[k] || 0) - 1); G.staff.sync(); G.audio.play('tick'); this.renderTabletContent(); }));
        break;
      }
      case 'guests': {
        const feed = [...G.guests.thoughtFeed].sort((a, b) => b.t - a.t);
        c.innerHTML = `<div class="kpis"><div class="kpi"><div class="kl">In park</div><div class="kv">${guestsIn.length}</div></div><div class="kpi"><div class="kl">Avg. happiness</div><div class="kv">${Math.round(avgH)}%</div></div><div class="kpi"><div class="kl">Avg. wallet</div><div class="kv gold">${fmtMoney(guestsIn.length ? guestsIn.reduce((a, g) => a + g.cash, 0) / guestsIn.length : 0)}</div></div><div class="kpi"><div class="kl">Hungry / Thirsty</div><div class="kv">${guestsIn.filter((g) => g.needs.hunger > 0.6).length} / ${guestsIn.filter((g) => g.needs.thirst > 0.6).length}</div></div></div>
          <div class="section-title">What guests are saying</div>
          ${feed.map((f) => `<div class="thought ${f.kind}"><span>“${f.text}”</span><span class="tc">×${f.count}</span></div>`).join('') || '<div class="r-sub">No thoughts yet.</div>'}`;
        break;
      }
      case 'land': {
        let grid = '';
        for (let j = 0; j < PLOTS; j++) for (let i = 0; i < PLOTS; i++) {
          const k = `${i},${j}`;
          const owned = park.owned.includes(k);
          const can = park.canBuyPlot(k);
          grid += `<div class="plot ${owned ? 'owned' : can ? 'buy' : 'no'} ${j === 3 && (i === 1 || i === 2) ? 'gate' : ''}" data-plot="${k}">${owned ? '✓ Owned' : can ? '🏷️ ' + fmtMoney(park.landPrice()) : '—'}</div>`;
        }
        c.innerHTML = `<div class="land-wrap wide"><div class="landmap">${grid}</div><div class="land-info"><div class="section-title">Expand your park</div><div class="r-sub">North is up, the entrance is at the bottom. Each plot is 32×32 m and costs <b style="color:#ffd34a">${fmtMoney(park.landPrice())}</b>. Tap a gold plot to buy it, or walk to a <b>FOR SALE</b> sign in the park.</div></div></div>`;
        c.querySelectorAll('.plot.buy').forEach((p) => p.addEventListener('click', () => {
          const k = p.dataset.plot;
          if (park.cash < park.landPrice()) { G.audio.play('error'); G.hud.toast('Not enough cash', 'bad'); return; }
          if (park.buyPlot(k)) { G.audio.play('cash'); this.renderTabletContent(); }
        }));
        break;
      }
      case 'goals': {
        const p = G.progression;
        c.innerHTML = `<div class="kpis"><div class="kpi"><div class="kl">Level</div><div class="kv">${p.level}</div></div><div class="kpi"><div class="kl">XP</div><div class="kv">${p.xp.toLocaleString()}</div></div><div class="kpi"><div class="kl">Goals completed</div><div class="kv green">${p.completedQuests}</div></div></div>
          <div class="section-title">Active goals</div>
          ${p.quests.filter((q) => !q.done).map((q) => `<div class="row"><div class="r-ico">🎯</div><div class="r-main"><div class="r-title">${q.text}</div><div class="r-sub">${(G.isTouch && q.hintTouch) || q.hint || ''}</div>${bar(q.progress / q.goal, '#4ce08a')}</div><b style="color:#ffd34a">+${fmtMoney(q.cash)}</b></div>`).join('')}
          <div class="section-title" style="margin-top:14px">Next unlocks</div>
          ${Object.values(ITEMS).filter((d) => d.level > p.level && d.level <= p.level + 2).slice(0, G.isTouch ? 4 : 99).map((d) => `<div class="row"><div class="r-ico">🔒</div><div class="r-main"><div class="r-title">${d.name}</div><div class="r-sub">Level ${d.level} · ${d.desc}</div></div></div>`).join('')}`;
        break;
      }
      case 'settings': {
        c.innerHTML = this.settingsHTML();
        this.bindSettings(c);
        break;
      }
    }
  }
  adCost() { return 400 + G.progression.level * 250; }
  sponsorValue() { return 500 + G.progression.level * 250; }
  sponsorCD() { return Math.max(0, (this.sponsorAt || -999) + 240 - G.time.real); }
  async watchSponsor() {
    if (this.sponsorCD() > 0) return;
    const ok = await G.ads.rewarded();
    if (ok) {
      this.sponsorAt = G.time.real;
      G.park.earn(this.sponsorValue(), 'bonus', false);
      G.audio.play('jackpot');
      G.hud.toast(`🎬 Sponsor paid ${fmtMoney(this.sponsorValue())}!`, 'gold');
    }
    if (this.open === 'tablet') this.renderTabletContent();
  }

  settingsHTML() {
    const s = G.settings;
    return `<div class="settings-grid wide">
      <div class="settings-row"><span>Graphics quality</span><div class="seg" id="seg-q">${['auto', 'low', 'medium', 'high'].map((q) => `<button class="${s.quality === q ? 'on' : ''}" data-q="${q}">${q[0].toUpperCase() + q.slice(1)}</button>`).join('')}</div></div>
      <div class="settings-row"><span>Master volume</span><input type="range" min="0" max="100" value="${Math.round(s.volume * 100)}" data-set="volume"></div>
      <div class="settings-row"><span>Music</span><input type="range" min="0" max="100" value="${Math.round(s.music * 100)}" data-set="music"></div>
      <div class="settings-row"><span>Sound effects</span><input type="range" min="0" max="100" value="${Math.round(s.sfx * 100)}" data-set="sfx"></div>
      <div class="settings-row"><span>${G.isTouch ? 'Look sensitivity' : 'Mouse sensitivity'}</span><input type="range" min="20" max="300" value="${Math.round(s.sensitivity * 100)}" data-set="sensitivity"></div>
      <div class="settings-row"><span>Field of view</span><input type="range" min="60" max="100" value="${s.fov}" data-set="fov"></div>
      <div class="settings-row"><span>${G.isTouch ? 'Invert look' : 'Invert mouse Y'}</span><div class="seg" id="seg-inv"><button class="${!s.invertY ? 'on' : ''}" data-v="0">Off</button><button class="${s.invertY ? 'on' : ''}" data-v="1">On</button></div></div>
      <div class="settings-row"><span>Show FPS</span><div class="seg" id="seg-fps"><button class="${!s.showFps ? 'on' : ''}" data-v="0">Off</button><button class="${s.showFps ? 'on' : ''}" data-v="1">On</button></div></div>
      ${G.isTouch ? `<div class="settings-row"><span>Raise buttons</span><div class="seg" id="seg-lift">${[0, 30, 60, 90].map((v) => `<button class="${(s.lift || 0) === v ? 'on' : ''}" data-v="${v}">${v ? '+' + v : 'Off'}</button>`).join('')}</div></div>` : ''}
      <div class="settings-row"><span style="color:#ff9a9a">Start a new park</span><button class="btn small red" id="btn-reset">Reset progress</button></div></div>`;
  }
  bindSettings(c) {
    const s = G.settings;
    c.querySelectorAll('#seg-q button').forEach((b) => b.addEventListener('click', () => { s.quality = b.dataset.q; G.applyQuality(true); G.saveSettings(); c.querySelectorAll('#seg-q button').forEach((x) => x.classList.toggle('on', x === b)); }));
    c.querySelectorAll('input[data-set]').forEach((r) => r.addEventListener('input', () => {
      const k = r.dataset.set; const v = Number(r.value);
      if (k === 'fov') s.fov = v; else s[k] = v / 100;
      G.audio.applyVolumes(); G.saveSettings();
    }));
    c.querySelectorAll('#seg-inv button').forEach((b) => b.addEventListener('click', () => { s.invertY = b.dataset.v === '1'; G.saveSettings(); c.querySelectorAll('#seg-inv button').forEach((x) => x.classList.toggle('on', x === b)); }));
    c.querySelectorAll('#seg-fps button').forEach((b) => b.addEventListener('click', () => { s.showFps = b.dataset.v === '1'; G.saveSettings(); c.querySelectorAll('#seg-fps button').forEach((x) => x.classList.toggle('on', x === b)); }));
    c.querySelectorAll('#seg-lift button').forEach((b) => b.addEventListener('click', () => { s.lift = Number(b.dataset.v); G.applyLift(); G.saveSettings(); c.querySelectorAll('#seg-lift button').forEach((x) => x.classList.toggle('on', x === b)); }));
    const reset = c.querySelector('#btn-reset');
    if (reset) reset.addEventListener('click', () => {
      if (reset.dataset.confirm) { G.resetGame(); return; }
      reset.dataset.confirm = '1'; reset.textContent = G.isTouch ? 'Tap again to confirm' : 'Click again to confirm';
    });
  }

  // ------------------------------------------------------------ pause
  showPause() {
    if (this.open === 'pause') return;
    if (this.open) this.close(false);
    this.open = 'pause';
    G.sdk.gameplayStop();
    const el = this._mount(`<div class="center-card"><div class="pause-logo">SPLASH HAVEN</div><h2 id="p-h2">Paused</h2>
      <div class="btns" id="p-main"><button class="btn green" id="p-resume">▶ Resume</button><button class="btn" id="p-manage">📱 Manage park</button><button class="btn gray" id="p-settings">⚙️ Settings</button><button class="btn gray" id="p-help">❓ Controls</button></div><div id="p-extra"></div></div>`);
    const main = el.querySelector('#p-main'), extra = el.querySelector('#p-extra'), h2 = el.querySelector('#p-h2');
    const sub = (title, html) => {
      main.style.display = 'none';
      h2.textContent = title;
      extra.innerHTML = html + '<div class="btns" style="grid-template-columns:1fr"><button class="btn gray" id="p-back">← Back</button></div>';
      extra.querySelector('#p-back').addEventListener('click', () => { extra.innerHTML = ''; main.style.display = ''; h2.textContent = 'Paused'; });
    };
    el.querySelector('#p-resume').addEventListener('click', () => { this.close(true); });
    el.querySelector('#p-manage').addEventListener('click', () => { this.close(false); G.sdk.gameplayStart(); this.toggleTablet('overview'); });
    el.querySelector('#p-settings').addEventListener('click', () => { sub('Settings', this.settingsHTML()); this.bindSettings(extra); });
    el.querySelector('#p-help').addEventListener('click', () => sub('Controls', controlsHTML()));
  }

  // ------------------------------------------------------------ day summary
  showSummary(sum) {
    if (this.open) this.close(false);
    if (G.build.active) G.build.stop();
    this.open = 'summary';
    G.input.unlock();
    G.sdk.gameplayStop();
    const s = sum.stats;
    const happy = s.happyN ? Math.round(s.happySum / s.happyN) : 0;
    const el = this._mount(`<div class="center-card sum"><div class="sum-head"><h1>🌙 Day ${sum.day} complete!</h1><h2>${G.park.parkName} daily report</h2></div>
      <div class="sum-left"><table class="sum-table">
        <tr><td>🎟️ Visitors</td><td>${s.guestsIn}</td></tr>
        <tr><td>😊 Happiness of leaving guests</td><td>${happy}%</td></tr>
        <tr><td>🎢 Slide rides · 🏊 swims</td><td>${s.rides} · ${s.swims}</td></tr>
        <tr><td>💵 Income</td><td class="pos">${fmtMoney(sum.income)}</td></tr>
        <tr><td>👷 Wages</td><td class="neg">-${fmtMoney(s.wages)}</td></tr>
        <tr><td>🔧 Upkeep</td><td class="neg">-${fmtMoney(s.upkeep)}</td></tr>
        <tr class="tot"><td>Profit</td><td class="${sum.profit >= 0 ? 'pos' : 'neg'}">${fmtMoney(sum.profit)}</td></tr>
      </table></div>
      <div class="sum-right">${sum.newRecord ? '<div class="record">🏆 NEW RECORD DAY!</div>' : ''}
      <div class="btns">
        ${sum.profit > 0 ? `<button class="btn gold" id="s-double">🎬 Watch ad: +${fmtMoney(Math.max(250, sum.income * 0.5))} bonus</button>` : ''}
        <button class="btn green" id="s-next">☀️ Start Day ${sum.day + 1}</button>
      </div></div></div>`);
    const nextBtn = el.querySelector('#s-next');
    nextBtn.addEventListener('click', async () => {
      nextBtn.disabled = true;
      this.close(true);
      G.startNextDay();
      // natural break: midgame ad between days (SDK throttles frequency)
      if (sum.day >= 2) await G.ads.midgame();
    });
    const dbl = el.querySelector('#s-double');
    if (dbl) dbl.addEventListener('click', async () => {
      dbl.disabled = true;
      const ok = await G.ads.rewarded();
      if (ok) {
        const v = Math.round(Math.max(250, sum.income * 0.5));
        G.park.earn(v, 'bonus', false);
        G.audio.play('jackpot');
        dbl.textContent = `✅ +${fmtMoney(v)} added!`;
      } else { dbl.textContent = 'Ad not available right now'; }
    });
  }

  update(dt) {
    if (this.open === 'tablet') {
      this.refreshT -= dt;
      if (this.refreshT <= 0) {
        this.refreshT = 1;
        if (['overview', 'guests', 'finance'].includes(this.tabletTab) && !document.activeElement?.matches?.('input')) this.renderTabletContent();
      }
    }
  }
}

export function controlsHTML() {
  if (G.isTouch) return `<div class="keys-help">
    <span class="kk">Joystick</span><span>Walk · push fully to run</span>
    <span class="kk">Drag</span><span>Swipe the screen to look</span>
    <span class="kk">USE</span><span>Use your tool · hold to skim or repair</span>
    <span class="kk">ACTION</span><span>Appears for rides, litter, rescues, land</span>
    <span class="kk">JUMP</span><span>Jump · swim up · climb out</span>
    <span class="kk">DIVE</span><span>Go underwater while swimming</span>
    <span class="kk">Tools</span><span>Grabber · Skimmer · Wrench in the bar</span>
    <span class="kk">BUILD</span><span>Pick an item, then PLACE · Rotate · Done</span>
    <span class="kk">MANAGE</span><span>Prices, staff, land, goals</span>
    <span class="kk">❚❚</span><span>Pause & settings</span></div>`;
  return `<div class="keys-help">
    <span class="kk">W A S D</span><span>Move · <b>Shift</b> sprint</span>
    <span class="kk">Mouse</span><span>Look around</span>
    <span class="kk">Space</span><span>Jump · swim up · climb out of pools</span>
    <span class="kk">C</span><span>Dive underwater</span>
    <span class="kk">E</span><span>Interact · pick up litter · ride slides · rescue</span>
    <span class="kk">LMB</span><span>Use tool (hold to skim / repair)</span>
    <span class="kk">1 2 3</span><span>Grabber · Skimmer · Wrench (or mouse wheel)</span>
    <span class="kk">B</span><span>Build menu · <b>R</b> rotate · <b>C</b> colour · <b>RMB</b> exit</span>
    <span class="kk">Tab</span><span>Park manager tablet</span>
    <span class="kk">T</span><span>Game speed 1x / 2x / 3x</span>
    <span class="kk">Esc</span><span>Pause</span></div>`;
}
