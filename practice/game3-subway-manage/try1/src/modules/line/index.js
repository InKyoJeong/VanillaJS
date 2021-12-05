import { ID } from "../../constants/index.js";
import State from "../../observer/State.js";
import LineInput from "./LineInput.js";
import LineTable from "./LineTable.js";

class LineManager {
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
      <div id=${ID.LINE_INPUT_CONTAINER}></div>
      <div id=${ID.LINE_TABLE_CONTAINER}></div>
    `;
  }

  dom() {
    this.$inputContainer = document.querySelector(
      `#${ID.LINE_INPUT_CONTAINER}`
    );
    this.$tableContainer = document.querySelector(
      `#${ID.LINE_TABLE_CONTAINER}`
    );
  }

  addContents() {
    new LineInput(this.$inputContainer, this.state);
    new LineTable(this.$tableContainer, this.state);
  }
}

export default LineManager;
