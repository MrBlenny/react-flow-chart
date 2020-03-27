import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import styled from 'styled-components'
import { FlowChart } from '../src'
import * as actions from '../src/container/actions'
import { Content, Page, Sidebar } from './components'
import { chartSimple } from './misc/exampleChartState'

const Message = styled.div`
margin: 10px;
padding: 10px;
background: rgba(0,0,0,0.05);
`

export class Zoom extends React.Component {
  public state = cloneDeep(chartSimple)
  public render () {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) =>
      (...args: any) => this.setState(func(...args))) as typeof actions

    return (
      <Page>
        <Content>
          <FlowChart
            chart={chart}
            callbacks={stateActions}
          />
        </Content>
        <Sidebar>
          <Message>
          Use the Controls below to Zoom in and Out: Current zoom: {chart.zoom}
          </Message>
           <button onClick={() => {
            console.log('Setting Zoom In')
            this.setState({ zoom: 1.25 })
          }}>Zoom In</button>
          <button onClick={() => {
            console.log('Setting Zoom Out')
            this.setState({ zoom: .75 })
          }}>Zoom Out</button>
        </Sidebar>
      </Page>
    )
  }
}
