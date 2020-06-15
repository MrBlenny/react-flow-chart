import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import { FlowChart, INodeInnerDefaultProps } from '../src'
import * as actions from '../src/container/actions'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  outer: {
    padding: '30px'
  },
  input: {
    padding: '10px',
    border: '1px solid cornflowerblue',
    width: '100%'
  }
})

const Outer = ({ children, ...props }: any) => {
  const classes = useStyles()
  return (
    <div className={classes.outer} {...props}>
      {children}
    </div>
  )
}

const Input = ({ ...props }: any) => {
  const classes = useStyles()
  return <input className={classes.input} {...props} />
}

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 */
const NodeInnerCustom = ({ node, config }: INodeInnerDefaultProps) => {
  if (node.type === 'output-only') {
    return (
      <Outer>
        <p>Use Node inner to customise the content of the node</p>
      </Outer>
    )
  } else {
    return (
      <Outer>
        <p>Add custom displays for each node.type</p>
        <p>You may need to stop event propagation so your forms work.</p>
        <br />
        <Input
          type='number'
          placeholder='Some Input'
          onChange={(e: any) => console.log(e)}
          onClick={(e: any) => e.stopPropagation()}
          onMouseUp={(e: any) => e.stopPropagation()}
          onMouseDown={(e: any) => e.stopPropagation()}
        />
      </Outer>
    )
  }
}

export class CustomNodeInnerDemo extends React.Component {
  public state = cloneDeep(chartSimple)
  public render() {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) => (...args: any) =>
      this.setState(func(...args))
    ) as typeof actions

    return (
      <Page>
        <FlowChart
          chart={chart}
          callbacks={stateActions}
          Components={{
            NodeInner: NodeInnerCustom
          }}
        />
      </Page>
    )
  }
}
