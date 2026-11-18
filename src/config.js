// Global constants for world layout and simulation.
export const WATER_Y = -0.12;          // water surface height inside pools
export const PLOT = 32;                // land plot size (m)
export const PLOTS = 4;                // plots per side (4x4)
export const PARK_MIN = -64;           // park land extents (x & z)
export const PARK_MAX = 64;
export const GATE_Z = 64;              // entrance line (south edge)
export const GRID_MIN_X = -80, GRID_MAX_X = 80;
export const GRID_MIN_Z = -80, GRID_MAX_Z = 104;
export const GRID_W = GRID_MAX_X - GRID_MIN_X;   // 160
export const GRID_H = GRID_MAX_Z - GRID_MIN_Z;   // 184
export const OPEN_HOUR = 9 * 60;
export const CLOSE_HOUR = 21 * 60;
export const DAY_END = 21 * 60 + 40;
export const NEXT_DAY_START = 8 * 60 + 20;
export const GAME_MIN_PER_SEC = 2.0;   // game minutes per real second at 1x (12h ≈ 6 min)
export const START_CASH = 6000;
export const SAVE_VERSION = 3;

// Plots owned at start (i = column 0..3 west->east, j = row 0..3 north->south)
export const START_PLOTS = ['1,2', '2,2', '1,3', '2,3'];

export const COLORS = {
  slide: [0xff3b3b, 0x1e9bff, 0xffc21a, 0x2ed36b, 0xa24bff, 0xff7a1a, 0xff4fa3, 0x18d1c9],
  fabric: [0xf1453d, 0x2c8cf4, 0xffcf3a, 0x31c06a, 0xff7ab8, 0xffffff, 0x7d4ce0, 0xff8a2a],
};
