import { compact, flatMap, flatten, keyBy, range } from 'lodash'
import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Page } from './components'

const getChart = (rows: number, cols: number) => {
  const xyGrid = flatten(range(0, cols * 300, 300).map((x) => range(0, rows * 150, 150).map((y) => ({ x, y }))))

  return {
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
    selected: {},
    hovered: {},
  }
}

const StressTestWithState = () => {
  const [rows, setRows] = React.useState(10)
  const [cols, setCols] = React.useState(10)

  const chart = React.useMemo(() => getChart(rows, cols), [rows, cols])

  return (
    <div>
      <label>Columns:</label>
      <input type="number" value={cols} onChange={(e) => setCols(parseInt(e.target.value, 10))} />
      <label>Rows:</label>
      <input type="number" value={rows} onChange={(e) => setRows(parseInt(e.target.value, 10))} />
      <Page>
        <FlowChartWithState key={`${cols}:${rows}`} initialValue={chart} />
      </Page>
    </div>
  )
}

export const StressTestDemo = () => {
  return <StressTestWithState />
}
