import * as React from 'react'
import { generateCurvePath, IConfig, ILink, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IPosition } from '../../'

export interface ILinkDefaultProps {
  config: IConfig
  link: ILink
  startPos: IPosition
  endPos: IPosition
  onLinkMouseEnter: IOnLinkMouseEnter
  onLinkMouseLeave: IOnLinkMouseLeave
  onLinkClick: IOnLinkClick
  isHovered: boolean
  isSelected: boolean
}

export const LinkDefault = ({
  config,
  link,
  startPos,
  endPos,
  onLinkMouseEnter,
  onLinkMouseLeave,
  onLinkClick,
  isHovered,
  isSelected,
}: ILinkDefaultProps) => {
  const points = generateCurvePath(startPos, endPos)
  
  let lineColor = "cornflowerblue";
  let className = '';
  if (link && link.properties) {
    if (link.properties.lineColor) {
      lineColor = link.properties.lineColor;
    }
    if (!!link.properties.isInvalid) {
      className = 'link__invalid'
    }
  }

  return (
    <svg className={className} style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 }}>
      <circle
        r="4"
        cx={startPos.x}
        cy={startPos.y}
        fill={lineColor}
      />
      {/* Main line */}
      <path
        d={points}
        stroke={lineColor}
        strokeWidth="3"
        fill="none"
      />
      {/* Thick line to make selection easier */}
      <path
        d={points}
        stroke={lineColor}
        strokeWidth="20"
        fill="none"
        strokeLinecap="round"
        strokeOpacity={(isHovered || isSelected) ? 0.4 : 0}
        onMouseEnter={() => onLinkMouseEnter({ config, linkId: link.id })}
        onMouseLeave={() => onLinkMouseLeave({ config, linkId: link.id })}
        onClick={(e) => {
          onLinkClick({ config, linkId: link.id })
          e.stopPropagation()
        } }
      />
      <circle
        r="4"
        cx={endPos.x}
        cy={endPos.y}
        fill={lineColor}
      />
    </svg>
  )
}
