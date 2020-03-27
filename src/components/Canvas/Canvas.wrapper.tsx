import * as React from 'react'
// import DraggableCore from 'react-draggable'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { IConfig, IOnCanvasClick, IOnCanvasDrop, IOnDeleteKey, IOnZoomCanvas, IOnDragCanvas, REACT_FLOW_CHART } from '../../'
import CanvasContext from './CanvasContext'
import { ICanvasInnerDefaultProps } from './CanvasInner.default'
import { ICanvasOuterDefaultProps } from './CanvasOuter.default'

export interface ICanvasWrapperProps {
  config: IConfig
  position: {
    x: number
    y: number,
  }
  zoom: number,
  onZoomCanvas: IOnZoomCanvas
  onDragCanvas: IOnDragCanvas
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
  disableSelection: boolean
}

export class CanvasWrapper extends React.Component<ICanvasWrapperProps, IState> {
  public state = {
    width: 0,
    height: 0,
    offsetX: 0,
    offsetY: 0,
    disableSelection: false
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
      ComponentInner,
      ComponentOuter,
      position,
      zoom,
      onZoomCanvas,
      onDragCanvas,
      children,
      onCanvasDrop,
    } = this.props
    const {
      offsetX,
      offsetY,
      disableSelection,
    } = this.state

    const options = {
      minScale: .5,
      maxScale: 2,
      limitToBounds: false,
      limitToWrapper: false,
      centerContent: false
    }

    config.readonly = disableSelection

    console.log(zoom)

    return (
      <CanvasContext.Provider value={{ offsetX: this.state.offsetX, offsetY: this.state.offsetY, zoomScale: zoom }}>
        <ComponentOuter config={config} ref={this.ref}>
          <TransformWrapper 
            scale={zoom}
            options={options}
            zoomIn={{ disabled: false, step: 300 }}
            wheel={{ disabled: false, step: 100 }}
            doubleClick={{ disabled: false, step: 50, mode: 'zoomIn' }}
            pinch={{ disabled: false }}
            onWheel={(data: any) => onZoomCanvas({ config, data })}
            onPinching={(data: any) => onZoomCanvas({ config, data })}
            onPanning={(data: any) => onDragCanvas({ config, data: { x: data.positionX, y: data.positionY } })}>
            <TransformComponent>
              <ComponentInner
                config={config}
                children={children}
                onClick={() => console.log('onClick')}
                tabIndex={0}
                onKeyDown={ (e: React.KeyboardEvent) => {
                  // delete or backspace keys
                  if (e.keyCode === 91 && !disableSelection) {
                    this.setState({ disableSelection: true })
                  }
                }}
                onKeyUp={ (e: React.KeyboardEvent) => {
                  // delete or backspace keys
                  if (e.keyCode === 91 && disableSelection) {
                    this.setState({ disableSelection: false })
                  }
                }}
                onDrop={ (e) => {
                  const data = JSON.parse(e.dataTransfer.getData(REACT_FLOW_CHART))
                  if (data) {
                    onCanvasDrop({ config, data, position: {
                      x: e.clientX - (position.x + offsetX),
                      y: e.clientY - (position.y + offsetY),
                    }})
                  }
                } }
                onDragOver={(e) => e.preventDefault()}
              />
            </TransformComponent>
          </TransformWrapper>
        </ComponentOuter>
      </CanvasContext.Provider>
    )

    return (onZoomCanvas)

    // return (
    //   <CanvasContext.Provider value={{ offsetX: this.state.offsetX, offsetY: this.state.offsetY }}>
    //     <ComponentOuter config={config} ref={this.ref}>
    //       <DraggableCore
    //         axis="both"
    //         defaultPosition={config.defaultPosition}
    //         position={position}
    //         grid={config.grid}
    //         onDrag={(event, data) => onDragCanvas({ config, event, data })}
    //         disabled={config.disableCanvas}
    //       >
    //         <ComponentInner
    //           config={config}
    //           children={children}
    //           onClick={() => onCanvasClick({ config })}
    //           tabIndex={0}
    //           onKeyDown={ (e: React.KeyboardEvent) => {
    //             // delete or backspace keys
    //             if (e.keyCode === 46 || e.keyCode === 8) {
    //               onDeleteKey({ config })
    //             }
    //           }}
    //           onDrop={ (e) => {
    //             const data = JSON.parse(e.dataTransfer.getData(REACT_FLOW_CHART))
    //             if (data) {
    //               onCanvasDrop({ config, data, position: {
    //                 x: e.clientX - (position.x + offsetX),
    //                 y: e.clientY - (position.y + offsetY),
    //               }})
    //             }
    //           } }
    //           onDragOver={(e) => e.preventDefault()}
    //         />
    //       </DraggableCore>
    //     </ComponentOuter>
    //   </CanvasContext.Provider>
    // )
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
