import * as React from 'react'
import { INode, REACT_FLOW_CHART } from '../../src'

export interface ISidebarItemProps {
  type: string
  ports: INode['ports']
  properties?: any
}

export const SidebarItem = ({ type, ports, properties }: ISidebarItemProps) => {
  return (
    <div
      style={{
        padding: '20px 30px',
        fontSize: '14px',
        background: 'white',
        cursor: 'move'
      }}
      draggable={true}
      onDragStart={(event) => {
        event.dataTransfer.setData(
          REACT_FLOW_CHART,
          JSON.stringify({ type, ports, properties })
        )
      }}
    >
      {type}
    </div>
  )
}
