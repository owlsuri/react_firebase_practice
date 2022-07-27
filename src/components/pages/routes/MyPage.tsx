import React from "react";
import MyPageItem from "../../commons/item/myPageItem/myPageItem";
import HeaderPage from "../Layout/header/header";
import NavPage from "../Layout/nav/nav";
import * as S from "../styles/myPage/myPageStyles";

function MyPage() {
  return (
    <S.Main>
      <HeaderPage />
      <NavPage />
      <S.Body>
        <MyPageItem />
      </S.Body>
    </S.Main>
  );
}

export default MyPage;
