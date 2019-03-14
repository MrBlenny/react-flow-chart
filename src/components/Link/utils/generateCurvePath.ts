import { IPosition } from '../../../'

type IDirection = 'left' | 'right' | 'up' | 'down'

export const generateCurvePath = (startPos: IPosition, endPos: IPosition) => {
  const width = Math.abs(startPos.x - endPos.x)
  const height = Math.abs(startPos.y - endPos.y)
  const leftToRight = startPos.x < endPos.x
  const topToBottom = startPos.y < endPos.y
  const isHorizontal = width > height

  let start
  let end
  let direction: IDirection
  if (isHorizontal) {
    start = leftToRight ? startPos : endPos
    end = leftToRight ? endPos : startPos
    direction = startPos.x > endPos.x ? 'left' : 'right'
  } else {
    start = topToBottom ? startPos : endPos
    end = topToBottom ? endPos : startPos
    direction = startPos.y > endPos.y ? 'up' : 'down'
  }

  const curve = isHorizontal ? width / 3 : height / 3
  const curveX = isHorizontal ? curve : 0
  const curveY = isHorizontal ? 0 : curve

  return {
    path: `M${start.x},${start.y} C ${start.x + curveX},${start.y + curveY} ${end.x - curveX},${end.y - curveY} ${end.x},${end.y}`,
    direction,
  }
}
