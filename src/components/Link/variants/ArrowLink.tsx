import * as React from 'react'
import { IConfig, ILink, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IPosition } from '../../../'
import { getDirectional } from '../utils'

export interface IArrowLinkProps {
  className?: string
  link: ILink
  config: IConfig
  linkColor: string
  points: string
  isHovered: boolean
  isSelected: boolean
  startPos: IPosition
  endPos: IPosition
  onLinkMouseEnter: IOnLinkMouseEnter
  onLinkMouseLeave: IOnLinkMouseLeave
  onLinkClick: IOnLinkClick
}

export const ArrowLink = ({
  className,
  link,
  config,
  linkColor,
  points,
  isHovered,
  isSelected,
  startPos,
  endPos,
  onLinkMouseEnter,
  onLinkMouseLeave,
  onLinkClick,
}: IArrowLinkProps) => {
  const { leftToRight, topToBottom, isHorizontal } = getDirectional(
    startPos,
    endPos,
  )

  let markerKey = ''
  if ((leftToRight && isHorizontal) || (topToBottom && !isHorizontal)) {
    markerKey = 'markerEnd'
  } else if ((!leftToRight && isHorizontal) || !isHorizontal) {
    markerKey = 'markerStart'
  }

  const marker = { [markerKey]: `url(#arrowHead-${linkColor})` }

  return (
    <svg
      style={{
        overflow: 'visible',
        position: 'absolute',
        cursor: 'pointer',
        left: 0,
        right: 0,
      }}
      className={className}
    >
      <defs>
        <marker
          id={`arrowHead-${linkColor}`}
          orient="auto-start-reverse"
          markerWidth="2"
          markerHeight="4"
          refX="0.1"
          refY="2"
        >
          <path d="M0,0 V4 L2,2 Z" fill={linkColor} />
        </marker>
      </defs>
      {/* Main line */}
      <path
        d={points}
        stroke={linkColor}
        strokeWidth="3"
        fill="none"
        {...marker}
      />
      {/* Thick line to make selection easier */}
      <path
        d={points}
        stroke={linkColor}
        strokeWidth="20"
        fill="none"
        strokeLinecap="round"
        strokeOpacity={isHovered || isSelected ? 0.1 : 0}
        onMouseEnter={() => onLinkMouseEnter({ config, linkId: link.id })}
        onMouseLeave={() => onLinkMouseLeave({ config, linkId: link.id })}
        onClick={(e) => {
          onLinkClick({ config, linkId: link.id })
          e.stopPropagation()
        }}
      />
    </svg>
  )
}
