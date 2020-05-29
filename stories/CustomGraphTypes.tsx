import * as React from 'react'
import { FlowChartWithState, IChart } from '../src'
import { Page } from './components'

export const CustomGraphTypes = () => {
  const chart: IChart<number, boolean, string, number> = {
    properties: 5,
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
        properties: false,
        ports: {
          port1: {
            id: 'port1',
            type: 'output',
            properties: 1,
          },
          port2: {
            id: 'port2',
            type: 'output',
            properties: 2,
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
        properties: true,
        ports: {
          port1: {
            id: 'port1',
            type: 'input',
            properties: 4,
          },
          port2: {
            id: 'port2',
            type: 'output',
            properties: 3,
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
        properties: true,
        ports: {
          port1: {
            id: 'port1',
            type: 'input',
            properties: 2,
          },
          port2: {
            id: 'port2',
            type: 'output',
            properties: 1,
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
        properties: false,
        ports: {
          port1: {
            id: 'port1',
            type: 'input',
            properties: 0,
          },
          port2: {
            id: 'port2',
            type: 'output',
            properties: -1,
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
        properties: 'hello world',
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
        properties: 'hi!',
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
        properties: 'this is a string field',
      },
    },
    selected: {},
    hovered: {},
  }

  return (
    <Page>
      <FlowChartWithState
        initialValue={chart}
      />
    </Page>
  )
}
