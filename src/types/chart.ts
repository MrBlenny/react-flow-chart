import { IPosition, ISize } from './generics'

export interface IChart<P extends object = any> {
  offset: IPosition
  nodes: {
    [id: string]: INode,
  }
  links: {
    [id: string]: ILink,
  }
  scale: number
  properties?: P

  /** System Temp */
  selected: ISelectedOrHovered
  hovered: ISelectedOrHovered
}

export interface ISelectedOrHovered {
  type?: 'link' | 'node' | 'port'
  id?: string
}

export interface INode<P extends object = any> {
  id: string
  type: string
  position: IPosition
  orientation?: number
  ports: {
    [id: string]: IPort,
  }
  properties?: P
  /** System Temp */
  size?: ISize
}

export interface IPort<P extends object = any> {
  id: string
  type: string
  value?: string
  properties?: P
  /** System Temp */
  position?: IPosition
}

export interface ILink<P extends object = any> {
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
  properties?: P
}
