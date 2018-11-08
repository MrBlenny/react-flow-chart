import { IPosition } from "./generics"

export interface IChart {
	offset: IPosition
	nodes: {
    [id: string]: INode
  }
	links: {
    [id: string]: ILink
  }
  properties?: any

  /** System Temp */
  selected: ISelectedOrHovered
  hovered: ISelectedOrHovered
}

export interface ISelectedOrHovered {
  type?: 'link' | 'node' | 'port',
  id?: string
}

export interface INode {
  id: string
  type: string
  position: IPosition
  ports: {
    [id: string]: IPort
  }
  properties?: any
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
    portId: string
  }
  to: {
    nodeId?: string
    portId?: string
    /** System Temp */
    position?: IPosition
  }
  properties?: any
}

