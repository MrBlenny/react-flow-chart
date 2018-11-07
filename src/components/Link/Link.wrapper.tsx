import * as React from 'react'
import { ILink, IChart } from 'types'
import { getLinkPosition } from './utils'
import { ILinkDefaultProps, LinkDefault } from './Link.default';

export interface ILinkWrapperProps {
  link: ILink
  chart: IChart
  Component?: (props: ILinkDefaultProps) => JSX.Element
}

export const LinkWrapper = ({ 
  Component = LinkDefault,
  link,
  chart,
}: ILinkWrapperProps) => {
  const startPos = getLinkPosition(chart, link.from.nodeId, link.from.portId)

  const endPos = link.to.nodeId && link.to.portId 
    ? getLinkPosition(chart, link.to.nodeId, link.to.portId) 
    : link.to.position

  // Don't render the link yet if there is no end pos
  // This will occur if the link was just created
  if (!endPos) {
    return null
  }

  return (
    <Component startPos={ startPos } endPos={ endPos }/>
  )
}