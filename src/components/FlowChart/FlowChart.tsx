import * as React from "react"
import { 
  IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkClick, IOnCanvasClick, IOnDeleteKey, IOnNodeClick, CanvasWrapper, 
  NodeWrapper, IOnDragCanvas, PortWrapper, LinkWrapper, IChart, IUpdatePortPositionState, IOnLinkCancel, IOnLinkStart, 
  IOnLinkMove, IOnLinkComplete, PortsDefault , IOnDragNode, IOnCanvasDrop, NodeInnerDefault,
  NodeDefault, INodeDefaultProps, PortDefault, IPortDefaultProps, LinkDefault, ILinkDefaultProps, INodeInnerDefaultProps, 
  IPortsDefaultProps,
} from '../../'
import { map, filter } from 'lodash'

export interface IFlowChartProps {
  chart: IChart
  onDragNode: IOnDragNode
	onDragCanvas: IOnDragCanvas
	onCanvasDrop: IOnCanvasDrop
	onLinkStart: IOnLinkStart
	onLinkMove: IOnLinkMove
	onLinkComplete: IOnLinkComplete
	onLinkCancel: IOnLinkCancel
	updatePortPositionState: IUpdatePortPositionState
	onLinkMouseEnter: IOnLinkMouseEnter
	onLinkMouseLeave: IOnLinkMouseLeave
	onLinkClick: IOnLinkClick
	onCanvasClick: IOnCanvasClick
	onDeleteKey: IOnDeleteKey
  onNodeClick: IOnNodeClick
  Components?: {
    NodeInner?: (props: INodeInnerDefaultProps) => JSX.Element
    Ports?: (props: IPortsDefaultProps) => JSX.Element
    Port?: (props: IPortDefaultProps) => JSX.Element
    Node?: (props: INodeDefaultProps) => JSX.Element
    Link?: (props: ILinkDefaultProps) => JSX.Element
  }
}

export const FlowChart = (props: IFlowChartProps) => {
  const {
    chart,
    onDragNode,
    onDragCanvas,
    onCanvasDrop,
    onLinkStart,
    onLinkMove,
    onLinkComplete,
    onLinkCancel,
    updatePortPositionState,
    onLinkMouseEnter,
    onLinkMouseLeave,
    onLinkClick,
    onCanvasClick,
    onDeleteKey,
    onNodeClick,
    Components: {
      NodeInner = NodeInnerDefault,
      Ports = PortsDefault,
      Port = PortDefault,
      Node = NodeDefault,
      Link = LinkDefault,
    } = {}
  } = props
  const { links, nodes, selected } = chart

  const canvasCallbacks = { onDragCanvas, onCanvasClick, onDeleteKey, onCanvasDrop }
  const linkCallbacks = { onLinkMouseEnter, onLinkMouseLeave, onLinkClick }
  const nodeCallbacks = { onDragNode, onNodeClick }
  const portCallbacks = { updatePortPositionState, onLinkStart, onLinkMove, onLinkComplete, onLinkCancel }

  return (
    <CanvasWrapper 
      position={ chart.offset } 
      { ...canvasCallbacks }
    >
      { map(links, link => (
        <LinkWrapper 
          chart={ chart }
          key={ link.id } 
          link={ link } 
          Component={ Link }
          { ...linkCallbacks }
        />
      ))}
      { map(nodes, node => (
        <NodeWrapper
          key={ node.id } 
          node={ node }
          selected={ selected }
          Component={ Node }
          { ...nodeCallbacks }
        >
          <Ports side="top">
            { filter(node.ports, ['type', 'input']).map(port => (
              <PortWrapper
                key={ port.id }
                chart={ chart }
                node={ node }
                port={ port }
                Component={ Port }
                { ...portCallbacks }
              />
            )) }
          </Ports>
          <NodeInner node={ node }/>
          <Ports side="bottom">
            { filter(node.ports, ['type', 'output']).map(port => (
              <PortWrapper
                key={ port.id }
                chart={ chart }
                node={ node }
                port={ port }
                Component={ Port }
                { ...portCallbacks }
              />
            )) }
          </Ports>
        </NodeWrapper>
      ))}
    </CanvasWrapper>
  )
}