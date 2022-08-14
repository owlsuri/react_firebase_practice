import { useCallback, useRef, useState } from "react";
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
  console.log(mood);
  // 사진
  const [image, setImage] = useState("");
  console.log(image);
  // 일기
  const { register, handleSubmit } = useForm<IRegData>({
    mode: "onChange",
  });
  // 날씨 선택
  const selectWeather = useCallback(
    (event: any) => {
      setWeather(event.target.id);
    },
    [weather]
  );
  // 누구 선택
  const selectWho = useCallback(
    (event: any) => {
      setWho(event.target.id);
    },
    [who]
  );
  // 무엇을 선택
  const selectWhat = useCallback(
    (event: any) => {
      setWhat(event.target.id);
    },
    [what]
  );

  // 분위기 선택
  const selectMood = useCallback(
    (event: any) => {
      setMood(event.target.id);
    },
    [mood]
  );
  // 사진 선택
  const selectImage = useCallback(
    (event: any) => {
      setImage(event.target.id);
    },
    [image]
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
      image:
        "https://firebasestorage.googleapis.com/v0/b/reacttoyproject-c5488.appspot.com/o/images%2Fcafe.png?alt=media&token=b2286b06-d742-4e55-88b2-b5b97bc10bcd",
      day: {
        title: data.title,
        contents: data.contents,
      },
    });
  };

  // 포커스 이동
  const whenRef = useRef<HTMLInputElement>(null);
  const weatherRef = useRef<HTMLInputElement>(null);
  const WhereRef = useRef<HTMLInputElement>(null);
  const relationRef = useRef<HTMLInputElement>(null);
  const whatRef = useRef<HTMLInputElement>(null);
  const moodRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const onClickWhen = () => {
    whenRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onClickWeather = () => {
    weatherRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onClickWhere = () => {
    WhereRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onClickRelation = () => {
    relationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onClickWhat = () => {
    whatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onClickMood = () => {
    moodRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onClickPhoto = () => {
    photoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onClickContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <form onSubmit={handleSubmit(onClickRegister)}>
      <div ref={whenRef}>
        <DatePick
          setSelect={setSelectDay}
          select={selectDay}
          today={today}
          onClickWeather={onClickWeather}
        />
      </div>
      <div ref={weatherRef}>
        <WeatherPick
          selectFunc={selectWeather}
          onClickWhere={onClickWhere}
          onClickWhen={onClickWhen}
        />
      </div>
      <div ref={WhereRef}>
        <LocationPick
          setPlace={setPlace}
          onClickRelation={onClickRelation}
          onClickWeather={onClickWeather}
        />
      </div>
      <div ref={relationRef}>
        <RelationPick
          selectFunc={selectWho}
          onClickWhat={onClickWhat}
          onClickWhere={onClickWhere}
        />
      </div>
      <div ref={whatRef}>
        <DoPick
          selectFunc={selectWhat}
          onClickMood={onClickMood}
          onClickRelation={onClickRelation}
        />
      </div>
      <div ref={moodRef}>
        <EmotionPick
          selectFunc={selectMood}
          onClickPhoto={onClickPhoto}
          onClickWhat={onClickWhat}
        />
      </div>
      <div ref={photoRef}>
        <PhotoPick
          selectImage={selectImage}
          onClickContent={onClickContent}
          onClickMood={onClickMood}
        />
      </div>
      <div ref={contentRef}>
        <DailyWrite
          onClickRegister={onClickRegister}
          register={register}
          onClickPhoto={onClickPhoto}
        />
      </div>
    </form>
  );
}

export default WritePage;
