import * as React from 'react'
import { FlowChart, IChart, IConfig, IFlowChartComponents } from '../'
import * as actions from './actions'
import mapValues from './utils/mapValues'

export interface IFlowChartWithStateProps {
  initialValue: IChart
  Components?: IFlowChartComponents
  config?: IConfig
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
    const { Components, config } = this.props

    return (
      <FlowChart
        chart={this.state}
        callbacks={this.stateActions}
        Components={Components}
        config={config}
      />
    )
  }
}
