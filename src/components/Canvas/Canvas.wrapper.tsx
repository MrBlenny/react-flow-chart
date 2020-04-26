import * as React from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { IConfig, IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas, IOnDragCanvasStop, IOnZoomCanvas, REACT_FLOW_CHART } from '../../'
import CanvasContext from './CanvasContext'
import { ICanvasInnerDefaultProps } from './CanvasInner.default'
import { ICanvasOuterDefaultProps } from './CanvasOuter.default'

export interface ICanvasWrapperProps {
  config: IConfig
  position: {
    x: number
    y: number,
  }
  scale: number
  onZoomCanvas: IOnZoomCanvas
  onDragCanvas: IOnDragCanvas
  onDragCanvasStop: IOnDragCanvasStop
  onDeleteKey: IOnDeleteKey
  onCanvasClick: IOnCanvasClick
  onCanvasDrop: IOnCanvasDrop
  ComponentInner: React.FunctionComponent<ICanvasInnerDefaultProps>
  ComponentOuter: React.FunctionComponent<ICanvasOuterDefaultProps>
  onSizeChange: (x: number, y: number) => void
  children: any
}

interface IState {
  width: number
  height: number
  offsetX: number
  offsetY: number
}

export class CanvasWrapper extends React.Component<ICanvasWrapperProps, IState> {
  public state = {
    width: 0,
    height: 0,
    offsetX: 0,
    offsetY: 0,
  }

  private ref = React.createRef<HTMLElement>()

  public componentDidMount () {
    this.updateSize()

    if (this.ref.current) {
      if ((window as any).ResizeObserver) {
        const ro = new (window as any).ResizeObserver(this.updateSize)
        ro.observe(this.ref.current)
      } else {
        window.addEventListener('resize', this.updateSize)
      }
      window.addEventListener('scroll', this.updateSize)
    }
  }

  public componentDidUpdate () {
    this.updateSize()
  }

  public componentWillUnmount () {
    window.removeEventListener('resize', this.updateSize)
    window.removeEventListener('scroll', this.updateSize)
  }

  public render () {
    const {
      config,
      scale,
      ComponentInner,
      ComponentOuter,
      position,
      onDragCanvas,
      onDragCanvasStop,
      children,
      onCanvasClick,
      onDeleteKey,
      onCanvasDrop,
      onZoomCanvas,
    } = this.props
    const { offsetX, offsetY } = this.state
    const { zoom } = config

    const options = {
      transformEnabled: zoom && zoom.transformEnabled ? zoom.transformEnabled : true,
      minScale: zoom && zoom.minScale ? zoom.minScale : 0.25,
      maxScale: zoom && zoom.maxScale ? zoom.maxScale : 2,
      limitToBounds: false,
      limitToWrapper: false,
      centerContent: false,
    }

    const doubleClickMode = config.readonly ? 'zoomOut' : 'zoomIn'

    return (
      <CanvasContext.Provider
        value={{
          offsetX: this.state.offsetX,
          offsetY: this.state.offsetY,
          zoomScale: scale,
        }}
      >
        <ComponentOuter config={config} ref={this.ref}>
          <TransformWrapper
            defaultPositionX={position.x}
            defaultPositionY={position.y}
            positionX={position.x}
            positionY={position.y}
            scale={scale}
            options={options}
            zoomIn={zoom && zoom.zoomIn ? zoom.zoomIn : { step: 300 }}
            zoomOut={zoom && zoom.zoomOut ? zoom.zoomOut : { step: 300 }}
            pan={zoom && zoom.pan ? zoom.pan : { disabled: false }}
            wheel={zoom && zoom.wheel ? zoom.wheel : { disabled: false, step: 75 }}
            doubleClick={{ disabled: true, step: 10, mode: doubleClickMode }}
            pinch={{ disabled: false }}
            onWheel={(data: any) => onZoomCanvas({ config, data })}
            onWheelStop={(data: any) => onZoomCanvas({ config, data })}
            onPanning={(data: any) => onDragCanvas({ config, data })}
            onPanningStop={(data: any) => onDragCanvasStop({ config, data })}
          >
            <TransformComponent>
              <ComponentInner
                config={config}
                children={children}
                onClick={onCanvasClick}
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent) => {
                  // delete or backspace keys
                  if (e.keyCode === 46 || e.keyCode === 8) {
                    onDeleteKey({ config })
                  }
                }}
                onDrop={(e) => {
                  const data = JSON.parse(
                    e.dataTransfer.getData(REACT_FLOW_CHART),
                  )
                  if (data) {
                    onCanvasDrop({
                      config,
                      data,
                      position: {
                        x: e.clientX - (position.x + offsetX),
                        y: e.clientY - (position.y + offsetY),
                      },
                    })
                  }
                }}
                onDragOver={(e) => e.preventDefault()}
              />
            </TransformComponent>
          </TransformWrapper>
        </ComponentOuter>
      </CanvasContext.Provider>
    )
  }

  private updateSize = () => {
    const el = this.ref.current

    if (el) {
      const rect = el.getBoundingClientRect()

      if (el.offsetWidth !== this.state.width || el.offsetHeight !== this.state.height) {
        this.setState({ width: el.offsetWidth, height: el.offsetHeight })
        this.props.onSizeChange(el.offsetWidth, el.offsetHeight)
      }

      if (rect.left !== this.state.offsetX || rect.top !== this.state.offsetY) {
        this.setState({ offsetX: rect.left, offsetY: rect.top })
      }
    }
  }
}
