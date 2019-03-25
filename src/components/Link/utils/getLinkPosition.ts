import { INode, IPosition } from '../../../'

export const getLinkPosition = (node: INode, portId: string): IPosition => {
  const port = node.ports[portId]
  return {
    x: node.position.x + (port.position ? port.position.x : 0),
    y: node.position.y + (port.position ? port.position.y : 0),
  }
}
