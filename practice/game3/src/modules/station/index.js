import { ID } from "../../constants/index.js";
import StationInput from "./StationInput.js";
import StationTable from "./StationTable.js";
import State from "../../observer/State.js";

class StationManager {
  constructor($target) {
    this.$target = $target;
    this.state = new State();
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
      <div id=${ID.STATION_TABLE_CONTAINER}></div>
    `;
  }

  dom() {
    this.$inputContainer = document.querySelector(
      `#${ID.STATION_INPUT_CONTAINER}`
    );
    this.$tableContainer = document.querySelector(
      `#${ID.STATION_TABLE_CONTAINER}`
    );
  }

  addContents() {
    new StationInput(this.$inputContainer, this.state);
    new StationTable(this.$tableContainer, this.state);
  }
}

export default StationManager;
