import React, { useState } from "react";
import DatePick from "../write/Date";
import WeatherPick from "../write/weather";
import LocationPick from "../write/Location";
import RelationPick from "../write/relation";
import DoPick from "../write/Do";
import PhotoPick from "../write/Photo";

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
      <PhotoPick />
    </div>
  );
}

export default WritePage;
