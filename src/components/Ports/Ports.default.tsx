import * as React from 'react'
import { PortsGroupDefault } from '../../'

export interface IPortsDefaultProps {
  children: Array<React.ReactElement<any>>
}

export const PortsDefault = ({ children }: IPortsDefaultProps) => {
  return (
    <div>
      <PortsGroupDefault side="top">
        {children.filter((child) => ['input', 'top'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault side="bottom">
        {children.filter((child) => ['output', 'bottom'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault side="right">
        {children.filter((child) => ['right'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault side="left">
        {children.filter((child) => ['left'].includes(child.props.port.type))}
      </PortsGroupDefault>
    </div>
  )
}
