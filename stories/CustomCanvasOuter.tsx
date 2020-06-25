import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { FlowChartWithState, ICanvasOuterDefaultProps } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

const useStyles = makeStyles({
  canvasOuterCustom: {
    position: 'relative',
    backgroundSize: '10px 10px',
    backgroundColor: '#4f6791',
    backgroundImage:
      'linear-gradient(90deg,hsla(0, 0%, 100%, 0.1) 1px,transparent 0),linear-gradient(180deg, hsla(0, 0%, 100%, 0.1) 1px, transparent 0)',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    cursor: 'not-allowed'
  }
})

const CanvasOuterCustom = React.forwardRef(
  ({ children, ...props }: ICanvasOuterDefaultProps, ref: React.Ref<any>) => {
    const classes = useStyles()
    return (
      <div className={classes.canvasOuterCustom} ref={ref}>
        {children}
      </div>
    )
  }
)

export const CustomCanvasOuterDemo = () => {
  return (
    <Page>
      <FlowChartWithState
        initialValue={chartSimple}
        Components={{
          CanvasOuter: CanvasOuterCustom
        }}
      />
    </Page>
  )
}
