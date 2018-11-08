import * as React from "react"
import { IOnDragNode, CanvasWrapper, NodeWrapper, IOnDragCanvas, PortWrapper, LinkWrapper, IChart, IUpdatePortPositionState, IOnLinkCancel, IOnLinkStart, IOnLinkMove, IOnLinkComplete, PortsDefault } from '../'
import { map, filter } from 'lodash'
import * as actions from './actions'
import { IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkClick, IOnCanvasClick, IOnDeleteKey } from "types";

export interface IFlowChartWithStateProps {
  initialValue: IChart
}

export class FlowChartWithState extends React.Component<IFlowChartWithStateProps, IChart> {
  state: IChart
  constructor(props: IFlowChartWithStateProps) {
    super(props)
    this.state = props.initialValue
	}
	// Bind the demo actions to this.setState
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
	render() {
		const { nodes, offset, links } = this.state
		return (
			<CanvasWrapper 
				position={ offset } 
				onDrag={ this.onDragCanvas }
				onCanvasClick={ this.onCanvasClick }
				onDeleteKey={ this.onDeleteKey }
			>
				{ map(links, link => (
					<LinkWrapper 
						key={ link.id } 
						link={ link } 
						chart={ this.state }
						onLinkMouseEnter={ this.onLinkMouseEnter }
						onLinkMouseLeave={ this.onLinkMouseLeave }
						onLinkClick={ this.onLinkClick }
					/>
				))}
				{ map(nodes, node => (
					<NodeWrapper
						id={ node.id }
						key={ node.id } 
						position={ node.position }
						onDrag={ this.onDragNode }
					>
						<PortsDefault side="top">
							{ filter(node.ports, ['type', 'input']).map(port => (
								<PortWrapper
									key={ port.id }
									node={ node }
									port={ port }
									updatePortPositionState={ this.updatePortPositionState }
									onLinkStart={ this.onLinkStart }
									onLinkMove={ this.onLinkMove }
									onLinkComplete={ this.onLinkComplete }
									onLinkCancel={ this.onLinkCancel }
								/>
							)) }
						</PortsDefault>
						{ node.type }
						<PortsDefault side="bottom">
							{ filter(node.ports, ['type', 'output']).map(port => (
								<PortWrapper
									key={ port.id }
									node={ node }
									port={ port }
									updatePortPositionState={ this.updatePortPositionState }
									onLinkStart={ this.onLinkStart }
									onLinkMove={ this.onLinkMove }
									onLinkComplete={ this.onLinkComplete }
									onLinkCancel={ this.onLinkCancel }
								/>
							)) }
						</PortsDefault>
					</NodeWrapper>
				))}
			</CanvasWrapper>
		)
	}
}