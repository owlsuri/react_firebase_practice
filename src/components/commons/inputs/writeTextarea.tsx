import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

const InputStyled = styled.textarea`
  display: block;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  outline: none;
  resize: none;
  width: 100%;
  height: 100%;
  padding: 10px 20px 0px 20px;
  font-size: 25px;
  color: #000000;
`;

interface IProps {
  placeholder: string;
  register?: UseFormRegisterReturn;
}

export default function WriteTextArea(props: IProps) {
  return (
    <InputStyled
      {...props.register}
      placeholder={props.placeholder}
    ></InputStyled>
  );
}
