import * as React from 'react'
import styled from 'styled-components'
import { FlowChartWithState, ICanvasOuterDefaultProps } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

const CanvasOuterCustom = styled.div<ICanvasOuterDefaultProps>`
  position: relative;
  background-size: 10px 10px;
  background-color: #4f6791;
  background-image:
    linear-gradient(90deg,hsla(0,0%,100%,.1) 1px,transparent 0),
    linear-gradient(180deg,hsla(0,0%,100%,.1) 1px,transparent 0);
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: not-allowed;
` as any

export const CustomCanvasOuterDemo = () => {
  return (
    <Page>
      <FlowChartWithState
        initialValue={chartSimple}
        Components={ {
          CanvasOuter: CanvasOuterCustom,
        }}
      />
    </Page>
  )
}
