import * as React from "react"

import { storiesOf } from "@storybook/react"
import { IStopDraggingNode, Canvas, Node, IStopDraggingCanvas, Port, Link, IChart, IUpdatePortPositionState } from "../src"
import { map } from 'lodash'

class CanvasWithState extends React.Component<any, IChart> {
	state: IChart = {
		offset: {
			x: 0,
			y: 0
		},
		nodes: {
			'node1': {
				id: 'node1',
				type: 'type-1-lets-make-this-a-bit-bigger',
				position: {
					x: 200,
					y: 100
				},
				ports: {
					port1:{
						id: 'port1',
						type: 'input'
					}, 
					port2: {
						id: 'port2',
						type: 'output'
					}
				}
			}, 
			'node2': {
				id: 'node2',
				type: 'type-2-lets-make-this-a-bit-bigger',
				position: {
					x: 200,
					y: 300
				},
				ports: {
					port1:{
						id: 'port1',
						type: 'input'
					}, 
					port2: {
						id: 'port2',
						type: 'output'
					}
				}
			}
		},
		links: {
			link1: {
				id: 'link1',
				from: {
					nodeId: 'node1',
					portId: 'port2',
				},
				to: {
					nodeId: 'node2',
					portId: 'port1',
				}
			}
		}
		
	}
	onStopDraggingNode: IStopDraggingNode = (event, data, id) => {
		this.setState((state) => {
			const nodeState = state.nodes[id]
			if (nodeState) {
				nodeState.position = {
					x: data.x,
					y: data.y
				}
			}
			return state
		})
	}
	onStopDraggingCanvas: IStopDraggingCanvas = (event, data) => {
		this.setState((state) => {
			state.offset.x = data.x
			state.offset.y = data.y
			return state
		})
	}
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
			<Canvas 
				position={ offset } 
				onStopDraggingCanvas={ this.onStopDraggingCanvas }
			>
				{ map(nodes, node => (
					<Node
						id={ node.id }
						key={ node.id } 
						position={ node.position }
						onStopDraggingNode={ this.onStopDraggingNode }
					>
						<Port 
							node={ node }
							port={ node.ports.port1 }
							updatePortPositionState={ this.updatePortPositionState }
							style={{ position: 'absolute', left: '50%', top: '0', transform: 'translate(-50%, -50%)' }} 
						/>
						{ node.type }
						<Port 
							node={ node }
							port={ node.ports.port2 }
							updatePortPositionState={ this.updatePortPositionState }
							style={{ position: 'absolute', left: '50%', bottom: '0', transform: 'translate(-50%, 50%)' }} 
						/>
					</Node>
				))}
				{ map(links, link => (
					<Link 
						key={ link.id } 
						link={ link } 
						chart={ this.state } 
					/>
				))}
			</Canvas>
		)
	}
}

storiesOf("Lib", module)
	.add("default", () => (
		<CanvasWithState />
	))
