import { IChart, IPosition } from "types"

export const getLinkPosition = (chart: IChart, nodeId: string, portId: string): IPosition => {
  const node = chart.nodes[nodeId]
  const port = node.ports[portId]
  return {
    x: node.position.x + (port.position ? port.position.x : 0),
    y: node.position.y + (port.position ? port.position.y : 0),
  }
}
