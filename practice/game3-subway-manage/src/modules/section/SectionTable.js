import { CLASS, LOCAL_DB } from "../../constants/index.js";
import { getLocalStorage, deleteSection } from "../../utils/localStorage.js";
import {
  sectionTableContents,
  sectionTableHeader,
} from "../../utils/template.js";
import { isValidSectionRemove } from "../../utils/valid.js";

class SectionTable {
  constructor($target, selected, state) {
    this.$target = $target;
    this.selected = selected;
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
      <br />
      <table border="1">
        ${sectionTableHeader}
        ${sectionTableContents(getLocalStorage(LOCAL_DB.LINE), this.selected)}
      </table>
    `;
  }

  onClickRemove(e) {
    if (!e.target.classList.contains(CLASS.SECTON_DELETE_BUTTON)) {
      return;
    }
    if (!isValidSectionRemove(this.selected)) {
      return;
    }
    const tr = e.target.closest("tr");
    const { index } = tr.children[0].dataset;
    const { stationName } = tr.children[1].dataset;
    deleteSection(this.selected, stationName, index);
    tr.remove();
  }
}

export default SectionTable;
