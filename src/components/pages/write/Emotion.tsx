import React from "react";
import * as S from "../styles/write/writeStyles";
import MoveButton from "../../commons/buttons/routerButton";
import { emotionImg } from "../../commons/data/EmotionData";

export default function EmotionPick() {
  return (
    <S.Main>
      <S.Title>오늘 기분은 어땠나요?</S.Title>
      <S.WeatherWrapper>
        <S.WeatherGrid>
          {emotionImg.map((el) => (
            <S.SelectImg key={el.key} src={el.img} />
          ))}
        </S.WeatherGrid>
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
