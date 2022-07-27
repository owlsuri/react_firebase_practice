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
  const [selectDay, setSelectDay] = useState(today);

  return (
    <div>
      <DatePick setSelect={setSelectDay} select={selectDay} today={today} />
      <WeatherPick />
      <LocationPick />
      <RelationPick />
      <DoPick />
      <EmotionPick />
      <PhotoPick />
      <DailyWrite />
    </div>
  );
}

export default WritePage;
