// Splash Haven: Waterpark Tycoon — bootstrap & main loop
import * as THREE from 'three';
import { G, bus } from './core/context.js';
import { sdk } from './sdk.js';
import { generateTextures, TEX } from './core/textures.js';
import { initMaterials, U } from './core/materials.js';
import { createRenderer, Pipeline } from './core/renderer.js';
import { Environment } from './world/environment.js';
import { Terrain } from './world/terrain.js';
import { Effects } from './world/effects.js';
import { initPropMaterials, getPrefab } from './world/props.js';
import { InstancePool } from './core/prefab.js';
import { animateSlideWater } from './world/slides.js';
import { WaterU, makeWaterMaterial, setWaterDirt } from './world/water.js';
import { Park } from './game/park.js';
import { Guests } from './game/guests.js';
import { Staff } from './game/staff.js';
import { Player } from './game/player.js';
import { Build } from './game/build.js';
import { Progression } from './game/progression.js';
import { buildStarterPark, seedStarterExtras } from './game/starter.js';
import { HUD } from './ui/hud.js';
import { Menus, controlsHTML } from './ui/menus.js';
import { renderThumbnails } from './ui/thumbs.js';
import { AudioEngine } from './audio.js';
import { Input } from './input.js';
import { OPEN_HOUR, CLOSE_HOUR, DAY_END, NEXT_DAY_START, GAME_MIN_PER_SEC, SAVE_VERSION, WATER_Y } from './config.js';
import { fmtMoney, pick, rand, chance, clamp } from './core/utils.js';

const $ = (id) => document.getElementById(id);
const loadFill = $('load-fill'), loadText = $('load-text');
function setLoad(p, text) { loadFill.style.width = Math.round(p * 100) + '%'; if (text) loadText.textContent = text; }
const tick = () => new Promise((r) => setTimeout(r, 0));

G.ui = { blocking: false, started: false };
G.sdk = sdk;
window.__G = G;
import { ITEMS as __ITEMS } from './game/catalog.js';
window.__ITEMS = __ITEMS;

// ------------------------------------------------------------------ settings
function loadSettings() {
  try { const s = JSON.parse(sdk.loadItem('settings') || 'null'); if (s) Object.assign(G.settings, s); } catch (e) {}
}
G.saveSettings = () => { try { sdk.saveItem('settings', JSON.stringify(G.settings)); } catch (e) {} };

function detectQuality() {
  const q = G.settings.quality;
  if (q !== 'auto') return q;
  if (G.autoQuality) return G.autoQuality;
  if (G.isTouch) return 'low';
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 8;
  if (cores <= 2 || mem <= 2) return 'low';
  return 'medium';
}

// ------------------------------------------------------------------ boot
async function boot() {
  G.isTouch = ('ontouchstart' in window || navigator.maxTouchPoints > 0) && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  setLoad(0.02, 'Connecting…');
  await sdk.init();
  sdk.loadingStart();
  loadSettings();

  const canvas = $('game');
  const renderer = createRenderer(canvas);
  G.renderer = renderer;
  const scene = new THREE.Scene();
  G.scene = scene;
  const camera = new THREE.PerspectiveCamera(G.settings.fov, window.innerWidth / window.innerHeight, 0.05, 4000);
  G.camera = camera;
  const vmScene = new THREE.Scene();
  vmScene.add(new THREE.HemisphereLight(0xeaf6ff, 0x6a7a5a, 1.2));
  const vmSun = new THREE.DirectionalLight(0xffffff, 1.6); vmSun.position.set(1, 2, 1); vmScene.add(vmSun);
  G.vmScene = vmScene;
  renderer.setSize(window.innerWidth, window.innerHeight, false);

  await generateTextures(renderer, (p, t) => setLoad(0.05 + p * 0.4, t));
  initMaterials();
  initPropMaterials();
  setLoad(0.48, 'Building the world…'); await tick();

  G.quality = detectQuality();
  G.env = new Environment(scene, renderer);
  G.env.setQuality(G.quality);
  G.terrain = new Terrain(scene);
  G.effects = new Effects(scene);
  G.audio = new AudioEngine();
  G.input = new Input(canvas);
  setLoad(0.56, 'Opening the gates…'); await tick();

  G.park = new Park(scene);
  G.guests = new Guests();
  G.guests.setQuality(G.quality);
  G.staff = new Staff();
  G.player = new Player(camera);
  G.build = new Build();
  G.progression = new Progression();
  G.hud = new HUD();
  G.menus = new Menus();
  G.pipeline = new Pipeline(renderer, scene, camera, vmScene);
  G.pipeline.build(G.quality);

  // decorative palms outside the gate
  const palmPool = new InstancePool(getPrefab('palm'), scene, 32);
  const m = new THREE.Matrix4();
  for (const [x, z] of G.terrain.decoPalms) { m.compose(new THREE.Vector3(x, 0, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * 6.28), new THREE.Vector3(1, 1, 1).multiplyScalar(0.9 + Math.random() * 0.3)); palmPool.add(m); }

  // load save or start fresh
  setLoad(0.62, 'Loading your park…'); await tick();
  const loaded = loadGame();
  if (!loaded) newGame();
  G.terrain.rebuildFence(G.park.owned);
  G.terrain.rebuildSaleSigns(G.park.owned, () => G.park.landPrice());
  G.staff.sync();
  G.env.setWeather(G.env.weather || 'sunny', true);
  G.player.updateCamera(0);
  G.env.update(0.016, camera.position);
  G.env.refreshEnv(30, 1);
  G.terrain.initGrass(G.quality === 'high' ? 9000 : G.quality === 'medium' ? 5000 : 0);
  G.terrain.refreshGrass(camera.position, true);

  setLoad(0.7, 'Photographing attractions…'); await tick();
  try { G.thumbs = await renderThumbnails(renderer, scene.environment, (p) => setLoad(0.7 + p * 0.2)); } catch (e) { console.warn(e); G.thumbs = {}; }

  setLoad(0.92, 'Warming up shaders…'); await tick();
  try { renderer.compile(scene, camera); } catch (e) {}
  G.pipeline.render(0.016);
  setLoad(1, 'Splash!');

  wireEvents();
  window.addEventListener('resize', () => G.pipeline.resize());
  G.pipeline.resize();
  if (G.isTouch) G.input.setupTouch();

  await new Promise((r) => setTimeout(r, 150));
  $('loading').classList.add('fade');
  setTimeout(() => $('loading').remove(), 700);
  sdk.loadingStop();
  G.hud.show();
  G.hud.renderQuests();
  G.hud.renderXP();
  sdk.gameplayStart();
  G.ui.started = true;
  if (!G.isTouch) $('intro-hint').classList.remove('hidden');
  else { G.audio.init(); }
  setTimeout(() => {
    if (!loaded) G.hud.toast('🌴 Welcome to <b>Splash Haven</b>! Your waterpark is open — make it legendary.', 'gold');
    else G.hud.toast(`👋 Welcome back! Day ${G.time.day} at ${G.park.parkName}.`, 'gold');
    if (G.offline) {
      const o = G.offline;
      G.park.earn(o.earned, 'bonus', false);
      setTimeout(() => {
        G.hud.toast(`💰 While you were away (${o.awayMin >= 60 ? Math.floor(o.awayMin / 60) + 'h ' : ''}${Math.round(o.awayMin % 60)}m) your park earned <b>${fmtMoney(o.earned)}</b>!`, 'gold');
        G.audio.play('jackpot', { vol: 0.8 });
      }, 1600);
    }
  }, 800);
  last = performance.now();
  requestAnimationFrame(loop);
}

function newGame() {
  G.time.day = 1; G.time.minutes = OPEN_HOUR + 5; G.time.total = 0;
  buildStarterPark(G.park);
  G.park.computeRating();
  G.park.rating = G.park.ratingTarget;
  seedStarterExtras();
  for (let i = 0; i < 14; i++) G.guests.spawn(true);
  for (let i = 0; i < 4; i++) G.guests.spawn(false);
  G.player.teleport(0, 59.5, 0);
  G.progression.refreshQuests();
  G.env.setWeather('sunny', true);
}

// ------------------------------------------------------------------ save/load
function saveGame() {
  try {
    const data = {
      v: SAVE_VERSION, park: G.park.serialize(), prog: G.progression.serialize(),
      time: { day: G.time.day, minutes: Math.min(G.time.minutes, CLOSE_HOUR - 1), total: G.time.total },
      player: { x: G.player.pos.x, z: G.player.pos.z, yaw: G.player.yaw }, weather: G.env.weather,
      thoughts: G.guests.thoughtFeed.slice(-12),
      savedAt: Date.now(),
    };
    sdk.saveItem('save', JSON.stringify(data));
  } catch (e) { console.warn('save failed', e); }
}
function loadGame() {
  let raw = null;
  try { raw = sdk.loadItem('save'); } catch (e) {}
  if (!raw) return false;
  try {
    const d = JSON.parse(raw);
    if (!d || d.v !== SAVE_VERSION) return false;
    G.time.day = d.time.day; G.time.minutes = clamp(d.time.minutes, OPEN_HOUR, CLOSE_HOUR - 1); G.time.total = d.time.total || 0;
    G.park.restore(d.park);
    G.progression.restore(d.prog);
    G.env.setWeather(d.weather || 'sunny', true);
    G.guests.thoughtFeed = d.thoughts || [];
    let px = d.player ? d.player.x : 0, pz = d.player ? d.player.z : 59.5;
    G.player.teleport(px, pz, d.player ? d.player.yaw : 0);
    if (G.player.collides(px, pz, 0)) G.player.teleport(0, 59.5, 0);
    const n = Math.min(30, 8 + G.park.lists.all.length / 10);
    for (let i = 0; i < n; i++) G.guests.spawn(true);
    G.park.computeRating();
    G.park.rating = G.park.ratingTarget;
    // offline earnings: the park keeps running at reduced capacity while you're away
    if (d.savedAt && G.park.history.length) {
      const awayMin = Math.min(240, (Date.now() - d.savedAt) / 60000);
      const last = G.park.history[G.park.history.length - 1];
      const perRealMin = Math.max(0, last.income) / 6;
      const earned = Math.round(awayMin * perRealMin * 0.12);
      if (awayMin > 2 && earned > 0) G.offline = { earned, awayMin };
    }
    return true;
  } catch (e) { console.warn('load failed', e); return false; }
}
G.saveGame = saveGame;
G.resetGame = () => { sdk.removeItem('save'); location.reload(); };

// ------------------------------------------------------------------ ads
G.ads = {
  async rewarded() {
    pauseForAd(true);
    const ok = await sdk.requestAd('rewarded');
    pauseForAd(false);
    return ok;
  },
  async midgame() {
    pauseForAd(true);
    await sdk.requestAd('midgame');
    pauseForAd(false);
  },
};
function pauseForAd(on) {
  G.time.adPause = on;
  G.audio.setMuted('ad', on);
}

// ------------------------------------------------------------------ quality
G.applyQuality = (rebuild) => {
  const q = detectQuality();
  const changedWater = (q === 'low') !== (G.quality === 'low');
  G.quality = q;
  G.env.setQuality(q);
  G.pipeline.build(q);
  G.guests.setQuality(q);
  G.terrain.initGrass(q === 'high' ? 9000 : q === 'medium' ? 5000 : 0);
  G.terrain.refreshGrass(G.camera.position, true);
  if (changedWater) {
    for (const o of G.park.lists.pools.concat(G.park.lists.slides)) {
      if (!o.pool) continue;
      const old = o.pool.water.material;
      const mat = makeWaterMaterial({ wave: o.pool.wave });
      o.pool.water.material = mat; o.pool.mat = mat;
      setWaterDirt(mat, Math.pow(1 - o.quality / 100, 0.8));
      old.dispose();
    }
  }
  G.pipeline.resize();
};

// ------------------------------------------------------------------ events
let refuseToastT = -999;
function wireEvents() {
  const hud = G.hud;
  bus.on('drowning', (em) => {
    hud.toast(`🆘 A swimmer is in trouble at the <b>${em.obj.def.name}</b>! Swim over and press E — or hire lifeguards.`, 'bad');
    G.audio.play('whistle', { vol: 0.5 });
  });
  bus.on('rescued', (d) => {
    if (d.by === 'player') { hud.toast('🛟 You saved a swimmer! +$250 reward', 'good'); G.audio.play('jackpot', { vol: 0.7 }); G.effects.sparkle(d.guest.pos.x, 1, d.guest.pos.z, 0x7cffd4, 30); }
    else hud.toast('🛟 Your lifeguard rescued a swimmer.', 'good');
  });
  bus.on('rescueFailed', () => {
    G.park.spend(300, 'upkeep');
    hud.toast('🚑 Paramedics had to step in. Nearby guests are upset (−$300 fine). Hire lifeguards!', 'bad');
  });
  bus.on('broken', (o) => { hud.toast(`🔧 <b>${o.def.name}</b> has broken down! Repair it with the Wrench [3] or hire a Mechanic.`, 'bad'); G.audio.play('error', { vol: 0.6 }); });
  bus.on('repaired', (d) => { hud.toast(`✅ ${d.obj.def.name} is running again${d.by === 'player' ? ' — nice work!' : '.'}`, 'good'); });
  bus.on('landBought', () => { hud.toast('🗺️ New land purchased! More room to build.', 'gold'); G.audio.play('cash'); G.effects.confetti(G.player.pos.x, 3, G.player.pos.z, 80); });
  bus.on('vipHappy', () => hud.toast('⭐ A VIP guest loved your park and left a glowing review! +$400', 'gold'));
  bus.on('guestRefused', () => { if (G.time.real - refuseToastT > 90) { refuseToastT = G.time.real; hud.toast('🎟️ Some guests turn back at the gate — the ticket feels too expensive.', 'bad'); } });
  bus.on('duck', (d) => hud.toast(d.gold ? `🦆✨ GOLDEN DUCK! +${fmtMoney(d.value)}` : `🦆 Rubber duck found! +${fmtMoney(d.value)}`, 'gold'));
  bus.on('fireworks', () => hud.toast('🎆 Fireworks show! Guests are cheering.', 'gold'));
  bus.on('underwater', (v) => G.audio.setUnderwater(v));
  bus.on('placed', () => G.hud.renderHotbar());

  // pointer lock flow
  const canvas = $('game');
  canvas.addEventListener('click', () => {
    G.audio.init();
    if (!G.ui.started || G.ui.blocking || G.isTouch) return;
    if (!G.input.locked) G.input.lock();
  });
  $('intro-hint').addEventListener('click', () => { G.audio.init(); G.input.lock(); });
  G.input.onLockChange = (locked) => {
    if (locked) {
      $('intro-hint').classList.add('hidden');
      if (G.menus.open === 'pause') G.menus.close(false);
      G.audio.init();
    } else {
      // lost lock: if no menu opened intentionally -> pause
      if (!G.menus.open && G.ui.started && !G.isTouch) G.menus.showPause();
    }
  };
  G.input.onLockError = () => { if (!G.menus.open) $('intro-hint').classList.remove('hidden'); };

  document.addEventListener('visibilitychange', () => {
    G.audio.setMuted('hidden', document.hidden);
    if (document.hidden) saveGame();
  });
  window.addEventListener('beforeunload', saveGame);
  sdk.on('settings', (s) => G.audio.setMuted('sdk', !!(s && s.muteAudio)));
  if (sdk.muted) G.audio.setMuted('sdk', true);
  sdk.on('adStart', () => G.audio.setMuted('ad', true));
  sdk.on('adEnd', () => G.audio.setMuted('ad', false));
}

// ------------------------------------------------------------------ input actions
function handleKeys(input) {
  if (input.hit('KeyB') || input.thit('build')) {
    if (G.menus.open === 'catalog') G.menus.close();
    else if (!G.menus.open || G.menus.open === 'tablet') { if (G.build.active && !input.thit('build')) G.build.stop(); G.menus.toggleCatalog(); }
  }
  if (input.hit('Tab') || input.thit('tablet')) {
    if (G.menus.open === 'tablet') G.menus.close();
    else if (!G.menus.open || G.menus.open === 'catalog') G.menus.toggleTablet();
  }
  if (input.hit('Escape') && (G.menus.open === 'catalog' || G.menus.open === 'tablet')) G.menus.close();
  if (G.menus.open) return;
  if (!G.build.active) {
    if (input.hit('Digit1')) G.player.setTool(0);
    if (input.hit('Digit2')) G.player.setTool(1);
    if (input.hit('Digit3')) G.player.setTool(2);
    if (input.mouse.wheel) G.player.setTool(G.player.tool + (input.mouse.wheel > 0 ? 1 : -1));
    if (input.thit('tool')) G.player.setTool(G.player.tool + 1);
  }
  if (input.hit('KeyT')) { G.time.speed = G.time.speed % 3 + 1; G.hud.toast(`⏩ Game speed ${G.time.speed}x`); }
  if (input.hit('KeyF') && G.settings.showFps) {}
}

// ------------------------------------------------------------------ day cycle & world events
let summaryShown = false;
let fireworksDone = false;
let hourAcc = 0;
function simulateTime(dt) {
  const T = G.time;
  const before = T.minutes;
  let mps = GAME_MIN_PER_SEC * T.speed;
  if (T.minutes >= DAY_END - 1) mps = 0;
  if (T.minutes >= CLOSE_HOUR && G.guests.list.filter((g) => g.inPark).length === 0) mps = GAME_MIN_PER_SEC * 6; // fast-forward the empty evening
  const dMin = dt * mps;
  T.minutes += dMin;
  T.total += dMin;
  if (before < CLOSE_HOUR && T.minutes >= CLOSE_HOUR) {
    G.hud.toast('🔔 The park is closing — guests are heading home.', '');
    G.audio.play('quest', { vol: 0.5 });
  }
  if (!fireworksDone && T.minutes >= CLOSE_HOUR - 25 && G.park.lists.fireworks.length) {
    fireworksDone = true;
    G.effects.startFireworks(G.park.lists.fireworks.map((o) => ({ x: o.cx, z: o.cz })));
    for (const g of G.guests.list) { if (g.inPark) { G.guests.addHappy(g, 10); if (chance(0.3)) G.guests.think(g, 'fireworks', 'good'); } }
  }
  if (T.minutes >= DAY_END - 1 && !summaryShown) {
    summaryShown = true;
    for (const g of [...G.guests.list]) G.guests.despawn(g);
    const sum = G.park.endOfDay();
    saveGame();
    if (sum.newRecord) sdk.happytime();
    G.menus.showSummary(sum);
  }
  // hourly random events
  hourAcc += dMin;
  if (hourAcc >= 60) { hourAcc -= 60; hourlyEvents(); }
  return dMin;
}

function hourlyEvents() {
  const park = G.park, m = G.time.minutes;
  if (m < OPEN_HOUR || m > CLOSE_HOUR) return;
  // rubber ducks
  const pools = park.lists.pools.filter((o) => !o.pool.jacuzzi);
  if (pools.length && G.effects.ducks.length < 3 && chance(0.4)) G.effects.addDuck(pick(pools), chance(0.08));
  // weather changes
  const w = G.env.weather;
  if (w === 'rain' && chance(0.6)) G.env.setWeather(pick(['partly', 'overcast']));
  else if (chance(0.12)) {
    const next = pick(['sunny', 'sunny', 'partly', 'partly', 'overcast', 'rain']);
    if (next !== w) { G.env.setWeather(next); if (next === 'rain') G.hud.toast('🌧️ A rain shower rolls in — fewer visitors for a while.', ''); else if (next === 'sunny') G.hud.toast('☀️ The sun is out! Expect a rush of thirsty guests.', 'gold'); }
  }
}

G.startNextDay = () => {
  G.time.day++;
  G.time.minutes = NEXT_DAY_START;
  summaryShown = false;
  fireworksDone = false;
  hourAcc = 0;
  G.env.setWeather(pick(['sunny', 'sunny', 'sunny', 'partly', 'partly', 'overcast']), true);
  G.progression.onNewDay();
  // pools get a little leaf debris overnight, slides wear slightly
  for (const o of G.park.lists.pools.concat(G.park.lists.slides)) { if (o.pool) { o.quality = Math.max(0, o.quality - rand(4, 10)); G.park.refreshPoolLook(o); } }
  for (const o of G.park.lists.fac.toilet || []) o.dirt = Math.max(0, o.dirt - 20);
  // new litter blown in
  for (let i = 0; i < 3; i++) { const p = G.park.grid.randomParkPoint(); if (p) G.effects.addTrash(p[0], p[1]); }
  G.hud.toast(`☀️ Day ${G.time.day} — ${G.env.weatherInfo.label}, ${G.env.temp}°C. Gates open at 09:00!`, 'gold');
  saveGame();
};

// ------------------------------------------------------------------ loop
let last = 0;
let fpsAcc = 0, fpsN = 0, fpsCheckT = 0, autoChecks = 0;
let saveT = 0;
let fpsEl = null;
function loop(now) {
  requestAnimationFrame(loop);
  let dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (dt <= 0) return;
  frame(dt, true);
}

function frame(dt, doRender) {
  const input = G.input;
  const paused = G.menus.open === 'pause' || G.menus.open === 'summary' || G.time.adPause;
  G.time.real += paused ? 0 : dt;
  U.uTime.value = G.time.real;

  if (!paused) handleKeys(input);

  const simSpeed = paused ? 0 : G.time.speed;
  const sdt = dt * simSpeed;
  G.time.sim = (G.time.sim || 0) + sdt;
  let dMin = 0;
  if (!paused) dMin = simulateTime(dt);

  // world simulation
  if (!paused) {
    G.player.update(dt, input);
    G.build.update(dt, input);
    G.player.updateInteraction(dt, input);
    if (G.player.hold.kind === 'skim') G.progression.progress('skimSec', dt);
    G.guests.update(dt, sdt, dMin);
    G.staff.update(dt, sdt);
    G.park.tick(dMin, dt);
    G.progression.update();
    // wave pool cycle: 50s waves, 25s calm
    const cyc = G.time.real % 75;
    WaterU.uWaveAmp.value += ((cyc < 50 ? 1 : 0) - WaterU.uWaveAmp.value) * Math.min(1, dt * 0.5);
    animateSlideWater(dt);
    ambientParticles(dt);
  } else {
    G.player.updateViewmodel(dt, 0);
  }
  G.env.update(dt, G.camera.position);
  G.terrain.update(paused ? 0 : dt);
  G.effects.update(paused ? 0 : dt, G.camera.position, G.time.real);
  if (!doRender) { input.endFrame(); return; }
  G.terrain.refreshGrass(G.camera.position);
  G.hud.update(dt);
  G.menus.update(dt);
  G.audio.updateAmbience(dt);
  G.pipeline.render(dt);
  input.endFrame();

  // autosave
  saveT += dt;
  if (saveT > 30 && !paused) { saveT = 0; saveGame(); }

  // auto quality
  fpsAcc += dt; fpsN++;
  fpsCheckT += dt;
  if (fpsCheckT > 5) {
    const fps = fpsN / fpsAcc;
    fpsAcc = 0; fpsN = 0; fpsCheckT = 0;
    if (G.settings.showFps) { if (!fpsEl) { fpsEl = document.createElement('div'); fpsEl.style.cssText = 'position:fixed;left:8px;bottom:8px;z-index:99;font:700 12px monospace;color:#fff;text-shadow:0 1px 2px #000'; document.body.appendChild(fpsEl); } fpsEl.textContent = fps.toFixed(0) + ' FPS · ' + G.quality; }
    else if (fpsEl) { fpsEl.remove(); fpsEl = null; }
    if (G.settings.quality === 'auto' && !paused && autoChecks < 3 && !G.debugNoAuto) {
      autoChecks++;
      if (fps < 30 && G.quality !== 'low') {
        const next = G.quality === 'high' ? 'medium' : 'low';
        G.autoQuality = next; G.applyQuality(true);
        G.hud.toast(`⚙️ Graphics set to ${next} for smoother play (change in Settings).`);
      }
    }
  }
}
// Debug helper for automated tests: advance the simulation without rendering
G.debugStep = (n = 30, dt = 1 / 30) => { for (let i = 0; i < n; i++) frame(dt, false); };

let ambT = 0;
function ambientParticles(dt) {
  ambT += dt;
  if (ambT < 0.033) return;
  const step = ambT; ambT = 0;
  const cam = G.camera.position;
  const fx = G.effects;
  for (const o of G.park.lists.fountains) {
    if (Math.hypot(o.cx - cam.x, o.cz - cam.z) > 60) continue;
    for (let i = 0; i < 4; i++) fx.spray(o.cx, 1.95, o.cz, rand(-0.6, 0.6), rand(4.5, 5.5), rand(-0.6, 0.6), 0.1, 0.2);
    for (let k = 0; k < 6; k++) { const a = (k / 6) * Math.PI * 2 + G.time.real * 0.3; fx.spray(o.cx + Math.cos(a) * 0.6, 1.25, o.cz + Math.sin(a) * 0.6, Math.cos(a) * 1.2, 1.6, Math.sin(a) * 1.2, 0.07, 0.1); }
  }
  for (const o of G.park.lists.pools) {
    const d = Math.hypot(o.cx - cam.x, o.cz - cam.z);
    if (d > 50) continue;
    if (o.pool.kids) {
      for (let k = 0; k < 5; k++) { const a = Math.random() * Math.PI * 2; fx.spray(o.cx + Math.cos(a) * 0.9, 1.55, o.cz + Math.sin(a) * 0.9, Math.cos(a) * 1.1, -0.2, Math.sin(a) * 1.1, 0.08, 0.15); }
    }
    if (o.pool.jacuzzi) {
      for (let k = 0; k < 3; k++) { const a = Math.random() * 6.28, r = Math.random() * 1.4; fx.bubble(o.cx + Math.cos(a) * r, WATER_Y, o.cz + Math.sin(a) * r); }
      if (G.env.nightF > 0.3 || Math.random() < 0.3) fx.steam(o.cx + rand(-1, 1), WATER_Y + 0.1, o.cz + rand(-1, 1));
    }
  }
  for (const o of G.park.lists.all) {
    if (o.key !== 'tiki' || G.env.nightF < 0.3) continue;
    if (Math.hypot(o.cx - cam.x, o.cz - cam.z) > 35) continue;
    fx.fire(o.cx, 2.3, o.cz);
  }
  void step;
}

boot().catch((e) => {
  console.error(e);
  loadText.textContent = 'Something went wrong while loading. Please refresh. (' + (e && e.message) + ')';
});
