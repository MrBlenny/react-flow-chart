import { INode, IPosition } from '../../../'

export const getLinkPosition = (node: INode, portId: string): IPosition => {
  const port = node.ports[portId]
  if (port) {
    return {
      x: node.position.x + (port.position ? port.position.x : 0),
      y: node.position.y + (port.position ? port.position.y : 0),
    }
  }
  console.error(`Can't find ${portId} on Node ${node.id}`)
  console.log(node)
  return {
    x: node.position.x,
    y: node.position.y,
  }
}
