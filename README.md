# Welcome

This is a fork of `strapi/design-system` aimed at exploring different bundlers to improve bundle size across the application.

The branches are clearly labelled as the bundler they're experimenting with.

## Getting started

- Select a branch you want to look (e.g. `esbuild`)
- run `yarn setup` to install the dependencies of the repo
- run `yarn build` to build the pacakge with the respected bundler
- check out `dist` if you're interested in the output.

## Connecting to `Strapi`

If you want to analyze the admin bundle and the impact each library has on the over all application, link this repo to your copy of the `strapi` repo
by replacing the version number of `@strapi/design-system` with a direct path like so:

```shell
# packages/core/admin/package.json
"@strapi/design-system": "link:../../../../strapi-design-system/packages/strapi-design-system",
```

This should be done to all instances of including in the `pacakge.json`. Running `yarn lerna clean && yarn setup` in the root of the strapi repo should
connect these correctly.
