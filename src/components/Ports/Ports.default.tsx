import * as React from 'react'
import {IConfig, INode, ISize, PortsGroupDefault} from '../../'
import ResizeObserver from "react-resize-observer";
import {useEffect, useState} from "react";

export interface IPortsDefaultProps {
  className?: string
  config: IConfig
  node: INode
  children: Array<React.ReactElement<any>>
  onResize: (size: ISize) => void
}

export const PortsDefault = ({ children, config, onResize, className }: IPortsDefaultProps) => {
  const [ top, setTop ] = useState(0);
  const [ bottom, setBottom ] = useState(0);
  const [ right, setRight ] = useState(0);
  const [ left, setLeft ] = useState(0);
  const [ width, setWidth ] = useState(0);
  const [ height, setHeight ] = useState(0);

  useEffect(() => {
    setWidth(Math.max(top, bottom))
  }, [ top, bottom ]);

  useEffect(() => {
    setHeight(Math.max(left, right))
  }, [ left, right ]);

  useEffect(() => {
    onResize({ width, height })
  }, [ width, height, onResize ]);

  return (
    <div className={className}>
      <PortsGroupDefault config={config} side="top">
        <ResizeObserver onResize={(rect) => { setTop(rect.width) }} />
        {children.filter((child) => ['input', 'top'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="bottom">
        <ResizeObserver onResize={(rect) => { setBottom(rect.width) }} />
        {children.filter((child) => ['output', 'bottom'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="right">
        <ResizeObserver onResize={(rect) => { setRight(rect.height) }} />
        {children.filter((child) => ['right'].includes(child.props.port.type))}
      </PortsGroupDefault>
      <PortsGroupDefault config={config} side="left">
        <ResizeObserver onResize={(rect) => { setLeft(rect.height) }} />
        {children.filter((child) => ['left'].includes(child.props.port.type))}
      </PortsGroupDefault>
    </div>
  )
}
