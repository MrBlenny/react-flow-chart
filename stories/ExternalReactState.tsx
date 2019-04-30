import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import ReactJson from 'react-json-view'
import { FlowChart } from '../src'
import * as actions from '../src/container/actions'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'
import { throttleRender } from './utils/throttleRender'

const ReactJsonThrottled = throttleRender(200)(ReactJson)

/**
 * State is external to the <FlowChart> Element
 *
 * You could easily move this state to Redux or similar by creating your own callback actions.
 */
export class ExternalReactState extends React.Component {
  public state = cloneDeep(chartSimple)
  public render () {
    const chart = this.state
    const stateActions = mapValues(actions, (func: any) =>
      (...args: any) => this.setState(func(...args))) as typeof actions

    return (
      <Page>
        <FlowChart
          chart={chart}
          callbacks={stateActions}
        />
        <ReactJsonThrottled
          src={chart}
          enableClipboard={false}
          style={{ overflowY: 'scroll', width: '400px' }}
        />
      </Page>
    )
  }
}
