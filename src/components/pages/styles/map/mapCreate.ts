import styled from "styled-components";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  .map_wrap {
    display: flex;
    flex-direction: row;
  }
  .map_wrap * {
    margin: 0;
    padding: 0;
    font-size: 12px;
  }
  .map_wrap a,
  .map_wrap a:hover,
  .map_wrap a:active {
    color: #000;
    text-decoration: none;
  }
  .map_wrap {
    position: relative;
  }
  #menu_wrap {
    position: absolute;
    top: 0;
    left: 0px;
    bottom: 0;
    width: 300px;
    height: 550px;
    margin: 10px 0 30px 10px;
    padding: 5px;
    overflow-y: auto;
    background: #cbcbe0;
    z-index: 1;
    font-size: 12px;
    border-radius: 10px;
  }
  .bg_white {
    background: #fff;
  }
  #menu_wrap hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid #5f5f5f;
    margin: 3px 0;
  }
  #menu_wrap .option {
    text-align: center;
  }
  #menu_wrap .option input {
    margin: 10px 0;
    padding: 10px;
    width: 220px;
    height: 40px;
    border: #a6a6a6;
  }
  #menu_wrap .option p {
    margin: 10px 0;
  }
  #menu_wrap .option form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #menu_wrap .option button {
    width: 40px;
    height: 40px;
    margin-left: 5px;
    border: none;
    background-color: #333;
    color: #fff;
    padding: 0;
    cursor: pointer;
  }

  #menu_wrap .option button img {
    width: 15px;
  }

  #placesList li {
    list-style: none;
  }
  #placesList .item {
    position: relative;
    border-bottom: 1px solid #888;
    overflow: hidden;
    cursor: pointer;
    min-height: 65px;
  }
  #placesList .item span {
    display: block;
    margin-top: 4px;
  }
  #placesList .item h5,
  #placesList .item .info {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  #placesList .item .info {
    padding: 10px 0 10px 55px;
  }
  #placesList .info .gray {
    color: #6c6c6f;
  }
  #placesList .info .jibun {
    padding-left: 26px;
    background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png)
      no-repeat;
  }
  #placesList .info .tel {
    color: #2b2bc3;
  }
  #placesList .item .markerbg {
    float: left;
    position: absolute;
    width: 36px;
    height: 37px;
    margin: 10px 0 0 10px;
    background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png)
      no-repeat;
  }
  #placesList .item .marker_1 {
    background-position: 0 -10px;
  }
  #placesList .item .marker_2 {
    background-position: 0 -56px;
  }
  #placesList .item .marker_3 {
    background-position: 0 -102px;
  }
  #placesList .item .marker_4 {
    background-position: 0 -148px;
  }
  #placesList .item .marker_5 {
    background-position: 0 -194px;
  }
  #placesList .item .marker_6 {
    background-position: 0 -240px;
  }
  #placesList .item .marker_7 {
    background-position: 0 -286px;
  }
  #placesList .item .marker_8 {
    background-position: 0 -332px;
  }
  #placesList .item .marker_9 {
    background-position: 0 -378px;
  }
  #placesList .item .marker_10 {
    background-position: 0 -423px;
  }
  #placesList .item .marker_11 {
    background-position: 0 -470px;
  }
  #placesList .item .marker_12 {
    background-position: 0 -516px;
  }
  #placesList .item .marker_13 {
    background-position: 0 -562px;
  }
  #placesList .item .marker_14 {
    background-position: 0 -608px;
  }
  #placesList .item .marker_15 {
    background-position: 0 -654px;
  }
  #pagination {
    margin: 10px auto;
    text-align: center;
  }
  #pagination a {
    display: inline-block;
    margin-right: 10px;
  }
  #pagination .on {
    font-weight: bold;
    cursor: default;
    color: #777;
  }
  #sideBtn {
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #sideBtnOpen {
    position: absolute;
    left: 310px;
    z-index: 2;
    width: 20px;
    padding: 0px;
    height: 70px;
    background-color: #cbcbe0;
    border-radius: 0 5px 5px 0;
    border: none;
    outline: none;
  }
  #sideBtnClose {
    position: absolute;
    left: 0px;
    z-index: 2;
    width: 20px;
    padding: 0px;
    height: 70px;
    background-color: #cbcbe0;
    border-radius: 0 5px 5px 0;
    border: none;
    outline: none;
  }
`;

export const LeftDisplayButton = styled(CaretLeftFilled)`
  color: #333;
  cursor: pointer;
`;
export const RightDisplayButton = styled(CaretRightFilled)`
  color: #333;
`;
