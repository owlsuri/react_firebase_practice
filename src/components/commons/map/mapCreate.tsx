import React, { useEffect, useState } from "react";
import * as S from "../../pages/styles/map/mapCreate";

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
        let markers: any = [];

        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.541, 126.986),
          level: 1, // 지도의 레벨(확대, 축소 정도)
        };
        // 지도를 생성합니다.
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const markerPosition = new window.kakao.maps.LatLng(37.541, 126.986);

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // // 장소 검색 객체를 생성합니다
        const ps = new window.kakao.maps.services.Places();

        // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
        const infowindow = new window.kakao.maps.InfoWindow({
          zIndex: 1,
        });

        // 키워드로 장소를 검색합니다
        const searchForm = document.getElementById("submit_btn");
        searchForm?.addEventListener("click", function (e) {
          e.preventDefault();
          searchPlaces();
        });

        // 키워드 검색을 요청하는 함수입니다
        function searchPlaces() {
          const keyword = (
            document.getElementById("keyword") as HTMLInputElement
          ).value;

          if (!keyword.replace(/^\s+|\s+$/g, "")) {
            alert("키워드를 입력해주세요!");
            return false;
          }

          // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
          ps.keywordSearch(keyword, placesSearchCB);
        }

        // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
        function placesSearchCB(data: any, status: any, pagination: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면
            // 검색 목록과 마커를 표출합니다
            displayPlaces(data);

            // 페이지 번호를 표출합니다
            displayPagination(pagination);
          } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
            alert("검색 결과가 존재하지 않습니다.");
          } else if (status === window.kakao.maps.services.Status.ERROR) {
            alert("검색 결과 중 오류가 발생했습니다.");
          }
        }

        // 검색 결과 목록과 마커를 표출하는 함수입니다
        function displayPlaces(places: any) {
          const listEl = document.getElementById("placesList");
          const menuEl = document.getElementById("menu_wrap");
          const fragment = document.createDocumentFragment();
          const bounds = new window.kakao.maps.LatLngBounds();
          // const listStr = "";

          console.log("⛄", listEl);
          // 검색 결과 목록에 추가된 항목들을 제거합니다
          removeAllChildNods(listEl);

          // 지도에 표시되고 있는 마커를 제거합니다
          removeMarker();

          for (let i = 0; i < places.length; i++) {
            // 마커를 생성하고 지도에 표시합니다
            const placePosition = new window.kakao.maps.LatLng(
              places[i].y,
              places[i].x
            );
            const marker = addMarker(placePosition, i, "");
            const itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

            console.log("📌", placePosition.La);
            console.log("✨", placePosition.Ma);
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(placePosition);

            // 마커와 검색결과 항목에 mouseover 했을때
            // 해당 장소에 인포윈도우에 장소명을 표시합니다
            // mouseout 했을 때는 인포윈도우를 닫습니다
            (function (marker, title) {
              window.kakao.maps.event.addListener(
                marker,
                "mouseover",
                function () {
                  displayInfowindow(marker, title);
                }
              );

              window.kakao.maps.event.addListener(
                marker,
                "mouseout",
                function () {
                  infowindow.close();
                }
              );

              itemEl.onmouseover = function () {
                displayInfowindow(marker, title);
              };

              itemEl.onmouseout = function () {
                infowindow.close();
              };
            })(marker, places[i].place_name);

            fragment.appendChild(itemEl);
          }

          // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
          listEl?.appendChild(fragment);
          if (menuEl !== null) menuEl.scrollTop = 0;

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }

        // 검색결과 항목을 Element로 반환하는 함수입니다
        function getListItem(index: number, places: any) {
          const el = document.createElement("li");
          let itemStr =
            '<span class="markerbg marker_' +
            (index + 1) +
            '"></span>' +
            '<div class="info">' +
            "   <h5>" +
            places.place_name +
            "</h5>";

          if (places.road_address_name) {
            itemStr +=
              "    <span>" +
              places.road_address_name +
              "</span>" +
              '   <span class="jibun gray">' +
              places.address_name +
              "</span>";
          } else {
            itemStr += "    <span>" + places.address_name + "</span>";
          }

          itemStr +=
            '  <span class="tel">' + places.phone + "</span>" + "</div>";

          el.innerHTML = itemStr;
          el.className = "item";

          return el;
        }

        // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
        function addMarker(position: any, idx: number, title: any) {
          const imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png"; // 마커 이미지 url, 스프라이트 이미지를 씁니다
          const imageSize = new window.kakao.maps.Size(36, 37); // 마커 이미지의 크기
          const imgOptions = {
            spriteSize: new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new window.kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
          };
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imgOptions
          );
          const marker = new window.kakao.maps.Marker({
            position, // 마커의 위치
            image: markerImage,
          });

          marker.setMap(map); // 지도 위에 마커를 표출합니다
          markers.push(marker); // 배열에 생성된 마커를 추가합니다

          return marker;
        }

        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        function removeMarker() {
          for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
          }
          markers = [];
        }

        // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
        function displayPagination(pagination: any) {
          const paginationEl = document.getElementById("pagination");
          const fragment = document.createDocumentFragment();
          let i;

          // 기존에 추가된 페이지번호를 삭제합니다
          while (paginationEl?.hasChildNodes()) {
            if (paginationEl.lastChild !== null) {
              paginationEl.removeChild(paginationEl.lastChild);
            }
          }

          for (i = 1; i <= pagination.last; i++) {
            const el = document.createElement("a");
            el.href = "#";
            el.innerHTML = String(i);

            if (i === pagination.current) {
              el.className = "on";
            } else {
              el.onclick = (function (i) {
                return function () {
                  pagination.gotoPage(i);
                };
              })(i);
            }

            fragment.appendChild(el);
          }
          paginationEl?.appendChild(fragment);
        }

        // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
        // 인포윈도우에 장소명을 표시합니다
        function displayInfowindow(marker: any, title: any) {
          const content =
            '<div style="font-size:15px;padding:5px;z-index:1;width:180px;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#333;color:#fff;border-radius:5px;">' +
            title +
            "</div>";

          infowindow.setContent(content);
          infowindow.open(map, marker);
        }

        // 검색결과 목록의 자식 Element를 제거하는 함수입니다
        function removeAllChildNods(el: any) {
          while (el.hasChildNodes()) {
            el.removeChild(el.lastChild);
          }
        }
      });
    };
  }, []);

  const [isOpen, setIsOpen] = useState(true);
  const [word, setWord] = useState("");

  const sideBarToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeSearch = (event: any) => {
    setWord(event.target.value);
  };

  return (
    <S.Wrapper>
      <div className="map_wrap">
        <div
          id="map"
          style={{
            width: "877px",
            height: "570px",
            position: "relative",
            overflow: "hidden",
          }}
        ></div>

        <div id="menu">
          {isOpen && (
            <div id="menu_wrap" className="bg_white">
              <div className="option">
                <div>
                  <form>
                    <input
                      type="text"
                      value={word}
                      id="keyword"
                      placeholder="주소나 키워드를 검색해주세요."
                      onChange={onChangeSearch}
                    />
                    <button id="submit_btn" type="submit">
                      <img src="/images/search.png" />
                    </button>
                  </form>
                </div>
              </div>
              <hr />
              <ul id="placesList"></ul>
              <div id="pagination"></div>
            </div>
          )}
          {isOpen ? (
            <div id="sideBtn">
              <button id="sideBtnOpen" type="button" onClick={sideBarToggle}>
                <S.LeftDisplayButton />
              </button>
            </div>
          ) : (
            <div id="sideBtn">
              <button id="sideBtnClose" type="button" onClick={sideBarToggle}>
                <S.RightDisplayButton />
              </button>
            </div>
          )}
        </div>
      </div>
    </S.Wrapper>
  );
}
