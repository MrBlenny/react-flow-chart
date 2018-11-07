import { DraggableData } from "react-draggable";

export type IOnDragNode = (event: MouseEvent, dragData: DraggableData, id: string,) => void

export type IOnDragCanvas = (event: MouseEvent, dragData: DraggableData) => void

export type IUpdatePortPositionState = (node: INode, port: IPort, position: IPosition) => void


// Link Move events
export interface IOnLinkBaseEvent {
  linkId: string, 
  startEvent: MouseEvent, 
  fromNodeId: string, 
  fromPortId: string 
}

export type IOnLinkStart = (input: IOnLinkBaseEvent) => void

export interface IOnLinkMoveInput extends IOnLinkBaseEvent {
  toPosition: {
    x: number,
    y: number
  }
}
export type IOnLinkMove = (input: IOnLinkMoveInput) => void

export type IOnLinkCancel = (input: IOnLinkBaseEvent) => void

export interface IOnLinkCompleteInput extends IOnLinkBaseEvent {
  toNodeId: string, 
  toPortId: string 
}
export type IOnLinkComplete = (input: IOnLinkCompleteInput) => void

// Other
export interface IPosition {
  x: number
  y: number
}

export interface IPort {
  id: string
  type: string
  position?: IPosition
}

export interface INode {
  id: string
  type: string
  position: IPosition
  ports: {
    [id: string]: IPort
  }
}

export interface ILink {
  id: string
  from: {
    nodeId: string
    portId: string
  }
  to: {
    nodeId?: string
    portId?: string
    position?: IPosition,
  }
}

export interface IChart {
	offset: IPosition
	nodes: {
    [id: string]: INode
  }
	links: {
    [id: string]: ILink
  }
}
