import { CLASS, LOCAL_DB } from "../../constants/index.js";
import { getLocalStorage, saveLocalStorage } from "../../utils/localStorage.js";
import {
  stationTableHeader,
  stationTableContents,
} from "../../utils/template.js";

class StationTable {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.state.event.subscribe(this.render.bind(this));

    this.render();
  }

  render() {
    this.addTemplate();
    this.addEvent();
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

  addEvent() {
    this.$target.addEventListener("click", this.clickButton.bind(this));
  }

  clickButton(e) {
    if (!e.target.classList.contains(CLASS.STATION_DELETE_BUTTON)) {
      return;
    }

    const tr = e.target.closest("tr");
    tr.remove();

    const { stationName } = tr.firstElementChild.dataset;
    this.updateLocalStorage(stationName);
  }

  updateLocalStorage(stationName) {
    let station = getLocalStorage(LOCAL_DB.STATION);
    station = station.filter(({ name }) => name !== stationName);
    saveLocalStorage(LOCAL_DB.STATION, station);
  }
}

export default StationTable;
