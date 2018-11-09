import { IPosition } from '../../../'

export const generateCurvePath = (startPos: IPosition, endPos: IPosition): string => {
  const width = Math.abs(startPos.x - endPos.x)
  const height = Math.abs(startPos.y - endPos.y)
  const leftToRight = startPos.x < endPos.x
  const topToBottom = startPos.y < endPos.y
  const isHorizontal = width > height

  let start
  let end
  if (isHorizontal) {
    start = leftToRight ? startPos : endPos
    end = leftToRight ? endPos : startPos
  } else {
    start = topToBottom ? startPos : endPos
    end = topToBottom ? endPos : startPos
  }

  const curve = isHorizontal ? width / 3 : height / 3
  const curveX = isHorizontal ? curve : 0
  const curveY = isHorizontal ? 0 : curve

  return `M${start.x},${start.y} C ${start.x + curveX},${start.y + curveY} ${end.x - curveX},${end.y - curveY} ${end.x},${end.y}`
}
