import React from "react";
import styled from "styled-components";

const Error = styled.div`
  font-size: 12px;
  color: red;
  font-weight: 600;
  padding: 10px 0px 0px 20px;
`;

interface IProps {
  contents: string | any;
}

export default function ErrorMsg(props: IProps) {
  return <Error>{props.contents}</Error>;
}
