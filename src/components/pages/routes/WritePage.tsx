import React, { useState } from "react";
import DatePick from "../write/Date";
import WeatherPick from "../write/weather";
import LocationPick from "../write/Location";
import RelationPick from "../write/relation";
import DoPick from "../write/Do";
import PhotoPick from "../write/Photo";
import DailyWrite from "../write/DailyWrite";
import EmotionPick from "../write/Emotion";

function WritePage() {
  const today = new Date();
  // 달력
  const [selectDay, setSelectDay] = useState(today);
  // 지도
  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  const [locationLa, setLocationLa] = useState("");
  const [locationMa, setLocationMa] = useState("");

  console.log("🎯", locationName, address, locationLa, locationMa);
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
      <DailyWrite />
    </div>
  );
}

export default WritePage;
