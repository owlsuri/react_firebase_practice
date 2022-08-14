import React from "react";
import * as S from "../styles/write/writeStyles";
import MoveButton from "../../commons/buttons/routerButton";
import { relationImg } from "../../commons/data/relationData";
import { IProps } from "./weather";

export default function RelationPick(props: IProps) {
  return (
    <S.Main>
      <S.Title>누구와 함께 했나요?</S.Title>
      <S.RelationWrapper>
        {relationImg.map((el) => (
          <S.SelectImg
            id={el.key}
            key={el.key}
            src={el.img}
            onClick={props.selectFunc}
          />
        ))}
      </S.RelationWrapper>

      <S.BtnSection>
        <S.BeforeBtnWrapper>
          <MoveButton
            type="button"
            onClick={props.onClickWhere}
            contents="이전"
          />
        </S.BeforeBtnWrapper>
        <S.NextBtnWrapper>
          <MoveButton
            type="button"
            onClick={props.onClickWhat}
            contents="다음"
          />
        </S.NextBtnWrapper>
      </S.BtnSection>
    </S.Main>
  );
}
