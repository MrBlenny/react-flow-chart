import * as React from 'react'
import styled from 'styled-components'
import { FlowChartWithState } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

const Note = styled.div`
  position: absolute;
  left: 30px;
  top: 30px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  border: 2px solid red;
`

export const ConfigValidateLinkDemo = () => {
  return (
    <Page>
      <FlowChartWithState
        initialValue={chartSimple}
        config={ {
          validateLink: ({ linkId, fromNodeId, fromPortId, toNodeId, toPortId, chart }): boolean => {
            // no links between same type nodes
            if (chart.nodes[fromNodeId].type === chart.nodes[toNodeId].type) return false
            return true
          },
        } }
      />
      <Note>Customise link validation. For example, only allow links between different Node Types</Note>
    </Page>
  )
}
