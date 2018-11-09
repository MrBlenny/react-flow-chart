import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Content, Page, Sidebar, SidebarItem } from './components'
import { chartSimple } from './misc/exampleChartState'

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