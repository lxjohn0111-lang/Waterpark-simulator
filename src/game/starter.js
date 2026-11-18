// Initial park layout for a brand-new game.
import * as THREE from 'three';
import { G } from '../core/context.js';
import { ITEMS } from './catalog.js';
import { rand } from '../core/utils.js';

export function buildStarterPark(park) {
  const fails = [];
  const P = (key, x0, z0, rot = 0, extra = {}) => {
    const def = ITEMS[key];
    const ok = park.canPlace(def, x0, z0, rot);
    if (!ok.ok) { fails.push(`${key}@${x0},${z0}: ${ok.reason}`); return null; }
    return park.place(key, x0, z0, rot, { free: true, silent: true, ...extra });
  };
  // main walkway & plaza
  for (let z = 42; z < 64; z++) for (let x = -3; x <= 2; x++) P('pathStone', x, z);
  for (let z = 36; z < 42; z++) for (let x = -10; x <= 9; x++) P('pathStone', x, z);
  // pool + loungers
  P('pool_small', -22, 45, 0);
  for (const x of [-21, -19, -17, -15, -13]) P('sunbed', x, 52, 0, { color: 0x2c8cf4 });
  P('umbrella', -20, 53, 0, { color: 0xf1453d });
  P('umbrella', -16, 53, 0, { color: 0xffcf3a });
  P('umbrella', -12, 53, 0, { color: 0xffffff });
  // slide
  P('slide_twister', 10, 17, 0, { color: 0x1e9bff });
  // shops & facilities
  P('drinks', -7, 46, 1);
  P('icecream', 4, 50, 3);
  P('toilets', -12, 58, 1);
  P('showers', -10, 43, 0);
  P('picnic', -10, 47, 0, { color: 0xf1453d });
  P('bench', 3, 46, 3);
  P('bench', -4, 52, 1);
  for (const [x, z] of [[-4, 44], [3, 53], [-11, 37], [10, 41]]) P('bin', x, z);
  for (const [x, z] of [[-4, 49], [3, 43], [-11, 42], [9, 43], [4, 56], [-5, 56]]) P('lamp', x, z);
  // greenery
  for (const [x, z] of [[-24, 46], [-24, 51], [-9, 55], [5, 44], [5, 59], [-6, 59], [10, 61], [-14, 61], [9, 47], [-13, 40], [24, 43], [-27, 58], [27, 58], [-28, 30], [28, 12], [-20, 10], [0, 8], [-14, 25], [-26, 38], [26, 50], [17, 47], [21, 55]]) P('palm', x, z);
  for (const [x, z] of [[-5, 62], [4, 62], [-5, 60], [4, 60]]) P('planter', x, z);
  for (let x = -19; x <= -10; x++) P('hedge', x, 63);
  for (let x = 9; x <= 18; x++) P('hedge', x, 63);
  P('flowerBed', -9, 59, 0);
  P('flowerBed', 6, 57, 0);
  for (const [x, z] of [[-25, 55], [12, 44], [-2, 34]]) P('rock', x, z);
  if (fails.length) console.warn('[starter] failed placements:', fails);
  park._dirtyNav();
}

export function seedStarterExtras() {
  // litter for the tutorial + a few shiny tip coins and a rubber duck
  const fx = G.effects;
  for (const [x, z] of [[-1.2, 57.5], [1.5, 54], [-2.5, 50.3], [6.5, 52], [-6, 40.5], [2.2, 45.5]]) fx.addTrash(x, z);
  for (const [x, z] of [[0.5, 55], [-1.8, 52], [1.2, 48]]) fx.addCoin(x, 1.2, z, Math.round(rand(3, 8)));
  const pool = G.park.lists.pools[0];
  if (pool) fx.addDuck(pool, false);
}
