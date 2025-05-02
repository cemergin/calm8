import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from 'vite-plugin-chrome-extension';
import manifest from './public/manifest.json'; // (we'll create this next)

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
