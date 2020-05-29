import { IChart } from '../../src'

export const chartSimple: IChart = {
  offset: {
    x: 0,
    y: 0,
  },
  scale: 1,
  nodes: {
    node1: {
      id: 'node1',
      type: 'output-only',
      position: {
        x: 300,
        y: 100,
      },
      properties: {
        test: 0,
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
      properties: {
        test: 1,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
          properties: {
            hello: 'test',
          },
        },
        port2: {
          id: 'port2',
          type: 'output',
          properties: {
            hello: 'test',
          },
        },
      },
    },
    node3: {
      id: 'node3',
      type: 'input-output',
      position: {
        x: 100,
        y: 600,
      },
      properties: {
        test: 2,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
          properties: {
            hello: 'test',
          },
        },
        port2: {
          id: 'port2',
          type: 'output',
          properties: {
            hello: 'test',
          },
        },
      },
    },
    node4: {
      id: 'node4',
      type: 'input-output',
      position: {
        x: 500,
        y: 600,
      },
      properties: {
        test: 3,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
          properties: {
            hello: 'test',
          },
        },
        port2: {
          id: 'port2',
          type: 'output',
          properties: {
            hello: 'test',
          },
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
      properties: {
        label: 'example link label',
      },
    },
    link2: {
      id: 'link2',
      from: {
        nodeId: 'node2',
        portId: 'port2',
      },
      to: {
        nodeId: 'node3',
        portId: 'port1',
      },
      properties: {
        label: 'another example link label',
      },
    },
    link3: {
      id: 'link3',
      from: {
        nodeId: 'node2',
        portId: 'port2',
      },
      to: {
        nodeId: 'node4',
        portId: 'port1',
      },
      properties: {
        label: 'example link label',
      },
    },
  },
  selected: {},
  hovered: {},
}
