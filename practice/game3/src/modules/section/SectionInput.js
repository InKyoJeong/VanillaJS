import { ID, LOCAL_DB } from "../../constants/index.js";
import { getLocalStorage } from "../../utils/localStorage.js";
import { sectionStationSelector } from "../../utils/template.js";

class SectionInput {
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
      <h3>${this.selected}호선 관리</h3>
      <p><b>구간 등록<b></p>
      ${sectionStationSelector(getLocalStorage(LOCAL_DB.LINE), this.selected)}
      <input id=${ID.SECTION_ORDER_INPUT} placeholder="순서" type="number" />
      <button id=${ID.SECTON_ADD_BUTTON}>등록</button>
    `;
  }
}

export default SectionInput;
