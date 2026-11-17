import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'index.ts',
  ],
  clean: true,
  format: ['esm'],
  minify: 'dce-only',
  fixedExtension: false,
  dts: true,
  platform: 'neutral',
  target: 'esnext',
  exports: true,
  unbundle: true,
});
