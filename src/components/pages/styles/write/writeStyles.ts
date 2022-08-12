import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { colorPick } from "../../../commons/color/colorPick";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  padding-bottom: 86px;
`;

export const Wrapper = styled.div`
  border-radius: 8px;
  background-color: white;
  padding: 80px 120px 35px 120px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const SelectImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 49px 47px;
  cursor: pointer;
  :hover {
    filter: drop-shadow(5px 5px 5px #f4d7e4);
  }
`;
export const BtnSection = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NextBtnWrapper = styled.div`
  width: 164px;
  padding-top: 86px;
`;
export const BeforeBtnWrapper = styled.div`
  width: 164px;
  margin-right: 30px;
  padding-top: 86px;
`;

// Date.tsx

export const DayPickerWrapper = styled(Wrapper)`
  min-height: 607px;
`;

export const DayPickerCss = styled(DayPicker)`
  * {
    --rdp-cell-size: 60px;
    --rdp-accent-color: none;
    --rdp-background-color: ${colorPick.purple};
    --rdp-accent-color-dark: #3003e1;
    --rdp-background-color-dark: #180270;
    --rdp-outline: 2px solid var(--rdp-accent-color);
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
    color: #9496c5;
    text-shadow: 0px 0px 15px rgba(299, 189, 207, 1);
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

export const DayPickerInput = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// weather.tsx

export const WeatherWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  padding: 59px 163px;
`;

export const WeatherGrid = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 25% 25% 25% 25%;
`;

// Relation.tsx

export const RelationWrapper = styled(WeatherWrapper)`
  padding: 82px 56px;
`;

// Do.tsx

export const DoGrid = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 16% 16% 16% 16% 16% 16%;
`;

// Photo.tsx

export const PhotoWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px 350px;
`;

export const PhotoImg = styled.img`
  width: 128px;
  height: 128px;
`;

export const PhotoInfo = styled.div`
  padding-top: 30px;
`;

// DailyWrite.tsx
export const TitleWrapper = styled.div`
  width: 1200px;
  padding: 20px 20px 0px 20px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 60px;
`;
export const DailyWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 450px;
  padding: 30px 20px 10px 20px;
`;

export const TextAreaWrapper = styled.div`
  height: 90%;
`;

export const Test = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 10px 10px 0px;
`;
