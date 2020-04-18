import { IPosition, ISize } from './generics';

export interface IChart {
  offset: IPosition
  nodes: {
    [id: string]: INode,
  }
  links: {
    [id: string]: ILink,
  }
  zoom: IZoom
  properties?: any

  /** System Temp */
  selected: ISelectedOrHovered
  hovered: ISelectedOrHovered
}

export interface ISelectedOrHovered {
  type?: 'link' | 'node' | 'port'
  id?: string
}

export interface INode {
  id: string
  type: string
  position: IPosition
  orientation?: number
  ports: {
    [id: string]: IPort,
  }
  properties?: any
  /** System Temp */
  size?: ISize
}

export interface IPort {
  id: string
  type: string
  value?: string
  properties?: any
  /** System Temp */
  position?: IPosition
}

export interface ILink {
  id: string
  from: {
    nodeId: string
    portId: string,
  }
  to: {
    nodeId?: string
    portId?: string
    /** System Temp */
    position?: IPosition,
  }
  properties?: any
}

export interface IZoom {
  scale: number
  transformEnabled?: boolean
  minScale?: number
  maxScale?: number
  pan?: {
    disabled?: boolean
    touchPadEnabled?: boolean,
  }
  wheel?: {
    disabled?: boolean
    step?: number
    wheelEnabled?: boolean
    touchPadEnabled?: boolean,
  }
  zoomIn?: {
    disabled?: boolean
    step?: number,
  }
  zoomOut?: {
    disabled?: boolean
    step?: number,
  }
}
