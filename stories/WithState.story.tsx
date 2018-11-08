import * as React from 'react'
import { FlowChartWithState } from '../src'
import { storiesOf } from '@storybook/react';
import { chartSimple } from './exampleChartState'

storiesOf("With State", module)
	.add("default", () => {
		return <FlowChartWithState initialValue={ chartSimple } />
	})
	.add("other", () => {
		return <FlowChartWithState initialValue={ chartSimple } />
	})