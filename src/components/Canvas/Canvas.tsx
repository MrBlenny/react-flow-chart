import * as React from 'react'
import Draggable from 'react-draggable';
import { IOnDragCanvas } from 'types';

export interface ICanvas {
  position: {
    x: number
    y: number
  }
  children: any
  onDrag: IOnDragCanvas
}

export class Canvas extends React.Component<ICanvas>{
  render() {
    const { children, position, onDrag } = this.props
    return (
      <Draggable
        axis="both"
        position={position}
        grid={[1, 1]}
        onDrag={ (e, dragData) => onDrag(e, dragData) }
      >
        <div style={{position: 'relative', background: 'lightgrey', width: '100%', height: '1200px'}}>
          { children }
        </div>
      </Draggable>
    )
  }
}

