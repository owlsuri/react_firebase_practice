import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  width: 100%;
`;

interface IProps {
  type: "text" | "number" | "email" | "password";
  placeholder: string;
}

export default function Input(props: IProps) {
  return <InputStyled type={props.type} placeholder={props.placeholder} />;
}
