import * as React from "react"
import { IOnDragNode, CanvasWrapper, NodeWrapper, IOnDragCanvas, PortWrapper, LinkWrapper, IChart, IUpdatePortPositionState, IOnLinkCancel, IOnLinkStart, IOnLinkMove, IOnLinkComplete } from '../'
import { map } from 'lodash'
import * as actions from './actions'

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
	render() {
		const { nodes, offset, links } = this.state
		return (
			<CanvasWrapper 
				position={ offset } 
				onDrag={ this.onDragCanvas }
			>
				{ map(links, link => (
					<LinkWrapper 
						key={ link.id } 
						link={ link } 
						chart={ this.state } 
					/>
				))}
				{ map(nodes, node => (
					<NodeWrapper
						id={ node.id }
						key={ node.id } 
						position={ node.position }
						onDrag={ this.onDragNode }
					>
						<PortWrapper 
							node={ node }
							port={ node.ports.port1 }
							style={{ position: 'absolute', left: '50%', top: '-5px', marginLeft: '-5px' }}
							updatePortPositionState={ this.updatePortPositionState }
							onLinkStart={ this.onLinkStart }
							onLinkMove={ this.onLinkMove }
							onLinkComplete={ this.onLinkComplete }
							onLinkCancel={ this.onLinkCancel }
						/>
						{ node.type }
						<PortWrapper 
							node={ node }
							port={ node.ports.port2 }
							style={{ position: 'absolute', left: '50%', bottom: '-5px', marginLeft: '-5px' }}
							updatePortPositionState={ this.updatePortPositionState }
							onLinkStart={ this.onLinkStart }
							onLinkMove={ this.onLinkMove }
							onLinkComplete={ this.onLinkComplete }
							onLinkCancel={ this.onLinkCancel }
						/>
					</NodeWrapper>
				))}
			</CanvasWrapper>
		)
	}
}