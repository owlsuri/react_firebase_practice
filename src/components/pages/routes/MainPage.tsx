import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/signIn");
    }, 2500);
  }, []);

  return (
    <Wrapper>
      <Logo src="images/landingImg.png" />
      <Sub src="images/landingSubImg.png" />
    </Wrapper>
  );
}

export default MainPage;
