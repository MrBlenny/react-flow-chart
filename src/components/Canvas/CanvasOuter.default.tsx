import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { IConfig } from '../../types'

export interface ICanvasOuterDefaultProps {
  config: IConfig
  children: any
  ref?: React.Ref<any>
}

const useStyles = makeStyles({
  root: {
    position: 'relative',
    backgroundSize: '20px 20px',
    backgroundColor: 'rgba(0,0,0,0.08)',
    backgroundImage:
      'linear-gradient(90deg, hsla(0, 0%, 100%, 0.2) 1px, transparent 0 ), linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 1px, transparent 0)',
    width: '100%',
    overflow: 'hidden',
    cursor: 'not-allowed'
  }
})
export const CanvasOuterDefault = React.forwardRef(
  ({ children, ...props }: ICanvasOuterDefaultProps, ref: React.Ref<any>) => {
    const classes = useStyles()
    return (
      <div className={classes.root} ref={ref}>
        {children}
      </div>
    )
  }
)
