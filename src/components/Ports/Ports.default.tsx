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
        { filter(children, ['props.port.type', 'input']) }
      </PortsGroupDefault>
      <PortsGroupDefault side="bottom">
        { filter(children, ['props.port.type', 'output']) }
      </PortsGroupDefault>
    </div>
  )
}