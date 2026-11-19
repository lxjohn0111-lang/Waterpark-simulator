// Shared game context. Systems register themselves here so modules can talk
// to each other without long parameter chains.
export const G = {
  time: { day: 1, minutes: 9 * 60 - 20, speed: 1, paused: false, total: 0, real: 0 },
  quality: 'medium',
  settings: { volume: 0.8, music: 0.45, sfx: 0.9, sensitivity: 1, invertY: false, quality: 'auto', fov: 75, showFps: false, lift: 0 },
  isTouch: false,
  // Size of the game area (#app). On phones it can be smaller than the window
  // when part of the page is hidden behind browser/app bars.
  viewSize() {
    const a = document.getElementById('app');
    const w = (a && a.clientWidth) || window.innerWidth, h = (a && a.clientHeight) || window.innerHeight;
    return [w, h];
  },
};

// Tiny event bus
const handlers = new Map();
export const bus = {
  on(evt, fn) { if (!handlers.has(evt)) handlers.set(evt, []); handlers.get(evt).push(fn); },
  off(evt, fn) { const a = handlers.get(evt); if (a) { const i = a.indexOf(fn); if (i >= 0) a.splice(i, 1); } },
  emit(evt, data) { const a = handlers.get(evt); if (a) for (let i = 0; i < a.length; i++) a[i](data); },
};
