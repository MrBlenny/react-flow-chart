import * as React from 'react'
import styled from 'styled-components'
import { IConfig, IPort } from '../../'

export interface IPortDefaultProps {
  config: IConfig
  port: IPort
  isSelected: boolean
  isHovered: boolean
  isLinkSelected: boolean
  isLinkHovered: boolean
}

const PortDefaultOuter = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover > div {
    background: cornflowerblue;
  }
`

const PortDefaultInner = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background:  ${(props) => props.active ? 'cornflowerblue' : 'grey' };
  cursor: pointer;
`

export const PortDefault = ({ isLinkSelected, isLinkHovered }: IPortDefaultProps) => (
  <PortDefaultOuter>
    <PortDefaultInner
      active={isLinkSelected || isLinkHovered}
    />
  </PortDefaultOuter>
)
