import * as React from 'react'
import Draggable from 'react-draggable'
import { IOnDragCanvas, IOnCanvasClick, IOnDeleteKey } from 'types'
import { ICanvasInnerDefaultProps, CanvasInnerDefault } from './CanvasInner.default';
import { ICanvasOuterDefaultProps, CanvasOuterDefault } from './CanvasOuter.default';

export interface ICanvasWrapperProps {
  position: {
    x: number
    y: number
  }
  onDrag: IOnDragCanvas
  onDeleteKey: IOnDeleteKey
  onCanvasClick: IOnCanvasClick
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
      children,
      onCanvasClick,
      onDeleteKey,
    } = this.props

    return (
      <ComponentOuter>
        <Draggable
          axis="both"
          position={position}
          grid={[1, 1]}
          onDrag={ (e, dragData) => onDrag(e, dragData) }
        >
          <ComponentInner 
            children={ children } 
            onClick={ onCanvasClick }
            tabIndex={ 0 }
            onKeyDown={ (e: React.KeyboardEvent) => {
              if (e.keyCode === 46) {
                onDeleteKey()
              }
            }}
          />
        </Draggable>
      </ComponentOuter>
    )
  }
}

