import * as React from 'react'
import styled from 'styled-components'
import { REACT_FLOW_CHART } from '../../src'

const Outer = styled.div`
  padding: 20px 30px;
  font-size: 14px;
  background: white;
  cursor: move;
`

export const SidebarItem = ({ type }: { type: string }) => {
  return (
    <Outer 
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type }))
      } }
    >
      { type }
    </Outer>
  )
}