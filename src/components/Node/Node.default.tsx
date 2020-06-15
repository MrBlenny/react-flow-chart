import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

import { IConfig, INode } from '../../'

export interface INodeDefaultProps {
  config: IConfig
  node: INode
  children: any
  isSelected: boolean
  onClick: (e: React.MouseEvent) => void
  onDoubleClick: (e: React.MouseEvent) => void
  onMouseEnter: (e: React.MouseEvent) => void
  onMouseLeave: (e: React.MouseEvent) => void
  style?: object
  ref?: React.Ref<any>
}

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    transition: '0.3s ease box-shadow, 0.3s ease margin-top',
    background: 'white',
    borderRadius: '4px',
    minWidth: '200px'
  },
  isSelected: {
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    marginTop: '-2px'
  }
})

export const NodeDefault = React.forwardRef(
  ({ isSelected, ...props }: INodeDefaultProps, ref: React.Ref<any>) => {
    const classes = useStyles()

    return (
      <div
        {...props}
        ref={ref}
        className={clsx(classes.root, { [classes.isSelected]: isSelected })}
      />
    )
  }
)
