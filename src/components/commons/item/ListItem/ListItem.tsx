import React from "react";
import * as S from "./Listitem.styles";

export default function ListItem(props: any) {
  console.log(props);
  return (
    <S.Main>
      <S.DateSection>
        <S.Month>JUL</S.Month>
        <S.Date>18</S.Date>
        <S.Day>MON</S.Day>
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
