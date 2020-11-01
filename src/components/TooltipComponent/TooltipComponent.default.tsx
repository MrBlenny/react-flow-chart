import * as React from 'react'

export const TooltipComponentDefault = ({ tooltip }: ITooltipComponentDefaultProps) => {
  return (
        <>{tooltip}</>
  )
}
export interface ITooltipComponentDefaultProps {
  className?: string
  tooltip: string
  style?: object
}
