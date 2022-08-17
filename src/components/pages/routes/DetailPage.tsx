import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../../Firebase";
import MoveButton from "../../commons/buttons/routerButton";
import * as S from "../styles/detail/detailStyles";

function DetailPage() {
  const navigate = useNavigate();
  const userAuth = getAuth();
  const [data, setData] = useState<DocumentData>([]);

  useEffect(() => {
    onAuthStateChanged(userAuth, (profile) => {
      if (profile) {
        const diary = collection(
          getFirestore(firebaseApp),
          `${userAuth.currentUser?.uid}`
        );
        const fetchDiary = async () => {
          const result = await getDocs(
            query(diary, where("timestamp", "==", "20220815"))
          );
          const detail = result.docs.map((el) => el.data());
          setData(detail);
        };
        fetchDiary();
      } else {
        alert("로그인을 먼저 해주세요.");
      }
    });
  }, []);

  console.log(data);

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
              navigate("/mypage");
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
