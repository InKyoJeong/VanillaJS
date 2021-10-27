import { ID, LOCAL_DB } from "../../constants/index.js";
import { clearInput } from "../../utils/clearInput.js";
import { getLocalStorage, updateSection } from "../../utils/localStorage.js";
import { sectionStationSelector } from "../../utils/template.js";
import { isValidSectionInput } from "../../utils/valid.js";

class SectionInput {
  constructor($target, selected, state) {
    this.$target = $target;
    this.selected = selected;
    this.state = state;
    this.render();
  }

  render() {
    this.addContents();
    this.dom();
    this.addEvent();
  }

  addContents() {
    this.$target.innerHTML = `
      <h3>${this.selected} 관리</h3>
      <p><b>구간 등록<b></p>
      ${sectionStationSelector(getLocalStorage(LOCAL_DB.STATION))}
      <input id=${ID.SECTION_ORDER_INPUT} placeholder="순서" type="number" />
      <button id=${ID.SECTON_ADD_BUTTON}>등록</button>
    `;
  }

  dom() {
    this.$orderInput = document.querySelector(`#${ID.SECTION_ORDER_INPUT}`);
    this.$addButton = document.querySelector(`#${ID.SECTON_ADD_BUTTON}`);
    this.$stationSelector = document.querySelector(
      `#${ID.SECTION_STATION_SELECTOR}`
    );
  }

  addEvent() {
    this.$addButton.addEventListener("click", this.addSection.bind(this));
  }

  addSection() {
    const addIndex = this.$orderInput.value;
    const stationName = this.$stationSelector.value;
    if (
      !isValidSectionInput(
        addIndex,
        stationName,
        this.selected,
        this.$orderInput
      )
    ) {
      return;
    }

    updateSection(this.selected, stationName, addIndex);
    clearInput(this.$orderInput);
    this.state.updateState();
  }
}

export default SectionInput;
