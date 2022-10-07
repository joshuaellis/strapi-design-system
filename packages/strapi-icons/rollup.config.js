import multiInput from 'rollup-plugin-multi-input';

import esbuild from 'rollup-plugin-esbuild';

const external = (id) => !id.startsWith('.') && !id.startsWith('/');

const esbuildConfig = {
  loaders: {
    // Enable JSX in .js files too
    '.js': 'jsx',
  },
};

export default [
  {
    input: ['src/**/*.js', 'src/**/*.jsx', '!src/index.js'],
    output: { dir: `dist`, format: 'esm' },
    external,
    plugins: [multiInput(), esbuild(esbuildConfig)],
  },
  {
    input: `./src/index.js`,
    output: { dir: `dist`, format: 'esm' },
    external,
    plugins: [esbuild(esbuildConfig)],
    preserveModules: true,
  },
  {
    input: ['src/**/*.js', 'src/**/*.jsx', '!src/index.js'],
    output: { dir: `dist`, format: 'cjs' },
    external,
    plugins: [
      multiInput({
        transformOutputPath: (output) => output.replace(/\.[^/.]+$/, '.cjs.js'),
      }),
      esbuild(esbuildConfig),
    ],
  },
  {
    input: `./src/index.js`,
    output: { file: `dist/index.cjs.js`, format: 'cjs' },
    external,
    plugins: [esbuild(esbuildConfig)],
  },
];
