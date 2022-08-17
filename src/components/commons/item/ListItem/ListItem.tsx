import React from "react";
import { useGetDay } from "../../hooks/useGetDay";
import { useGetMon } from "../../hooks/useGetMon";
import * as S from "./Listitem.styles";

export default function ListItem(props: any) {
  console.log(props);

  const day = useGetDay(props.el.timestamp);
  const mon = props.el.timestamp.slice(5, 7);
  const date = props.el.timestamp.slice(8);

  return (
    <S.Main>
      <S.DateSection>
        <S.Month>{useGetMon(mon)}</S.Month>
        <S.Date>{date}</S.Date>
        <S.Day>{day}</S.Day>
      </S.DateSection>
      <S.DailySection
        style={{
          backgroundImage: `url(/images/default.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <S.SelectedImg src="/weather/cloud.png" />
        <S.SelectedMidImg src="/weather/cloud.png" />
        <S.SelectedImg src="/weather/cloud.png" />
      </S.DailySection>
    </S.Main>
  );
}
