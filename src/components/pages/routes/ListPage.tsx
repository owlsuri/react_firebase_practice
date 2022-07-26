import React from "react";
import ListItem from "../../commons/item/ListItem";
import HeaderPage from "../Layout/header/header";
import NavPage from "../Layout/nav/nav";
import * as S from "../styles/List/ListStyle";

function ListPage() {
  return (
    <S.Main>
      <HeaderPage />
      <NavPage />
      <S.Body>
        <ListItem />
      </S.Body>
    </S.Main>
  );
}

export default ListPage;
