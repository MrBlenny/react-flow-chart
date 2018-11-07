import * as React from "react"
import { IOnDragNode, CanvasWrapper, NodeWrapper, IOnDragCanvas, PortWrapper, LinkWrapper, IChart, IUpdatePortPositionState, IOnLinkCancel, IOnLinkStart, IOnLinkMove, IOnLinkComplete } from '../'
import { map } from 'lodash'

export interface IFlowChartWithStateProps {
  initialValue: IChart
}

export class FlowChartWithState extends React.Component<IFlowChartWithStateProps, IChart> {
  state: IChart
  constructor(props: IFlowChartWithStateProps) {
    super(props)
    this.state = props.initialValue
  }
	onDragNode: IOnDragNode = (event, data, id) => this.setState((state) => {
		const nodeState = state.nodes[id]
		if (nodeState) {
			nodeState.position = {
				x: data.x,
				y: data.y
			}
		}
		return state
	})
	onDragCanvas: IOnDragCanvas = (event, data) => this.setState((state) => {
		state.offset.x = data.x
		state.offset.y = data.y
		return state
	})
	onLinkStart: IOnLinkStart = ({ linkId, fromNodeId, fromPortId }) => this.setState(state => {
		state.links[linkId] = {
			id: linkId,
			from: {
				nodeId: fromNodeId,
				portId: fromPortId
			},
			to: {}
		}
		return state
	})
	onLinkMove: IOnLinkMove = ({ linkId, toPosition }) => this.setState(state => {
		state.links[linkId].to.position = toPosition
		return state
	})
	onLinkComplete: IOnLinkComplete = ({ linkId, fromNodeId, toNodeId, toPortId }) => this.setState(state => {
		if (fromNodeId !== toPortId) {
			state.links[linkId].to = {
				nodeId: toNodeId,
				portId: toPortId
			}
		}
		return state
	})
	onLinkCancel: IOnLinkCancel = ({ linkId }) => this.setState(state => {
		delete state.links[linkId]
		return state
	})
	updatePortPositionState: IUpdatePortPositionState = (nodeToUpdate, port, position) => {
		this.setState((state) => {
			state.nodes[nodeToUpdate.id].ports[port.id].position = {
				x: position.x,
				y: position.y
			}
			return state
		})
	}
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