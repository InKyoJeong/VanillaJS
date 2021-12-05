import { CLASS, LOCAL_DB } from "../../constants/index.js";
import {
  getLocalStorage,
  removeLocalStorage,
} from "../../utils/localStorage.js";
import {
  stationTableHeader,
  stationTableContents,
} from "../../utils/template.js";
import { isValidStationDelete } from "../../utils/valid.js";

class StationTable {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.state.event.subscribe(this.render.bind(this));
    this.render();
    this.$target.addEventListener("click", this.onClickRemove.bind(this));
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
      <h3>🚉 지하철 역 목록</h3>
      <table border="1">
        ${stationTableHeader}
        ${stationTableContents(getLocalStorage(LOCAL_DB.STATION))}
      </table>
    `;
  }

  onClickRemove(e) {
    if (!e.target.classList.contains(CLASS.STATION_DELETE_BUTTON)) {
      return;
    }
    const tr = e.target.closest("tr");
    const { stationName } = tr.firstElementChild.dataset;

    // 노선에 등록된 역은 삭제불가
    if (!isValidStationDelete(stationName)) {
      return;
    }
    // 뷰와 로컬스토리지 모두 삭제
    removeLocalStorage(LOCAL_DB.STATION, stationName);
    tr.remove();
  }
}

export default StationTable;
