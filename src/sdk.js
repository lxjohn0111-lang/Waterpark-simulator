// CrazyGames SDK v3 wrapper with safe local fallbacks.
// Docs: https://docs.crazygames.com/sdk/
// Everything here degrades gracefully when the SDK is unavailable (local dev / blocked).

const SAVE_PREFIX = 'splashhaven_';

class CrazySDK {
  constructor() {
    this.sdk = null;
    this.ready = false;
    this.environment = 'disabled';
    this.adPlaying = false;
    this.gameplayActive = false;
    this.listeners = { adStart: [], adEnd: [], settings: [] };
    this.muted = false;
    this.lastMidgame = 0;
  }

  async init() {
    // Builds without the SDK script tag (e.g. standalone web previews) skip straight to standalone mode.
    if (!document.querySelector('script[src*="crazygames"]') && !(window.CrazyGames && window.CrazyGames.SDK)) {
      console.info('[SDK] No CrazyGames SDK script on this page, running standalone.');
      return false;
    }
    // Wait for the async-loaded script (max ~3s), then init.
    const t0 = performance.now();
    while (!(window.CrazyGames && window.CrazyGames.SDK) && performance.now() - t0 < 3000) {
      await new Promise((r) => setTimeout(r, 50));
    }
    if (!(window.CrazyGames && window.CrazyGames.SDK)) {
      console.info('[SDK] CrazyGames SDK not available, running standalone.');
      return false;
    }
    try {
      this.sdk = window.CrazyGames.SDK;
      await Promise.race([
        this.sdk.init(),
        new Promise((_, rej) => setTimeout(() => rej(new Error('SDK init timeout')), 6000)),
      ]);
      this.environment = this.sdk.environment || 'crazygames';
      this.ready = this.environment !== 'disabled';
      if (this.ready) {
        try {
          const s = this.sdk.game.settings;
          if (s && s.muteAudio) this.muted = true;
          this.sdk.game.addSettingsChangeListener((newSettings) => {
            this.muted = !!(newSettings && newSettings.muteAudio);
            this.listeners.settings.forEach((f) => f(newSettings));
          });
        } catch (e) { /* settings not supported */ }
      }
      console.info('[SDK] initialized, environment:', this.environment);
      return this.ready;
    } catch (e) {
      console.warn('[SDK] init failed', e);
      this.sdk = null;
      this.ready = false;
      return false;
    }
  }

  on(evt, fn) { (this.listeners[evt] = this.listeners[evt] || []).push(fn); }
  emit(evt, ...a) { (this.listeners[evt] || []).forEach((f) => f(...a)); }

  loadingStart() { try { this.ready && this.sdk.game.loadingStart(); } catch (e) {} }
  loadingStop() { try { this.ready && this.sdk.game.loadingStop(); } catch (e) {} }

  gameplayStart() {
    if (this.gameplayActive) return;
    this.gameplayActive = true;
    try { this.ready && this.sdk.game.gameplayStart(); } catch (e) {}
  }
  gameplayStop() {
    if (!this.gameplayActive) return;
    this.gameplayActive = false;
    try { this.ready && this.sdk.game.gameplayStop(); } catch (e) {}
  }
  happytime() { try { this.ready && this.sdk.game.happytime(); } catch (e) {} }

  // type: 'midgame' | 'rewarded'. Resolves true if the ad completed (reward should be granted).
  requestAd(type) {
    return new Promise((resolve) => {
      if (!this.ready) {
        // Local fallback: simulate a short rewarded flow so the feature is testable.
        if (type === 'rewarded') {
          this.adPlaying = true; this.emit('adStart');
          setTimeout(() => { this.adPlaying = false; this.emit('adEnd'); resolve(true); }, 700);
        } else resolve(false);
        return;
      }
      if (type === 'midgame' && performance.now() - this.lastMidgame < 3 * 60 * 1000) { resolve(false); return; }
      let started = false;
      const done = (ok) => {
        if (this.adPlaying) { this.adPlaying = false; this.emit('adEnd'); }
        resolve(ok);
      };
      try {
        this.sdk.ad.requestAd(type, {
          adStarted: () => { started = true; this.adPlaying = true; this.emit('adStart'); },
          adFinished: () => { if (type === 'midgame') this.lastMidgame = performance.now(); done(true); },
          adError: (err) => { console.info('[SDK] ad error', err); done(false); },
        });
      } catch (e) { done(false); }
      // Safety net: never leave the game paused forever if the SDK never answers.
      setTimeout(() => { if (!started) done(false); }, 12000);
    });
  }

  // ---- Persistence: SDK data module with localStorage fallback ----
  saveItem(key, value) {
    const k = SAVE_PREFIX + key;
    try {
      if (this.ready && this.sdk.data) { this.sdk.data.setItem(k, value); return; }
    } catch (e) {}
    try { localStorage.setItem(k, value); } catch (e) {}
  }
  loadItem(key) {
    const k = SAVE_PREFIX + key;
    try {
      if (this.ready && this.sdk.data) {
        const v = this.sdk.data.getItem(k);
        if (v !== null && v !== undefined) return v;
      }
    } catch (e) {}
    try { return localStorage.getItem(k); } catch (e) { return null; }
  }
  removeItem(key) {
    const k = SAVE_PREFIX + key;
    try { if (this.ready && this.sdk.data) this.sdk.data.removeItem(k); } catch (e) {}
    try { localStorage.removeItem(k); } catch (e) {}
  }
}

export const sdk = new CrazySDK();
