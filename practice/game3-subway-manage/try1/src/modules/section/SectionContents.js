import { ID } from "../../constants/index.js";
import State from "../../observer/State.js";
import SectionInput from "./SectionInput.js";
import SectionTable from "./SectionTable.js";

class SectionContents {
  constructor($target, selected) {
    this.$target = $target;
    this.selected = selected;
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
      <div id=${ID.SECTION_INPUT_CONTAINER}></div>
      <div id=${ID.SECTION_TABLE_CONTAINER}></div>
    `;
  }

  dom() {
    this.$inputContainer = document.querySelector(
      `#${ID.SECTION_INPUT_CONTAINER}`
    );
    this.$tableContainer = document.querySelector(
      `#${ID.SECTION_TABLE_CONTAINER}`
    );
  }

  addContents() {
    new SectionInput(this.$inputContainer, this.selected, this.state);
    new SectionTable(this.$tableContainer, this.selected, this.state);
  }
}

export default SectionContents;
