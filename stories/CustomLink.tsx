import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import styled from 'styled-components'
import { FlowChart, LinkDefault } from '../src'
import * as actions from '../src/container/actions'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

const Label = styled.div`
  position: absolute;
`

const Button = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 5px;
  height: 15px;
  width: 15px;
  transform: translate(50%, -50%);
  background: red;
  color: white;
  border-radius: 50%;
  transition: 0.3s ease all;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
  }
`

const LabelContent = styled.div`
  padding: 5px 10px;
  background: cornflowerblue;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
`

export class CustomLinkDemo extends React.Component {
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
          Components={{
            Link: (props) => {
              const { startPos, endPos, onLinkClick, link } = props
              const centerX = startPos.x + (endPos.x - startPos.x) / 2
              const centerY = startPos.y + (endPos.y - startPos.y) / 2
              return (
                <>
                  <LinkDefault {...props} />
                  <Label style={{ left: centerX, top: centerY }}>
                     { props.link.properties && props.link.properties.label && (
                       <LabelContent>{props.link.properties && props.link.properties.label}</LabelContent>
                     )}
                    <Button
                      onClick={(e) => {
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
            },
          }}
        />
      </Page>
    )
  }
}
