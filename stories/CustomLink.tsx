import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { FlowChart, LinkDefault } from '../src'
import * as actions from '../src/container/actions'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

const useStyles = makeStyles({
  label: {
    position: 'absolute'
  },
  labelContent: {
    padding: '5px 10px',
    background: 'cornflowerblue',
    color: 'white',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    cursor: 'pointer'
  },
  button: {
    position: 'absolute',
    top: '0px',
    right: '0px',
    padding: '5px',
    height: '15px',
    width: '15px',
    transform: 'translate(50%, -50%)',
    background: 'red',
    color: 'white',
    borderRadius: '50%',
    transition: '0.3s ease all',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
    }
  }
})

const LabelContent = ({ children, ...props }: any) => {
  const classes = useStyles()
  return (
    <div className={classes.label} {...props}>
      {children}
    </div>
  )
}

const Label = ({ children, ...props }: any) => {
  const classes = useStyles()
  return (
    <div className={classes.label} {...props}>
      {children}
    </div>
  )
}

const Button = ({ children, ...props }: any) => {
  const classes = useStyles()
  return (
    <div className={classes.label} {...props}>
      {children}
    </div>
  )
}

export class CustomLinkDemo extends React.Component {
  public state = cloneDeep(chartSimple)
  public render() {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) => (...args: any) =>
      this.setState(func(...args))
    ) as typeof actions

    return (
      <Page>
        <FlowChart
          chart={chart}
          callbacks={stateActions}
          Components={{
            Link: (props) => {
              const { startPos, endPos, onLinkClick, link } = props
              const centerX = startPos.x + (endPos.x - startPos.x) / 2
              const centerY = startPos.y + (endPos.y - startPos.y) / 2
              return (
                <>
                  <LinkDefault {...props} />
                  <Label style={{ left: centerX, top: centerY }}>
                    {props.link.properties && props.link.properties.label && (
                      <LabelContent>
                        {props.link.properties && props.link.properties.label}
                      </LabelContent>
                    )}
                    <Button
                      onClick={(e: any) => {
                        onLinkClick({ linkId: link.id })
                        stateActions.onDeleteKey({})
                        e.stopPropagation()
                      }}
                    >
                      x
                    </Button>
                  </Label>
                </>
              )
            }
          }}
        />
      </Page>
    )
  }
}
