import * as React from 'react'
import { IPosition } from '../../'

const SNAP_TOLERANCE = 0.001
const OVER_TRANSFORMATION_TOLERANCE = 0.05
const DOUBLE_TAP_THRESHOLD = 300
const ANIMATION_SPEED = 0.1

const snapToTarget = (value: number, target: number, tolerance: number) => {
  const withinRange = Math.abs(target - value) < tolerance
  return withinRange ? target : value
}

const rangeBind = (lowerBound: number, upperBound: number, value: number) =>
  Math.min(upperBound, Math.max(lowerBound, value))

const invert = (value: number) => value * -1

const getRelativePosition = ({ clientX, clientY }: any, relativeToElement: any) => {
  const rect = relativeToElement.getBoundingClientRect()
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  }
}

const getMidpoint = (pointA: IPosition, pointB: IPosition) => ({
  x: (pointA.x + pointB.x) / 2,
  y: (pointA.y + pointB.y) / 2,
})

const getDistanceBetweenPoints = (pointA: any, pointB: any) =>
  Math.sqrt(
    Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2),
  )

export interface IPinchZoomPanProps {
  initialTop: number,
  initialLeft: number,
  initialScale: string,
  minScale: string,
  maxScale: number,
  children: any
}

export interface IPinchZoomPanState {
  top: number
  scale: number
  left: number
}

export class PinchZoomPan extends React.Component<IPinchZoomPanProps, IPinchZoomPanState> {
  public static getDerivedStateFromProps (nextProps, prevState) {
    if (
      nextProps.initialTop !== prevState.initialTop ||
      nextProps.initialLeft !== prevState.initialLeft ||
      nextProps.initialScale !== prevState.initialScale
    ) {
      return {
        initialTop: nextProps.initialTop,
        initialLeft: nextProps.initialLeft,
        initialScale: nextProps.initialScale,
      }
    } else {
      return null
    }
  }
  public container: any
  public image: any
  public lastPanPointerPosition: any
  public animation: any
  public mouseDown: boolean
  public minScale: any
  public lastPinchMidpoint: IPosition
  public lastPinchLength: number
  public lastUnzoomedNegativeSpace: any
  public lastPointerUpTimeStamp: any
  constructor (props) {
    super(props)

    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseWheel = this.handleMouseWheel.bind(this)
    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.handleImageLoad = this.handleImageLoad.bind(this)
  }

  // event handlers
  public handleTouchStart (event) {
    this.animation && cancelAnimationFrame(this.animation)

    const touches = event.touches
    if (touches.length === 2) {
      this.pinchStart(touches)
      this.lastPanPointerPosition = null
    } else if (touches.length === 1) {
      this.pointerDown(touches[0])
    }
  }

  public handleTouchMove (event) {
    const touches = event.touches
    if (touches.length === 2) {
      // suppress viewport scaling
      event.preventDefault()
      this.pinchChange(touches)
    } else if (touches.length === 1) {
      const swipingDown = this.pan(touches[0]) > 0
      if (swipingDown && this.state.top < 0) {
        // suppress pull-down-refresh since swiping down will reveal the hidden overflow of the image
        event.preventDefault()
      }
    }
  }

  public handleTouchEnd (event) {
    if (event.touches && event.touches.length > 0) return null

    // We allow transient +/-5% over-pinching.
    // Animate the bounce back to constraints if applicable.
    this.ensureValidTransform(ANIMATION_SPEED)

    this.pointerUp(event.timeStamp)

    // suppress mouseUp, in case of tap
    return event.preventDefault()
  }

  public handleMouseDown (event) {
    this.animation && cancelAnimationFrame(this.animation)
    this.mouseDown = true
    this.pointerDown(event)
  }

  public handleMouseMove (event) {
    if (!this.mouseDown) return null
    return this.pan(event)
  }

  public handleMouseUp (event) {
    this.pointerUp(event.timeStamp)
    if (this.mouseDown) {
      this.mouseDown = false
    }
  }

  public handleMouseWheel (event) {
    this.animation && cancelAnimationFrame(this.animation)
    const point = getRelativePosition(event, this.container)
    if (event.deltaY > 0) {
      if (this.state.scale > this.minScale) {
        this.zoomOut(point)
        event.preventDefault()
      }
    } else if (event.deltaY < 0) {
      if (this.state.scale < this.props.maxScale) {
        this.zoomIn(point)
        event.preventDefault()
      }
    }
  }

  public handleWindowResize (event) {
    this.ensureConstraints()
  }

  public handleImageLoad () {
    this.ensureConstraints()
  }

  // actions
  public pointerDown (clientPosition) {
    this.lastPanPointerPosition = getRelativePosition(
      clientPosition,
      this.container,
    )
  }

  public pan (pointerClientPosition) {
    const pointerPosition = getRelativePosition(
      pointerClientPosition,
      this.container,
    )
    const translateX = pointerPosition.x - this.lastPanPointerPosition.x
    const translateY = pointerPosition.y - this.lastPanPointerPosition.y
    const top = this.state.top + translateY
    const left = this.state.left + translateX

    // use 0 tolerance to prevent over-panning (doesn't look good)
    this.move(top, left, 0)
    this.lastPanPointerPosition = pointerPosition
    return translateY > 0
      ? 1 // swiping down
      : translateY < 0
      ? -1 // swiping up
      : 0
  }

  public pointerUp (timeStamp) {
    if (
      this.lastPointerUpTimeStamp &&
      this.lastPointerUpTimeStamp + DOUBLE_TAP_THRESHOLD > timeStamp
    ) {
      // reset
      this.transformToProps(ANIMATION_SPEED)
    }

    this.lastPointerUpTimeStamp = timeStamp
  }

  public move (top, left, tolerance, speed = 0) {
    this.applyTransform(top, left, this.state.scale, tolerance, speed)
  }

  public pinchStart (touches) {
    const pointA = getRelativePosition(touches[0], this.container)
    const pointB = getRelativePosition(touches[1], this.container)
    this.lastPinchLength = getDistanceBetweenPoints(pointA, pointB)
  }

  public pinchChange (touches) {
    const pointA = getRelativePosition(touches[0], this.container)
    const pointB = getRelativePosition(touches[1], this.container)
    const length = getDistanceBetweenPoints(pointA, pointB)
    const scale = (this.state.scale * length) / this.lastPinchLength
    const midpoint = getMidpoint(pointA, pointB)

    this.zoom(scale, midpoint, OVER_TRANSFORMATION_TOLERANCE)

    this.lastPinchMidpoint = midpoint
    this.lastPinchLength = length
  }

  public zoomIn (midpoint) {
    midpoint = midpoint || {
      x: this.container.offsetWidth / 2,
      y: this.container.offsetHeight / 2,
    }
    this.zoom(this.state.scale * 1.05, midpoint, 0)
  }

  public zoomOut (midpoint) {
    midpoint = midpoint || {
      x: this.container.offsetWidth / 2,
      y: this.container.offsetHeight / 2,
    }
    this.zoom(this.state.scale * 0.95, midpoint, 0)
  }

  public zoom (scale, midpoint, tolerance, speed = 0) {
    scale = this.getValidTransform(0, 0, scale, tolerance).scale

    const incrementalScalePercentage =
      (this.state.scale - scale) / this.state.scale
    const translateY =
      (midpoint.y - this.state.top) * incrementalScalePercentage
    const translateX =
      (midpoint.x - this.state.left) * incrementalScalePercentage

    const top = this.state.top + translateY
    const left = this.state.left + translateX

    this.applyTransform(top, left, scale, tolerance, speed)
  }

  // state validation and transformation methods
  public applyTransform (
    requestedTop,
    requestedLeft,
    requestedScale,
    tolerance,
    speed = 0,
  ) {
    const { top, left, scale } = this.getValidTransform(
      requestedTop,
      requestedLeft,
      requestedScale,
      tolerance,
    )

    if (
      this.state.scale === scale &&
      this.state.top === top &&
      this.state.left === left
    ) {
      return
    }

    if (speed > 0) {
      const frame = () => {
        const translateY = top - this.state.top
        const translateX = left - this.state.left
        const translateScale = scale - this.state.scale

        const nextTransform = {
          top: snapToTarget(
            this.state.top + speed * translateY,
            top,
            SNAP_TOLERANCE,
          ),
          left: snapToTarget(
            this.state.left + speed * translateX,
            left,
            SNAP_TOLERANCE,
          ),
          scale: snapToTarget(
            this.state.scale + speed * translateScale,
            scale,
            SNAP_TOLERANCE,
          ),
        }

        this.setState(
          nextTransform,
          () => (this.animation = requestAnimationFrame(frame)),
        )
      }
      this.animation = requestAnimationFrame(frame)
    } else {
      this.setState({
        top,
        left,
        scale,
      })
    }
  }

  public getValidTransform (top, left, scale, tolerance) {
    const transform = {
      scale: scale || 1,
      top: top || 0,
      left: left || 0,
    }
    const lowerBoundFactor = 1.0 - tolerance
    const upperBoundFactor = 1.0 + tolerance

    transform.scale = rangeBind(
      this.minScale * lowerBoundFactor,
      this.props.maxScale * upperBoundFactor,
      transform.scale,
    )

    // get dimensions by which scaled image overflows container
    const negativeSpace = this.calculateNegativeSpace(transform.scale)
    const overflow = {
      width: Math.max(0, invert(negativeSpace.width)),
      height: Math.max(0, invert(negativeSpace.height)),
    }

    // prevent moving by more than the overflow
    // example: overflow.height = 100, tolerance = 0.05 => top is constrained between -105 and +5
    transform.top = rangeBind(
      invert(overflow.height) * upperBoundFactor,
      overflow.height * upperBoundFactor - overflow.height,
      transform.top,
    )
    transform.left = rangeBind(
      invert(overflow.width) * upperBoundFactor,
      overflow.width * upperBoundFactor - overflow.width,
      transform.left,
    )

    return transform
  }

  public transformToProps (speed = 0) {
    const scale =
      this.props.initialScale === 'auto'
        ? this.calculateAutofitScale()
        : this.props.initialScale
    this.applyTransform(
      this.props.initialTop,
      this.props.initialLeft,
      scale,
      0,
      speed,
    )
  }

  public ensureValidTransform (speed = 0) {
    this.applyTransform(
      this.state.top,
      this.state.left,
      this.state.scale,
      0,
      speed,
    )
  }

  // lifecycle methods
  public render () {
    const childElement = React.Children.only(this.props.children) as any
    const { ref: originalRef } = childElement
    const composedRef = (element) => {
      this.image = element
      if (typeof originalRef === 'function') {
        originalRef(element)
      }
    }
    return (
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
        }}
      >
        {React.cloneElement(childElement, {
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handleMouseUp,
          onWheel: this.handleMouseWheel,
          onDragStart: (event) => event.preventDefault(),
          onLoad: this.handleImageLoad,
          ref: composedRef,
          style: {
            cursor: 'pointer',
            transform: `translate3d(${this.state.left}px, ${
              this.state.top
            }px, 0) scale(${this.state.scale})`,
            transformOrigin: '0 0',
          },
        })}
      </div>
    )
  }

  public componentDidMount () {
    this.image.addEventListener('touchmove', this.handleTouchMove, {
      passive: false,
    })
    window.addEventListener('resize', this.handleWindowResize)

    // Using the child image's original parent enables flex items, e.g., dimensions not explicitly set
    this.container = this.image.parentNode.parentNode
    if (this.image.offsetWidth && this.image.offsetHeight) {
      this.applyConstraints()
      this.transformToProps()
    }
  }

  public componentDidUpdate (prevProps, prevState) {
    if (this.image.offsetWidth && this.image.offsetHeight) {
      this.ensureConstraints()
      if (typeof this.state.scale === 'undefined') {
        // reset to new props
        this.transformToProps()
      }
    }
  }

  public componentWillUnmount () {
    this.image.removeEventListener('touchmove', this.handleTouchMove)
    window.removeEventListener('resize', this.handleWindowResize)
  }

  // sizing methods
  public ensureConstraints () {
    if (this.image.offsetWidth && this.image.offsetHeight) {
      const negativeSpace = this.calculateNegativeSpace(1)
      if (
        !this.lastUnzoomedNegativeSpace ||
        negativeSpace.height !== this.lastUnzoomedNegativeSpace.height ||
        negativeSpace.width !== this.lastUnzoomedNegativeSpace.width
      ) {
        // image and/or container dimensions have been set / updated
        this.applyConstraints()
        this.forceUpdate()
      }
    }
  }

  public applyConstraints () {
    const minScale = this.props.minScale ? this.calculateAutofitScale() : this.props.minScale

    if (this.minScale !== minScale) {
      this.minScale = minScale
      this.ensureValidTransform()
    }

    this.lastUnzoomedNegativeSpace = this.calculateNegativeSpace(1)
  }

  public calculateNegativeSpace (scale = this.state.scale) {
    // get difference in dimension between container and scaled image
    const width = this.container.offsetWidth - scale * this.image.offsetWidth
    const height =
      this.container.offsetHeight - scale * this.image.offsetHeight
    return {
      width,
      height,
    }
  }

  public calculateAutofitScale () {
    let autofitScale = 1
    if (this.image.offsetWidth > 0) {
      autofitScale = Math.min(
        this.container.offsetWidth / this.image.offsetWidth,
        autofitScale,
      )
    }
    if (this.image.offsetHeight > 0) {
      autofitScale = Math.min(
        this.container.offsetHeight / this.image.offsetHeight,
        autofitScale,
      )
    }
    return autofitScale
  }
}
