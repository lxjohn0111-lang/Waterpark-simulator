import { defineConfig } from 'vite';

// Relative base so the build works from any folder (CrazyGames uploads, itch, etc.)
export default defineConfig({
  base: './',
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 2000,
    sourcemap: false,
  },
  server: { host: true, port: 5173 },
});
