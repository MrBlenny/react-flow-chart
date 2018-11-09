import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

storiesOf("With State", module)
	.add("default", () => {
		return (
      <Page>
				<FlowChartWithState initialValue={ chartSimple } />
      </Page>
    )
	})