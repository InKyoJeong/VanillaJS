import { CLASS, LOCAL_DB } from "../../constants/index.js";
import {
  getLocalStorage,
  removeLocalStorage,
} from "../../utils/localStorage.js";
import {
  stationTableHeader,
  stationTableContents,
} from "../../utils/template.js";

class StationTable {
  constructor($target, stationState) {
    this.$target = $target;
    this.stationState = stationState;
    this.stationState.event.subscribe(this.render.bind(this));
    this.render();
    this.$target.addEventListener("click", this.onClickRemove.bind(this));
  }

  render() {
    this.addTemplate();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <h3>🚉 지하철 역 목록</h3>
      <table border="1">
        ${stationTableHeader}
        ${stationTableContents(getLocalStorage(LOCAL_DB.STATION))}
      </table>
    `;
  }

  onClickRemove(e) {
    // todo: 삭제되면 안되는경우 추가 // 노선에 등록된 역은 삭제할 수 없다

    // 뷰와 로컬스토리지 모두 삭제
    if (e.target.classList.contains(CLASS.STATION_DELETE_BUTTON)) {
      const tr = e.target.closest("tr");
      const { stationName } = tr.firstElementChild.dataset;
      removeLocalStorage(LOCAL_DB.STATION, stationName);
      tr.remove();
    }
  }
}

export default StationTable;
