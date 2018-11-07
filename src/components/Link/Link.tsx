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

  const endPos = link.to.nodeId && link.to.portId 
    ? getLinkPosition(chart, link.to.nodeId, link.to.portId) 
    : link.to.position

  // Don't render the link yet if there is no end pos
  // This will occur if the link was just created
  if (!endPos) {
    return null
  }

  const points = `${startPos.x},${startPos.y} ${endPos.x},${endPos.y}`

  return (
    <svg style={{ overflow: 'visible', position: 'absolute' }}>
      <polyline
        points={ points }  
        stroke="red" 
        strokeWidth="3"
        fill="none" 
      />
      <circle
        r="4"
        cx={ endPos.x }
        cy={ endPos.y }
        fill="red"
      />
    </svg>
  )
}