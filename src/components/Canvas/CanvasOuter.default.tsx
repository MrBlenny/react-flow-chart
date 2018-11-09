import styled from 'styled-components'

export interface ICanvasOuterDefaultProps {
  children: any
}

export const CanvasOuterDefault = styled.div<ICanvasOuterDefaultProps>`
  position: relative;
  background-size: 20px 20px;
  background-color: rgba(0,0,0,0.08);
  background-image:
    linear-gradient(90deg,hsla(0,0%,100%,.2) 1px,transparent 0),
    linear-gradient(180deg,hsla(0,0%,100%,.2) 1px,transparent 0);
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: not-allowed;
`
