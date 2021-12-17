import { ID, NAME } from "../constants/index.js";

export const inputTemplate = () => {
  return `
    <div>
        <label>출발역</label>
        <input id=${ID.DEPARTURE_STATION_NAME_INPUT} type="text" />
    </div>
    <br>
    <div>
        <label>도착역</label>
        <input id=${ID.ARRIVAL_STATION_NAME_INPUT} type="text" />
    </div>
    <br>
    <div id=${ID.SEARCH_OPTION_CONTAINER}>
        <input type="radio" name=${NAME.SEARCH_TYPE} value="최단거리" checked />
        <span>최단거리</span>
        <input type="radio" name=${NAME.SEARCH_TYPE} value="최소시간" />
        <span>최소시간</span>
    </div>
    <br>
    <button id=${ID.SEARCH_BUTTON}>길찾기</button>
  `;
};

export const tableTemplate = (state) => {
  return `
    <h1>결과</h1>
    <table border="1">
        <th>총거리</th>
        <th>총시간</th>
        <tr align="center">
          <td>${state.distance}km</td>
          <td>${state.time}분</td>
        <tr>
        <tr align="center">
          <td colspan="2">${state.path.join("▶︎")}</td>
        </tr>
    </table>
`;
};
