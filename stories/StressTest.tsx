import { compact, flatMap, flatten, keyBy, range } from 'lodash'
import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Page } from './components'
import { IChart, INode } from '../src/types/chart'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  input: {
    padding: '5px 5px 5px 10px',
    width: '50px'
  },
  label: {
    padding: '0 10px',
    fontSize: '14px'
  },
  controls: {
    padding: '10px'
  }
})

const Input = ({ ...props }: any) => {
  const classes = useStyles()
  return <input className={classes.input} {...props} />
}
const Label = ({ children, ...props }: any) => {
  const classes = useStyles()
  return (
    <label className={classes.label} {...props}>
      {children}
    </label>
  )
}
const Controls = ({ children, ...props }: any) => {
  const classes = useStyles()
  return (
    <div className={classes.controls} {...props}>
      {children}
    </div>
  )
}

const getChart = (rows: number, cols: number) => {
  const xyGrid = flatten(
    range(0, cols * 300, 300).map((x) =>
      range(0, rows * 150, 150).map((y) => ({ x, y }))
    )
  )

  const ports: INode['ports'] = {
    port1: {
      id: 'port1',
      type: 'top'
    },
    port2: {
      id: 'port2',
      type: 'bottom'
    },
    port3: {
      id: 'port3',
      type: 'right'
    },
    port4: {
      id: 'port4',
      type: 'left'
    }
  }

  return {
    offset: {
      x: 0,
      y: 0
    },
    scale: 1,
    nodes: keyBy(
      xyGrid.map(({ x, y }) => ({
        id: `node-${x}-${y}`,
        type: 'default',
        position: { x: x + 100, y: y + 100 },
        ports: ports
      })),
      'id'
    ),
    links: keyBy(
      compact(
        flatMap(xyGrid, ({ x, y }, idx) => {
          const next = xyGrid[idx + 1]
          if (next) {
            return [
              {
                id: `link-${x}-${y}-a`,
                from: {
                  nodeId: `node-${x}-${y}`,
                  portId: 'port2'
                },
                to: {
                  nodeId: `node-${next.x}-${next.y}`,
                  portId: 'port3'
                }
              },
              {
                id: `link-${x}-${y}-b`,
                from: {
                  nodeId: `node-${x}-${y}`,
                  portId: 'port2'
                },
                to: {
                  nodeId: `node-${next.x}-${next.y}`,
                  portId: 'port4'
                }
              }
            ]
          }
          return undefined
        })
      ),
      'id'
    ) as any,
    selected: {},
    hovered: {}
  }
}

const StressTestWithState = () => {
  const [rows, setRows] = React.useState(100)
  const [cols, setCols] = React.useState(100)

  const chart: IChart = React.useMemo(() => getChart(rows, cols), [rows, cols])

  return (
    <>
      <Controls>
        <Label>Columns:</Label>
        <Input
          type='number'
          value={cols}
          onChange={(e: any) => setCols(parseInt(e.target.value, 10))}
        />
        <Label>Rows:</Label>
        <Input
          type='number'
          value={rows}
          onChange={(e: any) => setRows(parseInt(e.target.value, 10))}
        />
      </Controls>
      <Page>
        <FlowChartWithState key={`${cols}:${rows}`} initialValue={chart} />
      </Page>
    </>
  )
}

export const StressTestDemo = () => {
  return <StressTestWithState />
}
