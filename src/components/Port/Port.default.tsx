import * as React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import { IConfig, IPort } from '../../'

export interface IPortDefaultProps {
  config: IConfig
  port: IPort
  isSelected: boolean
  isHovered: boolean
  isLinkSelected: boolean
  isLinkHovered: boolean
}

const useStyles = makeStyles({
  portDefaultOuter: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: 'white',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover > div': {
      background: 'cornflowerblue'
    }
  },
  portDefaultInner: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    background: 'grey'
  },
  active: {
    background: 'cornflowerblue'
  }
})

export const PortDefault = ({
  isLinkSelected,
  isLinkHovered,
  config
}: IPortDefaultProps) => {
  const classes = useStyles()

  const isActive = !config.readonly && (isLinkSelected || isLinkHovered)
  return (
    <div className={classes.portDefaultOuter}>
      <div
        className={clsx(classes.portDefaultInner, {
          [classes.active]: isActive
        })}
      />
    </div>
  )
}
