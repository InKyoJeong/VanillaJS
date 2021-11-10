import Car from "./Car.js";
import { checkValidCount, checkValidNames } from "./utils.js";

export default class RacingCarGame {
  constructor() {
    this.carsArr = [];
    this.app = document.querySelector("#app");
    this.carInput = document.getElementById("#car-names-input");
    this.carSubmit = document.getElementById("#car-names-submit");
    this.countInput = document.getElementById("#racing-count-input");
    this.countSubmit = document.getElementById("#racing-count-submit");
    this.result = document.getElementById("#racing-result");
    this.carSubmit.addEventListener("click", this.getInputCar.bind(this));
    this.countSubmit.addEventListener("click", this.getInputCount.bind(this));
  }

  getInputCar() {
    const carNames = this.carInput.value.split(",");
    const message = checkValidNames(carNames);
    if (message) {
      this.displayAlertMessage(message);
      this.clearNameInput();
      return this.carInput.focus();
    }

    this.countInput.focus();
    this.makeCar(carNames);
  }

  getInputCount() {
    const count = this.countInput.value;
    let message = checkValidCount(count, this.carInput.value);
    if (message) {
      this.displayAlertMessage(message);
      this.clearCountInput();
      return this.countInput.focus();
    }

    this.advanceCar(count);
  }

  makeCar(carNames) {
    carNames.forEach((car) => this.carsArr.push(new Car(car)));
  }

  advanceCar(count) {
    for (let i = 0; i < count; i++) {
      this.carsArr.forEach((car) => {
        car.advance();
      });
      this.paintResult();
    }

    this.paintWinner();
  }

  paintResult() {
    const container = document.createElement("div");
    const br = document.createElement("br");

    this.carsArr.forEach((car) => {
      const div = document.createElement("div");
      div.innerHTML = `${car.name}: ${car.distance}`;
      container.appendChild(div);
    });

    this.result.append(container, br);
  }

  paintWinner() {
    let winner = this.getWinner();
    winner = winner.reduce((acc, cur) => {
      return acc.concat(cur.name);
    }, []);

    const div = document.createElement("div");
    div.innerHTML = `최종 우승자: ${[...winner]}`;
    this.result.appendChild(div);
  }

  getWinner() {
    const maxDistance = this.getMaxDistance();
    return this.carsArr.filter((car) => car.distance.length === maxDistance);
  }

  getMaxDistance() {
    let max = 0;
    this.carsArr.forEach((car) => {
      max = Math.max(car.distance.length, max);
    });

    return max;
  }

  displayAlertMessage(message) {
    alert(message);
  }

  clearNameInput() {
    this.carInput.value = "";
  }

  clearCountInput() {
    this.countInput.value = "";
  }
}

new RacingCarGame();
