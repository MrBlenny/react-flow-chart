import * as React from 'react'
import { FlowChart, IChart, IFlowChartComponents } from '../'
import * as actions from './actions'
import mapValues from './utils/mapValues'

export interface IFlowChartWithStateProps {
  initialValue: IChart
  Components?: IFlowChartComponents
  readonly?: boolean
}

/**
 * Flow Chart With State
 */
export class FlowChartWithState extends React.Component<IFlowChartWithStateProps, IChart> {
  public state: IChart
  private stateActions = mapValues(actions, (func: any) =>
      (...args: any) => this.setState(func(...args)))

  constructor (props: IFlowChartWithStateProps) {
    super(props)
    this.state = props.initialValue
  }
  public render () {
    const { Components, readonly } = this.props

    return (
      <FlowChart
        chart={this.state}
        callbacks={this.stateActions}
        Components={Components}
        readonly={readonly}
      />
    )
  }
}
