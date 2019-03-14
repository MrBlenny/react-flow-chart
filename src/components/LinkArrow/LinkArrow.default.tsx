import * as React from 'react'
import { IPosition } from '../../'

export interface ILinkArrowDefaultProps {
  direction: 'up' | 'down' | 'left' | 'right'
  startPos: IPosition
  endPos: IPosition
  path: SVGPathElement
}

export const LinkArrowDefault = ({ path }: ILinkArrowDefaultProps) => {
  const offset = 11
  const point1 = path.getPointAtLength(path.getTotalLength() - offset)
  const point2 = path.getPointAtLength(path.getTotalLength() - offset - 20)
  const angle = Math.atan((point1.y - point2.y) / (point1.x - point2.x)) / Math.PI * 180 + 90
  console.log(angle)

  const size = 8
  const arrow = `0,0 -${size},${2 * size} ${size},${2 * size}`

  return (
    <polygon transform={`translate(${point1.x}, ${point1.y}) rotate(${angle})`} points={arrow} fill="cornflowerblue"/>
  )
}
