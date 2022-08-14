import React from "react";
import styled from "styled-components";
import { colorPick } from "../color/colorPick";

const RouterBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 10px;
  color: white;
  border: none;
  border-radius: 8px;
  background-color: ${colorPick.gray};
  cursor: pointer;
`;

interface IProps {
  contents: string;
  onClick?: () => void;
  type?: any;
}

export default function MoveButton(props: IProps) {
  return (
    <RouterBtn type={props.type} onClick={props.onClick}>
      {props.contents}
    </RouterBtn>
  );
}
