import * as React from 'react'
import { IConfig, IPort } from '../../'

export interface IPortDefaultProps {
  config: IConfig
  port: IPort
  isSelected: boolean
  isHovered: boolean
  isLinkSelected: boolean
  isLinkHovered: boolean
}

const PortDefaultOuter = ({ children }: { children: JSX.Element }) => {
  return (
    <div
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: 'white',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        // '&:hover > div': {
        //   background: 'cornflowerblue'
        // },
      }}
    >
      {children}
    </div>
  )
}

const PortDefaultInner = ({ active }: { active: boolean }) => {
  return (
    <div
      style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        cursor: 'pointer',
        background: active ? 'cornflowerblue' : 'grey'
      }}
    />
  )
}

export const PortDefault = ({
  isLinkSelected,
  isLinkHovered,
  config
}: IPortDefaultProps) => (
  <PortDefaultOuter>
    <PortDefaultInner
      active={!config.readonly && (isLinkSelected || isLinkHovered)}
    />
  </PortDefaultOuter>
)
