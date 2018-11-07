import * as React from 'react'
import Draggable from 'react-draggable'
import { IOnDragCanvas } from 'types'
import { ICanvasInnerDefaultProps, CanvasInnerDefault } from './CanvasInner.default';
import { ICanvasOuterDefaultProps, CanvasOuterDefault } from './CanvasOuter.default';

export interface ICanvasWrapperProps {
  position: {
    x: number
    y: number
  }
  onDrag: IOnDragCanvas
  ComponentInner?: (props: ICanvasInnerDefaultProps) => JSX.Element
  ComponentOuter?: (props: ICanvasOuterDefaultProps) => JSX.Element
  children: any
}

export class CanvasWrapper extends React.Component<ICanvasWrapperProps>{
  render() {
    const { 
      ComponentInner = CanvasInnerDefault, 
      ComponentOuter = CanvasOuterDefault, 
      position, 
      onDrag,
      children
    } = this.props

    return (
      <ComponentOuter>
        <Draggable
          axis="both"
          position={position}
          grid={[1, 1]}
          onDrag={ (e, dragData) => onDrag(e, dragData) }
        >
          <ComponentInner children={ children } />
        </Draggable>
      </ComponentOuter>
    )
  }
}

