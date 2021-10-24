import { ID } from "../../constants/index.js";
import StationInput from "./StationInput.js";
import StationTable from "./StationTable.js";
import StationState from "../../observer/stationState.js";

class StationManager {
  constructor($target) {
    this.$target = $target;
    this.stationState = new StationState();
    this.render();
  }

  render() {
    this.addContainer();
    this.dom();
    this.addContents();
  }

  addContainer() {
    this.$target.innerHTML = `
      <div id=${ID.STATION_INPUT_CONTAINER}></div>
      <div id=${ID.STAIION_TABLE_CONTAINER}></div>
    `;
  }

  dom() {
    this.$inputContainer = document.querySelector(
      `#${ID.STATION_INPUT_CONTAINER}`
    );
    this.$tableContainer = document.querySelector(
      `#${ID.STAIION_TABLE_CONTAINER}`
    );
  }

  addContents() {
    new StationInput(this.$inputContainer, this.stationState);
    new StationTable(this.$tableContainer, this.stationState);
  }
}

export default StationManager;
