import Car from "../classes/Car.js";

class Result {
  constructor({ $resultContainer, state }) {
    this.$resultContainer = $resultContainer;
    this.$resultContainer.removeAttribute("hidden");
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
      this.printResult();
      count--;
    }
  }

  printResult() {
    this.cars.forEach((car) => {
      // console.log(car);
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.innerText = `${car.name}: ${car.distance}`;
      div.append(span);
      this.$resultContainer.append(div);
    });

    const br = document.createElement("br");
    this.$resultContainer.append(br);
  }
}

export default Result;
