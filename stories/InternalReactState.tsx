import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/anotherExample'

export const InternalReactState = () => {
  return (
    <Page>
      <FlowChartWithState initialValue={chartSimple} />
    </Page>
  )
}
