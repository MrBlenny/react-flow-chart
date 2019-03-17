# React Flow Chart

[![CircleCI](https://circleci.com/gh/MrBlenny/react-flow-chart.svg?style=svg)](https://circleci.com/gh/MrBlenny/react-flow-chart)

- [X] Dragabble Nodes and Canvas
- [x] Create curved links between ports
- [x] Custom components for Canvas, Links, Ports, Nodes
- [X] React state container
- [X] Update state on Select/Hover nodes, ports and links
- [x] Base functionality complete
- [X] Stable NPM version
- [ ] Scroll/Pinch canvas to zoom
- [ ] Ctrl+z/Ctrl+y history
- [ ] Read-only mode
- [ ] Redux state container
- [ ] Arrow heads on links
- [ ] Docs

### [Storybook Demo](https://mrblenny.github.io/react-flow-chart/index.html?selectedKind=With%20Sidebar&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook-addon-viewport%2Faddon-panel)

### [CodeSandbox Demo](https://codesandbox.io/s/4w46wv71o7)

This project aims to build a highly customisable, declarative flow chart library. Critically, your control the state. Pick from Redux, MobX, React or any other state managment library - simply pass in the current state and hook up the callbacks.

For example:

![demo](./images/demo.gif)

## Data Stucture

The flow chart is designed as a collection of Nodes, Ports and Links. You can specify your own custom properties, making this format quite flexible. See [types/chart.ts](./src/types/chart.ts). Note, nodes, ports and links should have a unique id.

#### Example

```ts

export const chart: IChart = {
  offset: {
    x: 0,
    y: 0,
  },
  nodes: {
    node1: {
      id: 'node1',
      type: 'output-only',
      position: {
        x: 300,
        y: 100,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'output',
          properties: {
            value: 'yes',
          },
        },
        port2: {
          id: 'port2',
          type: 'output',
          properties: {
            value: 'no',
          },
        },
      },
    },
    node2: {
      id: 'node2',
      type: 'input-output',
      position: {
        x: 300,
        y: 300,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
        },
        port2: {
          id: 'port2',
          type: 'output',
        },
      },
    },
  },
  links: {
    link1: {
      id: 'link1',
      from: {
        nodeId: 'node1',
        portId: 'port2',
      },
      to: {
        nodeId: 'node2',
        portId: 'port1',
      },
    },
  },
  selected: {},
  hovered: {},
}

```

This will produce a simple 2 noded chart which looks like:

![Demo](./images/demo.png)

## Basic Usage

```bash
npm i @mrblenny/react-flow-chart
```

Most components/types are available as a root level export. Check the storybook demo for more examples.

```tsx
import { FlowChartWithState } from "@mrblenny/react-flow-chart";
import { chartSimple } from "@mrblenny/react-flow-chart/stories/misc/exampleChartState"; // Demo chart state

const Example = (
  <FlowChartWithState initialValue={chartSimple} />
);
```

### With Internal State
[stories/InternalReactState.tsx](./stories/InternalReactState.tsx)

### With External State
[stories/ExternalReactState.tsx](./stories/ExternalReactState.tsx)

### Other Demos
[stories/ExternalReactState.tsx](./stories)


## Contributing

If you're interested in helping out, let me know. 

In particular, would be great to get a hand with docs and redux / mobx integrations.


## Development

```bash
npm install
npm run start:storybook
```
