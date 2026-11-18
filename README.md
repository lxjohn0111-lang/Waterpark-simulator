# Splash Haven: Waterpark Tycoon

A first-person waterpark building and management game for the browser, made for **CrazyGames** with the **CrazyGames HTML5 SDK v3** built in.

Walk your park in first person, build pools and giant water slides, ride them yourself, keep the water clean, rescue swimmers, hire staff, set prices and grow a 5-star resort. The game drops you straight into a running park when it loads. Menus only appear when you pause (Esc) or open the build catalog or manager tablet.

## Highlights

- **Procedural, physically based world (Three.js r187).** It uses ACES tone mapping, a Preetham sky with animated clouds, a real-time sky environment map, soft sun shadows, bloom, color grading and FXAA. GTAO ambient occlusion is enabled on High quality.
- **Water.**
  - Refractive pool surfaces with a dual-layer animated normal map.
  - Animated caustics and depth absorption on the mosaic tiles, and night pool lights.
  - From underwater you see Snell's window and get muffled audio.
  - A displaced wave pool and a bubbling, steaming hot tub.
- **Six rideable water slides**: Kiddie, Twister, Rapid Racer (twin lanes), Anaconda (enclosed tube), Free Fall and Typhoon Tower. Each has stair towers you climb in first person, supports and a landing pool. Rides use physics-simulated speed and banking.
- **Living guests** (one skinned draw call each), with:
  - needs: hunger, thirst, bladder, energy and fun
  - happiness and thoughts
  - queues, swimming, sunbathing, eating, littering and tipping
  - VIP guests and drowning emergencies
- **Staff AI**: janitors, lifeguards (sit on towers and sprint to rescues), pool technicians and mechanics.
- **Day/night cycle and weather**: sunny, partly cloudy, overcast and rain. Lamps and tiki torches light up at night, and fireworks launch at closing time.
- **Economy and progression**:
  - ticket and food pricing, shops, tips, lockers, wages and upkeep
  - land expansion (4×4 plots), advertising campaigns
  - XP levels with unlocks, a tutorial quest chain and endless generated goals
  - an end-of-day report, records and offline earnings
- **Build mode**: catalog thumbnails rendered at load, a ghost preview with a validity grid, rotate (R), colour (C), path painting, move and demolish.
- **Procedural audio**: synthesized sound effects, ambience (crowd, water, birds, crickets, rain) and a generative tropical music loop.
- **Quality tiers** (Auto, Low, Medium, High) with automatic downgrade when FPS is low. Touch controls are included for mobile.

No external art or audio files are used. Every texture, mesh and sound is generated at runtime, so the whole build is about 1 MB of JavaScript.

## Controls

| Key | Action |
| --- | --- |
| WASD + mouse | Move and look (Shift sprints) |
| Space | Jump, swim up, climb out of pools |
| C | Dive underwater |
| E | Interact: pick up litter, ride slides, rescue swimmers, buy land |
| Left mouse | Use the current tool (hold to skim water or repair) |
| 1 / 2 / 3, mouse wheel | Grabber / Skimmer / Wrench |
| B | Build catalog (R rotate, C colour, right mouse exit) |
| Tab | Park manager tablet: stats, finances, prices, staff, guest thoughts, land, goals, settings |
| T | Game speed 1x / 2x / 3x |
| Esc | Pause |

## CrazyGames SDK integration (`src/sdk.js`)

- `SDK.init()` loads asynchronously with a timeout, then `loadingStart()` and `loadingStop()` wrap asset generation.
- `gameplayStart()` runs as soon as the park is live. `gameplayStop()` runs on pause, at the end-of-day report and during ads.
- Midgame ads only play at a natural break (starting the next day, from day 2 on). The game and audio are muted and paused during every ad.
- Rewarded ads:
  - +50% of the day's income on the day report
  - a "Sponsor deal" cash bonus in the tablet, with a cooldown
- `happytime()` fires on level-up and on record days.
- Progress and settings are saved through `SDK.data` (`setItem`/`getItem`), falling back to `localStorage` when running outside CrazyGames.
- The SDK's `muteAudio` setting is respected.
- The game has no external links, never uses `alert()`, disables the context menu and stops Space/Tab/arrow keys from scrolling the page.

## Develop and build

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve dist/
```

To publish, zip the **contents** of `dist/` (`index.html` plus `assets/`) and upload the zip in the CrazyGames developer portal. All paths are relative, so the build works from any folder.

## Project structure

```
src/
  main.js            bootstrap, game loop, day cycle, events, saving, ads, quality
  sdk.js             CrazyGames SDK v3 wrapper with local fallbacks
  audio.js           procedural sound effects, ambience and music
  input.js           keyboard, mouse, pointer lock and touch
  core/              textures, materials and shaders, prefab builder and instancing, renderer and post-processing
  world/             environment (sky, sun, weather), terrain, water, pools, slides, props, people, effects
  game/              park state, grid and A*, guests, staff, player, build mode, catalog, progression, starter park
  ui/                HUD, menus (catalog, tablet, pause, day report), catalog thumbnails
```
