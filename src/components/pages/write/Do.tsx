import React from "react";
import * as S from "../styles/write/writeStyles";
import MoveButton from "../../commons/buttons/routerButton";
import { doImg } from "../../commons/data/DoData";

export default function DoPick() {
  return (
    <S.Main>
      <S.Title>무엇을 하셨나요?</S.Title>
      <S.WeatherWrapper>
        <S.DoGrid>
          {doImg.map((el) => (
            <S.SelectImg key={el.key} src={el.img} />
          ))}
        </S.DoGrid>
      </S.WeatherWrapper>

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
