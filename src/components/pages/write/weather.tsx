import React from "react";
import * as S from "../styles/write/writeStyles";
import { weatherImg } from "../../commons/data/weatherData";
import MoveButton from "../../commons/buttons/routerButton";

export interface IProps {
  selectFunc: (event: any) => void;
  onClickWhere?: () => void;
  onClickWhat?: () => void;
  onClickMood?: () => void;
  onClickPhoto?: () => void;
  onClickRelation?: () => void;
  onClickWhen?: () => void;
}

export default function WeatherPick(props: IProps) {
  return (
    <S.Main>
      <S.Title>오늘 날씨는 어땠나요?</S.Title>
      <S.WeatherWrapper>
        <S.WeatherGrid>
          {weatherImg.map((el) => (
            <S.SelectImg
              id={el.key}
              key={el.key}
              src={el.img}
              onClick={props.selectFunc}
            />
          ))}
        </S.WeatherGrid>
      </S.WeatherWrapper>

      <S.BtnSection>
        <S.BeforeBtnWrapper>
          <MoveButton
            type="button"
            onClick={props.onClickWhen}
            contents="이전"
          />
        </S.BeforeBtnWrapper>
        <S.NextBtnWrapper>
          <MoveButton
            type="button"
            onClick={props.onClickWhere}
            contents="다음"
          />
        </S.NextBtnWrapper>
      </S.BtnSection>
    </S.Main>
  );
}
