import React from "react";
import * as S from "../styles/write/writeStyles";
import MoveButton from "../../commons/buttons/routerButton";
import { doImg } from "../../commons/data/DoData";
import { IProps } from "./weather";

export default function DoPick(props: IProps) {
  return (
    <S.Main>
      <S.Title>무엇을 하셨나요?</S.Title>
      <S.WeatherWrapper>
        <S.DoGrid>
          {doImg.map((el) => (
            <S.SelectImg
              id={el.key}
              key={el.key}
              src={el.img}
              onClick={props.selectFunc}
            />
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
