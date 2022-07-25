import React from "react";
import * as S from "../styles/write/writeStyles";
import { weatherImg } from "../../commons/data/weatherData";
import MoveButton from "../../commons/buttons/routerButton";

export default function WeatherPick() {
  return (
    <S.Main>
      <S.Title>오늘 날씨는 어땠나요?</S.Title>
      <S.WeatherWrapper>
        <S.WeatherGrid>
          {weatherImg.map((el) => (
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
