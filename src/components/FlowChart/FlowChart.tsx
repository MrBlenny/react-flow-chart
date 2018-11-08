import * as React from "react"
import { 
  IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkClick, IOnCanvasClick, IOnDeleteKey, IOnNodeClick, CanvasWrapper, 
  NodeWrapper, IOnDragCanvas, PortWrapper, LinkWrapper, IChart, IOnPortPositionChange, IOnLinkCancel, IOnLinkStart, 
  IOnLinkMove, IOnLinkComplete, PortsDefault , IOnDragNode, IOnCanvasDrop, NodeInnerDefault,
  NodeDefault, INodeDefaultProps, PortDefault, IPortDefaultProps, LinkDefault, ILinkDefaultProps, INodeInnerDefaultProps, 
  IPortsDefaultProps,
} from '../../'
import { map } from 'lodash'

export interface IFlowChartProps {
  /** 
   * The current chart state
   */
  chart: IChart
  /** 
   * Callbacks for updating chart state.
   * See container/actions.ts for example state mutations
   */
  callbacks: {
    onDragNode: IOnDragNode
    onDragCanvas: IOnDragCanvas
    onCanvasDrop: IOnCanvasDrop
    onLinkStart: IOnLinkStart
    onLinkMove: IOnLinkMove
    onLinkComplete: IOnLinkComplete
    onLinkCancel: IOnLinkCancel
    onPortPositionChange: IOnPortPositionChange
    onLinkMouseEnter: IOnLinkMouseEnter
    onLinkMouseLeave: IOnLinkMouseLeave
    onLinkClick: IOnLinkClick
    onCanvasClick: IOnCanvasClick
    onDeleteKey: IOnDeleteKey
    onNodeClick: IOnNodeClick
  }
  /**
   * Custom components
   */
  Components?: {
    NodeInner?: React.SFC<INodeInnerDefaultProps>
    Ports?: React.SFC<IPortsDefaultProps>
    Port?: React.SFC<IPortDefaultProps>
    Node?: React.SFC<INodeDefaultProps>
    Link?: React.SFC<ILinkDefaultProps>
  }
}

export const FlowChart = (props: IFlowChartProps) => {
  const {
    chart,
    callbacks: {
      onDragNode,
      onDragCanvas,
      onCanvasDrop,
      onLinkStart,
      onLinkMove,
      onLinkComplete,
      onLinkCancel,
      onPortPositionChange,
      onLinkMouseEnter,
      onLinkMouseLeave,
      onLinkClick,
      onCanvasClick,
      onDeleteKey,
      onNodeClick,
    },
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
  const portCallbacks = { onPortPositionChange, onLinkStart, onLinkMove, onLinkComplete, onLinkCancel }

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
          <NodeInner node={ node }/>
          <Ports>
            { map(node.ports, port => (
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