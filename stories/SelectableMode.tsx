import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Code, Content, Message, Page, Sidebar } from './components'
import { chartSimple } from './misc/exampleChartState'

export const SelectableMode = () => {
  return (
    <Page>
      <Content>
        <FlowChartWithState config={{ readonly: true, selectable: true }} initialValue={chartSimple} />
      </Content>

      <Sidebar>
        <Message>
          <strong>Selectable mode</strong> allows you to select a node or link when the chart is in read only mode.
        </Message>

        <Message>
          You just need to pass <strong>selectable</strong> property to chart config.
        </Message>
        <Code>config = {JSON.stringify({ readonly: true, selectable: true }, null, 2)}</Code>
      </Sidebar>
    </Page>
  )
}
