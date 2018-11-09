import * as React from 'react'
import Draggable from 'react-draggable'
import { IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas } from 'types'
import { REACT_FLOW_CHART } from '../../'
import { CanvasInnerDefault, ICanvasInnerDefaultProps } from './CanvasInner.default'
import { CanvasOuterDefault, ICanvasOuterDefaultProps } from './CanvasOuter.default'

export interface ICanvasWrapperProps {
  position: {
    x: number
    y: number,
  }
  onDragCanvas: IOnDragCanvas
  onDeleteKey: IOnDeleteKey
  onCanvasClick: IOnCanvasClick
  onCanvasDrop: IOnCanvasDrop
  ComponentInner?: React.SFC<ICanvasInnerDefaultProps>
  ComponentOuter?: React.SFC<ICanvasOuterDefaultProps>
  children: any
}

export class CanvasWrapper extends React.Component<ICanvasWrapperProps>{
  public render() {
    const { 
      ComponentInner = CanvasInnerDefault, 
      ComponentOuter = CanvasOuterDefault, 
      position, 
      onDragCanvas,
      children,
      onCanvasClick,
      onDeleteKey,
      onCanvasDrop,
    } = this.props

    return (
      <ComponentOuter>
        <Draggable
          axis="both"
          position={position}
          grid={[1, 1]}
          onDrag={ (e, dragData) => onDragCanvas(e, dragData) }
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
            onDrop={ (e) => {
              const data = JSON.parse(e.dataTransfer.getData(REACT_FLOW_CHART))
              onCanvasDrop({ data, position: {
                x: 300, 
                y: 300,
              }})
              // const data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'))
              // const node = new CustomNodeModel(data.nodeType)
              // const points = diagramEngine.getRelativeMousePoint(event)
              // node.x = points.x
              // node.y = points.y
              // addNode(node)
            } }
            onDragOver={ (e) => {
              e.preventDefault()
            } }
          />
        </Draggable>
      </ComponentOuter>
    )
  }
}

