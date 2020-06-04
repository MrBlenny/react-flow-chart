import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Content, Message, Page, Sidebar } from './components'
import { chartSimple } from './misc/exampleReadonlyNodesChartState'

export const NodeReadonly = () => {
  return (
    <Page>
      <Content>
        <FlowChartWithState initialValue={chartSimple} />
      </Content>

      <Sidebar>
        <Message>
          <strong>Read-only nodes</strong> cannot be moved or removed, but can be selected and linked to other nodes.
        </Message>
      </Sidebar>
    </Page>
  )
}
