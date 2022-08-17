// 오늘 무슨 요일인지 확인하는 훅
export const useGetDay = (date: string) => {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayOfWeek = week[new Date(date).getDay()];
  return dayOfWeek;
};
