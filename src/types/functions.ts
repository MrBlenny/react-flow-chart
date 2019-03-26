import { DraggableData } from 'react-draggable'
import { INode, IPort } from './chart'
import { IPosition, ISize } from './generics'

export type IOnDragNode = (event: MouseEvent, dragData: DraggableData, id: string) => void

export type IOnDragCanvas = (event: MouseEvent, dragData: DraggableData) => void

export type IOnPortPositionChange = (node: INode, port: IPort, position: IPosition) => void

export interface IOnLinkBaseEvent {
  linkId: string,
  startEvent: React.MouseEvent,
  fromNodeId: string,
  fromPortId: string
}

export type IOnLinkStart = (input: IOnLinkBaseEvent) => void

export interface IOnLinkMoveInput extends IOnLinkBaseEvent {
  toPosition: {
    x: number,
    y: number,
  }
}
export type IOnLinkMove = (input: IOnLinkMoveInput) => void

export type IOnLinkCancel = (input: IOnLinkBaseEvent) => void

export interface IOnLinkCompleteInput extends IOnLinkBaseEvent {
  toNodeId: string,
  toPortId: string
}
export type IOnLinkComplete = (input: IOnLinkCompleteInput) => void

export type IOnLinkMouseEnter = ({ linkId }: { linkId: string }) => void

export type IOnLinkMouseLeave = ({ linkId }: { linkId: string }) => void

export type IOnLinkClick = ({ linkId }: { linkId: string }) => void

export type IOnCanvasClick = () => void

export type IOnDeleteKey = () => void

export type IOnNodeClick = ({ nodeId }: { nodeId: string }) => void

export type IOnNodeSizeChange = (opts: { nodeId: string, size: ISize }) => void

export type IOnCanvasDrop = ({ data, position }: { data: any, position: IPosition }) => void
