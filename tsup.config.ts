import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'base_converter',
  globalName: 'baseConverter',
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['esm', 'cjs', 'iife'],
  target: 'esnext',
  dts: true,
});
