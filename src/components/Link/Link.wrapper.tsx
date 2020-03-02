import * as React from 'react'
import { IConfig, ILink, INode, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave } from '../../'
import { noop } from '../../utils'
import { ILinkDefaultProps, LinkDefault } from './Link.default'
import { getLinkPosition } from './utils'

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
  matrix?: number[][]
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
  matrix,
}: ILinkWrapperProps) => {
  const startPos = getLinkPosition(fromNode, link.from.portId)
  const fromPort = fromNode.ports[link.from.portId]

  const endPos = toNode && link.to.portId
    ? getLinkPosition(toNode, link.to.portId)
    : link.to.position
  const toPort = toNode && link.to.portId ? toNode.ports[link.to.portId] : undefined

  // Don't render the link yet if there is no end pos
  // This will occur if the link was just created
  if (!endPos) {
    return null
  }

  return (
    <Component
      config={config}
      link={link}
      matrix={matrix}
      startPos={startPos}
      endPos={endPos}
      fromPort={fromPort}
      toPort={toPort}
      onLinkMouseEnter={config.readonly ? noop : onLinkMouseEnter}
      onLinkMouseLeave={config.readonly ? noop : onLinkMouseLeave}
      onLinkClick={config.readonly ? noop : onLinkClick}
      isSelected={isSelected}
      isHovered={isHovered}
    />
  )
})
