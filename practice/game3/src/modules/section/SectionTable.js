import { CLASS, LOCAL_DB } from "../../constants/index.js";
import { getLocalStorage } from "../../utils/localStorage.js";
import {
  sectionTableContents,
  sectionTableHeader,
} from "../../utils/template.js";

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
    console.log(e.target);
  }
}

export default SectionTable;
