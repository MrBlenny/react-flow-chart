import { DraggableData } from 'react-draggable'
import { INode, IPort } from './chart'
import { IPosition } from './generics'

/** Updates a node x-y position */
export type IOnDragNode = (event: MouseEvent, dragData: DraggableData, id: string) => void

/** Updates the x-y offset */
export type IOnDragCanvas = (event: MouseEvent, dragData: DraggableData) => void

/** Redraws the ports when their position changes */
export type IOnPortPositionChange = (node: INode, port: IPort, position: IPosition) => void

export interface IOnLinkBaseEvent {
  linkId: string,
  startEvent: MouseEvent,
  fromNodeId: string,
  fromPortId: string
}

/** Adds a new link */
export type IOnLinkStart = (input: IOnLinkBaseEvent) => void

export interface IOnLinkMoveInput extends IOnLinkBaseEvent {
  toPosition: {
    x: number,
    y: number,
  }
}

/** Updates the link to position */
export type IOnLinkMove = (input: IOnLinkMoveInput) => void

/** Clears a partially complete link from the state  */
export type IOnLinkCancel = (input: IOnLinkBaseEvent) => void

export interface IOnLinkCompleteInput extends IOnLinkBaseEvent {
  toNodeId: string,
  toPortId: string
}

/** Adds a new link to the state */
export type IOnLinkComplete = (input: IOnLinkCompleteInput) => void

/** Sets the hovered state */
export type IOnLinkMouseEnter = ({ linkId }: { linkId: string }) => void

/** Clears the link hovered state */
export type IOnLinkMouseLeave = ({ linkId }: { linkId: string }) => void

/** Sets the link selected state */
export type IOnLinkClick = ({ linkId }: { linkId: string }) => void

/** Clears the selected state */
export type IOnCanvasClick = () => void

/** Removes the last selected node or link */
export type IOnRemoveKey = () => void

/** Sets the node selected state */
export type IOnNodeClick = ({ nodeId }: { nodeId: string }) => void

/** Adds a new node to the canvas */
export type IOnCanvasDrop = ({ data, position }: { data: any, position: IPosition }) => void
