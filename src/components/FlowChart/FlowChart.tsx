import { map } from 'lodash'
import * as React from 'react'
import { 
  CanvasWrapper, IChart, ILinkDefaultProps, INodeDefaultProps, INodeInnerDefaultProps, IOnCanvasClick, IOnCanvasDrop, 
  IOnDeleteKey, IOnDragCanvas, IOnDragNode, IOnLinkCancel, IOnLinkClick, IOnLinkComplete, IOnLinkMouseEnter, IOnLinkMouseLeave, 
  IOnLinkMove, IOnLinkStart, IOnNodeClick , IOnPortPositionChange, IPortDefaultProps, IPortsDefaultProps,
  LinkDefault, LinkWrapper, NodeDefault, NodeInnerDefault, NodeWrapper, PortDefault, PortsDefault, 
  PortWrapper,
} from '../../'

export interface IFlowChartCallbacks {
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

export interface IFlowChartComponents {
  NodeInner?: React.SFC<INodeInnerDefaultProps>
  Ports?: React.SFC<IPortsDefaultProps>
  Port?: React.SFC<IPortDefaultProps>
  Node?: React.SFC<INodeDefaultProps>
  Link?: React.SFC<ILinkDefaultProps>
}

export interface IFlowChartProps {
  /** 
   * The current chart state
   */
  chart: IChart
  /** 
   * Callbacks for updating chart state.
   * See container/actions.ts for example state mutations
   */
  callbacks: IFlowChartCallbacks
  /**
   * Custom components
   */
  Components?: IFlowChartComponents
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
    } = {},
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