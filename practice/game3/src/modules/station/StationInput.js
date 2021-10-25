import Station from "../../classes/Station.js";
import { ID, LOCAL_DB } from "../../constants/index.js";
import { isValidStationInput } from "../../utils/valid.js";
import { addLocalStorage } from "../../utils/localStorage.js";
import { clearInput } from "../../utils/clearInput.js";

class StationInput {
  constructor($target, state) {
    this.$target = $target;
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
      <h3>역 이름</h3>
      <input id=${ID.STATION_NAME_INPUT} placeholder="역 이름을 입력해주세요." />
      <button id=${ID.STATION_ADD_BUTTON}>역 추가</button>
    `;
  }

  dom() {
    this.$nameInput = document.querySelector(`#${ID.STATION_NAME_INPUT}`);
    this.$addButton = document.querySelector(`#${ID.STATION_ADD_BUTTON}`);
  }

  addEvent() {
    this.$addButton.addEventListener("click", this.addStation.bind(this));
  }

  addStation() {
    const value = this.$nameInput.value;
    if (!isValidStationInput(value, this.$nameInput)) {
      return;
    }

    const newStation = new Station(value);
    addLocalStorage(LOCAL_DB.STATION, newStation);
    clearInput(this.$nameInput);

    // 변경된 상태업데이트
    this.state.updateState();
  }
}

export default StationInput;
