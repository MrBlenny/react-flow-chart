import styled from 'styled-components'

export interface INodeDefaultProps {
  children: any
}

export const NodeDefault = styled.div<INodeDefaultProps>`
  padding: 20px 30px;
  background: white;
  position: absolute;
  border-radius: 4px;
` as any
