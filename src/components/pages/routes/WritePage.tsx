import { useCallback, useState } from "react";
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
import { useForm } from "react-hook-form";

interface IRegData {
  title: string;
  contents: string;
}

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
  const [weather, setWeather] = useState("");
  // 지도
  const [place, setPlace] = useState({
    placeName: "string",
    address: "string",
    placeX: "string",
    placeY: "string",
  });
  // 누구
  const [who, setWho] = useState("");
  // 무엇을
  const [what, setWhat] = useState("");
  // 분위기
  const [mood, setMood] = useState("");
  // 사진
  const [image, setImage] = useState("");
  // 일기
  const { register, handleSubmit } = useForm<IRegData>({
    mode: "onChange",
  });
  // 날씨 선택
  const selectWeather = useCallback(
    () => (event: any) => {
      setWeather(event.target.id);
    },
    [weather]
  );
  // 누구 선택
  const selectWho = useCallback(
    () => (event: any) => {
      setWho(event.target.id);
    },
    [weather]
  );
  // 무엇을 선택
  const selectWhat = useCallback(
    () => (event: any) => {
      setWhat(event.target.id);
    },
    [weather]
  );
  // 분위기 선택
  const selectMood = useCallback(
    () => (event: any) => {
      setMood(event.target.id);
    },
    [weather]
  );
  // 사진 선택
  const selectImage = useCallback(
    () => (event: any) => {
      setImage(event.target.id);
    },
    [weather]
  );

  const onClickRegister = async (data: IRegData) => {
    await addDoc(board, {
      timestamp: datePick,
      weather,
      location: {
        x: place.placeX,
        y: place.placeY,
        placeName: place.placeName,
        address: place.address,
      },
      who,
      what,
      mood,
      image,
      day: {
        title: data.title,
        contents: data.contents,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onClickRegister)}>
      <DatePick setSelect={setSelectDay} select={selectDay} today={today} />
      <WeatherPick selectFunc={selectWeather} />
      <LocationPick setPlace={setPlace} />
      <RelationPick selectFunc={selectWho} />
      <DoPick selectFunc={selectWhat} />
      <EmotionPick selectFunc={selectMood} />
      <PhotoPick selectImage={selectImage} />
      <DailyWrite onClickRegister={onClickRegister} register={register} />
    </form>
  );
}

export default WritePage;
