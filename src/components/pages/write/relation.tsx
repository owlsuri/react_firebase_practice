import React from "react";
import * as S from "../styles/write/writeStyles";
import MoveButton from "../../commons/buttons/nextButton";
import { relationImg } from "../../commons/data/relationData";

export default function RelationPick() {
  return (
    <S.Main>
      <S.Title>누구와 함께 했나요?</S.Title>
      <S.RelationWrapper>
        {relationImg.map((el) => (
          <S.SelectImg key={el.key} src={el.img} />
        ))}
      </S.RelationWrapper>

      <S.BtnSection>
        <S.BeforeBtnWrapper>
          <MoveButton contents="이전" />
        </S.BeforeBtnWrapper>
        <S.NextBtnWrapper>
          <MoveButton contents="다음" />
        </S.NextBtnWrapper>
      </S.BtnSection>
    </S.Main>
  );
}
