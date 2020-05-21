import * as PF from 'pathfinding'
import { IPort, IPosition } from '../../../'
import { MATRIX_PADDING } from '../../FlowChart/utils/grid'

export const getDirectional = (startPos: IPosition, endPos: IPosition) => {
  const width = Math.abs(startPos.x - endPos.x)
  const height = Math.abs(startPos.y - endPos.y)
  const leftToRight = startPos.x < endPos.x
  const topToBottom = startPos.y < endPos.y
  const isHorizontal = width > height

  return { width, height,leftToRight,topToBottom,isHorizontal }
}

export const generateCurvePath = (startPos: IPosition, endPos: IPosition): string => {
  const { width, height,leftToRight,topToBottom,isHorizontal } = getDirectional(startPos,endPos)

  let start: IPosition
  let end: IPosition
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

const finder = PF.JumpPointFinder({
  heuristic: PF.Heuristic.manhattan,
  diagonalMovement: PF.DiagonalMovement.Never,
})

export const generateRightAnglePath = (startPos: IPosition, endPos: IPosition) => {
  const { leftToRight,topToBottom,isHorizontal } = getDirectional(startPos,endPos)

  let start: IPosition
  let end: IPosition
  if (isHorizontal) {
    start = leftToRight ? startPos : endPos
    end = leftToRight ? endPos : startPos
  } else {
    start = topToBottom ? startPos : endPos
    end = topToBottom ? endPos : startPos
  }

  const vertex = isHorizontal ? `${start.x},${end.y}` : `${end.x},${start.y}`

  return `M${start.x},${start.y} L ${vertex} ${end.x},${end.y}`
}

const setWalkableAtPorts = (start: { pos: IPosition, port: IPort }, end: { pos: IPosition, port: IPort }, grid: PF.Grid) => {
  ([start, end]).forEach((point) => {
    if (['input', 'top'].includes(point.port.type)) {
      for (let i = point.pos.y; i >= Math.max(point.pos.y - MATRIX_PADDING, 0); i--) {
        grid.setWalkableAt(point.pos.x, i, true)
      }
    } else if (['output', 'bottom'].includes(point.port.type)) {
      for (let i = point.pos.y; i <= Math.min(point.pos.y + MATRIX_PADDING, grid.height); i++) {
        grid.setWalkableAt(point.pos.x, i, true)
      }
    } else if (['right'].includes(point.port.type)) {
      for (let i = point.pos.x; i <= Math.max(point.pos.x + MATRIX_PADDING, grid.width); i++) {
        grid.setWalkableAt(i, point.pos.y, true)
      }
    } else if (['left'].includes(point.port.type)) {
      for (let i = point.pos.x; i >= Math.max(point.pos.x - MATRIX_PADDING, 0); i--) {
        grid.setWalkableAt(i, point.pos.y, true)
      }
    }
  })
}

export const generateSmartPath = (matrix: number[][], startPos: IPosition, endPos: IPosition, fromPort: IPort, toPort: IPort): string => {
  const grid = new PF.Grid(matrix)

  const startPosScaled = { x: Math.ceil(startPos.x / 5), y: Math.ceil(startPos.y / 5) }
  const endPosScaled = { x: Math.ceil(endPos.x / 5), y: Math.ceil(endPos.y / 5) }

  try {
    // try to find a smart path. use right angle path as a fallback
    setWalkableAtPorts({ pos : startPosScaled, port: fromPort }, { pos : endPosScaled, port: toPort }, grid)

    const path = PF.Util.compressPath(
      finder.findPath(
        startPosScaled.x,
        startPosScaled.y,
        endPosScaled.x,
        endPosScaled.y,
        grid,
      ),
    )

    if (!path.length) return generateRightAnglePath(startPos, endPos)
    const [first, ...rest] = path
    let d = `M${first[0] * 5} ${first[1] * 5}`
    rest.forEach(([x, y]) => {
      d += ` L${x * 5} ${y * 5}`
    })
    return d
  } catch (e) {
    return generateRightAnglePath(startPos, endPos)
  }
}
