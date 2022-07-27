import { colorPick } from "./../../color/colorPick";
import styled from "styled-components";

export const Main = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 24px 50px;
  width: 850px;
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid ${colorPick.lightGray};
  padding-right: 50px;
  width: 20%;
`;

export const MainLeftTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
  color: ${colorPick.lightGray};
`;

export const MainLeftDailyCount = styled.div`
  font-size: 35px;
  font-weight: 600;
`;

export const MainRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 70px;
`;

export const MainRightSortInfo = styled.div`
  text-align: center;
  font-size: 16px;
  padding-right: 50px;
`;

export const SortImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const BottomWrapper = styled(MainWrapper)`
  padding-top: 56px;
`;

export const SortLeftWrapper = styled(MainLeft)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  height: 140px;
`;

export const SortInfo = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const SortInfoMiddle = styled(SortInfo)`
  padding: 28px 0px;
`;

export const SortRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  height: 140px;
  padding-left: 70px;
`;

export const SortImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SortImgMiddleWrapper = styled(SortImgWrapper)`
  padding: 20px 0px;
`;

export const ForSortImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 25px;
`;
