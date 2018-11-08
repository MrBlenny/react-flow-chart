import * as React from "react"
import { FlowChart, IChart } from '../'
import * as actions from './actions'
import { mapValues } from 'lodash'

export interface IFlowChartWithStateProps {
	initialValue: IChart
}

/**
 * Flow Chart With State
 */
export class FlowChartWithState extends React.Component<IFlowChartWithStateProps, IChart> {
  state: IChart
  constructor(props: IFlowChartWithStateProps) {
    super(props)
    this.state = props.initialValue
	}
	render() {
		const stateActions = mapValues(actions, (func: any) => (...args: any) => this.setState(func(...args))) as typeof actions
		return (
			<FlowChart
				chart={ this.state }
				callbacks={ stateActions }
			/>
		)
	}
}