import React, { useState } from "react";
import { emotionImg } from "../../data/EmotionData";
import { relationImg } from "../../data/relationData";
import { weatherImg } from "../../data/weatherData";
import * as S from "./myPageItem.styles";

export default function MyPageItem() {
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const onClickFilterOpen = () => {
    setFilterIsOpen((prev) => !prev);
  };

  return (
    <S.Main>
      <S.MainWrapper>
        <S.MainLeft>
          <S.MainLeftTitle>3다일기</S.MainLeftTitle>
          <S.MainLeftDailyCount>215</S.MainLeftDailyCount>
        </S.MainLeft>
        <S.MainRight>
          <S.MainRightSortInfo>
            날씨별 기분별 누구와 함께 했는지로 추억을 찾아보세요!
          </S.MainRightSortInfo>
          {filterIsOpen ? (
            <S.SortImg onClick={onClickFilterOpen} src="/images/sort-up.png" />
          ) : (
            <S.SortImg
              onClick={onClickFilterOpen}
              src="/images/sort-down.png"
            />
          )}
        </S.MainRight>
      </S.MainWrapper>

      <S.BottomWrapper isOpen={filterIsOpen}>
        <S.SortLeftWrapper>
          <S.SortInfo>기분</S.SortInfo>
          <S.SortInfoMiddle>날씨</S.SortInfoMiddle>
          <S.SortInfo>누구와</S.SortInfo>
        </S.SortLeftWrapper>
        <S.SortRightWrapper>
          <S.SortImgWrapper>
            {emotionImg.map((el) => (
              <S.ForSortImg key={el.key} src={el.img} />
            ))}
          </S.SortImgWrapper>
          <S.SortImgMiddleWrapper>
            {weatherImg.map((el) => (
              <S.ForSortImg key={el.key} src={el.img} />
            ))}
          </S.SortImgMiddleWrapper>
          <S.SortImgWrapper>
            {relationImg.map((el) => (
              <S.ForSortImg key={el.key} src={el.img} />
            ))}
          </S.SortImgWrapper>
        </S.SortRightWrapper>
      </S.BottomWrapper>
    </S.Main>
  );
}
