import { DraggableData, DraggableEvent } from 'react-draggable'
import { IChart, INode, IPort } from './chart'
import { IConfig } from './config'
import { IOffset, IPosition, ISize } from './generics'

/** Callback functions will be evaluated inside of a setState so they can always manipulate the chart state */
export type IStateCallback<T extends (...args: any) => any> = (...params: Parameters<T>) => (chart: IChart) => IChart

export interface IOnDragNodeInput {
  config?: IConfig
  event: DraggableEvent
  data: DraggableData
  id: string
}

export type IOnDragNode = (input: IOnDragNodeInput) => void

export interface IOnDragCanvasInput {
  config?: IConfig
  data: any
}

export type IOnDragCanvas = (input: IOnDragCanvasInput) => void

export interface IOnDragNodeStopInput {
  config?: IConfig
  event: MouseEvent
  data: DraggableData
  id: string
}

export type IOnDragNodeStop = (input: IOnDragNodeStopInput) => void

export interface IOnDragCanvasStopInput {
  config?: IConfig
  data: any
}

export type IOnDragCanvasStop = (input: IOnDragCanvasStopInput) => void

export interface IOnPortPositionChangeInput {
  config?: IConfig
  node: INode
  port: IPort
  el: HTMLDivElement
  nodesEl: HTMLDivElement | IOffset
}

export type IOnPortPositionChange = (input: IOnPortPositionChangeInput) => void

export interface ILinkBaseInput {
  config?: IConfig
  linkId: string
}

export interface IOnLinkBaseEvent extends ILinkBaseInput {
  startEvent: React.MouseEvent
  fromNodeId: string
  fromPortId: string
}

export type IOnLinkStart = (input: IOnLinkBaseEvent) => void

export interface IOnLinkMoveInput extends IOnLinkBaseEvent {
  toPosition: {
    x: number
    y: number,
  }
}
export type IOnLinkMove = (input: IOnLinkMoveInput) => void

export type IOnLinkCancel = (input: IOnLinkBaseEvent) => void

export interface IOnLinkCompleteInput extends IOnLinkBaseEvent {
  toNodeId: string
  toPortId: string
}
export type IOnLinkComplete = (input: IOnLinkCompleteInput) => void

export type IOnLinkMouseEnter = (input: ILinkBaseInput) => void

export type IOnLinkMouseLeave = (input: ILinkBaseInput) => void

export type IOnLinkClick = (input: ILinkBaseInput) => void

export type IOnCanvasClick = (input: { config?: IConfig }) => void

export type IOnDeleteKey = (input: { config?: IConfig }) => void

export interface INodeBaseInput {
  config?: IConfig
  nodeId: string
}

export type IOnNodeClick = (input: INodeBaseInput) => void

export type IOnNodeDoubleClick = (input: INodeBaseInput) => void

export interface IOnNodeSizeChangeInput extends INodeBaseInput {
  size: ISize
}

export type IOnNodeSizeChange = (input: IOnNodeSizeChangeInput) => void

export type IOnNodeMouseEnter = (input: INodeBaseInput) => void

export type IOnNodeMouseLeave = (input: INodeBaseInput) => void

export interface IOnCanvasDropInput {
  config?: IConfig
  data: any
  position: IPosition
  id: string
}

export type IOnCanvasDrop = (input: IOnCanvasDropInput) => void

export type IOnZoomCanvas = (input: { config?: IConfig; data: any }) => void
