import * as React from 'react'
import { IConfig, INode, PortsGroupDefault } from '../../'

export interface IPortsDefaultProps {
  className?: string
  config: IConfig
  node: INode
  children: Array<React.ReactElement<any>>
}

export const PortsDefault = ({ children, config, className }: IPortsDefaultProps) => {
  return (
    <div className={className}>
      <PortsGroupDefault config={config} side="top">
        {children.filter((child) => ['input', 'top'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="bottom">
        {children.filter((child) => ['output', 'bottom'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="right">
        {children.filter((child) => ['right'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="left">
        {children.filter((child) => ['left'].includes(child.props.port.type))}
      </PortsGroupDefault>
    </div>
  )
}
