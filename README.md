# Boilerplate for TypeScript, React & Storybook with Webpack 4

A boilerplate project for using TypeScript 3, React 16 and Storybook together with Webpack 4.

## Quickstart

With yarn

```bash
yarn
yarn start:storybook
```

With npm

```bash
npm install
npm run start:storybook
```

## Remove an addon

To remove an addon you must simple run the `yarn remove <addon to remove>` oder `npm uninstall <addon to remove> --save-dev`

For example if you want to remove the `@storybook__addon-a11y`, you can run:

```bash
yarn remove @storybook/addon-a11y @types/storybook__addon-a11y
```

or

```bash
npm uninstall @storybook/addon-a11y @types/storybook__addon-a11y --save-dev
```

The types of the addon are no necessary anymore if you want to remove an addon.

The next step is removing the Addon Import in `/config/storybook/addons.ts` and remove the stories from `/stories` that includes this addon.

## TODO

[ ] Separate tsconfig for Storybook
[ ] Separate (base) tsconfig for Configs
[ ] tsconfig into the config Folder