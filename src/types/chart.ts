import { IPosition, ISize } from './generics'

export interface IChart<P extends object = any> {
  offset: IPosition
  nodes: {
    [id: string]: INode<P>,
  }
  links: {
    [id: string]: ILink<P>,
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

export interface INode<P extends object = any, T extends string = string> {
  id: string
  type: T
  position: IPosition
  orientation?: number
  ports: {
    [id: string]: IPort<P>,
  }
  properties?: P
  /** System Temp */
  size?: ISize
}

export interface IPort<P extends object = any, T extends string = string, V extends string = string> {
  id: string
  type: T
  value?: V
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
  to: Partial<{
    nodeId: string
    portId: string
    /** System Temp */
    position?: IPosition,
  }>
  properties?: P
}
