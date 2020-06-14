import * as React from 'react'
import { IConfig, INode } from '../../'

export interface INodeDefaultProps {
  config: IConfig
  node: INode
  children: any
  isSelected: boolean
  onClick: (e: React.MouseEvent) => void
  onDoubleClick: (e: React.MouseEvent) => void
  onMouseEnter: (e: React.MouseEvent) => void
  onMouseLeave: (e: React.MouseEvent) => void
  style?: object
  ref?: React.Ref<any>
}

const styles = {
  position: 'absolute',
  transition: '0.3s ease box-shadow, 0.3s ease margin-top',
  background: 'white',
  borderRadius: '4px',
  minWidth: '200px',
}

const stylesSelected = {
  ...styles,
  boxShadow: '0 10px 20px rgba(0,0,0,.1)',
  marginTop: '-2px',
}

export const NodeDefault = (props: INodeDefaultProps): JSX.Element => {
  return <div {...props} style={(props.isSelected ? stylesSelected : styles) as any} />
}
