import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  background-color: #e5e5e5;
  border: none;
  border-radius: 8px;
  outline: none;
  width: 100%;
  padding: 26px 0px 26px 25px;
  color: #000000;
`;

interface IProps {
  type: "text" | "number" | "email" | "password";
  placeholder: string;
}

export default function Input(props: IProps) {
  return <InputStyled type={props.type} placeholder={props.placeholder} />;
}
