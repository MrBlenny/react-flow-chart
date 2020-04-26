import * as React from 'react'

// NB: always import CanvasContext directly from this file to prevent circular module imports
// see https://github.com/facebook/react/issues/13969#issuecomment-433253469

const CanvasContext = React.createContext({ offsetX: 0, offsetY: 0, zoomScale: 1 })

export default CanvasContext
