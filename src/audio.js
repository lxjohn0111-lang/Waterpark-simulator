// Procedural Web Audio: SFX, ambience and a generative tropical music loop.
import * as THREE from 'three';
import { G } from './core/context.js';

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.muteReasons = new Set();
    this.whoosh = null;
    this.musicOn = true;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC();
    this.master = ctx.createGain();
    this.filter = ctx.createBiquadFilter();
    this.filter.type = 'lowpass'; this.filter.frequency.value = 20000; this.filter.Q.value = 0.7;
    this.master.connect(this.filter); this.filter.connect(ctx.destination);
    this.sfx = ctx.createGain(); this.sfx.connect(this.master);
    this.music = ctx.createGain(); this.music.connect(this.master);
    this.amb = ctx.createGain(); this.amb.connect(this.master);
    // noise buffers
    const mk = (type) => {
      const len = ctx.sampleRate * 2, b = ctx.createBuffer(1, len, ctx.sampleRate), d = b.getChannelData(0);
      let l = 0, b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < len; i++) {
        const w = Math.random() * 2 - 1;
        if (type === 'white') d[i] = w;
        else if (type === 'brown') { l = (l + 0.02 * w) / 1.02; d[i] = l * 3.5; }
        else { b0 = 0.997 * b0 + w * 0.029591; b1 = 0.985 * b1 + w * 0.032534; b2 = 0.95 * b2 + w * 0.048056; d[i] = (b0 + b1 + b2 + w * 0.05) * 1.6; }
      }
      return b;
    };
    this.noise = { white: mk('white'), pink: mk('pink'), brown: mk('brown') };
    this._startAmbience();
    this._startMusic();
    this.applyVolumes();
    this.ready = true;
  }

  applyVolumes() {
    if (!this.ctx) return;
    const s = G.settings;
    const muted = this.muteReasons.size > 0;
    const t = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(muted ? 0 : s.volume, t, 0.05);
    this.sfx.gain.setTargetAtTime(s.sfx, t, 0.05);
    this.music.gain.setTargetAtTime(s.music * 0.32, t, 0.2);
    this.amb.gain.setTargetAtTime(s.sfx * 0.9, t, 0.2);
  }
  setMuted(reason, on) {
    if (on) this.muteReasons.add(reason); else this.muteReasons.delete(reason);
    this.applyVolumes();
  }
  setUnderwater(on) {
    if (!this.ctx) return;
    this.filter.frequency.setTargetAtTime(on ? 600 : 20000, this.ctx.currentTime, 0.08);
  }

  // ---------------------------------------------------------------- helpers
  _env(g, t, a, peak, d) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  }
  _osc(type, f, t, a, peak, d, out, f2) {
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + a + d);
    this._env(g, t, a, peak, d);
    o.connect(g); g.connect(out);
    o.start(t); o.stop(t + a + d + 0.05);
    return o;
  }
  _noise(kind, t, a, peak, d, out, ftype, f0, f1, q = 1) {
    const s = this.ctx.createBufferSource(); s.buffer = this.noise[kind];
    s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = this.ctx.createBiquadFilter(); f.type = ftype; f.frequency.setValueAtTime(f0, t); f.Q.value = q;
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + a + d);
    const g = this.ctx.createGain(); this._env(g, t, a, peak, d);
    s.connect(f); f.connect(g); g.connect(out);
    s.start(t, Math.random()); s.stop(t + a + d + 0.05);
  }

  play(name, opts = {}) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const ctx = this.ctx;
    let vol = opts.vol ?? 1;
    let out = this.sfx;
    if (opts.pos && G.camera) {
      const cam = G.camera.position;
      const d = cam.distanceTo(opts.pos);
      if (d > 70) return;
      vol *= 1 / (1 + d * 0.09);
      const pan = ctx.createStereoPanner();
      const right = new THREE.Vector3(1, 0, 0).applyQuaternion(G.camera.quaternion);
      const dir = opts.pos.clone().sub(cam).normalize();
      pan.pan.value = Math.max(-0.9, Math.min(0.9, dir.dot(right)));
      pan.connect(this.sfx);
      out = pan;
    }
    if (vol < 0.01) return;
    const t = ctx.currentTime + 0.005;
    switch (name) {
      case 'coin':
        this._osc('square', 1318.5, t, 0.003, 0.08 * vol, 0.09, out);
        this._osc('square', 1975.5, t + 0.07, 0.003, 0.08 * vol, 0.25, out);
        this._osc('sine', 3951, t + 0.07, 0.003, 0.05 * vol, 0.3, out);
        break;
      case 'cash':
        this._noise('white', t, 0.005, 0.25 * vol, 0.05, out, 'bandpass', 3000);
        [2093, 2637, 3136].forEach((f, i) => this._osc('sine', f, t + 0.06 + i * 0.03, 0.005, 0.12 * vol, 0.6, out));
        break;
      case 'jackpot':
        [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => this._osc('triangle', f, t + i * 0.07, 0.005, 0.18 * vol, 0.35, out));
        [2093, 2637, 3136].forEach((f, i) => this._osc('sine', f, t + 0.45 + i * 0.05, 0.005, 0.1 * vol, 0.8, out));
        break;
      case 'splash':
        this._noise('white', t, 0.01, 0.35 * vol, 0.45, out, 'bandpass', 1800, 300, 0.8);
        this._osc('sine', 110, t, 0.005, 0.25 * vol, 0.18, out, 50);
        break;
      case 'splashBig':
        this._noise('white', t, 0.01, 0.6 * vol, 1.1, out, 'bandpass', 2200, 220, 0.6);
        this._noise('white', t + 0.05, 0.05, 0.25 * vol, 0.9, out, 'highpass', 3000, 1500);
        this._osc('sine', 90, t, 0.005, 0.5 * vol, 0.3, out, 40);
        break;
      case 'step': this._noise('brown', t, 0.004, 0.5 * vol, 0.08, out, 'lowpass', 700); break;
      case 'stepHard': this._noise('white', t, 0.002, 0.18 * vol, 0.05, out, 'bandpass', 1400, 900, 1.2); break;
      case 'stepWater': this._noise('white', t, 0.01, 0.2 * vol, 0.18, out, 'bandpass', 1200, 400); break;
      case 'jump': this._noise('pink', t, 0.01, 0.1 * vol, 0.1, out, 'bandpass', 600); break;
      case 'land': this._noise('brown', t, 0.004, 0.6 * vol, 0.15, out, 'lowpass', 400); break;
      case 'pickup':
        this._osc('sine', 500, t, 0.004, 0.25 * vol, 0.09, out, 1100);
        this._noise('white', t, 0.002, 0.1 * vol, 0.03, out, 'highpass', 4000);
        break;
      case 'build':
        this._osc('sine', 120, t, 0.004, 0.6 * vol, 0.25, out, 45);
        this._osc('triangle', 320, t + 0.02, 0.003, 0.2 * vol, 0.15, out, 260);
        this._noise('brown', t, 0.005, 0.4 * vol, 0.3, out, 'lowpass', 900);
        this._osc('sine', 880, t + 0.12, 0.004, 0.08 * vol, 0.3, out);
        this._osc('sine', 1320, t + 0.18, 0.004, 0.06 * vol, 0.35, out);
        break;
      case 'sell':
        this._osc('sawtooth', 700, t, 0.01, 0.08 * vol, 0.3, out, 150);
        this._noise('brown', t, 0.01, 0.5 * vol, 0.35, out, 'lowpass', 600);
        break;
      case 'tick': this._osc('square', 2200, t, 0.001, 0.05 * vol, 0.025, out); break;
      case 'click': this._osc('triangle', 1200, t, 0.002, 0.15 * vol, 0.05, out, 900); break;
      case 'open': this._noise('pink', t, 0.06, 0.12 * vol, 0.18, out, 'bandpass', 600, 2400, 1.5); break;
      case 'error':
        this._osc('square', 190, t, 0.005, 0.07 * vol, 0.1, out);
        this._osc('square', 140, t + 0.11, 0.005, 0.07 * vol, 0.16, out);
        break;
      case 'levelup':
        [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => { this._osc('triangle', f, t + i * 0.11, 0.005, 0.22 * vol, 0.4, out); this._osc('sine', f * 2, t + i * 0.11, 0.005, 0.06 * vol, 0.5, out); });
        [1046.5, 1318.5, 1568].forEach((f) => this._osc('triangle', f, t + 0.5, 0.01, 0.15 * vol, 1.3, out));
        this._noise('white', t + 0.5, 0.2, 0.06 * vol, 1.0, out, 'highpass', 6000);
        break;
      case 'quest':
        this._osc('sine', 784, t, 0.005, 0.2 * vol, 0.35, out);
        this._osc('sine', 1046.5, t + 0.1, 0.005, 0.2 * vol, 0.6, out);
        this._osc('triangle', 1568, t + 0.1, 0.005, 0.06 * vol, 0.6, out);
        break;
      case 'duck': {
        const o = this._osc('sine', 900, t, 0.01, 0.25 * vol, 0.25, out);
        o.frequency.linearRampToValueAtTime(1500, t + 0.08); o.frequency.linearRampToValueAtTime(1000, t + 0.26);
        this.play('coin', { vol: 0.6 });
        break;
      }
      case 'whistle': {
        const o = this.ctx.createOscillator(), g = this.ctx.createGain(), lfo = this.ctx.createOscillator(), lg = this.ctx.createGain();
        o.frequency.value = 2900; lfo.frequency.value = 28; lg.gain.value = 140;
        lfo.connect(lg); lg.connect(o.frequency);
        this._env(g, t, 0.02, 0.12 * vol, 0.7);
        o.connect(g); g.connect(out); o.start(t); lfo.start(t); o.stop(t + 0.8); lfo.stop(t + 0.8);
        break;
      }
      case 'clank':
        this._osc('square', 420 + Math.random() * 80, t, 0.001, 0.07 * vol, 0.12, out);
        this._osc('sine', 1310 + Math.random() * 200, t, 0.001, 0.08 * vol, 0.25, out);
        break;
      case 'fixed':
        [660, 880, 1320].forEach((f, i) => this._osc('triangle', f, t + i * 0.08, 0.005, 0.15 * vol, 0.25, out));
        break;
      case 'swish': this._noise('white', t, 0.04, 0.12 * vol, 0.18, out, 'bandpass', 1200, 3000, 1.5); break;
      case 'launch':
        this._osc('sine', 500, t, 0.05, 0.05 * vol, 1.2, out, 1900);
        this._noise('white', t, 0.05, 0.08 * vol, 1.0, out, 'highpass', 3000);
        break;
      case 'boom': {
        const delay = opts.pos && G.camera ? Math.min(0.5, G.camera.position.distanceTo(opts.pos) / 340) : 0;
        this._noise('brown', t + delay, 0.005, 1.0 * vol, 1.8, out, 'lowpass', 300, 80);
        this._osc('sine', 60, t + delay, 0.005, 0.6 * vol, 0.8, out, 30);
        for (let i = 0; i < 10; i++) this._noise('white', t + delay + 0.3 + Math.random() * 1.2, 0.002, 0.05 * vol, 0.03, out, 'highpass', 5000);
        break;
      }
    }
  }

  // ---------------------------------------------------------------- ride whoosh
  startWhoosh() {
    if (!this.ctx) return;
    this.stopWhoosh();
    const s = this.ctx.createBufferSource(); s.buffer = this.noise.pink; s.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 500; f.Q.value = 0.6;
    const g = this.ctx.createGain(); g.gain.value = 0;
    s.connect(f); f.connect(g); g.connect(this.sfx); s.start();
    this.whoosh = { s, f, g };
  }
  setWhoosh(v) {
    if (!this.whoosh) return;
    const t = this.ctx.currentTime;
    this.whoosh.g.gain.setTargetAtTime(Math.min(0.9, v * 0.06), t, 0.1);
    this.whoosh.f.frequency.setTargetAtTime(300 + v * 90, t, 0.1);
  }
  stopWhoosh() {
    if (!this.whoosh) return;
    const w = this.whoosh; this.whoosh = null;
    w.g.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
    setTimeout(() => { try { w.s.stop(); } catch (e) {} }, 500);
  }

  // ---------------------------------------------------------------- ambience
  _loop(kind, ftype, freq, q = 1) {
    const s = this.ctx.createBufferSource(); s.buffer = this.noise[kind]; s.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = ftype; f.frequency.value = freq; f.Q.value = q;
    const g = this.ctx.createGain(); g.gain.value = 0;
    s.connect(f); f.connect(g); g.connect(this.amb); s.start();
    return { s, f, g };
  }
  _startAmbience() {
    this.crowd = this._loop('pink', 'bandpass', 750, 0.7);
    this.crowd2 = this._loop('pink', 'bandpass', 1600, 1.2);
    this.waterAmb = this._loop('brown', 'lowpass', 600, 0.5);
    this.rainAmb = this._loop('white', 'highpass', 1400, 0.4);
    this.windAmb = this._loop('brown', 'bandpass', 260, 0.4);
    this.birdT = 1; this.cricketT = 1;
  }
  updateAmbience(dt) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const t = this.ctx.currentTime;
    const cam = G.camera.position;
    let near = 0;
    for (const g of G.guests.list) { const d = Math.hypot(g.pos.x - cam.x, g.pos.z - cam.z); if (d < 30) near += 1 - d / 30; }
    const crowdV = Math.min(0.35, near * 0.03) * (0.8 + Math.sin(t * 0.7) * 0.2);
    this.crowd.g.gain.setTargetAtTime(crowdV, t, 0.5);
    this.crowd2.g.gain.setTargetAtTime(crowdV * 0.35 * (0.6 + Math.sin(t * 1.9) * 0.4), t, 0.3);
    let wd = 99;
    for (const o of G.park.lists.pools) wd = Math.min(wd, Math.hypot(o.cx - cam.x, o.cz - cam.z) - Math.max(o.W, o.D) * 0.4);
    const waterV = Math.max(0, 1 - wd / 25) * 0.22 * (0.8 + Math.sin(t * 0.43) * 0.2) + (G.player.mode === 'swim' ? 0.25 : 0);
    this.waterAmb.g.gain.setTargetAtTime(waterV, t, 0.4);
    const rain = G.env.weatherBlend.rain;
    this.rainAmb.g.gain.setTargetAtTime(rain * 0.22, t, 0.5);
    this.windAmb.g.gain.setTargetAtTime(0.03 + G.env.weatherBlend.cover * 0.05, t, 1);
    const night = G.env.nightF;
    this.birdT -= dt;
    if (this.birdT <= 0) {
      this.birdT = 1.5 + Math.random() * 5;
      if (night < 0.5 && rain < 0.5) this._chirp();
    }
    this.cricketT -= dt;
    if (this.cricketT <= 0) {
      this.cricketT = 0.4 + Math.random() * 0.6;
      if (night > 0.5) for (let i = 0; i < 3; i++) this._osc('sine', 4400 + Math.random() * 300, t + i * 0.05, 0.004, 0.012, 0.03, this.amb);
    }
  }
  _chirp() {
    const t = this.ctx.currentTime;
    const base = 2600 + Math.random() * 2400;
    const n = 2 + Math.floor(Math.random() * 4);
    const pan = this.ctx.createStereoPanner(); pan.pan.value = Math.random() * 1.6 - 0.8; pan.connect(this.amb);
    for (let i = 0; i < n; i++) {
      const o = this._osc('sine', base, t + i * 0.12, 0.01, 0.025, 0.08, pan);
      o.frequency.linearRampToValueAtTime(base * (1.2 + Math.random() * 0.4), t + i * 0.12 + 0.05);
    }
  }

  // ---------------------------------------------------------------- music
  _startMusic() {
    const ctx = this.ctx;
    this.bpm = 98;
    this.step = 0;
    this.nextT = ctx.currentTime + 0.3;
    // F major: I - V - vi - IV  (F, C, Dm, Bb) then variation ii - V - I - IV
    this.prog = [[53, 57, 60, 65], [48, 52, 55, 60], [50, 53, 57, 62], [46, 50, 53, 58], [55, 58, 62, 67], [48, 52, 55, 60], [53, 57, 60, 65], [46, 50, 53, 58]];
    this.melodyRng = 1;
    this.musicTimer = setInterval(() => this._schedule(), 30);
  }
  _mtof(m) { return 440 * Math.pow(2, (m - 69) / 12); }
  _schedule() {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running') return;
    const spb = 60 / this.bpm / 4; // 16th note
    while (this.nextT < ctx.currentTime + 0.15) {
      const st = this.step;
      const bar = Math.floor(st / 16) % this.prog.length;
      const chord = this.prog[bar];
      const pos = st % 16;
      const t = this.nextT;
      const out = this.music;
      const night = G.env ? G.env.nightF : 0;
      // bass
      if (pos === 0 || pos === 6 || pos === 10 || (pos === 14 && Math.random() < 0.5)) {
        const n = pos === 10 ? chord[2] - 12 : chord[0] - 12;
        this._osc('triangle', this._mtof(n), t, 0.01, 0.32, 0.32, out);
        this._osc('sine', this._mtof(n - 12), t, 0.01, 0.2, 0.25, out);
      }
      // steel-pan arpeggio
      if (pos % 2 === 0 && Math.random() < 0.82) {
        const n = chord[(pos / 2 + Math.floor(Math.random() * 2)) % 4] + 12 + (Math.random() < 0.2 ? 12 : 0);
        const f = this._mtof(n);
        this._osc('sine', f, t, 0.004, 0.11 * (1 - night * 0.4), 0.42, out);
        this._osc('sine', f * 2.01, t, 0.003, 0.035, 0.18, out);
        this._osc('triangle', f * 4.0, t, 0.002, 0.015, 0.08, out);
      }
      // melody hint every bar
      if (pos === 8 && Math.random() < 0.6) {
        const n = chord[Math.floor(Math.random() * 4)] + 24;
        this._osc('triangle', this._mtof(n), t, 0.02, 0.05, 0.7, out);
      }
      // shaker
      if (night < 0.6) {
        const acc = pos % 4 === 2 ? 0.07 : 0.03;
        this._noise('white', t, 0.003, acc, 0.05, out, 'highpass', 7000);
      }
      // kick-ish
      if (pos === 0 || pos === 8) this._osc('sine', 120, t, 0.002, 0.18, 0.18, out, 45);
      // pad on bar start
      if (pos === 0) for (const m of chord) { const o = this._osc('sawtooth', this._mtof(m), t, 0.4, 0.012, 1.9, out); void o; }
      this.step++;
      this.nextT += spb;
    }
  }
}
