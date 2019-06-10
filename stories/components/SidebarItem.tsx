import * as React from 'react'
import styled from 'styled-components'
import { INode, REACT_FLOW_CHART } from '../../src'

const Outer = styled.div`
  padding: 20px 30px;
  font-size: 14px;
  background: white;
  cursor: move;
`

export interface ISidebarItemProps {
  type: string,
  ports: INode['ports'],
  properties?: any,
  size?: any,
}

export const SidebarItem = ({ type, ports, properties, size }: ISidebarItemProps) => {
  return (
    <Outer
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties, size }))
      } }
    >
      {type}
    </Outer>
  )
}
