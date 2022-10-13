const esbuild = require('esbuild');
const glob = require('tiny-glob');

const externalNodeModsPlugin = {
  name: 'make-all-packages-external',
  setup(build) {
    let filter = /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/; // Must not start with "/" or "./" or "../"
    build.onResolve({ filter }, (args) => ({ path: args.path, external: true }));
  },
};

const commonConfig = {
  outdir: './dist',
  bundle: false,
  sourcemap: false,
  minify: false,
  splitting: false,
  target: ['es2020'],
  plugins: [externalNodeModsPlugin],
  loader: {
    '.js': 'jsx',
    '.svg': 'text',
  },
};

glob('./src/**/!(*.spec|*.e2e).{js}').then(async (paths) => {
  try {
    esbuild.build({
      entryPoints: ['./src/index.js'],
      outExtension: { '.js': '.js' },
      format: 'esm',
      ...commonConfig,
    });

    esbuild.build({
      entryPoints: paths,
      //   outExtension: { '.js': '.js' },
      format: 'esm',
      ...commonConfig,
    });

    esbuild.build({
      entryPoints: ['./src/index.js'],
      outExtension: { '.js': '.cjs' },
      format: 'cjs',
      ...commonConfig,
    });

    esbuild.build({
      entryPoints: paths,
      outdir: './dist',
      outExtension: { '.js': '.cjs' },
      format: 'cjs',
      ...commonConfig,
    });
  } catch (err) {
    process.exit(1);
  }
});
