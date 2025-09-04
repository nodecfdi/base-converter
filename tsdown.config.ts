import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: ['index.ts'],
    shims: true,
    format: ['esm'],
    platform: 'neutral',
  },
]);
