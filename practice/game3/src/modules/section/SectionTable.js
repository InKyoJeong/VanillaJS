import { LOCAL_DB } from "../../constants/index.js";
import { getLocalStorage } from "../../utils/localStorage.js";
import {
  sectionTableContents,
  sectionTableHeader,
} from "../../utils/template.js";

class SectionTable {
  constructor($target, selected) {
    this.$target = $target;
    this.selected = selected;
    this.render();
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
      <br />
      <table border="1">
        ${sectionTableHeader}
        ${sectionTableContents(getLocalStorage(LOCAL_DB.LINE), this.selected)}
      </table>
    `;
  }
}

export default SectionTable;
