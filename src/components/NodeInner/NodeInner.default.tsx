import * as React from 'react'
import styled from 'styled-components'
import { INode } from '../../'

export interface INodeInnerDefaultProps {
  node: INode
  nodeProps?: any
}

const Outer = styled.div`
  padding: 40px 30px;
`

export const NodeInnerDefault = ({ node }: INodeInnerDefaultProps) => {
  return (
    <Outer>
      <div>Type: {node.type}</div>
    </Outer>
  )
}
