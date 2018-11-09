import * as React from 'react'
import styled from 'styled-components'
import { INode } from 'types'

export interface INodeInnerDefaultProps {
  node: INode
}

const Outer = styled.div`
  background: white;
  border-radius: 4px;
  min-width: 200px;
  padding: 40px 30px;
`

export const NodeInnerDefault = ({ node }: INodeInnerDefaultProps) => {
  return (
    <Outer>
      <div>Type: { node.type }</div>
    </Outer>
  )
}
