import * as React from 'react'
import { ILink, IChart, IPosition } from 'types';

export interface ILinkProps {
  style?: object
  link: ILink
  chart: IChart
}

const getPosition = (chart: IChart, nodeId: string, portId: string): IPosition => {
  const node = chart.nodes[nodeId]
  const port = node.ports[portId]
  return {
    x: node.position.x + (port.position ? port.position.x : 0),
    y: node.position.y + (port.position ? port.position.y : 0),
  }
}

export const Link = ({ 
  style,
  link,
  chart
}: ILinkProps) => {
  const startPos = getPosition(chart, link.from.nodeId, link.from.portId)
  const endPos = getPosition(chart, link.to.nodeId, link.to.portId)
  const points = `${startPos.x},${startPos.y} ${endPos.x},${endPos.y}`
  return (
    <svg style={{ overflow: 'visible', position: 'absolute' }}>
      <polyline 
        points={ points }  
        stroke="red" 
        strokeWidth="3"
        fill="none" 
      />
    </svg>
  )
}