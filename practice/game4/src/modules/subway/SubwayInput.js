import { NAME, ID } from "../../constants/index.js";
import { isValidInput } from "../../utils/valid.js";
import SubwayTable from "./SubwayTable.js";
import { dijkstraDistance, dijkstraTime } from "../../utils/findShort.js";
import { sections } from "../../data/index.js";

class SubwayInput {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContents();
    this.dom();
    this.addEvents();
  }

  addContents() {
    this.$target.innerHTML = `
    <div>
      <span>출발역</span>
      <input type="text" id=${ID.DEPARTURE_STATION_NAME_INPUT} />
    </div>
    <br />
    <div>
      <span>도착역</span>
      <input type="text" id=${ID.ARRIVAL_STATION_NAME_INPUT} />
    </div>
    <br />
    <div id=${ID.SEARCH_RADIO_CONTAINER}>
      <input type="radio" name=${NAME.SEARCH_TYPE} value="최단거리" checked>최단거리</input>
      <input type="radio" name=${NAME.SEARCH_TYPE} value="최소시간">최소시간</input>
    </div>
    <br />
    <button id=${ID.SEARCH_BUTTON}>길 찾기</button>
    <div id=${ID.SUBWAY_TABLE_CONTAINER}></div> 
  `;
  }

  dom() {
    this.$startInput = document.querySelector(
      `#${ID.DEPARTURE_STATION_NAME_INPUT}`
    );
    this.$endInput = document.querySelector(
      `#${ID.ARRIVAL_STATION_NAME_INPUT}`
    );
    this.$radioContainer = document.querySelector(
      `#${ID.SEARCH_RADIO_CONTAINER}`
    );
    this.$searchButton = document.querySelector(`#${ID.SEARCH_BUTTON}`);
    this.$tableContainer = document.querySelector(
      `#${ID.SUBWAY_TABLE_CONTAINER}`
    );
  }

  addEvents() {
    this.$searchButton.addEventListener("click", this.onClickSearch.bind(this));
  }

  onClickSearch() {
    const start = this.$startInput.value;
    const end = this.$endInput.value;
    const searchType = this.$radioContainer.querySelector(
      `input[name=${NAME.SEARCH_TYPE}]:checked`
    ).value;

    if (
      !isValidInput(start, end, searchType, this.$startInput, this.$endInput)
    ) {
      return;
    }
    const result = this.getResult(start, end, searchType);
    const totalDistance = this.getTotalDistance(result);
    const totalTime = this.getTotalTime(result);

    new SubwayTable(this.$tableContainer, {
      result: result.join("▶︎"),
      distance: totalDistance,
      time: totalTime,
      type: searchType,
    });
  }

  getResult(start, end, searchType) {
    if (searchType === "최단거리") {
      return dijkstraDistance.findShortestPath(start, end);
    }
    if (searchType === "최소시간") {
      return dijkstraTime.findShortestPath(start, end);
    }
  }

  getTotalDistance(arr) {
    let total = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      sections.find((v) => {
        if (v.section.includes(arr[i]) && v.section.includes(arr[i + 1])) {
          total += v.distance;
        }
      });
    }
    return total;
  }

  getTotalTime(arr) {
    let total = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      sections.find((v) => {
        if (v.section.includes(arr[i]) && v.section.includes(arr[i + 1])) {
          total += v.time;
        }
      });
    }
    return total;
  }
}

export default SubwayInput;
