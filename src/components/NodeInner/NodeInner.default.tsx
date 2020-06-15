import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { IConfig, INode } from '../../'

export interface INodeInnerDefaultProps {
  config: IConfig
  node: INode
}

const useStyles = makeStyles({
  root: {
    padding: '40px 30px'
  }
})

export const NodeInnerDefault = ({ node, config }: INodeInnerDefaultProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>Type: {node.type}</div>
    </div>
  )
}
