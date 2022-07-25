import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorPick } from "../../../commons/color/colorPick";

interface IProps {
  isMenuOpen: boolean;
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.div`
  width: 303px;
  height: 80px;
`;

const HamburgerBtn = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const Menu = styled.div`
  display: ${(props: IProps) => (props.isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100px;
  right: 14%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const DropDownMenuFirst = styled.div`
  text-align: center;
  width: 100%;
  padding: 10px 65px;
  font-weight: 500;
  border-radius: 8px 8px 0px 0px;
  :hover {
    background-color: ${colorPick.purple};
    color: white;
  }
`;

const DropDownMenuMid = styled(DropDownMenuFirst)`
  border-radius: 0;
`;
const DropDownMenuLast = styled(DropDownMenuFirst)`
  border-radius: 0px 0px 8px 8px;
`;

export default function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Header>
      <div></div>
      <Link to={`/mypage/:id`}>
        <Logo
          style={{
            backgroundImage: `url(/images/logo.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Logo>
      </Link>
      <HamburgerBtn
        onClick={onClickMenu}
        style={{
          backgroundImage: `url(/images/more.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></HamburgerBtn>
      <Menu isMenuOpen={isMenuOpen}>
        <DropDownMenuFirst>LIST</DropDownMenuFirst>
        <DropDownMenuMid>MYPAGE</DropDownMenuMid>
        <DropDownMenuLast>LOGOUT</DropDownMenuLast>
      </Menu>
    </Header>
  );
}
