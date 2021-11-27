import Car from "../classes/Car.js";

class Result {
  constructor({ $resultContainer, state }) {
    $resultContainer.removeAttribute("hidden");
    this.state = state;
    this.cars = [];
    this.makeCar(this.state.names, this.state.count);
  }

  makeCar(names, count) {
    names.forEach((name) => this.cars.push(new Car(name)));
    this.advanceCar(count);
  }

  advanceCar(count) {
    while (count) {
      this.cars.forEach((car) => car.advance());
      count--;
    }
  }
}

export default Result;
