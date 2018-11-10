import * as React from 'react'
import { IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas, REACT_FLOW_CHART } from '../../'
import { PinchZoomPan } from '../PinchZoomPan'
import { ICanvasInnerDefaultProps } from './CanvasInner.default'
import { ICanvasOuterDefaultProps } from './CanvasOuter.default'

export interface ICanvasWrapperProps {
  position: {
    x: number
    y: number,
  }
  onDragCanvas: IOnDragCanvas
  onDeleteKey: IOnDeleteKey
  onCanvasClick: IOnCanvasClick
  onCanvasDrop: IOnCanvasDrop
  ComponentInner: React.SFC<ICanvasInnerDefaultProps>
  ComponentOuter: React.SFC<ICanvasOuterDefaultProps>
  children: any
}

export class CanvasWrapper extends React.Component<ICanvasWrapperProps> {
  public render () {
    const {
      ComponentInner,
      ComponentOuter,
      position,
      children,
      onCanvasClick,
      onDeleteKey,
      onCanvasDrop,
    } = this.props

    return (
      <ComponentOuter>
        <PinchZoomPan
          initialTop={0}
          initialLeft={0}
          initialScale={'auto'}
          minScale={'auto'}
          maxScale={1}
        >
          <ComponentInner
            children={children}
            onClick={onCanvasClick}
            tabIndex={0}
            onKeyDown={ (e: React.KeyboardEvent) => {
              if (e.keyCode === 46) {
                onDeleteKey()
              }
            }}
            onDrop={ (e) => {
              const data = JSON.parse(e.dataTransfer.getData(REACT_FLOW_CHART))
              onCanvasDrop({ data, position: {
                x: e.clientX - position.x,
                y: e.clientY - position.y,
              }})
            } }
            onDragOver={ (e) => {
              e.preventDefault()
            } }
          />
        </PinchZoomPan>
      </ComponentOuter >
    )
  }
}
