import { DateData } from "../data/DateData";
// 몇월인지 확인하는 함수
export const useGetMon = (mon: string) => {
  for (const arr of DateData) {
    if (arr.key === mon) {
      return arr.value;
    }
  }
};
