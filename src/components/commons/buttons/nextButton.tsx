import React from "react";
import styled from "styled-components";
import { colorPick } from "../color/colorPick";

const NextBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 25px 70px;
  color: white;
  border: none;
  border-radius: 8px;
  background-color: ${colorPick.purple};
  cursor: pointer;
`;

interface IProps {
  contents: string;
}

export default function NextButton(props: IProps) {
  return <NextBtn>{props.contents}</NextBtn>;
}
