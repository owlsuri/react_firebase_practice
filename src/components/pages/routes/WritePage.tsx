import { useState } from "react";
import DatePick from "../write/Date";
import WeatherPick from "../write/weather";
import LocationPick from "../write/Location";
import RelationPick from "../write/relation";
import DoPick from "../write/Do";
import PhotoPick from "../write/Photo";
import DailyWrite from "../write/DailyWrite";
import EmotionPick from "../write/Emotion";
import { useGetDate } from "../../commons/hooks/useGetDate";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import firebaseApp from "../../../Firebase";

function WritePage() {
  // 유저 정보 불러오기
  const userAuth = getAuth();

  // 데이터 자료 생성
  const board = collection(
    getFirestore(firebaseApp),
    `${userAuth.currentUser?.uid}`
  );
  const today = new Date();
  // 달력
  const [selectDay, setSelectDay] = useState(today);
  const datePick = useGetDate(selectDay);
  // 날씨
  // const [weather, setWeather] = useState("");

  // 지도
  const [place, setPlace] = useState({
    placeName: "string",
    address: "string",
    placeX: "string",
    placeY: "string",
  });

  const selectWeather = (event: any) => {
    console.log(event);
  };

  const onClickRegister = async () => {
    await addDoc(board, {
      timestamp: datePick,
      weather: "좋음",
      location: {
        x: place.placeX,
        y: place.placeY,
        placeName: place.placeName,
        address: place.address,
      },
      who: "혼자",
      mood: "별로",
      image:
        "https://firebasestorage.googleapis.com/v0/b/reacttoyproject-c5488.appspot.com/o/images%2Fcry.png?alt=media&token=d9bf61bc-6d35-4dfc-a2a7-e2390d38e7a9",
      day: {
        title: "제목",
        contents: "내용",
      },
    });
  };

  return (
    <div>
      <DatePick setSelect={setSelectDay} select={selectDay} today={today} />
      <WeatherPick selectWeather={selectWeather} />
      <LocationPick setPlace={setPlace} />
      <RelationPick />
      <DoPick />
      <EmotionPick />
      <PhotoPick />
      <DailyWrite onClickRegister={onClickRegister} />
    </div>
  );
}

export default WritePage;
