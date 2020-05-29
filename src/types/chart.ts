import { IPosition, ISize } from "./generics";

export interface IChart<
  ChartProps = any,
  NodeProps = any,
  LinkProps = any,
  PortProps = any
> {
  offset: IPosition;
  nodes: {
    [id: string]: INode<NodeProps, PortProps>;
  };
  links: {
    [id: string]: ILink<LinkProps>;
  };
  scale: number;
  properties?: ChartProps;

  /** System Temp */
  selected: ISelectedOrHovered;
  hovered: ISelectedOrHovered;
}

export interface ISelectedOrHovered {
  type?: "link" | "node" | "port";
  id?: string;
}

export interface INode<NodeProps = any, PortProps = any> {
  id: string;
  type: string;
  position: IPosition;
  orientation?: number;
  ports: {
    [id: string]: IPort<PortProps>;
  };
  properties?: NodeProps;
  /** System Temp */
  size?: ISize;
}

export interface IPort<W = any> {
  id: string;
  type: string;
  value?: string;
  properties?: W;
  /** System Temp */
  position?: IPosition;
}

export interface ILink<V = any> {
  id: string;
  from: {
    nodeId: string;
    portId: string;
  };
  to: {
    nodeId?: string;
    portId?: string;
    /** System Temp */
    position?: IPosition;
  };
  properties?: V;
}
