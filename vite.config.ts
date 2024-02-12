import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: './build',
    emptyOutDir: true,
  },
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.resolve(path.join(__dirname, '/src/components')),
      },
      {
        find: '@styles',
        replacement: path.resolve(path.join(__dirname, '/src/styles')),
      },
      {
        find: '@context',
        replacement: path.resolve(path.join(__dirname, '/src/context')),
      },
      {
        find: '@hooks',
        replacement: path.resolve(path.join(__dirname, '/src/hooks')),
      },
      {
        find: '@utils',
        replacement: path.resolve(path.join(__dirname, '/src/utils')),
      },
    ],
  },
});
