import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { INode, REACT_FLOW_CHART } from '../../src'

export interface ISidebarItemProps {
  type: string
  ports: INode['ports']
  properties?: any
}

const useStyles = makeStyles({
  root: {
    padding: '20px 30px',
    fontSize: '14px',
    background: 'white',
    cursor: 'move'
  }
})

export const SidebarItem = ({ type, ports, properties }: ISidebarItemProps) => {
  const classes = useStyles()
  return (
    <div
      className={classes.root}
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
