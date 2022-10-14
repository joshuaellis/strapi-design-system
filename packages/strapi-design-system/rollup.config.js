import multiInput from 'rollup-plugin-multi-input';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';

import esbuild from 'rollup-plugin-esbuild';

/**
 * @type {import('rollup-plugin-esbuild').Options}
 */
const esbuildConfig = {
  minify: false,
  target: 'es2020',
  loaders: {
    // Enable JSX in .js files too
    '.js': 'jsx',
  },
};

const extensions = ['.js', '.jsx', '.cjs'];

const sharedPlugins = [image(), resolve({ extensions }), esbuild(esbuildConfig)];

const external = (id) => !id.startsWith('.') && !id.startsWith('/');

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: ['src/**/*.js', 'src/**/*.jsx', '!src/index.js', '!**/__tests__', '!**/*.e2e.js', '!**/*.spec.js'],
    output: { dir: `dist`, format: 'esm' },
    external,
    plugins: [multiInput(), ...sharedPlugins],
  },
  {
    input: `./src/index.js`,
    output: { dir: `dist`, format: 'esm' },
    external,
    plugins: sharedPlugins,
    preserveModules: true,
  },
  {
    input: ['src/**/*.js', 'src/**/*.jsx', '!src/index.js', '!**/__tests__', '!**/*.e2e.js', '!**/*.spec.js'],
    output: { dir: `dist`, format: 'cjs' },
    external,
    plugins: [
      multiInput({
        transformOutputPath: (output) => output.replace(/\.[^/.]+$/, '.cjs'),
      }),
      ...sharedPlugins,
    ],
  },
  {
    input: `./src/index.js`,
    output: { file: `dist/index.cjs`, format: 'cjs' },
    external,
    plugins: sharedPlugins,
  },
];
