import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(130deg, #e5bdcf, #9496c5, #9496c5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 528px;
`;
const Sub = styled.img`
  padding-top: 10px;
  width: 449px;
`;

function MainPage() {
  return (
    <Wrapper>
      <Logo src="images/landingImg.png" />
      <Sub src="images/landingSubImg.png" />
    </Wrapper>
  );
}

export default MainPage;
