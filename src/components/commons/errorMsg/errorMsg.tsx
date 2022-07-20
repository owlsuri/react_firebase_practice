import React from "react";
import styled from "styled-components";

const Error = styled.div`
  font-size: 12px;
  color: red;
  font-weight: 700;
  padding: 10px 0px 0px 0px;
`;

interface IProps {
  contents: string;
}

export default function ErrorMsg(props: IProps) {
  return <Error>{props.contents}</Error>;
}
