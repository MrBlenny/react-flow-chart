import * as React from 'react'
import { generateCurvePath, ILink, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IPosition } from '../../'
import { LinkArrowDefault } from '../LinkArrow'

export interface ILinkDefaultProps {
  link: ILink
  startPos: IPosition
  endPos: IPosition
  onLinkMouseEnter: IOnLinkMouseEnter
  onLinkMouseLeave: IOnLinkMouseLeave
  onLinkClick: IOnLinkClick
  isHovered: boolean
  isSelected: boolean
}

class LinkDefaultUnCast extends React.Component<ILinkDefaultProps> {
  public pathRef: any
  public getPathRef = (ref: any) => {
    if (ref) {
      this.pathRef = ref
    }
  }
  public render () {
    const {
      link,
      startPos,
      endPos,
      onLinkMouseEnter,
      onLinkMouseLeave,
      onLinkClick,
      isHovered,
      isSelected,
    } = this.props
    const { path, direction } = generateCurvePath(startPos, endPos)

    return (
      <svg style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer' }}>
        <circle
          r="4"
          cx={startPos.x}
          cy={startPos.y}
          fill="cornflowerblue"
        />
        {/* Main line */}
        <path
          ref={this.getPathRef}
          d={path}
          stroke="cornflowerblue"
          strokeWidth="3"
          fill="none"
        />
        {/* Thick line to make selection easier */}
        <path
          d={path}
          stroke="cornflowerblue"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          strokeOpacity={(isHovered || isSelected) ? 0.1 : 0}
          onMouseEnter={() => onLinkMouseEnter({ linkId: link.id })}
          onMouseLeave={() => onLinkMouseLeave({ linkId: link.id })}
          onClick={(e) => {
            onLinkClick({ linkId: link.id })
            e.stopPropagation()
          } }
        />
        { this.pathRef && (
          <LinkArrowDefault
            startPos={startPos}
            endPos={endPos}
            direction={direction}
            path={this.pathRef}
          />
        )}
      </svg>
    )
  }
}

export const LinkDefault = LinkDefaultUnCast as any
