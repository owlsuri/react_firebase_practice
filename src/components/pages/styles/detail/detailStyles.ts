import styled from "styled-components";
import { colorPick } from "../../../commons/color/colorPick";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  padding-bottom: 86px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 775px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.div`
  width: 100%;
  height: 370px;
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
`;

export const DailyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 120px 36px 120px;
`;

export const DailyTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 12px;
`;

export const DailyDate = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${colorPick.lightGray};
  padding-bottom: 30px;
`;

export const DailySelectedImg = styled.img`
  width: 58px;
  height: 58px;
`;
export const DailySelectedMiddleImg = styled(DailySelectedImg)`
  width: 58px;
  height: 58px;
  margin: 0px 30px;
`;

export const DailyWrite = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  word-break: keep-all;
  padding-bottom: 32px;
`;

export const LocationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LocationPin = styled.img`
  width: 22px;
  height: 22px;
`;

export const Location = styled.div`
  padding-left: 5px;
  font-size: 12px;
  color: ${colorPick.gray};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 24px;
`;

export const ListDeleteBtnWrapper = styled.div`
  width: 164px;
`;

export const EditBtnWrapper = styled(ListDeleteBtnWrapper)`
  margin: 0px 25px;
`;
