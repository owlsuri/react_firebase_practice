import React from "react";
import * as S from "../styles/write/writeStyles";
import MoveButton from "../../commons/buttons/nextButton";
import WriteTextArea from "../../commons/inputs/writeTextarea";
import SubmitButton from "../../commons/buttons/submitButton";

export default function DailyWrite() {
  return (
    <S.Main>
      <S.Title>오늘 남기고 싶은 이야기를 적어주세요.</S.Title>
      <S.TitleWrapper>
        <WriteTextArea placeholder="제목을 작성해주세요." />
      </S.TitleWrapper>
      <S.DailyWrapper>
        <S.TextAreaWrapper>
          <WriteTextArea placeholder="내용을 작성해주세요." />
        </S.TextAreaWrapper>
        <S.Test>0/100</S.Test>
      </S.DailyWrapper>

      <S.BtnSection>
        <S.BeforeBtnWrapper>
          <MoveButton contents="이전" />
        </S.BeforeBtnWrapper>
        <S.NextBtnWrapper>
          <SubmitButton contents="기록" />
        </S.NextBtnWrapper>
      </S.BtnSection>
    </S.Main>
  );
}
