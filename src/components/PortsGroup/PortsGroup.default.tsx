import * as React from 'react'
import { IConfig } from '../../'

export interface IPortsGroupDefaultProps {
  children: JSX.Element[] | JSX.Element[]
  config: IConfig
  side: 'top' | 'bottom' | 'left' | 'right'
}

const stylesBySide = {
  top: {
    width: '100%',
    left: '0',
    top: '-12px',
    flexDirection: 'row'
    // '> div': {
    //   margin: '0 3px',
    // }
  },
  bottom: {
    width: '100%',
    left: '0',
    bottom: '-12px',
    flexDirection: 'row'
    // '> div': {
    //   margin: '0 3px',
    // }
  },
  left: {
    width: '100%',
    top: '0',
    left: '-12px',
    flexDirection: 'column'
    // '> div': {
    //   margin: '0 3px',
    // }
  },
  right: {
    width: '100%',
    top: '0',
    right: '-12px',
    flexDirection: 'column'
    // '> div': {
    //   margin: '0 3px',
    // }
  }
}

export const PortsGroupDefault = ({
  side = 'right',
  children
}: IPortsGroupDefaultProps) => {
  return <div style={stylesBySide[side] as any}>{children}</div>
}
