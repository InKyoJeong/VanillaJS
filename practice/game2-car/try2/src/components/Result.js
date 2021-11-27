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

    this.printWinner();
  }

  printResult() {
    this.cars.forEach((car) => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.innerText = `${car.name}: ${car.distance}`;
      div.append(span);
      this.$resultContainer.append(div);
    });

    const br = document.createElement("br");
    this.$resultContainer.append(br);
  }

  getWinner() {
    let maxDistance = 0;
    this.cars.forEach((car) => {
      maxDistance = Math.max(maxDistance, car.distance.length);
    });

    return this.cars.filter((car) => car.distance.length === maxDistance);
  }

  printWinner() {
    let winner = this.getWinner();
    winner = winner.reduce((acc, cur) => {
      return acc.concat(cur.name);
    }, []);

    const span = document.createElement("span");
    span.innerText = `최종우승자: ${[...winner]}`;
    this.$resultContainer.append(span);
  }
}

export default Result;
