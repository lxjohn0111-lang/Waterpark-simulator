// Keyboard / mouse / pointer-lock / touch input
import { G } from './core/context.js';

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set();
    this.mouse = { dx: 0, dy: 0, left: false, right: false, leftPressed: false, rightPressed: false, wheel: 0 };
    this.locked = false;
    this.onLockChange = null;
    this.touch = { move: { x: 0, y: 0 }, look: { dx: 0, dy: 0 }, buttons: new Set(), pressed: new Set() };
    this.enabled = true;

    // When the page can't capture the mouse (e.g. inside a sandboxed frame),
    // we fall back to a "virtual lock": the cursor stays visible and holding
    // the right mouse button while dragging turns the camera.
    this.fallback = false;
    this.everLocked = false;
    this.rDrag = null;

    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      const k = e.code;
      if (['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyB'].includes(k) || (k === 'KeyF' && e.ctrlKey)) e.preventDefault();
      if (k === 'Escape' && this.fallback && this.locked) { this._setVirtual(false); return; }
      if (!this.keys.has(k)) this.pressed.add(k);
      this.keys.add(k);
    });
    window.addEventListener('keyup', (e) => { this.keys.delete(e.code); });
    window.addEventListener('blur', () => { this.keys.clear(); this.mouse.left = this.mouse.right = false; this.rDrag = null; });

    document.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      let dx = e.movementX || 0, dy = e.movementY || 0;
      if (this.fallback) {
        if (!(e.buttons & 2)) return;
        if (this.rDrag) this.rDrag.dist += Math.abs(dx) + Math.abs(dy);
        dx *= 1.6; dy *= 1.6;
      }
      // clamp huge spikes some browsers emit on lock
      this.mouse.dx += Math.max(-250, Math.min(250, dx));
      this.mouse.dy += Math.max(-250, Math.min(250, dy));
    });
    canvas.addEventListener('mousedown', (e) => {
      if (!this.locked) return;
      if (e.button === 0) { this.mouse.left = true; this.mouse.leftPressed = true; }
      if (e.button === 2) {
        this.mouse.right = true;
        if (this.fallback) this.rDrag = { dist: 0 }; else this.mouse.rightPressed = true;
      }
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouse.left = false;
      if (e.button === 2) {
        this.mouse.right = false;
        // in fallback mode a right *click* (no drag) still cancels/exits like normal
        if (this.fallback && this.locked && this.rDrag && this.rDrag.dist < 6) this.mouse.rightPressed = true;
        this.rDrag = null;
      }
    });
    window.addEventListener('wheel', (e) => { if (this.locked) this.mouse.wheel += Math.sign(e.deltaY); }, { passive: true });
    window.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('pointerlockchange', () => {
      if (this.fallback) return;
      this.locked = document.pointerLockElement === canvas;
      if (this.locked) this.everLocked = true;
      this.mouse.left = this.mouse.right = false;
      this.mouse.dx = this.mouse.dy = 0;
      this.onLockChange && this.onLockChange(this.locked);
    });
    document.addEventListener('pointerlockerror', () => this._lockFailed());
  }

  lock() {
    if (G.isTouch) return;
    if (this.fallback) { this._setVirtual(true); return; }
    try {
      const p = this.canvas.requestPointerLock();
      if (p && p.catch) p.catch(() => this._lockFailed());
    } catch (e) { this._lockFailed(); }
  }
  unlock() {
    if (this.fallback) { this._setVirtual(false); return; }
    if (document.pointerLockElement) document.exitPointerLock();
  }
  _lockFailed() {
    if (this.locked) return;
    if (!this.everLocked) {
      // mouse capture isn't allowed here at all: switch to drag-to-look
      this.fallback = true;
      this.canvas.style.cursor = 'crosshair';
      this._setVirtual(true);
      this.onFallback && this.onFallback();
    } else this.onLockError && this.onLockError();
  }
  _setVirtual(v) {
    if (this.locked === v) return;
    this.locked = v;
    this.mouse.left = this.mouse.right = false;
    this.mouse.dx = this.mouse.dy = 0;
    this.rDrag = null;
    this.onLockChange && this.onLockChange(v);
  }

  down(code) { return this.keys.has(code); }
  hit(code) { return this.pressed.has(code); }
  tdown(name) { return this.touch.buttons.has(name); }
  thit(name) { return this.touch.pressed.has(name); }

  endFrame() {
    this.pressed.clear();
    this.mouse.dx = this.mouse.dy = 0;
    this.mouse.leftPressed = this.mouse.rightPressed = false;
    this.mouse.wheel = 0;
    this.touch.look.dx = this.touch.look.dy = 0;
    this.touch.pressed.clear();
  }

  // ---------------- touch controls ----------------
  setupTouch() {
    const ui = document.getElementById('touch-ui');
    ui.classList.remove('hidden');
    const zone = document.getElementById('joy-zone');
    const base = document.getElementById('joy-base');
    const knob = document.getElementById('joy-knob');
    let joyId = null, cx = 0, cy = 0, max = 46;
    zone.addEventListener('touchstart', (e) => {
      const t = e.changedTouches[0];
      joyId = t.identifier;
      const r = base.getBoundingClientRect();
      cx = r.left + r.width / 2; cy = r.top + r.height / 2;
      max = Math.max(30, r.width / 2 - 6);
      e.preventDefault();
    }, { passive: false });
    zone.addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier !== joyId) continue;
        let dx = t.clientX - cx, dy = t.clientY - cy;
        const d = Math.hypot(dx, dy);
        if (d > max) { dx = dx / d * max; dy = dy / d * max; }
        knob.style.transform = `translate(${dx}px, ${dy}px)`;
        this.touch.move.x = dx / max; this.touch.move.y = -dy / max;
      }
      e.preventDefault();
    }, { passive: false });
    const endJoy = (e) => {
      for (const t of e.changedTouches) if (t.identifier === joyId) { joyId = null; knob.style.transform = ''; this.touch.move.x = this.touch.move.y = 0; }
    };
    zone.addEventListener('touchend', endJoy); zone.addEventListener('touchcancel', endJoy);

    // look: anywhere on canvas (right side)
    let lookId = null, lx = 0, ly = 0;
    this.canvas.addEventListener('touchstart', (e) => {
      for (const t of e.changedTouches) { if (lookId === null) { lookId = t.identifier; lx = t.clientX; ly = t.clientY; } }
      e.preventDefault();
    }, { passive: false });
    this.canvas.addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier !== lookId) continue;
        this.touch.look.dx += (t.clientX - lx) * 2.2; this.touch.look.dy += (t.clientY - ly) * 2.2;
        lx = t.clientX; ly = t.clientY;
      }
      e.preventDefault();
    }, { passive: false });
    const endLook = (e) => { for (const t of e.changedTouches) if (t.identifier === lookId) lookId = null; };
    this.canvas.addEventListener('touchend', endLook); this.canvas.addEventListener('touchcancel', endLook);

    for (const btn of document.querySelectorAll('#touch-btns .tb, #build-btns .bb')) {
      const name = btn.dataset.t;
      btn.addEventListener('touchstart', (e) => { this.touch.buttons.add(name); this.touch.pressed.add(name); btn.classList.add('pressed'); e.preventDefault(); e.stopPropagation(); }, { passive: false });
      const up = (e) => { this.touch.buttons.delete(name); btn.classList.remove('pressed'); e.preventDefault(); };
      btn.addEventListener('touchend', up); btn.addEventListener('touchcancel', up);
    }
    // browsers only allow audio after a user gesture: resume it on the first taps
    window.addEventListener('touchend', () => { if (G.audio) G.audio.init(); }, { passive: true });
  }
}
