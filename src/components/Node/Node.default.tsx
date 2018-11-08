import styled, { css } from 'styled-components'
import { INode } from 'types';

export interface INodeDefaultProps {
  node: INode
  children: any
  isSelected: boolean
  onClick: (e: React.MouseEvent) => void
}

export const NodeDefault = styled.div<INodeDefaultProps>`
  padding: 40px 30px;
  background: white;
  position: absolute;
  border-radius: 4px;
  width: 300px;
  margin-top: 0;
  transition: 0.3s ease box-shadow, 0.3s ease margin-top;
  ${props => props.isSelected && css`
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
    margin-top: -2px
    `
  }
` as any
