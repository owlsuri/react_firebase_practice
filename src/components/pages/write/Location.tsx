import React from "react";
import * as S from "../styles/write/writeStyles";

import MoveButton from "../../commons/buttons/routerButton";
import MapCreate from "../../commons/map/mapCreate";

export default function LocationPick(props: any) {
  return (
    <S.Main>
      <S.Title>어디에 있었나요?</S.Title>
      <MapCreate setPlace={props.setPlace} />
      <S.BtnSection>
        <S.BeforeBtnWrapper>
          <MoveButton
            type="button"
            onClick={props.onClickWeather}
            contents="이전"
          />
        </S.BeforeBtnWrapper>
        <S.NextBtnWrapper>
          <MoveButton
            type="button"
            contents="다음"
            onClick={props.onClickRelation}
          />
        </S.NextBtnWrapper>
      </S.BtnSection>
    </S.Main>
  );
}
