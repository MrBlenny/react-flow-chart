import { IChart } from '../../src'

export const chartSimple: IChart = {
  offset: {
    x: 0,
    y: 0,
  },
  nodes: {
    node1: {
      id: 'node1',
      type: 'output-only',
      position: {
        x: 200,
        y: 100,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'output',
        },
        port2: {
          id: 'port2',
          type: 'output',
        },
      },
    },
    node2: {
      id: 'node2',
      type: 'input-output',
      position: {
        x: 200,
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
