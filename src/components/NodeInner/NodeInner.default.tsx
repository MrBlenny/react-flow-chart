import * as React from "react";
import styled from "styled-components";
import { INode } from "../../";

export interface INodeInnerDefaultProps {
  node: INode;
  className?: string;
}

const Outer = styled.div`
  padding: 40px 30px;
`;

export const NodeInnerDefault = ({
  node,
  className
}: INodeInnerDefaultProps) => {
  return (
    <Outer className={className}>
      <div>Type: {node.type}</div>
    </Outer>
  );
};
