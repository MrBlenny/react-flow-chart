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
}

export interface INode {
  id: string
  type: string
  position: IPosition
  ports: {
    [id: string]: IPort
  }
  properties?: any
  /** Temp */
  hover?: boolean
  selected?: boolean
}

export interface IPort {
  id: string
  type: string
  value?: string
  properties?: any
  /** System Temp */
  position?: IPosition
  linkHovered?: boolean
  linkSelected?: boolean
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
  /** System Temp */
  hover?: boolean
  selected?: boolean
}
