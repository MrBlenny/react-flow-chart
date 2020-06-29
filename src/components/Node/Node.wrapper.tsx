import * as React from 'react'
import Draggable, { DraggableData } from 'react-draggable'
import ResizeObserver from 'react-resize-observer'
import {
  IConfig,
  ILink,
  INode,
  INodeInnerDefaultProps,
  IOnDragNode,
  IOnDragNodeStop,
  IOnLinkCancel,
  IOnLinkComplete,
  IOnLinkMove,
  IOnLinkStart,
  IOnNodeClick,
  IOnNodeDoubleClick,
  IOnNodeMouseEnter,
  IOnNodeMouseLeave,
  IOnNodeSizeChange,
  IOnPortPositionChange,
  IPortDefaultProps,
  IPortsDefaultProps,
  IPosition,
  ISelectedOrHovered,
  ISize,
  PortWrapper,
} from '../../'
import { noop } from '../../utils'
import CanvasContext from '../Canvas/CanvasContext'
import { INodeDefaultProps, NodeDefault } from './Node.default'

export interface INodeWrapperProps {
  config: IConfig
  node: INode
  Component: React.FunctionComponent<INodeDefaultProps>
  offset: IPosition
  selected: ISelectedOrHovered | undefined
  hovered: ISelectedOrHovered | undefined
  selectedLink: ILink | undefined
  hoveredLink: ILink | undefined
  isSelected: boolean
  NodeInner: React.FunctionComponent<INodeInnerDefaultProps>
  Ports: React.FunctionComponent<IPortsDefaultProps>
  Port: React.FunctionComponent<IPortDefaultProps>
  onPortPositionChange: IOnPortPositionChange
  onLinkStart: IOnLinkStart
  onLinkMove: IOnLinkMove
  onLinkComplete: IOnLinkComplete
  onLinkCancel: IOnLinkCancel
  onDragNode: IOnDragNode
  onDragNodeStop: IOnDragNodeStop
  onNodeClick: IOnNodeClick
  onNodeDoubleClick: IOnNodeDoubleClick
  onNodeSizeChange: IOnNodeSizeChange
  onNodeMouseEnter: IOnNodeMouseEnter
  onNodeMouseLeave: IOnNodeMouseLeave
}

export const NodeWrapper = ({
  config,
  node,
  onDragNode,
  onDragNodeStop,
  onNodeClick,
  onNodeDoubleClick,
  isSelected,
  Component = NodeDefault,
  onNodeSizeChange,
  onNodeMouseEnter,
  onNodeMouseLeave,
  NodeInner,
  Ports,
  Port,
  offset,
  selected,
  selectedLink,
  hovered,
  hoveredLink,
  onPortPositionChange,
  onLinkStart,
  onLinkMove,
  onLinkComplete,
  onLinkCancel,
}: INodeWrapperProps) => {
  const { zoomScale } = React.useContext(CanvasContext)
  const [size, setSize] = React.useState<ISize>({ width: 0, height: 0 })
  const [portsSize, setPortsSize] = React.useState<ISize>({ width: 0, height: 0 })

  const isDragging = React.useRef(false)

  const readonly = config.readonly || node.readonly || false

  const onStart = React.useCallback((e: MouseEvent) => {
    // Stop propagation so the canvas does not move
    e.stopPropagation()
    isDragging.current = false
  }, [])

  const onDrag = React.useCallback(
    (event: MouseEvent, data: DraggableData) => {
      isDragging.current = true
      onDragNode({ config, event, data, id: node.id })
    },
    [onDragNode, config, node.id],
  )

  const onStop = React.useCallback(
    (event: MouseEvent, data: DraggableData) => {
      onDragNodeStop({ config, event, data, id: node.id })
    },
    [onDragNodeStop, config, node.id],
  )

  const onClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (!config.readonly || config.selectable) {
        e.stopPropagation()
        if (!isDragging.current) {
          onNodeClick({ config, nodeId: node.id })
        }
      }
    },
    [config, node.id],
  )

  const onDoubleClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (!config.readonly) {
        e.stopPropagation()
        if (!isDragging.current) {
          onNodeDoubleClick({ config, nodeId: node.id })
        }
      }
    },
    [config, node.id],
  )

  const onMouseEnter = React.useCallback(() => {
    onNodeMouseEnter({ config, nodeId: node.id })
  }, [config, node.id])

  const onMouseLeave = React.useCallback(() => {
    onNodeMouseLeave({ config, nodeId: node.id })
  }, [config, node.id])

  const compRef = React.useRef<HTMLElement>(null)

  // TODO: probably should add an observer to track node component size changes
  React.useLayoutEffect(() => {
    const el = compRef.current as HTMLInputElement
    if (el) {
      if ((node.size && node.size.width) !== el.offsetWidth || (node.size && node.size.height) !== el.offsetHeight) {
        const newSize = { width: el.offsetWidth, height: el.offsetHeight }
        setSize(newSize)
        onNodeSizeChange({ config, nodeId: node.id, size: newSize })
      }
    }
  }, [node, compRef.current, size.width, size.height])

  const children = (
    <div style={{ minWidth: portsSize.width, minHeight: portsSize.height }}>
      <ResizeObserver
        onResize={(rect) => {
          const newSize = { width: rect.width, height: rect.height }
          setSize(newSize)
        }}
      />
      <NodeInner node={node} config={config} />

      <Ports node={node} config={config} onResize={setPortsSize}>
        {Object.keys(node.ports).map((portId) => (
          <PortWrapper
            config={config}
            key={portId}
            offset={offset}
            selected={selected}
            selectedLink={selectedLink}
            hoveredLink={hoveredLink}
            hovered={hovered}
            node={node}
            portsSize={portsSize}
            port={node.ports[portId]}
            Component={Port}
            onPortPositionChange={onPortPositionChange}
            onLinkStart={config.readonly ? noop : onLinkStart}
            onLinkMove={config.readonly ? noop : onLinkMove}
            onLinkComplete={onLinkComplete}
            onLinkCancel={onLinkCancel}
          />
        ))}
      </Ports>
    </div>
  )

  return (
    <Draggable
      bounds="parent"
      axis="both"
      position={node.position}
      grid={[1,1]}
      scale={zoomScale}
      onStart={onStart}
      onDrag={onDrag}
      onStop={onStop}
      disabled={readonly}
      nodeRef={compRef}
    >
      <Component
        config={config}
        ref={compRef}
        children={children}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        isSelected={isSelected}
        node={node}
      />
    </Draggable>
  )
}
