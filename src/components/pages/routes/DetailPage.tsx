import React from "react";
import { useNavigate } from "react-router-dom";
import MoveButton from "../../commons/buttons/routerButton";
import * as S from "../styles/detail/detailStyles";
function DetailPage() {
  const navigate = useNavigate();
  return (
    <S.Main>
      <S.Title>민영님의 하루</S.Title>
      <S.Wrapper>
        <S.Img
          style={{
            backgroundImage: `url(/images/default.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></S.Img>
        <S.DailyWrapper>
          <S.DailyTitle>오늘은 용산에서 데이트</S.DailyTitle>
          <S.DailyDate>MON JUL 18 / 2022</S.DailyDate>
          <div>
            <S.DailySelectedImg src="/weather/cloud.png" />
            <S.DailySelectedMiddleImg src="/weather/cloud.png" />
            <S.DailySelectedImg src="/weather/cloud.png" />
          </div>
          <S.DailyWrite>
            전에 갔던 리틀갱스터 버섯밥뭐시기가 너무 맛있어서 또 가자고했다.
            비고미 쿠키도 먹고!! 비고미 베이커리 쪽 시장에 엄청난 순대 맛집을
            발견했다...!! 좋은사람과 맛있는 음식, 역시 최고다!! 그래도 코딩은
            해야지...
          </S.DailyWrite>
          <S.LocationWrapper>
            <S.LocationPin src="/images/pin.png" />
            <S.Location>서울특별시 용산구 한남동 용문시장 순대집</S.Location>
          </S.LocationWrapper>
        </S.DailyWrapper>
      </S.Wrapper>
      <S.ButtonWrapper>
        <S.ListDeleteBtnWrapper>
          <MoveButton
            onClick={() => {
              navigate("/list");
            }}
            contents="목록"
          />
        </S.ListDeleteBtnWrapper>
        <S.EditBtnWrapper>
          <MoveButton contents="수정" />
        </S.EditBtnWrapper>
        <S.ListDeleteBtnWrapper>
          <MoveButton contents="삭제" />
        </S.ListDeleteBtnWrapper>
      </S.ButtonWrapper>
    </S.Main>
  );
}

export default DetailPage;
