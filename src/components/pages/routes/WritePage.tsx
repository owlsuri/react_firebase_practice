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
  // 지도
  // const [locationName, setLocationName] = useState("");
  // const [address, setAddress] = useState("");
  // const [locationLa, setLocationLa] = useState("");
  // const [locationMa, setLocationMa] = useState("");

  const [place, setPlace] = useState({
    placeName: "string",
    address: "string",
    placeX: "string",
    placeY: "string",
  });

  console.log("🎯", place);

  return (
    <div>
      <DatePick setSelect={setSelectDay} select={selectDay} today={today} />
      <WeatherPick />
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
