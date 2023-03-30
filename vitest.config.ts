import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '~': path.join(__dirname, 'src'),
      '@': path.join(__dirname, 'src'),
    },
  },

  test: {
    globals: false,
  },
});
