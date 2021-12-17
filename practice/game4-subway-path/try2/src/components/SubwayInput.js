import { ID, NAME } from "../constants/index.js";
import { sections } from "../data/index.js";
import { dijkstraDistance, dijkstraTime } from "../utils/findShort.js";
import { $ } from "../utils/selector.js";
import { inputTemplate } from "../utils/template.js";

class SubwayInput {
  constructor({ $inputContainer, setState, showResult }) {
    this.$inputContainer = $inputContainer;
    this.setState = setState;
    this.showResult = showResult;

    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$inputContainer.innerHTML = inputTemplate();
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

    // -- 검증 생략 --

    const path = this.getPath(departValue, arriveValue, searchType);
    const shortDistancePath = path.map((v, i) => v + path[i + 1]).slice(0, -1);

    const totalDistance = sections.reduce((acc, { name, distance }) => {
      if (shortDistancePath.includes(name.join(""))) {
        return acc + distance;
      }

      return acc;
    }, 0);

    const totalTime = sections.reduce((acc, { name, time }) => {
      if (shortDistancePath.includes(name.join(""))) {
        return acc + time;
      }

      return acc;
    }, 0);

    this.setState({ path, distance: totalDistance, time: totalTime });
    this.showResult();
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
