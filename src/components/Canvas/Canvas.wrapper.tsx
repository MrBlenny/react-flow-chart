import * as React from 'react'
import Draggable from 'react-draggable'
import { IOnDragCanvas } from 'types'
import { CanvasDefault, ICanvasDefaultProps } from './Canvas.default'

export interface ICanvasWrapperProps {
  position: {
    x: number
    y: number
  }
  onDrag: IOnDragCanvas
  Component?: (props: ICanvasDefaultProps) => JSX.Element
  children: any
}

export class CanvasWrapper extends React.Component<ICanvasWrapperProps>{
  render() {
    const { 
      Component = CanvasDefault, 
      position, 
      onDrag,
      children
    } = this.props

    return (
      <Draggable
        axis="both"
        position={position}
        grid={[1, 1]}
        onDrag={ (e, dragData) => onDrag(e, dragData) }
      >
        <Component children={ children } />
      </Draggable>
    )
  }
}

