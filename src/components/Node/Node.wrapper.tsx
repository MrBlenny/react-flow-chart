import * as React from 'react'
import Draggable from 'react-draggable'
import { IOnDragNode, IOnNodeClick, INode, ISelectedOrHovered } from 'types'
import { INodeDefaultProps, NodeDefault } from './Node.default'

export interface INodeWrapperProps {
  node: INode
  onDrag: IOnDragNode
  onNodeClick: IOnNodeClick
  children: any
  selected: ISelectedOrHovered
  Component?: (props: INodeDefaultProps) => JSX.Element
}

export const NodeWrapper = ({ 
  node, 
  onDrag,
  children,
  onNodeClick,
  selected,
  Component = NodeDefault
}: INodeWrapperProps) => {
  return (
    <Draggable
      bounds="parent"
      axis="both"
      position={node.position}
      grid={[1,1]}
      onStart={ e => {
        // Stop propagation so the canvas does not move
        e.stopPropagation()
      }}
      onDrag={ (e, dragData) => onDrag(e, dragData, node.id) }
    >
      <Component 
        children={ children } 
        onClick={ (e) => {
          onNodeClick({ nodeId: node.id })
          e.stopPropagation()
        } }
        isSelected={ selected.type === 'node' && selected.id === node.id }
        node={ node }
      />
    </Draggable>
  )
}