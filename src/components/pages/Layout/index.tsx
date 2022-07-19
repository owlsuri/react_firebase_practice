import React, { ReactNode } from "react";
import styled from "styled-components";
interface ILayoutProps {
  children: ReactNode;
}
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;
export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Body>{props.children}</Body>
    </>
  );
}
