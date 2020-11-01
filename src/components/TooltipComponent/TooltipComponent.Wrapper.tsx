import * as React from 'react'
import { ITooltipComponentDefaultProps, TooltipComponentDefault} from './TooltipComponent.default'

export const TooltipComponentWrapper = ({
   Component = TooltipComponentDefault,
   tooltip,
                                        }: ITooltipComponentWrapperProps) => {
  return (
        <>
            <Component tooltip={tooltip}/>
        </>
  )
}
export interface ITooltipComponentWrapperProps {
  Component: React.FunctionComponent<ITooltipComponentDefaultProps>
  className?: string
  tooltip: string
  style?: object
}
