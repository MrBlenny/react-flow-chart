import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Code, Content, Message, Page, Sidebar } from './components'
import { chartSimple } from './misc/exampleReadonlyNodesChartState'

export const NodeReadonly = () => {
  const code = {
    id: 'node1',
    type: 'read-only',
    readonly: true,
  }

  return (
    <Page>
      <Content>
        <FlowChartWithState initialValue={chartSimple} />
      </Content>

      <Sidebar>
        <Message>
          <strong>Read-only nodes</strong> cannot be moved or removed, but can be selected and linked to other nodes.
        </Message>

        <Message>
          You just need to add <strong>readonly</strong> property to node.
        </Message>
        <Code>{JSON.stringify(code, null, 2)}</Code>
      </Sidebar>
    </Page>
  )
}
