import React from "react";
import * as S from "../styles/write/writeStyles";
import MoveButton from "../../commons/buttons/routerButton";

export default function PhotoPick() {
  return (
    <S.Main>
      <S.Title>오늘을 기념할 사진이 있나요?</S.Title>
      <S.PhotoWrapper>
        <S.PhotoImg src="/images/photo.png" />
        <S.PhotoInfo>이미지는 5M이하인 JPG, PNG 형식만 가능합니다.</S.PhotoInfo>
      </S.PhotoWrapper>

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
