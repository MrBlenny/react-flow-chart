import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { FlowChartWithState } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

const useStyles = makeStyles({
  node: {
    position: 'absolute',
    left: '30px',
    top: '30px',
    padding: '20px',
    background: 'white',
    borderRadius: '10px',
    border: '2px solid red'
  }
})

const Note = ({ children }: any) => {
  const classes = useStyles()
  return <div className={classes.node}>{children}</div>
}

export const ConfigValidateLinkDemo = () => {
  return (
    <Page>
      <FlowChartWithState
        initialValue={chartSimple}
        config={{
          validateLink: ({
            linkId,
            fromNodeId,
            fromPortId,
            toNodeId,
            toPortId,
            chart
          }): boolean => {
            // no links between same type nodes
            if (chart.nodes[fromNodeId].type === chart.nodes[toNodeId].type)
              return false
            return true
          }
        }}
      />
      <Note>
        Customise link validation. For example, only allow links between
        different Node Types
      </Note>
    </Page>
  )
}
