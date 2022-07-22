import React, { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MapCreate() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f2354913af21df03ad4d0ed912052c38&libraries=services&autoload=false";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // 마커를 담을 배열입니다
        // const markers = [];

        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        // 지도를 생성합니다.
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // // 장소 검색 객체를 생성합니다
        // const ps = new window.kakao.maps.services.Places();

        // // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
        // const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

        // // 키워드로 장소를 검색합니다
        // searchPlaces();
        // console.log(searchPlaces);

        // // 키워드 검색을 요청하는 함수입니다
        // function searchPlaces() {
        //   const keyword = document.getElementById("keyword")?.value;

        //   if (!keyword.replace(/^\s+|\s+$/g, "")) {
        //     alert("키워드를 입력해주세요!");
        //     return false;
        //   }

        //   // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
        //   ps.keywordSearch(keyword, placesSearchCB);
        // }
      });
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: "877px", height: "570px", borderRadius: "10px" }}
    ></div>
  );
}
