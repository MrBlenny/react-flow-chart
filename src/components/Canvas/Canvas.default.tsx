import styled from 'styled-components'

export interface ICanvasDefaultProps {
  children: any
}

export const CanvasDefault = styled.div<ICanvasDefaultProps>`
  position: relative;
  background: lightgrey;
  width: 100%;
  height: 1200px;
`
