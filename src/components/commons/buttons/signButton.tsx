import React from "react";
import styled from "styled-components";
import { colorPick } from "../color/colorPick";

const SignBtn = styled.button`
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
}

export default function SignButton(props: IProps) {
  return <SignBtn>{props.contents}</SignBtn>;
}
