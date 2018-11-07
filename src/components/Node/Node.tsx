import * as React from 'react'
import Draggable from 'react-draggable'
import { IOnDragNode } from 'types';

export interface INodeProps {
  id: string,
  children: any,
  position: {
    x: number,
    y: number
  },
  onDrag: IOnDragNode,
}

export const Node = ({ 
  id, 
  children, 
  position,
  onDrag 
}: INodeProps) => {
  return (
    <Draggable
      axis="both"
      position={position}
      grid={[1,1]}
      onStart={ e => {
        // Stop propagation so the canvas does not move
        e.stopPropagation()
      }}
      onDrag={ (e, dragData) => onDrag(e, dragData, id) }
    >
    <div style={{ padding: '20px 30px', background: 'white', position: 'absolute', borderRadius: '4px'}}>
      { children }
    </div>
  </Draggable>
  )
}