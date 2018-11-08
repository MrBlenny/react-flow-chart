import * as React from 'react'
import { ILink, IChart, IOnLinkMouseEnter, IOnLinkMouseLeave } from 'types'
import { getLinkPosition } from './utils'
import { ILinkDefaultProps, LinkDefault } from './Link.default'

export interface ILinkWrapperProps {
  link: ILink
  chart: IChart
  onLinkMouseEnter: IOnLinkMouseEnter
  onLinkMouseLeave: IOnLinkMouseLeave
  onLinkClick: IOnLinkMouseLeave
  Component?: React.SFC<ILinkDefaultProps>
}

export const LinkWrapper = ({ 
  Component = LinkDefault,
  link,
  chart,
  onLinkMouseEnter,
  onLinkMouseLeave,
  onLinkClick
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
    <Component
      link={ link }
      startPos={ startPos } 
      endPos={ endPos }
      onLinkMouseEnter={ onLinkMouseEnter }
      onLinkMouseLeave={ onLinkMouseLeave }
      onLinkClick={ onLinkClick }
      isSelected={ chart.selected.type === 'link' && chart.selected.id === link.id }
      isHovered={ chart.hovered.type === 'link' && chart.hovered.id === link.id }
    />
  )
}