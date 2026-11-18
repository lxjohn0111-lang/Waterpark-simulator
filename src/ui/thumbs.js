// Renders catalog thumbnails of every buildable item at load time.
import * as THREE from 'three';
import { G } from '../core/context.js';
import { ITEMS } from '../game/catalog.js';
import { getPrefab } from '../world/props.js';
import { instantiate } from '../core/prefab.js';
import { buildRectPool, buildJacuzzi, kidsExtras, waveMachine } from '../world/pools.js';
import { buildSlide } from '../world/slides.js';
import { M } from '../core/materials.js';
import { COLORS } from '../config.js';

export async function renderThumbnails(renderer, envTexture, progress) {
  const W = 192, H = 144;
  const scene = new THREE.Scene();
  const bgC = document.createElement('canvas'); bgC.width = 4; bgC.height = 64;
  const bctx = bgC.getContext('2d');
  const gr = bctx.createLinearGradient(0, 0, 0, 64); gr.addColorStop(0, '#5fb6e6'); gr.addColorStop(1, '#1d4a66');
  bctx.fillStyle = gr; bctx.fillRect(0, 0, 4, 64);
  const bg = new THREE.CanvasTexture(bgC); bg.colorSpace = THREE.SRGBColorSpace;
  scene.background = bg;
  scene.environment = envTexture;
  scene.environmentIntensity = 0.45;
  scene.add(new THREE.HemisphereLight(0xdff2ff, 0x5a6b45, 0.7));
  const sun = new THREE.DirectionalLight(0xfff2e0, 2.6); sun.position.set(5, 9, 6); scene.add(sun);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x3f6a34, roughness: 1 });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(60, 32).rotateX(-Math.PI / 2), groundMat);
  ground.position.y = -0.02;
  scene.add(ground);
  const cam = new THREE.PerspectiveCamera(32, W / H, 0.1, 500);
  const out = {};
  const c2 = document.createElement('canvas'); c2.width = W; c2.height = H;
  const ctx2 = c2.getContext('2d');
  const prevShadow = renderer.shadowMap.enabled;
  renderer.shadowMap.enabled = false;
  const items = Object.values(ITEMS).filter((d) => d.kind !== 'tool');
  const size = new THREE.Vector2();
  renderer.getSize(size);
  const pr = renderer.getPixelRatio();
  let i = 0;
  for (const d of items) {
    let obj, unique = false;
    try {
      if (d.kind === 'pool') {
        const p = d.pool;
        if (p.jacuzzi) obj = buildJacuzzi(p).group;
        else { const pd = { ...p }; if (p.kids) pd.extras = (b) => kidsExtras(b); if (p.wave) pd.extras = (b) => waveMachine(b, p.W, p.L); if (p.band) pd.band = M.poolTileDark; obj = buildRectPool(pd).group; }
        unique = true;
      } else if (d.kind === 'slide') { obj = buildSlide(d.slide, COLORS.slide[i % COLORS.slide.length]).group; unique = true; }
      else obj = instantiate(getPrefab(d.prefab));
    } catch (e) { console.warn('thumb fail', d.key, e); continue; }
    if (d.colorable) obj.traverse((o) => { if (o.isMesh && o.material.userData.instColor) { o.material = o.material.clone(); o.material.color.setHex(COLORS.fabric[i % 8]); } });
    scene.add(obj);
    ground.position.y = d.kind === 'pool' || d.kind === 'slide' ? -3 : -0.02;
    const box = new THREE.Box3().setFromObject(obj);
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const r = Math.max(0.4, sphere.radius);
    const dist = r / Math.sin(THREE.MathUtils.degToRad(16)) * (d.kind === 'pool' ? 0.62 : d.kind === 'slide' ? 0.7 : 0.8);
    const dir = d.kind === 'path' ? new THREE.Vector3(0.6, 1.1, 0.9).normalize() : d.kind === 'pool' ? new THREE.Vector3(0.7, 0.9, 1.0).normalize() : new THREE.Vector3(0.75, 0.5, 1.0).normalize();
    cam.position.copy(sphere.center).addScaledVector(dir, dist);
    cam.lookAt(sphere.center);
    cam.near = dist * 0.05; cam.far = dist * 4; cam.updateProjectionMatrix();
    renderer.setScissorTest(true);
    renderer.setViewport(0, 0, W / pr, H / pr);
    renderer.setScissor(0, 0, W / pr, H / pr);
    renderer.render(scene, cam);
    const canvas = renderer.domElement;
    ctx2.clearRect(0, 0, W, H);
    ctx2.drawImage(canvas, 0, canvas.height - H, W, H, 0, 0, W, H);
    out[d.key] = c2.toDataURL('image/jpeg', 0.85);
    scene.remove(obj);
    if (unique) obj.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); if (o.material.userData && o.material.userData.isWater) o.material.dispose(); } });
    i++;
    if (i % 6 === 0) { progress && progress(i / items.length); await new Promise((r) => setTimeout(r, 0)); }
  }
  renderer.setScissorTest(false);
  renderer.setViewport(0, 0, size.x, size.y);
  renderer.shadowMap.enabled = prevShadow;
  return out;
}
