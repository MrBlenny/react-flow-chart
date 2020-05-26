import * as React from 'react'
import {
  CanvasInnerDefault, CanvasOuterDefault, CanvasWrapper, ICanvasInnerDefaultProps, ICanvasOuterDefaultProps, IChart, IConfig, ILink,
  ILinkDefaultProps, INodeDefaultProps, INodeInnerDefaultProps, IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas,
  IOnDragCanvasStop, IOnDragNode, IOnDragNodeStop, IOnLinkCancel, IOnLinkClick, IOnLinkComplete, IOnLinkMouseEnter,
  IOnLinkMouseLeave, IOnLinkMove, IOnLinkStart, IOnNodeClick, IOnNodeDoubleClick, IOnNodeMouseEnter, IOnNodeMouseLeave, IOnNodeSizeChange,
  IOnPortPositionChange, IOnZoomCanvas, IPortDefaultProps, IPortsDefaultProps, ISelectedOrHovered, LinkDefault, LinkWrapper, NodeDefault, NodeInnerDefault, NodeWrapper, PortDefault, PortsDefault,
} from '../../'
import { getMatrix } from './utils/grid'

export interface IFlowChartCallbacks {
  onDragNode: IOnDragNode
  onDragNodeStop: IOnDragNodeStop
  onDragCanvas: IOnDragCanvas
  onCanvasDrop: IOnCanvasDrop
  onDragCanvasStop: IOnDragCanvasStop
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
  onNodeDoubleClick: IOnNodeDoubleClick
  onNodeMouseEnter: IOnNodeMouseEnter
  onNodeMouseLeave: IOnNodeMouseLeave
  onNodeSizeChange: IOnNodeSizeChange
  onZoomCanvas: IOnZoomCanvas
}

export interface IFlowChartComponents {
  CanvasOuter?: React.FunctionComponent<ICanvasOuterDefaultProps>
  CanvasInner?: React.FunctionComponent<ICanvasInnerDefaultProps>
  NodeInner?: React.FunctionComponent<INodeInnerDefaultProps>
  Ports?: React.FunctionComponent<IPortsDefaultProps>
  Port?: React.FunctionComponent<IPortDefaultProps>
  Node?: React.FunctionComponent<INodeDefaultProps>
  Link?: React.FunctionComponent<ILinkDefaultProps>
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
   * Other config. This will be passed into all components and actions.
   * Don't store state here as it may trigger re-renders
   */
  config?: IConfig
}

export const FlowChart = (props: IFlowChartProps) => {
  const [ canvasSize, setCanvasSize ] = React.useState<{ width: number, height: number }>({ width: 0, height: 0 })

  const {
    chart,
    callbacks: {
      onDragNode,
      onDragNodeStop,
      onDragCanvas,
      onDragCanvasStop,
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
      onNodeDoubleClick,
      onNodeMouseEnter,
      onNodeMouseLeave,
      onNodeSizeChange,
      onZoomCanvas,
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
    config = {},
  } = props
  const { links, nodes, selected, hovered, offset, scale } = chart

  const canvasCallbacks = { onDragCanvas, onDragCanvasStop, onCanvasClick, onDeleteKey, onCanvasDrop, onZoomCanvas }
  const linkCallbacks = { onLinkMouseEnter, onLinkMouseLeave, onLinkClick }
  const nodeCallbacks = { onDragNode, onNodeClick, onDragNodeStop, onNodeMouseEnter, onNodeMouseLeave, onNodeSizeChange,onNodeDoubleClick }
  const portCallbacks = { onPortPositionChange, onLinkStart, onLinkMove, onLinkComplete, onLinkCancel }

  const nodesInView = Object.keys(nodes).filter((nodeId) => {
    const defaultNodeSize = { width: 500, height: 500 }

    const { x, y } = nodes[nodeId].position
    const size = nodes[nodeId].size || defaultNodeSize

    const isTooFarLeft = scale * x + offset.x + scale * size.width < 0
    const isTooFarRight = scale * x + offset.x > canvasSize.width
    const isTooFarUp = scale * y + offset.y + scale * size.height < 0
    const isTooFarDown = scale * y + offset.y > canvasSize.height
    return !(isTooFarLeft || isTooFarRight || isTooFarUp || isTooFarDown)
  })

  const matrix = config.smartRouting ? getMatrix(chart.offset, Object.values(nodesInView.map((nodeId) => nodes[nodeId]))) : undefined

  const linksInView = Object.keys(links).filter((linkId) => {
    const from = links[linkId].from
    const to = links[linkId].to

    return (
      !to.nodeId ||
      nodesInView.indexOf(from.nodeId) !== -1 ||
      nodesInView.indexOf(to.nodeId) !== -1
    )
  })

  return (
    <CanvasWrapper
      config={config}
      position={chart.offset}
      scale={chart.scale}
      ComponentInner={CanvasInner}
      ComponentOuter={CanvasOuter}
      onSizeChange={(width, height) => setCanvasSize({ width, height })}
      {...canvasCallbacks}
    >
      { linksInView.map((linkId) => {
        const isSelected = !config.readonly && selected.type === 'link' && selected.id === linkId
        const isHovered = !config.readonly && hovered.type === 'link' && hovered.id === linkId
        const fromNodeId = links[linkId].from.nodeId
        const toNodeId = links[linkId].to.nodeId

        return (
          <LinkWrapper
            config={config}
            key={linkId}
            link={links[linkId]}
            Component={Link}
            isSelected={isSelected}
            isHovered={isHovered}
            fromNode={nodes[fromNodeId]}
            toNode={toNodeId ? nodes[toNodeId] : undefined}
            matrix={matrix}
            {...linkCallbacks}
          />
        )
      })}
      { nodesInView.map((nodeId) => {
        const isSelected = selected.type === 'node' && selected.id === nodeId
        const selectedLink = getSelectedLinkForNode(selected, nodeId, links)
        const hoveredLink = getSelectedLinkForNode(hovered, nodeId, links)

        return (
          <NodeWrapper
            config={config}
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

const getSelectedLinkForNode = (
  selected: ISelectedOrHovered,
  nodeId: string,
  links: IChart['links'],
): ILink | undefined => {
  const link = selected.type === 'link' && selected.id ? links[selected.id] : undefined

  if (link && (link.from.nodeId === nodeId || link.to.nodeId === nodeId)) {
    return link
  }

  return undefined
}
