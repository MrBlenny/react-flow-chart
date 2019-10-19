import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Draggable from 'react-draggable'
import ResizeObserver from 'react-resize-observer'
import {
  IConfig, ILink, INode, INodeInnerDefaultProps, IOnDragNode,
  IOnLinkCancel, IOnLinkComplete, IOnLinkMove, IOnLinkStart,
  IOnNodeClick, IOnNodeSizeChange, IOnPortPositionChange,
  IPortDefaultProps, IPortsDefaultProps, IPosition, ISelectedOrHovered, ISize, PortWrapper,
} from '../../'
import { noop } from '../../utils'
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
  onNodeClick: IOnNodeClick
  onNodeSizeChange: IOnNodeSizeChange
}

export const NodeWrapper = ({
  config,
  node,
  onDragNode,
  onNodeClick,
  isSelected,
  Component = NodeDefault,
  onNodeSizeChange,
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
  const [size, setSize] = React.useState<ISize>({ width: 0, height: 0 })

  const compRef = React.useRef<HTMLElement>(null)

  // TODO: probably should add an observer to track node component size changes
  React.useLayoutEffect(() => {
    const el = ReactDOM.findDOMNode(compRef.current) as HTMLInputElement
    if (el) {
      if (size.width !== el.offsetWidth || size.height !== el.offsetHeight) {
        const newSize = { width: el.offsetWidth, height: el.offsetHeight }
        setSize(newSize)
        onNodeSizeChange({ config, nodeId: node.id, size: newSize })
      }
    }
  }, [node, compRef.current, size.width, size.height])

  const children = (
    <>
      <ResizeObserver
        onResize={(rect) => {
          const newSize = { width: rect.width, height: rect.height }
          setSize(newSize)
        }}
      />
      <NodeInner node={node} config={config} />
      <Ports config={config}>
        { Object.keys(node.ports).map((portId) => (
          <PortWrapper
            config={config}
            key={portId}
            offset={offset}
            selected={selected}
            selectedLink={selectedLink}
            hoveredLink={hoveredLink}
            hovered={hovered}
            node={node}
            port={node.ports[portId]}
            Component={Port}
            onPortPositionChange={onPortPositionChange}
            onLinkStart={config.readonly ? noop : onLinkStart}
            onLinkMove={config.readonly ? noop : onLinkMove}
            onLinkComplete={onLinkComplete}
            onLinkCancel={onLinkCancel}
          />
        )) }
      </Ports>
    </>
  )

  return (
    <Draggable
      bounds="parent"
      axis="both"
      position={node.position}
      grid={[1,1]}
      onStart={ (e) => {
        // Stop propagation so the canvas does not move
        e.stopPropagation()
      }}
      onDrag={(event, data) => onDragNode({ config, event, data, id: node.id })}
      disabled={config.readonly}
    >
      <Component
        config={config}
        ref={compRef}
        children={children}
        onClick={(e) => {
          if (!config.readonly) {
            onNodeClick({ config, nodeId: node.id })
            e.stopPropagation()
          }
        }}
        isSelected={isSelected}
        node={node}
      />
    </Draggable>
  )
}
