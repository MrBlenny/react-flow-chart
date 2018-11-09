import { storiesOf } from '@storybook/react'
import { compact, flatMap, flatten, keyBy, range } from 'lodash'
import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Page } from './components'

storiesOf("Stress Test", module)
	.add("default", () => {

    const xyGrid = flatten(range(0, 1500, 300).map(x => range(0, 1000, 150).map(y => ({x, y}))))

    const chart = {
      offset: {
        x: 0,
        y: 0,
      },
      nodes: keyBy(xyGrid.map(({ x, y }) => ({
        id: `node-${x}-${y}`,
        type: 'default',
        position: { x: x + 100, y: y + 100 },
        ports: {
          port1: {
            id: 'port1',
            type: 'top',
          },
          port2: {
            id: 'port2',
            type: 'bottom',
          },
          port3: {
            id: 'port3',
            type: 'right',
          },
          port4: {
            id: 'port4',
            type: 'left',
          },
        },
      })), 'id'),
      links: keyBy(compact(flatMap(xyGrid, ({ x, y }, idx) => {
        const next = xyGrid[idx + 1]
        if (next) {
          return [{
            id: `link-${x}-${y}-a`,
            from: {
              nodeId: `node-${x}-${y}`,
              portId: 'port2',
            },
            to: {
              nodeId: `node-${next.x}-${next.y}`,
              portId: 'port3',
            },
          }, {
            id: `link-${x}-${y}-b`,
            from: {
              nodeId: `node-${x}-${y}`,
              portId: 'port2',
            },
            to: {
              nodeId: `node-${next.x}-${next.y}`,
              portId: 'port4',
            },
          }]
        }
        return undefined
      })), 'id') as any,
      selected:{},
      hovered:{},
    }
		return (
      <Page>
        <FlowChartWithState initialValue={ chart } />
      </Page>
    )
  })
  
