import * as React from 'react'
import {
  CanvasInnerDefault, CanvasOuterDefault, CanvasWrapper, ICanvasInnerDefaultProps, ICanvasOuterDefaultProps, IChart, ILinkDefaultProps,
  INodeDefaultProps, INodeInnerDefaultProps, IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas, IOnDragNode,
  IOnLinkCancel, IOnLinkClick, IOnLinkComplete, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkMove,
  IOnLinkStart, IOnNodeClick, IOnPortPositionChange, IPortDefaultProps, IPortsDefaultProps, LinkDefault, LinkWrapper,
  NodeDefault, NodeInnerDefault, NodeWrapper, PortDefault, PortsDefault, PortWrapper, INode, IPosition, ISelectedOrHovered, ILink
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
  const { links, nodes, selected, hovered } = chart

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
      { Object.keys(links).map((linkId) => {
        const isSelected = selected.type === 'link' && selected.id === linkId
        const isHovered = hovered.type === 'link' && hovered.id === linkId
        const fromNodeId = links[linkId].from.nodeId
        const toNodeId = links[linkId].to.nodeId

        return (
          <LinkWrapper
            key={linkId}
            link={links[linkId]}
            Component={Link}
            isSelected={isSelected}
            isHovered={isHovered}
            fromNode={nodes[fromNodeId]}
            toNode={toNodeId ? nodes[toNodeId] : undefined}
            {...linkCallbacks}
          />
        )
      })}
      { Object.keys(nodes).map((nodeId) => {
        const isSelected = selected.type === 'node' && selected.id === nodeId
        const selectedLink = getSelectedLinkForNode(selected, nodeId, links)
        const hoveredLink = getSelectedLinkForNode(hovered, nodeId, links)

        return (
          <NodeWrapperWithChildren
            key={nodeId}
            Component={Node}
            node={nodes[nodeId]}
            offset={chart.offset}
            isSelected={isSelected}
            selected={selectedLink ? selected : undefined}
            hovered={hoveredLink ? hovered : undefined}
            selectedLink={selectedLink}
            hoveredLink={hoveredLink}
            NodeInner={NodeInner}
            Ports={Ports}
            Port={Port}
            {...nodeCallbacks}
            {...portCallbacks}
          />
        )
      })
    }
    </CanvasWrapper>
  )
}

const getSelectedLinkForNode = (selected: ISelectedOrHovered, nodeId: string, links: IChart['links']) => {
  const link = selected.type === 'link' && selected.id ? links[selected.id] : undefined

  if (link && (link.from.nodeId === nodeId || link.to.nodeId === nodeId)) {
    return link
  }

  return undefined
}

const NodeWrapperWithChildren = React.memo((props: {
  node: INode
  Component: React.SFC<INodeDefaultProps>
  offset: IPosition
  selected: ISelectedOrHovered | undefined
  hovered: ISelectedOrHovered | undefined
  selectedLink: ILink | undefined
  hoveredLink: ILink | undefined
  isSelected: boolean
  NodeInner: React.SFC<INodeInnerDefaultProps>
  Ports: React.SFC<IPortsDefaultProps>
  Port: React.SFC<IPortDefaultProps>
  onPortPositionChange: IOnPortPositionChange
  onLinkStart: IOnLinkStart
  onLinkMove: IOnLinkMove
  onLinkComplete: IOnLinkComplete
  onLinkCancel: IOnLinkCancel;
  onDragNode: IOnDragNode
  onNodeClick: IOnNodeClick
}) => {
  const { node, offset, isSelected, selected, selectedLink, hovered, hoveredLink, NodeInner, Ports, Port, onDragNode, onNodeClick, Component, ...portCallbacks } = props
  return (
  <NodeWrapper
    node={node}
    isSelected={isSelected}
    Component={Component}
    onDragNode={onDragNode}
    onNodeClick={onNodeClick}
  >
    <NodeInner node={node}/>
    <Ports>
      { Object.keys(node.ports).map((portId) => (
        <PortWrapper
          key={portId}
          offset={offset}
          selected={selected}
          selectedLink={selectedLink}
          hoveredLink={hoveredLink}
          hovered={hovered}
          node={node}
          port={node.ports[portId]}
          Component={Port}
          {...portCallbacks}
        />
      )) }
    </Ports>
  </NodeWrapper>
)
})
