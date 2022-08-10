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
  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  const [locationLa, setLocationLa] = useState("");
  const [locationMa, setLocationMa] = useState("");

  const datePick = useGetDate(selectDay);

  console.log(
    "🎯",
    locationName,
    address,
    locationLa,
    locationMa,
    selectDay,
    today
  );
  // 글작성

  const onClickRegister = async () => {
    await addDoc(board, {
      timestamp: datePick,
      weather: "좋음",
      location: {
        x: 120,
        y: 130,
        addressTitle: "지도",
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
      <WeatherPick />
      <LocationPick
        setLocationName={setLocationName}
        setAddress={setAddress}
        setLocationLa={setLocationLa}
        setLocationMa={setLocationMa}
      />
      <RelationPick />
      <DoPick />
      <EmotionPick />
      <PhotoPick />
      <DailyWrite onClickRegister={onClickRegister} />
    </div>
  );
}

export default WritePage;
