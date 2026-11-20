// Buildable item catalog
export const CATEGORIES = [
  { key: 'pools', name: 'Pools', short: 'Pools', icon: '🏊' },
  { key: 'slides', name: 'Slides', short: 'Slides', icon: '🌀' },
  { key: 'food', name: 'Food & Shops', short: 'Food', icon: '🍔' },
  { key: 'facility', name: 'Facilities', short: 'Facility', icon: '🚻' },
  { key: 'decor', name: 'Decoration', short: 'Decor', icon: '🌴' },
  { key: 'paths', name: 'Paths', short: 'Paths', icon: '🧱' },
  { key: 'tools', name: 'Manage', short: 'Manage', icon: '🔧' },
];

// kind: pool | slide | shop | building | prop | path
export const ITEMS = {
  // ---------------- POOLS ----------------
  pool_small: { name: 'Lagoon Pool', cat: 'pools', kind: 'pool', cost: 2400, level: 1, desc: 'Classic 8×5 m pool with a deep end. Guests love a swim.',
    pool: { W: 8, L: 5, dS: 1.0, dD: 1.5, deck: 1.5, band: true }, fun: 0.5, capacity: 10, upkeep: 40, appeal: 4 },
  pool_kids: { name: 'Splash Pad Pool', cat: 'pools', kind: 'pool', cost: 1900, level: 2, desc: 'Shallow pool with a mushroom fountain. Kids go wild for it.',
    pool: { W: 6, L: 6, dS: 0.45, dD: 0.45, deck: 1.5, kids: true, ladders: false }, fun: 0.6, capacity: 10, upkeep: 30, appeal: 5, kidsOnly: true },
  pool_leisure: { name: 'Leisure Pool', cat: 'pools', kind: 'pool', cost: 4300, level: 3, desc: 'Roomy 12×9 m free-form fun pool for lots of swimmers.',
    pool: { W: 12, L: 9, dS: 0.9, dD: 1.8, deck: 1.5, band: true }, fun: 0.6, capacity: 24, upkeep: 60, appeal: 6 },
  jacuzzi: { name: 'Hot Tub', cat: 'pools', kind: 'pool', cost: 2300, level: 3, desc: 'Bubbling, glowing hot tub. Restores energy fast.',
    pool: { jacuzzi: true, R: 1.6, depth: 0.9, deckHalf: 2.5 }, fun: 0.45, rest: true, capacity: 6, upkeep: 35, appeal: 5 },
  pool_lap: { name: 'Olympic Lap Pool', cat: 'pools', kind: 'pool', cost: 6800, level: 5, desc: '10×18 m lane pool with a 2 m deep end.',
    pool: { W: 10, L: 18, dS: 1.2, dD: 2.0, deck: 1.5, lanes: 5 }, fun: 0.55, capacity: 30, upkeep: 80, appeal: 6 },
  wavepool: { name: 'Tsunami Wave Pool', cat: 'pools', kind: 'pool', cost: 18000, level: 7, desc: 'Huge beach-entry pool with a wave machine. The crowd favourite!',
    pool: { W: 16, L: 22, dS: 0, dD: 2.2, deck: 2.0, beach: true, wave: true, ladders: false }, fun: 1.0, capacity: 50, upkeep: 220, appeal: 14 },

  // ---------------- SLIDES ----------------
  slide_kiddie: { name: 'Wiggle Kiddie Slide', cat: 'slides', kind: 'slide', slide: 'kiddie', cost: 1600, level: 1, desc: 'Gentle little slide for the youngest guests.', upkeep: 25, appeal: 4, kidsOnly: true },
  slide_twister: { name: 'Twister', cat: 'slides', kind: 'slide', slide: 'twister', cost: 4800, level: 2, desc: '8 m tower, double spiral open flume.', upkeep: 60, appeal: 8 },
  slide_racer: { name: 'Rapid Racer', cat: 'slides', kind: 'slide', slide: 'racer', cost: 7200, level: 4, desc: 'Twin-lane bumpy racing slide. Race your friends!', upkeep: 80, appeal: 9 },
  slide_anaconda: { name: 'Anaconda', cat: 'slides', kind: 'slide', slide: 'anaconda', cost: 9800, level: 5, desc: 'Enclosed tube that coils through darkness. 11 m tall.', upkeep: 100, appeal: 10 },
  slide_freefall: { name: 'Free Fall', cat: 'slides', kind: 'slide', slide: 'freefall', cost: 12500, level: 6, desc: '12 m near-vertical speed drop. Not for the faint-hearted!', upkeep: 120, appeal: 12 },
  slide_typhoon: { name: 'Typhoon Tower', cat: 'slides', kind: 'slide', slide: 'typhoon', cost: 21000, level: 8, desc: '16 m giant tube with multiple helices. The park icon.', upkeep: 180, appeal: 16 },

  // ---------------- FOOD & SHOPS ----------------
  drinks: { name: 'Cool Drinks Hut', cat: 'food', kind: 'shop', prefab: 'drinks', size: [3, 3], cost: 900, level: 1, desc: 'Sells ice-cold drinks. Essential on hot days!', shop: { type: 'drink', price: 3, needs: { thirst: -0.7 } }, upkeep: 20, appeal: 2, service: [0, 2.0] },
  icecream: { name: 'Ice Cream Cart', cat: 'food', kind: 'shop', prefab: 'icecream', size: [2, 2], cost: 750, level: 1, desc: 'Sweet treats that make guests happy.', shop: { type: 'snack', price: 4, needs: { hunger: -0.3, thirst: -0.15 }, happy: 6 }, upkeep: 15, appeal: 3, service: [0, 1.5] },
  burger: { name: 'Burger Bay', cat: 'food', kind: 'shop', prefab: 'burger', size: [4, 3], cost: 2200, level: 2, desc: 'Burgers, fries & hot dogs for hungry swimmers.', shop: { type: 'food', price: 8, needs: { hunger: -0.75 } }, upkeep: 40, appeal: 3, service: [0, 2.2] },
  pizza: { name: 'Pizza Pier', cat: 'food', kind: 'shop', prefab: 'pizza', size: [3, 3], cost: 2600, level: 4, desc: 'Wood-fired pizza slices. Guests pay a bit more.', shop: { type: 'food', price: 7, needs: { hunger: -0.7 }, happy: 3 }, upkeep: 45, appeal: 3, service: [0, 2.0] },
  souvenir: { name: 'Surf Shop', cat: 'food', kind: 'shop', prefab: 'souvenir', size: [4, 4], cost: 3500, level: 5, desc: 'Inflatables, towels & souvenirs. Big margins from happy guests.', shop: { type: 'souvenir', price: 15, happy: 8 }, upkeep: 50, appeal: 4, service: [0, 2.6] },

  // ---------------- FACILITIES ----------------
  toilets: { name: 'Restrooms', cat: 'facility', kind: 'building', prefab: 'toilets', size: [4, 3], cost: 1200, level: 1, desc: 'Every park needs them. Keep them clean!', facility: 'toilet', upkeep: 20, service: [0, 2.0], capacity: 3 },
  showers: { name: 'Outdoor Showers', cat: 'facility', kind: 'building', prefab: 'showers', size: [3, 2], cost: 600, level: 1, desc: 'Rinse off before a swim. Keeps pools cleaner.', facility: 'shower', upkeep: 10, service: [0, 1.4], capacity: 3 },
  lockers: { name: 'Changing & Lockers', cat: 'facility', kind: 'building', prefab: 'lockers', size: [6, 4], cost: 2000, level: 3, desc: 'Guests rent lockers on arrival (+$3 each) and feel safer.', facility: 'lockers', upkeep: 30, service: [0, 2.2], capacity: 4 },
  firstaid: { name: 'First Aid Station', cat: 'facility', kind: 'building', prefab: 'firstaid', size: [3, 3], cost: 2500, level: 4, desc: 'Improves park safety rating.', facility: 'firstaid', upkeep: 40, service: [0, 2.0], appeal: 1 },
  lifeguard: { name: 'Lifeguard Tower', cat: 'facility', kind: 'prop', prefab: 'lifeguard', size: [2, 2], cost: 800, level: 2, desc: 'Hire lifeguards to watch nearby pools and rescue swimmers.', onDeck: true, blocks: true, facility: 'lifeguard', upkeep: 5, appeal: 1 },
  sunbed: { name: 'Sun Lounger', cat: 'facility', kind: 'prop', prefab: 'sunbed', size: [1, 2], cost: 180, level: 1, desc: 'Guests relax here to restore energy.', onDeck: true, blocks: true, colorable: true, facility: 'sunbed', upkeep: 1, appeal: 1 },
  bench: { name: 'Park Bench', cat: 'facility', kind: 'prop', prefab: 'bench', size: [2, 1], cost: 150, level: 1, desc: 'A place to sit and eat.', onDeck: true, blocks: true, facility: 'bench', upkeep: 1, appeal: 0.5 },
  picnic: { name: 'Picnic Table', cat: 'facility', kind: 'prop', prefab: 'picnic', size: [2, 2], cost: 380, level: 2, desc: 'Shaded table for 4. Guests love eating here.', onDeck: true, blocks: true, colorable: true, facility: 'picnic', upkeep: 2, appeal: 1.5 },
  bin: { name: 'Trash Bin', cat: 'facility', kind: 'prop', prefab: 'bin', size: [1, 1], cost: 60, level: 1, desc: 'Guests near a bin drop far less litter.', onDeck: true, blocks: true, facility: 'bin', upkeep: 1 },
  lamp: { name: 'Lamp Post', cat: 'facility', kind: 'prop', prefab: 'lamp', size: [1, 1], cost: 200, level: 1, desc: 'Lights up the park after sunset.', onDeck: true, blocks: true, light: true, upkeep: 2, appeal: 0.5 },

  // ---------------- DECOR ----------------
  palm: { name: 'Palm Tree', cat: 'decor', kind: 'prop', prefab: 'palm', size: [1, 1], cost: 300, level: 1, desc: 'Tropical vibes. Boosts nearby scenery.', onDeck: true, blocks: true, appeal: 3.5, randomYaw: true },
  umbrella: { name: 'Beach Umbrella', cat: 'decor', kind: 'prop', prefab: 'umbrella', size: [1, 1], cost: 220, level: 1, desc: 'Shade for sunbathers. Press C to change colour.', onDeck: true, blocks: false, colorable: true, appeal: 1.5 },
  planter: { name: 'Flower Pot', cat: 'decor', kind: 'prop', prefab: 'planter', size: [1, 1], cost: 120, level: 1, desc: 'A pretty pot of flowers.', onDeck: true, blocks: true, appeal: 2 },
  hedge: { name: 'Hedge', cat: 'decor', kind: 'prop', prefab: 'hedge', size: [1, 1], cost: 60, level: 1, desc: 'Neat hedge block for borders.', onDeck: false, blocks: true, appeal: 1 },
  flowerBed: { name: 'Flower Bed', cat: 'decor', kind: 'prop', prefab: 'flowerBed', size: [2, 2], cost: 280, level: 2, desc: 'Colourful raised bed of flowers.', onDeck: true, blocks: true, appeal: 4.5 },
  rock: { name: 'Boulder', cat: 'decor', kind: 'prop', prefab: 'rock', size: [1, 1], cost: 140, level: 2, desc: 'Natural stone accent.', onDeck: true, blocks: true, appeal: 1.5, randomYaw: true },
  tiki: { name: 'Tiki Torch', cat: 'decor', kind: 'prop', prefab: 'tiki', size: [1, 1], cost: 180, level: 3, desc: 'Flickering torch, gorgeous at night.', onDeck: true, blocks: true, appeal: 2, light: true, lightColor: 0xff9a3a },
  flamingo: { name: 'Flamingo Statue', cat: 'decor', kind: 'prop', prefab: 'flamingo', size: [1, 1], cost: 260, level: 3, desc: 'Every waterpark needs a flamingo.', onDeck: true, blocks: true, appeal: 3, randomYaw: true },
  fountain: { name: 'Plaza Fountain', cat: 'decor', kind: 'building', prefab: 'fountain', size: [3, 3], cost: 3200, level: 4, desc: 'Grand fountain. Huge scenery boost.', appeal: 14, upkeep: 20, fountain: true },
  fireworks: { name: 'Fireworks Launcher', cat: 'decor', kind: 'building', prefab: 'fireworks', size: [2, 2], cost: 6000, level: 5, desc: 'Nightly fireworks show at closing. Guests adore it (+happiness, +rating).', appeal: 2, upkeep: 60, fireworks: true },

  // ---------------- PATHS ----------------
  pathStone: { name: 'Stone Path', cat: 'paths', kind: 'path', prefab: 'pathStone', size: [1, 1], cost: 15, level: 1, desc: 'Guests walk faster on paths. Hold mouse to paint.', appeal: 0.2 },
  pathWood: { name: 'Boardwalk', cat: 'paths', kind: 'path', prefab: 'pathWood', size: [1, 1], cost: 20, level: 2, desc: 'Warm wooden decking.', appeal: 0.3 },
  pathRed: { name: 'Terracotta Path', cat: 'paths', kind: 'path', prefab: 'pathRed', size: [1, 1], cost: 18, level: 3, desc: 'Sun-baked terracotta tiles.', appeal: 0.3 },

  // ---------------- TOOLS ----------------
  tool_move: { name: 'Move', cat: 'tools', kind: 'tool', tool: 'move', cost: 0, level: 1, desc: 'Pick up an object and place it somewhere else for free.' },
  tool_sell: { name: 'Demolish', cat: 'tools', kind: 'tool', tool: 'sell', cost: 0, level: 1, desc: 'Remove an object and get 50% of its price back.' },
};

for (const [k, v] of Object.entries(ITEMS)) v.key = k;

export const STAFF = {
  janitor: { name: 'Janitor', icon: '🧹', wage: 90, level: 1, desc: 'Picks up litter and cleans restrooms.', color: 0x2e9e5a },
  lifeguard: { name: 'Lifeguard', icon: '🛟', wage: 130, level: 2, desc: 'Watches pools from a Lifeguard Tower and rescues swimmers.', color: 0xd83a3a },
  pooltech: { name: 'Pool Technician', icon: '🧪', wage: 110, level: 2, desc: 'Skims and treats pool water.', color: 0x1e7fd8 },
  mechanic: { name: 'Mechanic', icon: '🔧', wage: 150, level: 3, desc: 'Inspects and repairs slides.', color: 0xff8a1a },
  security: { name: 'Security Guard', icon: '👮', wage: 140, level: 2, desc: 'Chases fare dodgers, bonks them and collects the fine.', color: 0x1b2a6b },
};

// XP needed to reach level n+1 from level n (cumulative table)
export const LEVEL_XP = [0, 0, 120, 330, 650, 1100, 1700, 2500, 3500, 4800, 6400, 8300, 10600, 13300, 16500, 20200, 24500, 29500, 35200, 41800, 49400];
export function xpForLevel(n) {
  if (n < LEVEL_XP.length) return LEVEL_XP[n];
  return Math.round(LEVEL_XP[LEVEL_XP.length - 1] + (n - LEVEL_XP.length + 1) * 9000);
}

export const LAND_PRICES = [0, 6000, 9000, 13000, 18000, 24000, 32000, 42000, 54000, 68000, 85000, 105000, 130000];
