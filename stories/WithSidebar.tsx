import * as React from 'react'
import { FlowChartWithState } from '../src'
import { storiesOf } from '@storybook/react'
import { chartSimple } from './misc/exampleChartState'
import { Page, Content, Sidebar, SidebarItem } from './components'

storiesOf("With Sidebar", module)
	.add("default", () => {
		return (
      <Page>
        <Content>
          <FlowChartWithState initialValue={ chartSimple } />
        </Content>
        <Sidebar>
          <SidebarItem type="example-1" />
          <SidebarItem type="example-2" />
        </Sidebar>
      </Page>
    )
	})