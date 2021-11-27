import { randomNumber } from "./utils.js";
import { MAX_NUM, MIN_NUM, ADVANCE_NUM } from "./constants.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = "";
  }

  advance() {
    if (randomNumber(MAX_NUM, MIN_NUM) >= ADVANCE_NUM) {
      this.distance += "-";
    }
  }
}
