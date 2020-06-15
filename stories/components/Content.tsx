import * as React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    overflow: 'hidden'
  }
})

export const Content = (props: any) => {
  const classes = useStyles()
  return <div {...props} className={classes.root} />
}
