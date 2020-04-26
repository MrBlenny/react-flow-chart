import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import styled from 'styled-components'
import { FlowChart } from '../src'
import * as actions from '../src/container/actions'
import { Content, Page, Sidebar } from './components'
import { chartSimple } from './misc/exampleChartState'

export const Message = styled.div`
  margin: 10px;
  padding: 10px;
  line-height: 1.4em;
`

export const Button = styled.div`
  padding: 10px;
  background: cornflowerblue;
  color: white;
  border-radius: 3px;
  text-align: center;
  transition: 0.3s ease all;
  margin: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  &:active {
    background: #5682d2;
  }
`

export class Zoom extends React.Component {
  public state = cloneDeep(chartSimple)
  public render () {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) => (...args: any) =>
      this.setState(func(...args)),
    ) as typeof actions

    return (
      <Page>
        <Content>
          <FlowChart chart={chart} callbacks={stateActions} />
        </Content>
        <Sidebar>
          <Message>
            Current zoom:
            {chart.scale}
          </Message>

          <Button
            onClick={() => {
              this.setState({
                scale: this.state.scale + 0.1 ,
              })
            }}
          >
            +
          </Button>

          <Button
            onClick={() => {
              this.setState({
                scale: this.state.scale - 0.1 ,
              })
            }}
          >
            -
          </Button>
        </Sidebar>
      </Page>
    )
  }
}
