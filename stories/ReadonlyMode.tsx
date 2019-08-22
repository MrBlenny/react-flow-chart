import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

export const ReadonlyMode = () => {
  return (
    <Page>
      <FlowChartWithState readonly initialValue={chartSimple}/>
    </Page>
  )
}
