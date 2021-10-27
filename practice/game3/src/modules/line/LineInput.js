import Line from "../../classes/Line.js";
import { ID, LOCAL_DB } from "../../constants/index.js";
import { clearInput } from "../../utils/clearInput.js";
import {
  addLocalStorage,
  getLocalStorage,
  updateStationStorage,
} from "../../utils/localStorage.js";
import { lineStartContents, lineEndContents } from "../../utils/template.js";
import { isValidLineInput } from "../../utils/valid.js";

class LineInput {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.render();
  }

  render() {
    this.addContents();
    this.dom();
    this.addEvents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>노선 이름</h3> 
        <input id="${
          ID.LINE_NAME_INPUT
        }" placeholder="노선 이름을 입력해주세요."/>
        <br></br>

        ${lineStartContents(getLocalStorage(LOCAL_DB.STATION))}
        ${lineEndContents(getLocalStorage(LOCAL_DB.STATION))}
        <button id="${ID.LINE_ADD_BUTTON}">노선 추가</button>
    `;
  }

  dom() {
    this.$nameInput = document.querySelector(`#${ID.LINE_NAME_INPUT}`);
    this.$startSelector = document.querySelector(
      `#${ID.LINE_START_STATION_SELECTOR}`
    );
    this.$endSelector = document.querySelector(
      `#${ID.LINE_END_STATION_SELECTOR}`
    );
    this.$addButton = document.querySelector(`#${ID.LINE_ADD_BUTTON}`);
  }

  addEvents() {
    this.$addButton.addEventListener("click", this.addLine.bind(this));
  }

  addLine() {
    const nameValue = this.$nameInput.value;
    const startValue = this.$startSelector.value;
    const endValue = this.$endSelector.value;

    if (!isValidLineInput(nameValue, startValue, endValue, this.$nameInput)) {
      return;
    }

    const newLine = new Line(nameValue, startValue, endValue);
    addLocalStorage(LOCAL_DB.LINE, newLine);
    updateStationStorage(LOCAL_DB.STATION, newLine);
    this.state.updateState();
    clearInput(this.$nameInput);
  }
}

export default LineInput;
