import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorPick } from "../../../commons/color/colorPick";
import useGetUser from "../../../commons/hooks/useGetUser";
import { useAppSelector } from "../../../commons/hooks/useSelector";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 55px 0px;
`;

const NavSection = styled.div`
  display: flex;
  border-radius: 100px;

  :hover {
    #write {
      display: block;
      #intro {
        display: none;
      }
    }
  }
`;

const IntroWrapper = styled.div`
  text-align: center;
  width: 500px;
  background-color: ${colorPick.gray};
  color: white;
  padding: 10px 0px;
  border-radius: 100px;
`;

const MoveToWriteWrapper = styled(Link)`
  display: none;
  text-align: center;
  width: 500px;
  position: absolute;
  background-color: ${colorPick.purple};
  color: white;
  padding: 10px 0px;
  border-radius: 100px;
  cursor: pointer;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function NavPage() {
  const reducer = useAppSelector((state) => state);
  console.log(reducer.userReducer);
  useGetUser();
  return (
    <Nav>
      <NavSection>
        <IntroWrapper id="intro">
          {reducer.userReducer.name}님, 어떤 하루를 보내셨나요?
        </IntroWrapper>
        <MoveToWriteWrapper to={"/write"} id="write">
          3줄일기 쓰러가기
        </MoveToWriteWrapper>
      </NavSection>
    </Nav>
  );
}
