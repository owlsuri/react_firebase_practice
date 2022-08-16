import { colorPick } from "../../color/colorPick";
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 850px;
  height: 229px;
  background-color: white;
  border-radius: 10px;
  margin: 65px 0px;
`;

export const SelectedImg = styled.img`
  width: 62px;
  height: 62px;
  filter: brightness(3) drop-shadow(1px 2px 3px #000);
`;
export const SelectedMidImg = styled(SelectedImg)`
  margin: 0px 39px;
`;

export const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-radius: 10px 0px 0px 10px;
`;

export const Month = styled.div`
  color: ${colorPick.lightGray};
`;

export const Date = styled.div`
  font-size: 50px;
  font-weight: 700;
  line-height: 73px;
`;

export const Day = styled.div`
  font-size: 22px;
`;

export const DailySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: 0px 10px 10px 0px;
`;
