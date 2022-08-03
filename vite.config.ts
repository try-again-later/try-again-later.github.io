import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@root',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src', 'components'),
      },
      {
        find: '@stores',
        replacement: resolve(__dirname, 'src', 'stores'),
      },
    ],
  },
});
