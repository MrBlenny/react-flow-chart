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

  // TODO: Pull in Link position.

  let startPos = getLinkPosition(fromNode, link.from.portId)

  let endPos = toNode && link.to.portId ? getLinkPosition(toNode, link.to.portId) : link.to.position

  // if (link.id === '0017517a-7804-4390-a320-368bfc576f7c') {
  //   console.log('startPos: ', startPos)
  //   console.log('endPos: ', endPos)
  //   console.log('fromNode: ', fromNode)
  //   console.log('toNode: ', toNode)
  //   console.log('fromNode Port: ', fromNode.ports[link.from.portId])
  //   if (toNode && link.to.portId) console.log('toNode Port: ', toNode.ports[link.to.portId])
  // }

  // Don't render the link yet if there is no end pos
  // This will occur if the link was just created
  if (!endPos) {
    return null
  }

  return (
    <Component
      config={config}
      link={link}
      startPos={startPos}
      endPos={endPos}
      onLinkMouseEnter={config.readonly ? noop : onLinkMouseEnter}
      onLinkMouseLeave={config.readonly ? noop : onLinkMouseLeave}
      onLinkClick={config.readonly ? noop : onLinkClick}
      isSelected={isSelected}
      isHovered={isHovered}
    />
  )
})
