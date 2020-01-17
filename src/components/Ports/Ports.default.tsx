import * as React from 'react'
import { IConfig, PortsGroupDefault } from '../../'

export interface IPortsDefaultProps {
  config: IConfig
  children: Array<React.ReactElement<any>>
}

export const PortsDefault = ({ children, config }: IPortsDefaultProps) => {
  return (
    <div data-ports>
      <PortsGroupDefault config={config} side="top" data-ports-top>
        {children.filter((child) => ['input', 'top'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="bottom" data-ports-bottom>
        {children.filter((child) => ['output', 'bottom'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="right" data-ports-right>
        {children.filter((child) => ['right'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="left" data-ports-left>
        {children.filter((child) => ['left'].includes(child.props.port.type))}
      </PortsGroupDefault>
    </div>
  )
}
