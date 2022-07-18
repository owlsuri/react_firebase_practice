import React from "react";

interface IProps {
  type: "text" | "number" | "email";
  placeholder: string;
}

export default function Input(props: IProps) {
  return <input type={props.type} placeholder={props.placeholder} />;
}
