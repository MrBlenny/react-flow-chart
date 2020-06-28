import styled, { css } from 'styled-components'
import { IConfig, INode } from '../../'

export interface INodeDefaultProps {
  className?: string
  config: IConfig
  node: INode
  children: any
  isSelected: boolean
  onClick: (e: React.MouseEvent) => void
  onDoubleClick: (e: React.MouseEvent) => void
  onMouseEnter: (e: React.MouseEvent) => void
  onMouseLeave: (e: React.MouseEvent) => void
  style?: object
  ref?: React.Ref<any>
}

export const NodeDefault = styled.div<INodeDefaultProps>`
  position: absolute;
  transition: 0.3s ease box-shadow, 0.3s ease margin-top;
  background: white;
  border-radius: 4px;
  min-width: 200px;
  ${(props) => props.isSelected && css`
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
    margin-top: -2px
    `
  }
` as any
