import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

export default defineConfig({
  plugins: [
    createHtmlPlugin({ minify: true, entry: 'src/index.tsx' }),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    tsconfigPaths: true
  }
});
