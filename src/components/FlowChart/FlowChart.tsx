import { map } from 'lodash'
import * as React from 'react'
import {
  CanvasInnerDefault, CanvasOuterDefault, CanvasWrapper, ICanvasInnerDefaultProps, ICanvasOuterDefaultProps, IChart, ILinkDefaultProps,
  INodeDefaultProps, INodeInnerDefaultProps, IOnCanvasClick, IOnCanvasDrop, IOnDragCanvas, IOnDragNode, IOnLinkCancel,
  IOnLinkClick, IOnLinkComplete, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkMove, IOnLinkStart,
  IOnNodeClick, IOnPortPositionChange, IOnRemoveKey, IPortDefaultProps, IPortsDefaultProps, LinkDefault, LinkWrapper,
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
  onRemoveKey: IOnRemoveKey
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
  /**
   * The key codes that will trigger a node or link to be removed
   * Defaults: 46 (delete) & 8 (backspace)
   */
  removeKeyCodes?: number[]
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
      onRemoveKey,
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
    removeKeyCodes = [46, 8],
  } = props
  const { links, nodes, selected } = chart

  const canvasCallbacks = { onDragCanvas, onCanvasClick, onRemoveKey, onCanvasDrop }
  const linkCallbacks = { onLinkMouseEnter, onLinkMouseLeave, onLinkClick }
  const nodeCallbacks = { onDragNode, onNodeClick }
  const portCallbacks = { onPortPositionChange, onLinkStart, onLinkMove, onLinkComplete, onLinkCancel }

  return (
    <CanvasWrapper
      position={chart.offset}
      removeKeyCodes={removeKeyCodes}
      ComponentInner={CanvasInner}
      ComponentOuter={CanvasOuter}
      {...canvasCallbacks}
    >
      { map(links, (link) => (
        <LinkWrapper
          chart={chart}
          key={link.id}
          link={link}
          Component={Link}
          {...linkCallbacks}
        />
      ))}
      { map(nodes, (node) => (
        <NodeWrapper
          key={node.id}
          node={node}
          selected={selected}
          Component={Node}
          {...nodeCallbacks}
        >
          <NodeInner node={node}/>
          <Ports>
            { map(node.ports, (port) => (
              <PortWrapper
                key={port.id}
                chart={chart}
                node={node}
                port={port}
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
