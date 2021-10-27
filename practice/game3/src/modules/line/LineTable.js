import { CLASS, LOCAL_DB } from "../../constants/index.js";
import {
  getLocalStorage,
  removeLocalStorage,
  updateStationStorage,
} from "../../utils/localStorage.js";
import { lineTableContents, lineTableHeader } from "../../utils/template.js";

class LineTable {
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
        <h3>🚉 지하철 노선 목록</h3>
        <table border="1">
            ${lineTableHeader}
            ${lineTableContents(getLocalStorage(LOCAL_DB.LINE))}
        </table>
    `;
  }

  onClickRemove(e) {
    if (!e.target.classList.contains(CLASS.LINE_DELETE_BUTTON)) {
      return;
    }
    const tr = e.target.closest("tr");
    const { lineName } = tr.firstElementChild.dataset;
    tr.remove();
    removeLocalStorage(LOCAL_DB.LINE, lineName);
    updateStationStorage(LOCAL_DB.STATION, lineName);
  }
}

export default LineTable;
