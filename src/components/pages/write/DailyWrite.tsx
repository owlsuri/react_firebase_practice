import React from "react";
import * as S from "../styles/write/writeStyles";
import MoveButton from "../../commons/buttons/routerButton";
import WriteTextArea from "../../commons/inputs/writeTextarea";
import SubmitButton from "../../commons/buttons/submitButton";

export default function DailyWrite(props: any) {
  return (
    <S.Main style={{ margin: "0px" }}>
      <S.Title>오늘 남기고 싶은 이야기를 적어주세요.</S.Title>
      <S.TitleWrapper>
        <WriteTextArea
          placeholder="제목을 작성해주세요."
          register={props.register("title")}
        />
      </S.TitleWrapper>
      <S.DailyWrapper>
        <S.TextAreaWrapper>
          <WriteTextArea
            placeholder="내용을 작성해주세요."
            register={props.register("contents")}
          />
        </S.TextAreaWrapper>
        <S.Test>0/100</S.Test>
      </S.DailyWrapper>

      <S.BtnSection>
        <S.BeforeBtnWrapper>
          <MoveButton
            type="button"
            onClick={props.onClickPhoto}
            contents="이전"
          />
        </S.BeforeBtnWrapper>
        <S.NextBtnWrapper>
          <SubmitButton contents="기록" type="submit" />
        </S.NextBtnWrapper>
        {/* <button onClick={props.onClickRegister}>테스트</button> */}
      </S.BtnSection>
    </S.Main>
  );
}
