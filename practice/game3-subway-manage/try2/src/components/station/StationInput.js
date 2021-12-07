import Station from "../../classes/Station.js";
import { ID, LOCAL_DB } from "../../constants/index.js";
import { clearInput } from "../../utils/clearInput.js";
import { getLocalStorage, saveLocalStorage } from "../../utils/localStorage.js";
import { isValidStationName } from "../../utils/valid.js";

class StationInput {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = `
        <p>역 이름</p>
        <input id=${ID.STATION_NAME_INPUT} placeholder="역 이름을 입력해주세요." />
        <button id=${ID.STATION_ADD_BUTTON}>역 추가</button>
      `;
  }

  selectDom() {
    this.$nameInput = document.querySelector(`#${ID.STATION_NAME_INPUT}`);
    this.$addButton = document.querySelector(`#${ID.STATION_ADD_BUTTON}`);
  }

  addEvent() {
    this.$addButton.addEventListener("click", this.submitName.bind(this));
  }

  submitName() {
    const { value } = this.$nameInput;
    if (!isValidStationName(value)) {
      return;
    }
    clearInput(this.$nameInput);

    this.updateLocalStorage(value);
    this.state.updateState();
  }

  updateLocalStorage(value) {
    const newStation = new Station(value);
    const station = getLocalStorage(LOCAL_DB.STATION);
    saveLocalStorage(LOCAL_DB.STATION, [...station, newStation]);
  }
}

export default StationInput;
