import { ID, NAME } from "../constants/index.js";
import { dijkstraDistance, dijkstraTime } from "../utils/findShort.js";
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
      <div id=${ID.SEARCH_OPTION_CONTAINER}>
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
    this.$searchContainer = $(`#${ID.SEARCH_OPTION_CONTAINER}`);
    this.$searchButton = $(`#${ID.SEARCH_BUTTON}`);
  }

  addEvent() {
    this.$searchButton.addEventListener("click", this.clickButton.bind(this));
  }

  clickButton() {
    const departValue = this.$departInput.value;
    const arriveValue = this.$arrivalInput.value;
    const searchType = this.$searchContainer.querySelector(
      `input[name=${NAME.SEARCH_TYPE}]:checked`
    ).value;

    // 출발/도착 역 검증 (생략)

    // 최소시간
    const shortTime = dijkstraTime.findShortestPath(departValue, arriveValue);

    // 최소거리
    const shortDistance = dijkstraDistance.findShortestPath(
      departValue,
      arriveValue
    );
    console.log(shortTime, shortDistance);
  }
}

export default SubwayInput;
