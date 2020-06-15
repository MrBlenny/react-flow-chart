import * as React from 'react'
import { IConfig, IOnCanvasClick } from '../../'

export interface ICanvasInnerDefaultProps {
  config: IConfig
  children: any
  onClick: IOnCanvasClick
  tabIndex: number
  onKeyDown: (e: React.KeyboardEvent) => void
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
}

const styles = {
  position: 'relative',
  outline: '1px dashed rgba(0,0,0,0.1)',
  width: '10000px',
  height: '10000px',
  cursor: 'move'
}

export const CanvasInnerDefault = ({
  children,
  ...props
}: any): JSX.Element => {
  return (
    <div {...props} style={styles as any}>
      {children}
    </div>
  )
}
