import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import { FlowChart } from '../src'
import * as actions from '../src/container/actions'
import { Content, Page, Sidebar } from './components'
import { chartSimple } from './misc/exampleChartState'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  message: {
    margin: '10px',
    padding: '10px',
    lineHeight: '1.4em'
  },
  button: {
    padding: '10px 15px',
    background: 'cornflowerblue',
    color: 'white',
    borderRadius: '3px',
    textAlign: 'center',
    transition: '0.3s ease all',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
    },
    '&:active': {
      background: '#5682d2'
    }
  }
})

const Message = ({ children, ...props }: any) => {
  const classes = useStyles()
  return (
    <div className={classes.message} {...props}>
      {children}
    </div>
  )
}
const Button = ({ children, ...props }: any) => {
  const classes = useStyles()
  return (
    <div className={classes.button} {...props}>
      {children}
    </div>
  )
}

export class SelectedSidebar extends React.Component {
  public state = cloneDeep(chartSimple)
  public render() {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) => (...args: any) =>
      this.setState(func(...args))
    ) as typeof actions

    return (
      <Page>
        <Content>
          <FlowChart chart={chart} callbacks={stateActions} />
        </Content>
        <Sidebar>
          {chart.selected.type ? (
            <Message>
              <div>Type: {chart.selected.type}</div>
              <div>ID: {chart.selected.id}</div>
              <br />
              {/*
                We can re-use the onDeleteKey action. This will delete whatever is selected.
                Otherwise, we have access to the state here so we can do whatever we want.
              */}
              <Button onClick={() => stateActions.onDeleteKey({})}>
                Delete
              </Button>
            </Message>
          ) : (
            <Message>Click on a Node, Port or Link</Message>
          )}
        </Sidebar>
      </Page>
    )
  }
}
