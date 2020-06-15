import * as React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    width: '300px',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0
  }
})

export const Sidebar = (props: any) => {
  const classes = useStyles()
  return <div {...props} className={classes.root} />
}
