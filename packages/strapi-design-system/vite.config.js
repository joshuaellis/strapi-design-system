import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs/promises';

export default defineConfig({
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    include: ['@strapi/icons'],
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: 'jsx',
              contents: await fs.readFile(args.path, 'utf8'),
            }));
          },
        },
      ],
    },
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
    commonjsOptions: {
      //   include: [/@strapi\/icons/, /node_modules/],
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
