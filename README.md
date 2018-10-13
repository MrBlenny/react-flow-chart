# Boilerplate for TypeScript, React & Storybook with Webpack 4

A boilerplate project for using TypeScript 3, React 16 and Storybook together with Webpack 4.

[![CircleCI](https://circleci.com/gh/Sly321/typescript-react-storybook-boilerplate.svg?style=svg)](https://circleci.com/gh/Sly321/typescript-react-storybook-boilerplate)

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

## Storybook Addons

Available Addons:

- [x] [a11y](https://github.com/storybooks/storybook/tree/release/3.4/addons/a11y)
- [x] [options](https://github.com/storybooks/storybook/tree/release/3.4/addons/options)
- [x] [viewport](https://github.com/storybooks/storybook/tree/release/3.4/addons/viewport)
- [ ] [actions](https://github.com/storybooks/storybook/tree/release/3.4/addons/actions)
- [ ] [centered](https://github.com/storybooks/storybook/tree/release/3.4/addons/centered)
- [ ] [jest](https://github.com/storybooks/storybook/tree/release/3.4/addons/jest)
- [ ] [knobs](https://github.com/storybooks/storybook/tree/release/3.4/addons/knobs)
- [ ] [storysource](https://github.com/storybooks/storybook/tree/release/3.4/addons/storysource)

### Remove an addon

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

- [x] separate tsconfig for webpack
- [x] tsconfig into the config Folder
- [ ] add circle ci