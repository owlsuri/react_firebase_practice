import React, { useState } from "react";
import DatePick from "../write/Date";
import styled from "styled-components";
import WeatherPick from "../write/weather";

const Test = styled.div`
  height: 100vh;
  margin-bottom: 50px;
`;

function WritePage() {
  const today = new Date();
  const [selectDay, setSelectDay] = useState(today);

  return (
    <div>
      <Test>
        <DatePick setSelect={setSelectDay} select={selectDay} today={today} />
      </Test>
      <Test>
        <WeatherPick />
      </Test>
    </div>
  );
}

export default WritePage;
