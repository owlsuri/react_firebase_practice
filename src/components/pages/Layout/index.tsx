import React, { ReactNode } from "react";
import styled from "styled-components";
import { colorPick } from "../../commons/color/colorPick";
interface ILayoutProps {
  children: ReactNode;
}
const Wrapper = styled.div``;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colorPick.lightPurple};
  width: 100%;
  height: 100%;
  min-height: 100vh;

  header {
    display: flex;
    width: 100vw;
  }
`;

export default function Layout(props: ILayoutProps) {
  return (
    <Wrapper>
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
