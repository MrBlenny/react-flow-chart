const SCALE_FACTOR = 5
export const MATRIX_PADDING = 5
export const NODE_PADDING = 3

const getEmptyMatrix = (width: number, height: number): number[][] => {

  const adjustedWidth = Math.ceil(width / (SCALE_FACTOR - 1)) + MATRIX_PADDING
  const adjustedHeight = Math.ceil(height / (SCALE_FACTOR - 1)) + MATRIX_PADDING

  const matrix = []

  for (let i = 0; i < adjustedHeight; i++) {
    matrix.push(new Array(adjustedWidth).fill(0))
  }

  return matrix
}

const getMatrixDimensions = (offset: { x: number, y: number }, nodeDimensions: any[]): { width: number, height: number } => {
  const defaultNodeSize = { width: 500, height: 500 }
  const dimensions = { width: 0, height: 0 }

  const offsetX = Math.max(offset.x, 0)
  const offsetY = Math.max(offset.y, 0)

  nodeDimensions.forEach((node) => {

    const size = node.size || defaultNodeSize

    const x = node.position.x + offsetX + size.width
    const y = node.position.y + offsetY + size.height

    if (x > dimensions.width) dimensions.width = x
    if (y > dimensions.height) dimensions.height = y

  })

  return dimensions
}

export const getMatrix = (offset: { x: number, y: number }, nodeDimensions: any[]): number[][] => {
  const { width, height } = getMatrixDimensions(offset, nodeDimensions)
  const matrix = getEmptyMatrix(width, height)

  nodeDimensions.forEach((dimension) => {
    const { position } = dimension
    const defaultNodeSize = { width: 500, height: 500 }
    const size = dimension.size || defaultNodeSize

    const scaledSize = {
      width: Math.ceil(size.width / SCALE_FACTOR) + NODE_PADDING,
      height: Math.ceil(size.height / SCALE_FACTOR) + NODE_PADDING,
    }

    const scaledX = Math.ceil(position.x / SCALE_FACTOR)
    const scaledY = Math.ceil(position.y / SCALE_FACTOR)

    for (let x = Math.max(scaledX - NODE_PADDING, 0); x <= scaledX + scaledSize.width; x++) {
      for (let y = Math.max(scaledY - NODE_PADDING, 0); y <= scaledY + scaledSize.height; y++) {
        matrix[y][x] = 1
      }
    }
  })

  return matrix
}
