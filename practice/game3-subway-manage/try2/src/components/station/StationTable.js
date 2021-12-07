import { LOCAL_DB } from "../../constants/index.js";
import { getLocalStorage } from "../../utils/localStorage.js";
import {
  stationTableHeader,
  stationTableContents,
} from "../../utils/template.js";

class StationTable {
  constructor($target) {
    this.$target = $target;
    this.addTemplate();
  }

  addTemplate() {
    this.$target.innerHTML = `
        <h2>지하철 역 목록</h2>
        <table border="1">
          ${stationTableHeader}
          ${stationTableContents(getLocalStorage(LOCAL_DB.STATION))}
        </table>
    `;
  }
}

export default StationTable;
