import { ID } from "../../constants/index.js";
import StationInput from "./StationInput.js";
import StationTable from "./StationTable.js";

class StationContainer {
  constructor($target) {
    this.$target = $target;
    this.addTemplate();
    this.selectDom();
    this.mounted();
  }

  addTemplate() {
    this.$target.innerHTML = `
        <div id=${ID.STATION_INPUT_CONTAINER}></div>
        <div id=${ID.STATION_TABLE_CONTAINER}></div>
      `;
  }

  selectDom() {
    this.$inputContainer = document.querySelector(
      `#${ID.STATION_INPUT_CONTAINER}`
    );
    this.$tableContainer = document.querySelector(
      `#${ID.STATION_TABLE_CONTAINER}`
    );
  }

  mounted() {
    new StationInput(this.$inputContainer);
    new StationTable(this.$tableContainer);
  }
}

export default StationContainer;
