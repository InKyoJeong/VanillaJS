import { sections } from "../data/index.js";
import { dijkstraDistance, dijkstraTime } from "../utils/findShort.js";

class Path {
  constructor(departValue, arriveValue, searchType) {
    this.departValue = departValue;
    this.arriveValue = arriveValue;
    this.searchType = searchType;
  }

  getStation() {
    if (this.searchType === "최소시간") {
      return dijkstraTime.findShortestPath(this.departValue, this.arriveValue);
    }

    if (this.searchType === "최단거리") {
      return dijkstraDistance.findShortestPath(
        this.departValue,
        this.arriveValue
      );
    }
  }

  getPath() {
    const stationArray = this.getStation();

    return stationArray.map((v, i) => v + stationArray[i + 1]).slice(0, -1);
  }

  getTotalDistance() {
    return sections.reduce((acc, { name, distance }) => {
      if (this.getPath().includes(name.join(""))) {
        return acc + distance;
      }

      return acc;
    }, 0);
  }

  getTotalTime() {
    return sections.reduce((acc, { name, time }) => {
      if (this.getPath().includes(name.join(""))) {
        return acc + time;
      }

      return acc;
    }, 0);
  }
}

export default Path;
