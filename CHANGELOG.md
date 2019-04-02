
# Changelog

 ## [Unreleased]

 ## Added

- Upgrade Typescript and Storybook.
- Prevent re-rendering for nodes and links that are not in use. [alexcuz PR7](https://github.com/MrBlenny/react-flow-chart/pull/7)
- Render only nodes currently visible for user. [alexcuz PR7](https://github.com/MrBlenny/react-flow-chart/pull/7)
- Fix calculating link position when canvas is not positioned in top left corner. [alexcuz PR7](https://github.com/MrBlenny/react-flow-chart/pull/7)

 ## Breaking

 - Added a new [onNodeSizeChange](https://github.com/MrBlenny/react-flow-chart/pull/7/files#diff-5a121158d13f502e78c5c29411f54269R141) action that is required for calculating which nodes are visible. If you are using external state, this will need to be implemented.

 ## [0.0.5] - 2019-04-02

 ### Added

- Fixed a bug where links would not work on firefox [tantayou999](https://github.com/MrBlenny/react-flow-chart/issues/12)

 ## [0.0.4] - 2019-03-24

 ### Added

- Start keeping a changelog
- Remove storybook and lodash from from dist [alexcuz PR5](https://github.com/MrBlenny/react-flow-chart/pull/5)