import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

export const ReadonlyMode = () => {
  return (
    <Page>
      <FlowChartWithState config={{ readonly: true }} initialValue={chartSimple}/>
    </Page>
  )
}
