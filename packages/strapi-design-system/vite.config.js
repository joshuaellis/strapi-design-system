import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './src/index.js'),
      name: 'StrapiDesignSystem',
      // the proper extensions will be added
      fileName: 'strapi-design-system',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'react-router-dom', 'styled-components', '@strapi/icons'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          ['react-dom']: 'ReactDOM',
          ['react-router-dom']: 'ReactRouterDOM',
          'styled-components': 'styled',
          '@strapi/icons': 'StrapiIcons',
        },
      },
    },
  },
  plugins: [react()],
});
