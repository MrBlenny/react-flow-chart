import * as React from 'react'
import { IPosition } from 'types'

export interface ILinkDefaultProps {
  startPos: IPosition
  endPos: IPosition
}

export const LinkDefault = ({ startPos, endPos }: ILinkDefaultProps) => {
  const points = `${startPos.x},${startPos.y} ${endPos.x},${endPos.y}`

  return (
    <svg style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer' }}>
      <polyline
        points={ points }  
        stroke="cornflowerblue" 
        strokeWidth="3"
        fill="none"
      />
      <circle
        r="4"
        cx={ endPos.x }
        cy={ endPos.y }
        fill="cornflowerblue"
      />
    </svg>
  )
}