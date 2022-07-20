import React from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ko } from "date-fns/esm/locale";
import "react-day-picker/dist/style.css";
import styled from "styled-components";
import { colorPick } from "../../commons/color/colorPick";
import NextButton from "../../commons/buttons/nextButton";

const DayPickerCss = styled(DayPicker)`
  * {
    --rdp-cell-size: 60px;
    --rdp-accent-color: none;
    --rdp-background-color: ${colorPick.purple};
    /* Switch to dark colors for dark themes */
    --rdp-accent-color-dark: #3003e1;
    --rdp-background-color-dark: #180270;
    /* Outline border for focused elements */
    --rdp-outline: 2px solid var(--rdp-accent-color);
    /* Outline border for focused and selected elements */
    --rdp-outline-selected: 2px solid #dbdbdb;
  }

  .rdp-button:focus,
  .rdp-button:active {
    color: white;
    border: var(--rdp-outline);
    background-color: var(--rdp-background-color);
  }
  .rdp-button:hover:not([aria-disabled="true"]) {
    background-color: var(--rdp-background-color);
    color: white;
  }
  .rdp-day_today:not(.rdp-day_outside) {
    font-weight: 800;
    color: blue;
  }
  .rdp-day {
    width: calc(var(--rdp-cell-size) * 0.8);
    max-width: calc(var(--rdp-cell-size) * 0.8);
    height: calc(var(--rdp-cell-size) * 0.8);
  }
  .rdp-nav_button {
    width: calc(var(--rdp-cell-size) * 0.8);
    height: calc(var(--rdp-cell-size) * 0.8);
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* height: 100vh; */
`;

const DayWrapper = styled.div`
  border-radius: 8px;
  background-color: white;
  padding: 80px 120px 35px 120px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Test = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  padding-bottom: 86px;
`;

const SignUpBtnWrapper = styled.div`
  width: 164px;
  padding-top: 86px;
`;

export default function DatePick(props: any) {
  return (
    <Main>
      <Title>날짜를 선택해 주세요</Title>
      <DayWrapper>
        <DayPickerCss
          locale={ko}
          mode="single"
          required
          selected={props.selectDay}
          onSelect={props.setSelect}
          footer={
            props.select ? (
              <Test>{format(props.select, "y-MM-dd")}</Test>
            ) : (
              <Test>날짜를 선택해주세요</Test>
            )
          }
        />
      </DayWrapper>
      <SignUpBtnWrapper>
        <NextButton contents="다음" />
      </SignUpBtnWrapper>
    </Main>
  );
}
