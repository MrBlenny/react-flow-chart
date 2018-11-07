import * as React from 'react'
import Draggable from 'react-draggable';
import { IStopDraggingCanvas } from 'types';

export interface ICanvas {
  position: {
    x: number
    y: number
  }
  children: any
  onStopDraggingCanvas: IStopDraggingCanvas
}

export class Canvas extends React.Component<ICanvas>{
  render() {
    const { children, position, onStopDraggingCanvas } = this.props
    return (
      <Draggable
        axis="both"
        position={position}
        grid={[1, 1]}
        onStop={ (e, dragData) => onStopDraggingCanvas(e, dragData) }
      >
        <div style={{position: 'relative', background: 'lightgrey', width: '100%', height: '1200px'}}>
          { children }
        </div>
      </Draggable>
    )
  }
}

