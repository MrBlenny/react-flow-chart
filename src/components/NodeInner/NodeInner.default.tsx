import * as React from 'react'
import { IConfig, INode } from '../../'

export interface INodeInnerDefaultProps {
  config: IConfig
  node: INode
}

export const NodeInnerDefault = ({ node }: INodeInnerDefaultProps) => {
  return (
    <div style={{ padding: '40px 30px' }}>
      <div>Type: {node.type}</div>
    </div>
  )
}
