import * as React from 'react'
import Draggable from 'react-draggable'
import { IOnDragNode } from 'types'
import { INodeDefaultProps, NodeDefault } from './Node.default'

export interface INodeWrapperProps {
  id: string
  position: {
    x: number
    y: number
  },
  onDrag: IOnDragNode
  children: any
  Component?: (props: INodeDefaultProps) => JSX.Element
}

export const NodeWrapper = ({ 
  id, 
  position,
  onDrag,
  children,
  Component = NodeDefault
}: INodeWrapperProps) => {
  return (
    <Draggable
      bounds="parent"
      axis="both"
      position={position}
      grid={[1,1]}
      onStart={ e => {
        // Stop propagation so the canvas does not move
        e.stopPropagation()
      }}
      onDrag={ (e, dragData) => onDrag(e, dragData, id) }
    >
      <Component children={ children } />
    </Draggable>
  )
}