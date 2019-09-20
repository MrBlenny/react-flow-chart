import * as React from 'react'
import { IConfig, ILink, INode, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkClick } from '../../'
import { ILinkDefaultProps, LinkDefault } from './Link.default'
import { getLinkPosition } from './utils'
import { IOnLinkBaseEvent } from 'types'

export interface ILinkWrapperProps {
  config: IConfig,
  link: ILink
  isSelected: boolean
  isHovered: boolean
  fromNode: INode
  toNode: INode | undefined
  onLinkMouseEnter: IOnLinkMouseEnter
  onLinkMouseLeave: IOnLinkMouseLeave
  onLinkClick: IOnLinkClick
  Component?: React.FunctionComponent<ILinkDefaultProps>
}

export const LinkWrapper = React.memo(({
  config,
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

  const onLinkClickWrapper = (input: IOnLinkBaseEvent ) => {
    if (!config.readonly) {
      return onLinkClick(input)
    }
  }
  const onLinkMouseEnterWrapper = (input: IOnLinkBaseEvent ) => {
    if (!config.readonly) {
      return onLinkMouseEnter(input)
    }
  }

  return (
    <Component
      config={config}
      link={link}
      startPos={startPos}
      endPos={endPos}
      onLinkMouseEnter={onLinkMouseEnterWrapper}
      onLinkMouseLeave={onLinkMouseLeave}
      onLinkClick={onLinkClickWrapper}
      isSelected={isSelected}
      isHovered={isHovered}
    />
  )
})
