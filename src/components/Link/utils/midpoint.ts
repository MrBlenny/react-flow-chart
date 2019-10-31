import { IPosition } from '../../../'
import * as PF from 'pathfinding'

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

const finder = PF.JumpPointFinder({
  heuristic: PF.Heuristic.manhattan,
  diagonalMovement: PF.DiagonalMovement.Never
})

const getMidpoint = (startPos: IPosition, endPos: IPosition): IPosition => {
  const midpoint = <IPosition> {}
  midpoint.x = Math.ceil((startPos.x + endPos.x) / 2)
  midpoint.y = Math.ceil((startPos.y + endPos.y) / 2)

  return midpoint
}

export const generateSmartPath = (startPos: IPosition, endPos: IPosition, matrix: number[][]): string => {

  const grid = new PF.Grid(matrix)

  const midpoint = getMidpoint(startPos, endPos)

  const startPosScaled = { x: Math.ceil(startPos.x / 5), y: Math.ceil(startPos.y / 5) }
  const midpointScaled = { x: Math.ceil(midpoint.x / 5), y: Math.ceil(midpoint.y / 5) }
  const endPosScaled = { x: Math.ceil(endPos.x / 5), y: Math.ceil(endPos.y / 5) }

  grid.setWalkableAt(startPosScaled.x, startPosScaled.y, true)
  grid.setWalkableAt(endPosScaled.x, endPosScaled.y, true)

  for(let i = -11; i < 11; i++) {
      grid.setWalkableAt(startPosScaled.x, Math.max(startPosScaled.y + i, 0), true)
      grid.setWalkableAt(endPosScaled.x, Math.max(endPosScaled.y + i, 0), true)
  }

  const pathTo = PF.Util.compressPath(
    finder.findPath(
      startPosScaled.x,
      startPosScaled.y,
      midpointScaled.x,
      midpointScaled.y,
      grid.clone(),
    )
  );

  const pathFrom = PF.Util.compressPath(
    finder.findPath(
      midpointScaled.x,
      midpointScaled.y,
      endPosScaled.x,
      endPosScaled.y,
      grid.clone(),
    )
  );

  const path = [...pathTo.slice(0, pathTo.length), ...pathFrom.slice(1)]

  if (!path.length) return generateCurvePath(startPos, endPos);
  let [first, ...rest] = path;
  let d = `M${first[0] * 5} ${first[1] * 5}`;
  rest.forEach(([x, y]) => {
    d += ` L${x * 5} ${y * 5}`;
  });
  return d;
}