import * as React from 'react'
import { IPort, INode, IUpdatePortPositionState, IOnLinkStart, IOnLinkMove, IOnLinkCancel, IOnLinkComplete } from 'types'
import { v4 } from 'uuid'
import { IPortDefaultProps, PortDefault } from './Port.default';

export interface IPortWrapperProps {
  style?: object
  port: IPort
  node: INode
  updatePortPositionState: IUpdatePortPositionState
  Component?: (props: IPortDefaultProps) => JSX.Element

  // Link handlers
  onLinkStart: IOnLinkStart
  onLinkMove: IOnLinkMove
  onLinkCancel: IOnLinkCancel
  onLinkComplete: IOnLinkComplete
}

export class PortWrapper extends React.Component<IPortWrapperProps> {
  nodeRef?: HTMLDivElement 
  getNodRef = (el: HTMLDivElement) => {
    if (el) {
      const { node, port, updatePortPositionState } = this.props
      this.nodeRef = el
      const position = {
        x: el.offsetLeft + el.offsetWidth / 2,
        y: el.offsetTop + el.offsetHeight / 2,
      }
      updatePortPositionState(node, port, position)
    }
  }
  onMouseDown = (startEvent: any) => {
    const { node, port, onLinkStart, onLinkCancel, onLinkComplete, onLinkMove } = this.props
    const linkId = v4()
    const fromNodeId = node.id 
    const fromPortId = port.id 

    // Create the move handler
    // This will update the position as the mouse moves
    const mouseMoveHandler = (e: MouseEvent) => {
      onLinkMove({ 
        linkId, startEvent, fromNodeId, fromPortId, 
        toPosition: { 
          x: e.clientX,
          y: e.clientY,
        } 
      })
    }

    // Create and bind the mouse up handler
    // This is used to check if the link is complete or cancelled
    const mouseUpHandler = (e: MouseEvent & { path: HTMLElement[] }) => {
      // We traverse up the event path until we find an element with 'data-port-id' and data-node-id'
      // e.toElement cannot be used because it may be a child element of the port
      const portEl = e.path.find((el) => {
        const toPortId = el.getAttribute && el.getAttribute('data-port-id')
        const toNodeId = el.getAttribute && el.getAttribute('data-node-id')
        return !!(toPortId && toNodeId)
      })

      // If both node-id and port-id are defined as data attributes, we are mouse-upping
      // on another port. Run the success handler
      if (portEl) {
        const toPortId = portEl.getAttribute('data-port-id') as string
        const toNodeId = portEl.getAttribute('data-node-id') as string
        onLinkComplete({ linkId, startEvent, fromNodeId, fromPortId, toNodeId, toPortId })
      } else {
        onLinkCancel({ linkId, startEvent, fromNodeId, fromPortId })
      }

      // Remove the listeners if the link is complete or canceled
      window.removeEventListener('mouseup', mouseUpHandler, false);
      window.removeEventListener('mousemove', mouseMoveHandler, false);
    }

    // Add listeners
    window.addEventListener('mouseup', mouseUpHandler, false);
    window.addEventListener('mousemove', mouseMoveHandler, false);

    // Notify state of link start
    onLinkStart({ linkId, startEvent, fromNodeId, fromPortId })

    // Prevent default and stop propagation to prevent text selection
    startEvent.preventDefault()
    startEvent.stopPropagation()
  }
  render() {
    const { 
      style, 
      port, 
      node,
      Component = PortDefault
    } = this.props
    return (
      <div
        data-port-id={ port.id }
        data-node-id={ node.id }
        onMouseDown={ this.onMouseDown }
        ref={ this.getNodRef } 
        style={ style }
      >
        <Component />
      </div>
    )
  }
}