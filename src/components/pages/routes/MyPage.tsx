import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import firebaseApp from "../../../Firebase";
import ListItem from "../../commons/item/ListItem/ListItem";
import MyPageItem from "../../commons/item/myPageItem/myPageItem";
import HeaderPage from "../Layout/header/header";
import NavPage from "../Layout/nav/nav";
import * as S from "../styles/myPage/myPageStyles";
import { v4 as uuidv4 } from "uuid";
function MyPage() {
  const userAuth = getAuth();
  const [dailyList, setDailyList] = useState<DocumentData>([]);

  useEffect(() => {
    onAuthStateChanged(userAuth, (profile) => {
      if (profile) {
        const board = collection(
          getFirestore(firebaseApp),
          `${userAuth.currentUser?.uid}`
        );
        const fetchBoard = async () => {
          const result = await getDocs(
            query(board, orderBy("timestamp", "desc"))
          );
          const boards = result?.docs.map((el) => el.data());
          setDailyList(boards);
        };
        fetchBoard();
      } else {
        alert("로그인이 필요합니다");
      }
    });
  }, []);

  return (
    <S.Main>
      <HeaderPage />
      <NavPage />
      <S.Body>
        <MyPageItem />
        {dailyList.map((el: DocumentData) => (
          <ListItem key={uuidv4()} el={el} />
        ))}
      </S.Body>
    </S.Main>
  );
}

export default MyPage;
