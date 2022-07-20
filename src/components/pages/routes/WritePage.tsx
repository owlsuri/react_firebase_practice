import React, { useState } from "react";
import DatePick from "../write/Date";
console.log(JSON.stringify(process.env.REACT_APP_FIREBASE_APIKEY));
function WritePage() {
  const today = new Date();
  const [selectDay, setSelectDay] = useState(today);

  return (
    <div>
      <DatePick setSelect={setSelectDay} select={selectDay} today={today} />
    </div>
  );
}

export default WritePage;
