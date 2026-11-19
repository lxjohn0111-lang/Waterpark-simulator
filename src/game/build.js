// Build mode: ghost preview, snapping, validity, rotate/colour, place/move/sell.
import * as THREE from 'three';
import { G, bus } from '../core/context.js';
import { ITEMS } from './catalog.js';
import { getPrefab } from '../world/props.js';
import { instantiate } from '../core/prefab.js';
import { buildRectPool, buildJacuzzi, kidsExtras, waveMachine } from '../world/pools.js';
import { buildSlide } from '../world/slides.js';
import { M } from '../core/materials.js';
import { COLORS } from '../config.js';
import { fmtMoney } from '../core/utils.js';

function gridTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(255,255,255,0.10)'; ctx.fillRect(0, 0, 64, 64);
  ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = 3; ctx.strokeRect(1.5, 1.5, 61, 61);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export class Build {
  constructor() {
    this.active = false;
    this.mode = 'place';
    this.def = null;
    this.rot = 0;
    this.colorIdx = 0;
    this.ghost = null;
    this.ghostMeshes = [];
    this.valid = false;
    this.moving = null;
    this.hover = null;
    this.lastPaint = null;
    this.confirmSell = null;
    this.gridTex = gridTexture();
    this.footMat = new THREE.MeshBasicMaterial({ map: this.gridTex, color: 0x66ffaa, transparent: true, opacity: 0.8, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 });
    this.foot = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), this.footMat);
    this.foot.visible = false;
    this.foot.renderOrder = 3;
    G.scene.add(this.foot);
    this.boxHelper = new THREE.Box3Helper(new THREE.Box3(), 0xff4444);
    this.boxHelper.visible = false;
    G.scene.add(this.boxHelper);
    this.target = new THREE.Vector3();
  }

  start(key) {
    const def = ITEMS[key];
    if (!def) return;
    this.clearGhost();
    this.active = true;
    this.moving = null;
    this.confirmSell = null;
    if (def.kind === 'tool') { this.mode = def.tool; this.def = def; }
    else {
      this.mode = 'place';
      this.def = def;
      if (def.colorable || def.kind === 'slide') this.colorIdx = Math.floor(Math.random() * 8);
      this.makeGhost(def);
    }
    bus.emit('buildMode', true);
    this.updatePanel();
  }
  stop() {
    if (this.moving) this.cancelMove();
    this.active = false;
    this.clearGhost();
    this.foot.visible = false;
    this.boxHelper.visible = false;
    bus.emit('buildMode', false);
    G.hud.setBuildPanel(null);
  }

  get color() {
    if (!this.def) return 0xffffff;
    const arr = this.def.kind === 'slide' ? COLORS.slide : COLORS.fabric;
    return arr[this.colorIdx % arr.length];
  }

  clearGhost() {
    if (this.ghost) {
      G.scene.remove(this.ghost);
      if (this.ghostUnique) this.ghost.traverse((o) => { if (o.isMesh && o.geometry) o.geometry.dispose(); });
      this.ghost = null; this.ghostMeshes = [];
    }
  }

  makeGhost(def, color) {
    this.clearGhost();
    let g;
    if (def.kind === 'pool') {
      const p = def.pool;
      if (p.jacuzzi) g = buildJacuzzi(p).group;
      else {
        const pd = { ...p };
        if (p.kids) pd.extras = (b) => kidsExtras(b);
        if (p.wave) pd.extras = (b) => waveMachine(b, p.W, p.L);
        g = buildRectPool(pd).group;
      }
    } else if (def.kind === 'slide') {
      g = buildSlide(def.slide, color ?? this.color).group;
    } else {
      g = instantiate(getPrefab(def.prefab));
    }
    this.ghostUnique = def.kind === 'pool' || def.kind === 'slide';
    const meshes = [];
    g.traverse((o) => { if (o.isMesh) { if (o.material && o.material.userData && o.material.userData.isWater) o.material.dispose(); o.material = M.ghostOk; o.castShadow = false; o.receiveShadow = false; o.renderOrder = 4; meshes.push(o); } });
    this.ghost = g;
    this.ghostMeshes = meshes;
    G.scene.add(g);
  }

  setGhostValid(v) {
    const mat = v ? M.ghostOk : M.ghostBad;
    for (const m of this.ghostMeshes) m.material = mat;
    this.footMat.color.setHex(v ? 0x66ffaa : 0xff5555);
  }

  aimPoint() {
    const cam = G.camera;
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
    const o = cam.position;
    let t;
    if (dir.y < -0.03) t = -o.y / dir.y; else t = 60;
    t = Math.min(t, 45);
    const p = o.clone().addScaledVector(dir, t);
    if (dir.y >= -0.03) { p.y = 0; }
    return p;
  }

  update(dt, input) {
    if (!this.active) return;
    if (G.ui.blocking) return;
    // exit
    if (input.mouse.rightPressed || input.hit('KeyQ') || input.thit('exit')) {
      if (this.moving) this.cancelMove(); else { this.stop(); return; }
    }
    const park = G.park;
    const cam = G.camera;
    const ray = new THREE.Ray(cam.position.clone(), new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion));
    if (this.mode === 'sell' || (this.mode === 'move' && !this.moving)) {
      const o = park.pickObject(ray, 45);
      this.hover = o;
      if (o) {
        this.boxHelper.box.copy(o.bbox).expandByScalar(0.05);
        this.boxHelper.material.color.setHex(this.mode === 'sell' ? 0xff4444 : 0x44aaff);
        this.boxHelper.visible = true;
      } else this.boxHelper.visible = false;
      if (input.mouse.leftPressed || input.thit('use')) {
        if (o && this.mode === 'sell') this.sell(o);
        else if (o && this.mode === 'move') this.beginMove(o);
      }
      this.updatePanel();
      return;
    }
    this.boxHelper.visible = false;
    // place / move placement
    const def = this.def;
    if (input.hit('KeyR') || input.mouse.wheel || input.thit('rotate')) {
      this.rot = (this.rot + (input.mouse.wheel < 0 ? 3 : 1)) % 4;
      G.audio.play('tick', { vol: 0.4 });
    }
    if ((input.hit('KeyC') || input.thit('color')) && (def.colorable || def.kind === 'slide') && !this.moving) {
      this.colorIdx++;
      if (def.kind === 'slide') { this.makeGhost(def); }
      G.audio.play('tick', { vol: 0.4 });
    }
    const p = this.aimPoint();
    const [W, D] = park.rotDims(def, this.rot);
    const x0 = Math.round(p.x - W / 2), z0 = Math.round(p.z - D / 2);
    const cx = x0 + W / 2, cz = z0 + D / 2;
    const ignore = this.moving ? this.moving.id : 0;
    const res = park.canPlace(def, x0, z0, this.rot, ignore);
    const cost = this.moving ? 0 : def.cost;
    const afford = park.cash >= cost;
    this.valid = res.ok && afford;
    this.reason = !res.ok ? res.reason : !afford ? 'Not enough cash' : '';
    if (this.ghost) {
      this.ghost.position.set(cx, 0.02, cz);
      this.ghost.rotation.y = this.rot * Math.PI / 2;
    }
    this.foot.visible = true;
    this.foot.position.set(cx, 0.07, cz);
    this.foot.scale.set(W, 1, D);
    this.gridTex.repeat.set(W, D);
    this.setGhostValid(this.valid);
    const placeHit = input.mouse.leftPressed || input.thit('use');
    const paint = def.kind === 'path' && (input.mouse.left || input.tdown('use'));
    if ((placeHit || paint) && this.valid) {
      const key = `${x0},${z0}`;
      if (!paint || placeHit || this.lastPaint !== key) {
        this.lastPaint = key;
        this.placeAt(x0, z0);
      }
    } else if (placeHit && !this.valid) {
      G.audio.play('error', { vol: 0.5 });
      G.hud.toast(this.reason || 'Cannot place here', 'bad');
    }
    this.updatePanel();
  }

  placeAt(x0, z0) {
    const park = G.park;
    const def = this.def;
    if (this.moving) {
      const o = this.moving;
      const saved = { key: o.key, color: o.color, seed: o.seed, quality: o.quality, condition: o.condition };
      park.remove(o, 0, true);
      const n = park.place(saved.key, x0, z0, this.rot, { free: true, silent: true, color: saved.color, seed: saved.seed, quality: saved.quality });
      if (n) { n.condition = saved.condition; if (n.pool) park.refreshPoolLook(n); }
      this.moving = null;
      G.effects.dust(n.cx, 0, n.cz, 24);
      G.audio.play('build', { vol: 0.7 });
      this.clearGhost();
      this.foot.visible = false;
      return;
    }
    const color = def.colorable || def.kind === 'slide' ? this.color : undefined;
    const o = park.place(def.key, x0, z0, this.rot, { color });
    if (!o) return;
    const big = def.kind === 'pool' || def.kind === 'slide' || def.kind === 'shop' || def.kind === 'building';
    G.effects.dust(o.cx, 0, o.cz, big ? 60 : 14);
    if (big) G.effects.sparkle(o.cx, 2, o.cz, 0x9ff0ff, 30);
    G.audio.play(def.kind === 'path' ? 'tick' : 'build', { vol: def.kind === 'path' ? 0.35 : 0.8 });
    if (def.kind !== 'path') G.hud.floater('-' + fmtMoney(def.cost), new THREE.Vector3(o.cx, 2.5, o.cz), 'red');
    if (big) G.hud.shake(0.25);
    // big things: leave build mode after placing so players see it
    if (def.kind === 'slide' || def.kind === 'pool') { this.stop(); }
  }

  sell(o) {
    const big = o.def.kind === 'pool' || o.def.kind === 'slide' || o.def.kind === 'shop' || o.def.kind === 'building';
    if (big && (!this.confirmSell || this.confirmSell.o !== o || G.time.real - this.confirmSell.t > 3)) {
      this.confirmSell = { o, t: G.time.real };
      G.hud.toast(`Click again to demolish ${o.def.name} (+${fmtMoney(o.def.cost * 0.5)})`, 'gold');
      return;
    }
    this.confirmSell = null;
    G.effects.dust(o.cx, 0, o.cz, big ? 50 : 12);
    G.park.remove(o, 0.5);
    G.audio.play('sell', { vol: 0.7 });
    G.hud.floater('+' + fmtMoney(o.def.cost * 0.5), new THREE.Vector3(o.cx, 2, o.cz), 'green');
    this.boxHelper.visible = false;
  }

  beginMove(o) {
    if (o.def.kind === 'slide' && o.queue.length + o.users.size > 0) { /* still allow */ }
    this.moving = o;
    this.def = o.def;
    this.rot = o.rot;
    this.makeGhost(o.def, o.color);
    if (o.group) o.group.visible = false;
    if (o.inst) { this.hiddenMatrix = o.matrix.clone(); o.instPool.setMatrix(o.inst, new THREE.Matrix4().makeScale(0, 0, 0)); }
    G.audio.play('tick', { vol: 0.5 });
  }
  cancelMove() {
    const o = this.moving;
    if (!o) return;
    if (o.group) o.group.visible = true;
    if (o.inst && this.hiddenMatrix) o.instPool.setMatrix(o.inst, this.hiddenMatrix);
    this.moving = null;
    this.mode = 'move';
    this.clearGhost();
    this.foot.visible = false;
  }

  updatePanel() {
    const d = this.def;
    let html = '';
    if (this.mode === 'sell') {
      html = `<div class="bp-title">🔨 Demolish</div><div>${this.hover ? this.hover.def.name + ' · refund <span class="bp-cost">' + fmtMoney(this.hover.def.cost * 0.5) + '</span>' : 'Aim at an object'}</div><div class="bp-keys"><span><span class="kk">LMB</span>Demolish</span><span><span class="kk">RMB</span>Exit</span><span><span class="kk">B</span>Catalog</span></div>`;
    } else if (this.mode === 'move' && !this.moving) {
      html = `<div class="bp-title">✋ Move</div><div>${this.hover ? this.hover.def.name : 'Aim at an object to pick it up'}</div><div class="bp-keys"><span><span class="kk">LMB</span>Pick up</span><span><span class="kk">RMB</span>Exit</span></div>`;
    } else if (d) {
      const cost = this.moving ? 0 : d.cost;
      const afford = G.park.cash >= cost;
      html = `<div class="bp-title">${this.moving ? 'Moving: ' : ''}${d.name} <span class="bp-cost ${afford ? '' : 'bad'}">${this.moving ? 'FREE' : fmtMoney(cost)}</span></div>`;
      html += `<div class="bp-keys"><span><span class="kk">LMB</span>${d.kind === 'path' ? 'Paint' : 'Place'}</span><span><span class="kk">R</span>Rotate</span>${(d.colorable || d.kind === 'slide') && !this.moving ? '<span><span class="kk">C</span>Colour</span>' : ''}<span><span class="kk">RMB</span>${this.moving ? 'Cancel' : 'Exit'}</span><span><span class="kk">B</span>Catalog</span></div>`;
      html += `<div class="bp-msg">${this.valid ? '' : (this.reason || '')}</div>`;
    }
    G.hud.setBuildPanel(html);
  }
}
