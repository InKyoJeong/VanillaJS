import { CLASS } from "../constants/index.js";

export const stationTableHeader = `
    <th>역이름</th>
    <th>설정</th>
`;

export const stationTableContents = (list) => {
  let html = ``;
  list.map(({ name }) => {
    html += `
        <tr>
            <td data-station-name=${name}>${name}</td>
            <td><button class=${CLASS.STATION_DELETE_BUTTON}>삭제</button></td>
        </tr>
      `;
  });

  return html;
};
