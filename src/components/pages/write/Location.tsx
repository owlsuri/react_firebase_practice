import React from "react";
import * as S from "../styles/write/writeStyles";

import MoveButton from "../../commons/buttons/nextButton";

export default function LocationPick() {
  return (
    <S.Main>
      <S.Title>어디에 있었나요?</S.Title>
      <div>지도 넣어보세요</div>
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
