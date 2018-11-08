import styled, { css } from 'styled-components'

export interface IPortsDefaultProps {
  side: 'top' | 'bottom' | 'left'
}

export const PortsDefault = styled.div<IPortsDefaultProps>`
  position: absolute;

  ${props => {
    if (props.side === 'top') {
      return css`
        width: 100%;
        left: 0;
        top: -12px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        > div {
          margin: 0 3px;
        }
      `
    } else if (props.side === 'bottom') {
      return css`
        width: 100%;
        left: 0;
        
        bottom: -12px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        > div {
          margin: 0 3px;
        }
      `
    } else if (props.side === 'left') {
      return css`
        height: 100%;
        top: 0;
        left: -12px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        > div {
          margin: 3px 0;
        }
      `
    } else {
      return css`
        height: 100%;
        top: 0;
        right: -12px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        > div {
          margin: 3px 0;
        }
      `
    }
  }}
`
