import { ID, NAME } from "../constants/index.js";
import { $ } from "../utils/selector.js";

class SubwayInput {
  constructor($target) {
    this.$target = $target;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <div>
        <label>출발역</label>
        <input id=${ID.DEPARTURE_STATION_NAME_INPUT} type="text" />
      </div>
      <br>
      <div>
        <label>도착역</label>
        <input id=${ID.ARRIVAL_STATION_NAME_INPUT} type="text" />
      </div>
      <br>
      <div>
        <input type="radio" name=${NAME.SEARCH_TYPE} value="최단거리" checked />
        <span>최단거리</span>
        <input type="radio" name=${NAME.SEARCH_TYPE} value="최소시간" />
        <span>최소시간</span>
      </div>
      <br>
      <button id=${ID.SEARCH_BUTTON}>길찾기</button>
    `;
  }

  selectDom() {
    this.$departInput = $(`#${ID.DEPARTURE_STATION_NAME_INPUT}`);
    this.$arrivalInput = $(`#${ID.ARRIVAL_STATION_NAME_INPUT}`);
    this.$searchButton = $(`#${ID.SEARCH_BUTTON}`);
  }

  addEvent() {
    this.$searchButton.addEventListener("click", this.clickButton.bind(this));
  }

  clickButton() {
    console.log(this.$departInput.value);
  }
}

export default SubwayInput;
