import { throttle } from 'lodash'
import * as React from 'react'

/** A little HOC to throttle component renders */
export const throttleRender = (wait: number, options?: any) => {
  return (ComponentToThrottle: any) => {
    return class Throttle extends React.Component<any, any> {
      public throttledSetState: any
      constructor (props: any, context: any) {
        super(props, context)
        this.state = {}
        this.throttledSetState = throttle((nextState: any) => this.setState(nextState), wait, options)
      }
      public shouldComponentUpdate (nextProps: any, nextState: any) {
        return this.state !== nextState
      }
      public componentWillMount () {
        this.throttledSetState({ props: this.props })
      }
      public componentWillReceiveProps (nextProps: any) {
        this.throttledSetState({ props: nextProps })
      }
      public componentWillUnmount () {
        this.throttledSetState.cancel()
      }
      public render () {
        return <ComponentToThrottle {...this.state.props} />
      }
    }
  }
}
