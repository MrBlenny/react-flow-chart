import * as React from 'react'
import { FlowChartWithState, INodeInnerDefaultProps } from '../src'
import { storiesOf } from '@storybook/react'
import { chartSimple } from './misc/exampleChartState'
import { Page } from './components'
import styled from 'styled-components'


const Outer = styled.div`
  padding: 30px;
  background: #3e3e3e;
  color: white;
  border-radius: 10px;
`

/** 
 * Create the custom component, 
 * Make sure it has the same prop signature
 */
const NodeInnerCustom = ({ node }: INodeInnerDefaultProps) => {
  return (
    <Outer>
      <p>Custom Inner Node of type: <b>{ node.type }</b></p>
    </Outer>
  )
}

storiesOf("Custom Components", module)
	.add("Node Inner", () => {
		return (
      <Page>
        <FlowChartWithState 
          initialValue={ chartSimple }
          Components= { {
            NodeInner: NodeInnerCustom
          }}
        />
      </Page>
    )
	})