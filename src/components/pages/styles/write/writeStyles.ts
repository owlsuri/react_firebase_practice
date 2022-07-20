import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { colorPick } from "../../../commons/color/colorPick";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
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
  padding-right: 30px;
  padding-top: 86px;
`;

// Date.tsx

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

export const WeatherImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 49px 47px;
`;
