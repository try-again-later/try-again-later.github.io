import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default {
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@root': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src', 'components'),
      '@stores': resolve(__dirname, 'src', 'stores'),
      '@icons': resolve(__dirname, 'src', 'icons'),
    },
  },
} satisfies UserConfig;
