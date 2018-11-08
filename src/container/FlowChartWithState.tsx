import * as React from "react"
import { 
	FlowChart, IOnDragNode, IOnDragCanvas, IChart, IUpdatePortPositionState, IOnLinkCancel, IOnLinkStart, IOnLinkMove, 
	IOnLinkComplete, IOnLinkMouseLeave, IOnLinkClick, IOnCanvasClick, IOnDeleteKey, IOnNodeClick, IOnLinkMouseEnter, IOnCanvasDrop
} from '../'
import * as actions from './actions'

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
	onDragNode: IOnDragNode = (...args) => this.setState(actions.onDragNode(...args) as any)
	onDragCanvas: IOnDragCanvas = (...args) => this.setState(actions.onDragCanvas(...args) as any)
	onLinkStart: IOnLinkStart = (...args) => this.setState(actions.onLinkStart(...args) as any)
	onLinkMove: IOnLinkMove = (...args) => this.setState(actions.onLinkMove(...args) as any)
	onLinkComplete: IOnLinkComplete = (...args) => this.setState(actions.onLinkComplete(...args) as any)
	onLinkCancel: IOnLinkCancel = (...args) => this.setState(actions.onLinkCancel(...args) as any)
	updatePortPositionState: IUpdatePortPositionState = (...args) => this.setState(actions.updatePortPositionState(...args) as any)
	onLinkMouseEnter: IOnLinkMouseEnter = (...args) => this.setState(actions.onLinkMouseEnter(...args) as any)
	onLinkMouseLeave: IOnLinkMouseLeave = (...args) => this.setState(actions.onLinkMouseLeave(...args) as any)
	onLinkClick: IOnLinkClick = (...args) => this.setState(actions.onLinkClick(...args) as any)
	onCanvasClick: IOnCanvasClick = (...args) => this.setState(actions.onCanvasClick(...args) as any)
	onDeleteKey: IOnDeleteKey = (...args) => this.setState(actions.onDeleteKey(...args) as any)
	onNodeClick: IOnNodeClick = (...args) => this.setState(actions.onNodeClick(...args) as any)
	onCanvasDrop: IOnCanvasDrop = (...args) => this.setState(actions.onCanvasDrop(...args) as any)
	render() {
		return (
			<FlowChart
				chart={ this.state }
				onDragNode={ this.onDragNode }
				onDragCanvas={ this.onDragCanvas }
				onLinkStart={ this.onLinkStart }
				onLinkMove={ this.onLinkMove }
				onLinkComplete={ this.onLinkComplete }
				onLinkCancel={ this.onLinkCancel }
				updatePortPositionState={ this.updatePortPositionState }
				onLinkMouseEnter={ this.onLinkMouseEnter }
				onLinkMouseLeave={ this.onLinkMouseLeave }
				onLinkClick={ this.onLinkClick }
				onCanvasClick={ this.onCanvasClick }
				onDeleteKey={ this.onDeleteKey }
				onNodeClick={ this.onNodeClick }
				onCanvasDrop={ this.onCanvasDrop }
			/>
		)
	}
}