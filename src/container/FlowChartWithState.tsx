import { mapValues } from 'lodash'
import * as React from 'react'
import { FlowChart, IChart, IFlowChartComponents } from '../'
import * as actions from './actions'

export interface IFlowChartWithStateProps {
  initialValue: IChart
  Components?: IFlowChartComponents
}

/**
 * Flow Chart With State
 */
export class FlowChartWithState extends React.Component<IFlowChartWithStateProps, IChart> {
  public state: IChart
  constructor (props: IFlowChartWithStateProps) {
    super(props)
    this.state = props.initialValue
  }
  public render () {
    const { Components } = this.props
    const stateActions = mapValues(actions, (func: any) =>
      (...args: any) => this.setState(func(...args))) as typeof actions

    return (
      <FlowChart
        chart={this.state}
        callbacks={stateActions}
        Components={Components}
      />
    )
  }
}
