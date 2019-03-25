import * as React from 'react'
import {
  CanvasInnerDefault, CanvasOuterDefault, CanvasWrapper, ICanvasInnerDefaultProps, ICanvasOuterDefaultProps, IChart, ILinkDefaultProps,
  INodeDefaultProps, INodeInnerDefaultProps, IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas, IOnDragNode,
  IOnLinkCancel, IOnLinkClick, IOnLinkComplete, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkMove,
  IOnLinkStart, IOnNodeClick, IOnPortPositionChange, IPortDefaultProps, IPortsDefaultProps, LinkDefault, LinkWrapper,
  NodeDefault, NodeInnerDefault, NodeWrapper, PortDefault, PortsDefault, PortWrapper,
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
  CanvasOuter?: React.SFC<ICanvasOuterDefaultProps>
  CanvasInner?: React.SFC<ICanvasInnerDefaultProps>
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
      CanvasOuter = CanvasOuterDefault,
      CanvasInner = CanvasInnerDefault,
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
      position={chart.offset}
      ComponentInner={CanvasInner}
      ComponentOuter={CanvasOuter}
      {...canvasCallbacks}
    >
      { Object.keys(links).map((linkId) => (
        <LinkWrapper
          chart={chart}
          key={linkId}
          link={links[linkId]}
          Component={Link}
          {...linkCallbacks}
        />
      ))}
      { Object.keys(nodes).map((nodeId) => (
        <NodeWrapper
          key={nodeId}
          node={nodes[nodeId]}
          selected={selected}
          Component={Node}
          {...nodeCallbacks}
        >
          <NodeInner node={nodes[nodeId]}/>
          <Ports>
            { Object.keys(nodes[nodeId].ports).map((portId) => (
              <PortWrapper
                key={portId}
                chart={chart}
                node={nodes[nodeId]}
                port={nodes[nodeId].ports[portId]}
                Component={Port}
                {...portCallbacks}
              />
            )) }
          </Ports>
        </NodeWrapper>
      ))}
    </CanvasWrapper>
  )
}
