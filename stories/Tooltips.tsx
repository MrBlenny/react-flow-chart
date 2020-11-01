import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import { FlowChart } from '../src'
import { ITooltipComponentDefaultProps } from '../src/components/TooltipComponent/TooltipComponent.default'
import * as actions from '../src/container/actions'
import { Page } from './components'
import { tooltipChart } from './misc/tooltipChartState'

/**
 * State is external to the <FlowChart> Element
 *
 * You could easily move this state to Redux or similar by creating your own callback actions.
 */

const ExampleToolTipComponent = (props: ITooltipComponentDefaultProps) => {
  return (
        <div className="ExampleToolTipComponent" style={{ width: '300px', textAlign: 'center' }}>
            <h2 style={{ margin: 'auto' }}>{props.tooltip}</h2>
        </div>
  )
}

export class Tooltips extends React.Component {
  public state = cloneDeep(tooltipChart)
  public render () {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) =>
            (...args: any) => this.setState(func(...args))) as typeof actions

    return (
        <div>
            <button onClick={() => stateActions.deleteTooltip({ nodeId: 'global' })}>
                delete global tooltip
            </button>

            <button onClick={() => stateActions.deleteTooltip({ nodeId: chart.selected.id })}>
                delete tooltip for {JSON.stringify(chart.selected.id)}
            </button>

            <button onClick={() => stateActions.toggleTooltip({ nodeId: 'global' })}>
                toggle global tooltip
            </button>
            <button onClick={() => stateActions.toggleTooltip({ nodeId: chart.selected.id })}>
                toggle tooltip for {JSON.stringify(chart.selected.id)}
            </button>
            <Page>
                <FlowChart
                    chart={chart}
                    callbacks={stateActions}
                    Components={{
                      TooltipComponent: ExampleToolTipComponent,
                    }}
                />
            </Page>
        </div>
    )
  }
}
