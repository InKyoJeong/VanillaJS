import { CLASS, ID } from "../constants/index.js";

export const stationTableHeader = `
    <th>역이름</th>
    <th>설정</th>
`;

export const stationTableContents = (list) => {
  let html = ``;
  list.map((v) => {
    html += `
      <tr>
        <td data-station-name=${v.name}>${v.name}</td>
        <td><button class=${CLASS.STATION_DELETE_BUTTON}>삭제</button></td>
      </tr>
    `;
  });

  return html;
};

export const lineStartContents = (list) => {
  return `  
    <div>
      <span><b>상행 종점</b></span>
      <select id="${ID.LINE_START_STATION_SELECTOR}">
      ${list.map((v) => `<option>${v.name}</option>`).join("")}
      </select>
    </div>
  `;
};

export const lineEndContents = (list) => {
  return `
    <div>
      <span><b>하행 종점</b></span>
      <select id="${ID.LINE_END_STATION_SELECTOR}">
      ${list.map((v) => `<option>${v.name}</option>`).join("")}
      </select>
    </div>
    <br />
  `;
};

export const lineTableHeader = `
    <th>노선 이름</th>
    <th>상행 종점역</th>
    <th>하행 종점역</th>
    <th>설정</th>
`;

export const lineTableContents = (list) => {
  let html = ``;
  list.map((v) => {
    html += `
      <tr>
        <td data-line-name=${v.name}>${v.name}</td>
        <td>${v.stationList[0]}</td>
        <td>${v.stationList[v.stationList.length - 1]}</td>
        <td><button class=${CLASS.LINE_DELETE_BUTTON}>삭제</button></td>
      </tr>
    `;
  });

  return html;
};
