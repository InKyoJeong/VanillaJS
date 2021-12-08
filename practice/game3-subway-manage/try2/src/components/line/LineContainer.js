import { ID } from "../../constants/index.js";
import State from "../../observer/state.js";
import LineInput from "./LineInput.js";

class LineContainer {
  constructor($target) {
    this.$target = $target;
    this.state = new State();

    this.addTemplate();
    this.selectDom();
    this.mounted();
  }

  addTemplate() {
    this.$target.innerHTML = `
        <div id=${ID.LINE_INPUT_CONTAINER}></div>
        <div id=${ID.LINE_TABLE_CONTAINER}></div>
      `;
  }

  selectDom() {
    this.$inputContainer = document.querySelector(
      `#${ID.LINE_INPUT_CONTAINER}`
    );
    this.$tableContainer = document.querySelector(
      `#${ID.LINE_TABLE_CONTAINER}`
    );
  }

  mounted() {
    new LineInput(this.$inputContainer, this.state);
    // new LineTable(this.$tableContainer, this.state);
  }
}

export default LineContainer;
