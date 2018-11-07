import { DraggableData } from "react-draggable";

export type IStopDraggingNode = (event: MouseEvent, dragData: DraggableData, id: string,) => void

export type IStopDraggingCanvas = (event: MouseEvent, dragData: DraggableData) => void

export type IUpdatePortPositionState = (node: INode, port: IPort, position: IPosition) => void

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
    nodeId: string
    portId: string
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
