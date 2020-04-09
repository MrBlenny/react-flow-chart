import * as React from 'react'
import { FlowChart, IChart, IConfig, IFlowChartComponents } from '../'
import * as actions from './actions'
import mapValues from './utils/mapValues'

export interface IFlowChartWithStateProps {
  initialValue: IChart
  Components?: IFlowChartComponents
  config?: IConfig
  callbacks?: any
  onNodeClick?: any
  onLinkClick?: any
}

/**
 * Flow Chart With State
 */
export class FlowChartWithState extends React.Component<IFlowChartWithStateProps, IChart> {
  public state: IChart
  private stateActions = mapValues(actions, (func: any) =>
      (...args: any) => this.setState(func(...args)))

  constructor (props: IFlowChartWithStateProps) {
    super(props)
    this.state = props.initialValue
  }
  
  
  public static defaultProps = {
    callbacks: {},
    onNodeClick:()=>{return},
    onLinkClick:()=>{return}
  };
  
  
  public render () {
    const { Components, config } = this.props

    return (
      <FlowChart
        chart={this.state}
        callbacks={{
          ...this.stateActions, 
          onNodeClick:(nodeId)=>{this.props.onNodeClick(nodeId); return this.stateActions.onNodeClick(nodeId)}, onDeleteKey:(x)=>console.log(x),
          onLinkClick:(linkId)=>{this.props.onNodeClick(linkId); return this.stateActions.onLinkClick(linkId)},
          ...this.props.callbacks
        }} //...this.props.callbacks 
        Components={Components}
        config={config}
      />
    )
  }
}
