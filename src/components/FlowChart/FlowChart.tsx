import * as React from "react"
import { 
  IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkClick, IOnCanvasClick, IOnDeleteKey, IOnNodeClick, CanvasWrapper, 
  NodeWrapper, IOnDragCanvas, PortWrapper, LinkWrapper, IChart, IUpdatePortPositionState, IOnLinkCancel, IOnLinkStart, 
  IOnLinkMove, IOnLinkComplete, PortsDefault , IOnDragNode, IOnCanvasDrop
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
          { ...linkCallbacks }
        />
      ))}
      { map(nodes, node => (
        <NodeWrapper
          key={ node.id } 
          node={ node }
          selected={ selected }
          { ...nodeCallbacks }
        >
          <PortsDefault side="top">
            { filter(node.ports, ['type', 'input']).map(port => (
              <PortWrapper
                key={ port.id }
                chart={ chart }
                node={ node }
                port={ port }
                { ...portCallbacks }
              />
            )) }
          </PortsDefault>
          { node.type }
          <PortsDefault side="bottom">
            { filter(node.ports, ['type', 'output']).map(port => (
              <PortWrapper
                key={ port.id }
                chart={ chart }
                node={ node }
                port={ port }
                { ...portCallbacks }
              />
            )) }
          </PortsDefault>
        </NodeWrapper>
      ))}
    </CanvasWrapper>
  )
}