import { ID, NAME } from "../constants/index.js";
import { sections } from "../data/index.js";
import { dijkstraDistance, dijkstraTime } from "../utils/findShort.js";
import { $ } from "../utils/selector.js";
import { inputTemplate } from "../utils/template.js";

class SubwayInput {
  constructor($target) {
    this.$target = $target;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = inputTemplate();
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

    // ---출발/도착 역 검증---

    // ---경로, 총거리, 총시간 구하기---
    // 1)경로
    const path = this.getPath(departValue, arriveValue, searchType);
    const shortDistancePath = path.map((v, i) => v + path[i + 1]).slice(0, -1);
    console.log(shortDistancePath);

    // 2)총거리
    const totalDistance = sections.reduce((acc, { name, distance }) => {
      if (shortDistancePath.includes(name.join(""))) {
        return acc + distance;
      }

      return acc;
    }, 0);

    console.log(totalDistance);

    const totalTime = sections.reduce((acc, { name, time }) => {
      if (shortDistancePath.includes(name.join(""))) {
        return acc + time;
      }

      return acc;
    }, 0);

    console.log(totalTime);

    // ---테이블에 값 넘겨서 표시하기---
    // new Result()
  }

  getPath(departValue, arriveValue, searchType) {
    if (searchType === "최소시간") {
      return dijkstraTime.findShortestPath(departValue, arriveValue);
    }

    if (searchType === "최단거리") {
      return dijkstraDistance.findShortestPath(departValue, arriveValue);
    }
  }
}

export default SubwayInput;
