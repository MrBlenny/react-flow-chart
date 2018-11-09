import * as React from 'react'
import { filter } from 'lodash'
import { PortsGroupDefault } from '../../'

export interface IPortsDefaultProps {
  children: any
}

export const PortsDefault = ({ children }: IPortsDefaultProps) => {
  return (
    <div>
      <PortsGroupDefault side="top">
        { filter(children, child => ['input', 'top'].includes(child.props.port.type)) }
      </PortsGroupDefault>
      <PortsGroupDefault side="bottom">
        { filter(children, child => ['output', 'bottom'].includes(child.props.port.type)) }
      </PortsGroupDefault>
      <PortsGroupDefault side="right">
        { filter(children, child => ['right'].includes(child.props.port.type)) }
      </PortsGroupDefault>
      <PortsGroupDefault side="left">
        { filter(children, child => ['left'].includes(child.props.port.type)) }
      </PortsGroupDefault>
    </div>
  )
}