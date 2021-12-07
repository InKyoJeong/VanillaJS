import { ID } from "../../constants/index.js";

class StationInput {
  constructor($target) {
    this.$target = $target;
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = `
        <h3>역 이름</h3>
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
    console.log(this.$nameInput.value);
  }
}

export default StationInput;
