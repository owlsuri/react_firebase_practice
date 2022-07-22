import React, { ReactNode } from "react";
import styled from "styled-components";
interface ILayoutProps {
  children: ReactNode;
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
`;

export default function Layout(props: ILayoutProps) {
  return (
    <Wrapper>
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
