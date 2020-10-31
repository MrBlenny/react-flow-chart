import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import { FlowChart } from '../src'
import * as actions from '../src/container/actions'
import { Page } from './components'
import { tooltipChart } from './misc/tooltipChartState'

/**
 * State is external to the <FlowChart> Element
 *
 * You could easily move this state to Redux or similar by creating your own callback actions.
 */
export class Tooltips extends React.Component {
  public state = cloneDeep(tooltipChart)
  public render () {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) =>
            (...args: any) => this.setState(func(...args))) as typeof actions

    return (
        <Page>
            <FlowChart
                chart={chart}
                callbacks={stateActions}
            />
        </Page>
    )
  }
}
