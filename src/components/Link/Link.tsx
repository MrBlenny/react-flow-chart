import * as React from 'react'
import { ILink, IChart } from 'types'
import { getLinkPosition } from './utils'

export interface ILinkProps {
  link: ILink
  chart: IChart
}

export const Link = ({ 
  link,
  chart
}: ILinkProps) => {
  const startPos = getLinkPosition(chart, link.from.nodeId, link.from.portId)
  const endPos = getLinkPosition(chart, link.to.nodeId, link.to.portId)
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