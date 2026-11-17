import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'index.ts',
  ],
  clean: true,
  format: {
    esm: {
      unbundle: true,
    },
    iife: {
      globalName: 'ncfdiBaseConverter',
      platform: 'browser',
      unbundle: false,
      dts: false,
    },
  },
  minify: 'dce-only',
  fixedExtension: false,
  dts: true,
  platform: 'neutral',
  target: 'esnext',
  exports: true,
});
