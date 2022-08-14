import React from "react";
import * as S from "../styles/write/writeStyles";
import MoveButton from "../../commons/buttons/routerButton";
import { emotionImg } from "../../commons/data/EmotionData";
import { IProps } from "./weather";

export default function EmotionPick(props: IProps) {
  return (
    <S.Main>
      <S.Title>오늘 기분은 어땠나요?</S.Title>
      <S.WeatherWrapper>
        <S.WeatherGrid>
          {emotionImg.map((el) => (
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
          <MoveButton onClick={props.onClickWhat} contents="이전" />
        </S.BeforeBtnWrapper>
        <S.NextBtnWrapper>
          <MoveButton onClick={props.onClickPhoto} contents="다음" />
        </S.NextBtnWrapper>
      </S.BtnSection>
    </S.Main>
  );
}
