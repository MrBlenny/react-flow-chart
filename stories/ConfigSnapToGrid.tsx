import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

export const ConfigSnapToGridDemo = () => {
  return (
    <Page>
      <FlowChartWithState
        initialValue={chartSimple}
        config={{
          snapToGrid: true,
        }}
      />
    </Page>
  )
}
