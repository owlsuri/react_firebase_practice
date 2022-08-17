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
          <S.DailyTitle>{data[0]?.day.title}</S.DailyTitle>
          <S.DailyDate>{data[0]?.timestamp}</S.DailyDate>
          <div>
            <S.DailySelectedImg src="/weather/cloud.png" />
            <S.DailySelectedMiddleImg src="/weather/cloud.png" />
            <S.DailySelectedImg src="/weather/cloud.png" />
          </div>
          <S.DailyWrite>{data[0]?.day.contents}</S.DailyWrite>
          <S.LocationWrapper>
            <S.LocationPin src="/images/pin.png" />
            <S.Location>{data[0]?.location.placeName}</S.Location>
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
