import * as React from 'react'
import { ILink, INode, IOnLinkMouseEnter, IOnLinkMouseLeave } from '../../'
import { ILinkDefaultProps, LinkDefault } from './Link.default'
import { getLinkPosition } from './utils'

export interface ILinkWrapperProps {
  link: ILink
  isSelected: boolean
  isHovered: boolean
  fromNode: INode
  toNode: INode | undefined
  onLinkMouseEnter: IOnLinkMouseEnter
  onLinkMouseLeave: IOnLinkMouseLeave
  onLinkClick: IOnLinkMouseLeave
  Component?: React.ElementType<ILinkDefaultProps>
}

export const LinkWrapper = React.memo(({
  Component = LinkDefault,
  link,
  onLinkMouseEnter,
  onLinkMouseLeave,
  onLinkClick,
  isSelected,
  isHovered,
  fromNode,
  toNode,
}: ILinkWrapperProps) => {
  const startPos = getLinkPosition(fromNode, link.from.portId)

  const endPos = toNode && link.to.portId
    ? getLinkPosition(toNode, link.to.portId)
    : link.to.position

  // Don't render the link yet if there is no end pos
  // This will occur if the link was just created
  if (!endPos) {
    return null
  }

  return (
    <Component
      link={link}
      startPos={startPos}
      endPos={endPos}
      onLinkMouseEnter={onLinkMouseEnter}
      onLinkMouseLeave={onLinkMouseLeave}
      onLinkClick={onLinkClick}
      isSelected={isSelected}
      isHovered={isHovered}
    />
  )
})
