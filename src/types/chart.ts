import { IPosition, ISize } from './generics'

export interface IChart<P extends object = any> {
  offset: IPosition
  nodes: {
    [id: string]: INode<P>
  }
  links: {
    [id: string]: ILink<P>
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

export interface INode<
  TNodeProperties extends object = any,
  TNodeType extends string = string,
  TPortProperties extends object = any
> {
  id: string
  type: TNodeType
  position: IPosition
  orientation?: number
  ports: {
    [id: string]: IPort<TPortProperties>
  }
  properties?: TNodeProperties
  /** System Temp */
  size?: ISize
}

export type TPortType = 'top' | 'right' | 'bottom' | 'left'
export interface IPort<
  PortProperties extends object = any,
  TPortValue extends string = string
> {
  id: string
  type: TPortType
  value?: TPortValue
  properties?: PortProperties
  /** System Temp */
  position?: IPosition
}

export interface ILink<TLinkProperties extends object = any> {
  id: string
  from: {
    nodeId: string
    portId: string
  }
  to: Partial<{
    nodeId: string
    portId: string
    /** System Temp */
    position?: IPosition
  }>
  properties?: TLinkProperties
}
