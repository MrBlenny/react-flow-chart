import * as React from 'react'
import { IPort, INode, IUpdatePortPositionState } from 'types';

export interface IPortProps {
  style?: object
  port: IPort
  node: INode
  updatePortPositionState: IUpdatePortPositionState
}

export class Port extends React.Component<IPortProps> {
  nodeRef?: HTMLDivElement 
  getNodRef = (el: HTMLDivElement) => {
    if (el) {
      const { node, port, updatePortPositionState } = this.props
      this.nodeRef = el
      const position = {
        x: el.offsetLeft,
        y: el.offsetTop,
      }
      updatePortPositionState(node, port, position)
    }
  }
  render() {
    const { style } = this.props
    return (
      <div ref={ this.getNodRef }style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'grey', ...style }}>
      
      </div>
    )
  }
}