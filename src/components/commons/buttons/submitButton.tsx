import React from "react";
import styled from "styled-components";
import { colorPick } from "../color/colorPick";

const SubmitBtn = styled.button`
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
  type: "submit";
}

export default function SubmitButton(props: IProps) {
  return <SubmitBtn type={props.type}>{props.contents}</SubmitBtn>;
}
