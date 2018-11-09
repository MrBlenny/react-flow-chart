import { IPosition } from '../../../'

export const generateCurvePath = (startPos: IPosition, endPos: IPosition): string => {
  const width = Math.abs(startPos.x - endPos.x)
  const height = Math.abs(startPos.y - endPos.y)
  const isHorizontal = width > height
  const curve = isHorizontal ? width / 2 : height / 2
  const curveX = isHorizontal ? curve : 0
  const curveY = isHorizontal ? 0 : curve

  return `M${startPos.x},${startPos.y} C ${startPos.x + curveX},${startPos.y + curveY} ${endPos.x - curveX},${endPos.y - curveY} ${endPos.x},${endPos.y}`
}
