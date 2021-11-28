import Car from "../classes/Car.js";
import Game from "../classes/Game.js";

class Result {
  constructor({ $resultContainer, state }) {
    this.$resultContainer = $resultContainer;
    this.$resultContainer.removeAttribute("hidden");
    this.state = state;

    this.game = new Game(this.state.names);
    this.printResult(this.state.count);
  }

  printResult(count) {
    while (count) {
      const results = this.game.advanceCar();
      results.forEach(({ name, distance }) => {
        const div = document.createElement("div");
        const span = document.createElement("span");
        span.innerText = `${name}: ${distance}`;
        div.append(span);
        this.$resultContainer.append(div);
      });
      const br = document.createElement("br");
      this.$resultContainer.append(br);
      count--;
    }

    this.printWinner();
  }

  printWinner() {
    let winner = this.game.getWinner();
    winner = winner.reduce((acc, cur) => {
      return acc.concat(cur.name);
    }, []);

    const span = document.createElement("span");
    span.innerText = `최종우승자: ${[...winner]}`;
    this.$resultContainer.append(span);
  }
}

export default Result;
