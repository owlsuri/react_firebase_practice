import React from "react";
import styled from "styled-components";

const Error = styled.div`
  font-size: 12px;
  color: red;
  font-weight: 700;
`;

interface IProps {
  contents: string;
}

export default function ErrorMsg(props: IProps) {
  return <Error>{props.contents}</Error>;
}
