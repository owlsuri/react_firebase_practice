import React from "react";
import { ko } from "date-fns/esm/locale";
import "react-day-picker/dist/style.css";
import * as S from "../styles/write/writeStyles";

import MoveButton from "../../commons/buttons/routerButton";

export default function DatePick(props: any) {
  return (
    <S.Main>
      <S.Title>날짜를 선택해 주세요.</S.Title>
      <S.DayPickerWrapper>
        <S.DayPickerCss
          locale={ko}
          mode="single"
          required
          selected={props.select}
          onSelect={props.setSelect}
        />
      </S.DayPickerWrapper>
      <S.NextBtnWrapper>
        <MoveButton
          type="button"
          contents="다음"
          onClick={props.onClickWeather}
        />
      </S.NextBtnWrapper>
    </S.Main>
  );
}
