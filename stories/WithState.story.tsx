import * as React from 'react'
import { FlowChartWithState } from '../src'
import { storiesOf } from '@storybook/react'
import { chartSimple } from './exampleChartState'
import { Page } from './components'

storiesOf("With State", module)
	.add("default", () => {
		return (
      <Page>
				<FlowChartWithState initialValue={ chartSimple } />
      </Page>
    )
	})