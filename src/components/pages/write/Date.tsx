import React from "react";
import { format } from "date-fns";
import { ko } from "date-fns/esm/locale";
import "react-day-picker/dist/style.css";
import * as S from "../styles/write/writeStyles";

import MoveButton from "../../commons/buttons/nextButton";

export default function DatePick(props: any) {
  return (
    <S.Main>
      <S.Title>날짜를 선택해 주세요.</S.Title>
      <S.DayPickerWrapper>
        <S.DayPickerCss
          locale={ko}
          mode="single"
          required
          selected={props.selectDay}
          onSelect={props.setSelect}
          footer={
            props.select ? (
              <S.DayPickerInput>
                {format(props.select, "y-MM-dd")}
              </S.DayPickerInput>
            ) : (
              <S.DayPickerInput>날짜를 선택해주세요</S.DayPickerInput>
            )
          }
        />
      </S.DayPickerWrapper>
      <S.NextBtnWrapper>
        <MoveButton contents="다음" />
      </S.NextBtnWrapper>
    </S.Main>
  );
}
