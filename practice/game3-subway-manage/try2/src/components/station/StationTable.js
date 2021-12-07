import { LOCAL_DB } from "../../constants/index.js";
import { getLocalStorage } from "../../utils/localStorage.js";
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

  //   addEvent() {
  //     this.$target.addEventListener("click", this.clickButton.bind(this));
  //   }

  //   clickButton(e) {
  //     console.log(e.target);
  //   }
}

export default StationTable;
