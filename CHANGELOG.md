# Changelog

## [Unreleased]

## Fixed

- Fix a bad type annotation for `onLinkClick` [lukewarlow](https://github.com/MrBlenny/react-flow-chart/pull/107)
- Pass config to `onCanvasDrop` [LeonZamel](https://github.com/MrBlenny/react-flow-chart/pull/111)

## Added

- Use the data.id if it exists on the drag and drop data transfer object [NoyTse](https://github.com/MrBlenny/react-flow-chart/pull/96)
- Add an onNodeDoubkeClick handler [jetmar](https://github.com/MrBlenny/react-flow-chart/pull/99)
- Add properties.linkColor support to the default link component [ielijose](https://github.com/MrBlenny/react-flow-chart/pull/103)
- Zoom support! [ielijose](https://github.com/MrBlenny/react-flow-chart/pull/125)

## Breaking

- Readonly mode will no longer disable canvas drag [parasg1999](https://github.com/MrBlenny/react-flow-chart/pull/112)
- Updated styled components to `^5.1.0` [ophirg](https://github.com/MrBlenny/react-flow-chart/pull/118)
- Zoom is enabled by default
- Chart state must have now have a scale property

## [0.0.11] - 2020-03-02

## Fixed

- Fixed an issue with onDrag [errors](https://github.com/MrBlenny/react-flow-chart/pull/88#issuecomment-593213248)

## [0.0.10] - 2020-03-02

## Added

- `smartRouting` mode [dmitrygalperin](https://github.com/MrBlenny/react-flow-chart/pull/89)
- Pass node into ports to enable customisation [fenech](https://github.com/MrBlenny/react-flow-chart/pull/85)
- Add `nodeMouseEnter` and `nodeMouseLeave` callbacks [fenech](https://github.com/MrBlenny/react-flow-chart/pull/84)
- Add `onDragCanvasStop` and `onDragNodeStop` callbacks [lordi](https://github.com/MrBlenny/react-flow-chart/pull/88)

## [0.0.9] - 2020-01-18

## Fixed

- The `onNodeClick` action will no longer be called when dragging [fenech](https://github.com/MrBlenny/react-flow-chart/pull/78/files)
- Fix data consistency when `snapToGrid` is on/off [sinan](https://github.com/MrBlenny/react-flow-chart/pull/72)
- Update node size when size changes in the DOM [zetavg](https://github.com/MrBlenny/react-flow-chart/pull/71)
- Prevent links and ports displaying as active when in readonly mode.

## Breaking

- Updated styled components to `^5.0.0` [yuyokk](https://github.com/MrBlenny/react-flow-chart/pull/76/files)

## [0.0.8] - 2019-10-20

## Fixed

- Readonly mode should prevent link edits [loonyuni](https://github.com/MrBlenny/react-flow-chart/pull/45)
- Only call `onCanvasDrop` if data exists in drop event [loonyuni](https://github.com/MrBlenny/react-flow-chart/pull/51)
- Improve CustomNode storybook example [timbrunette](https://github.com/MrBlenny/react-flow-chart/pulls)
- Fixed an error that was being thown when creating links in readonly mode

## [0.0.7] - 2019-08-22

## Added

- Readonly mode [yukai-w](https://github.com/MrBlenny/react-flow-chart/pull/39)
- Offset position to dropped item position [phlickey](https://github.com/MrBlenny/react-flow-chart/pull/34)
- `snapToGrid` and `gridSize` config options [msteinmn](https://github.com/MrBlenny/react-flow-chart/pull/23)
- `validateLink` config function [msteinmn](https://github.com/MrBlenny/react-flow-chart/pull/23)
- misc other fixes [msteinmn](https://github.com/MrBlenny/react-flow-chart/pull/23)
- Config object that is accessible by all components and actions

## Breaking

- Changed the callback type signatures so they are always objects rather than functions with params. If you use custom callbacks, these will need to be updated.


## [0.0.6] - 2019-04-30

## Added

- Upgrade Typescript and Storybook.
- Prevent re-rendering for nodes and links that are not in use. [alexkuz PR7](https://github.com/MrBlenny/react-flow-chart/pull/7)
- Render only nodes currently visible for user. [alexkuz PR7](https://github.com/MrBlenny/react-flow-chart/pull/7)
- Fix calculating link position when canvas is not positioned in top left corner. [alexkuz PR7](https://github.com/MrBlenny/react-flow-chart/pull/7)

## Breaking

- Added a new [onNodeSizeChange](https://github.com/MrBlenny/react-flow-chart/pull/7/files#diff-5a121158d13f502e78c5c29411f54269R141) action that is required for calculating which nodes are visible. If you are using external state, this will need to be implemented.

## [0.0.5] - 2019-04-02

### Added

- Fixed a bug where links would not work on firefox [tantayou999](https://github.com/MrBlenny/react-flow-chart/issues/12)

## [0.0.4] - 2019-03-24

### Added

- Start keeping a changelog
- Remove storybook and lodash from from dist [alexcuz PR5](https://github.com/MrBlenny/react-flow-chart/pull/5)
