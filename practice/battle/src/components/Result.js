import Game from '../classes/Game.js';
import { ID } from '../constants/index.js';

class Result {
  constructor({ $resultContainer, state }) {
    this.$resultContainer = $resultContainer;
    this.state = state;
    this.game = new Game(this.state.names, this.state.count);

    this.render();
    this.printResult();
  }

  render() {
    this.addContents();
    this.selectDom();
    this.addEvent();
    this.firstPrint();
  }

  addContents() {
    this.$resultContainer.innerHTML = `
        <div id=${ID.RESULT_INNER_CONTAINER}></div>
        <button id=${ID.NEXT_TURN_BUTTON}>다음턴</button>
    `;
  }

  selectDom() {
    this.$innerContainer = document.querySelector(
      `#${ID.RESULT_INNER_CONTAINER}`
    );
    this.nextButton = document.querySelector(`#${ID.NEXT_TURN_BUTTON}`);
  }

  firstPrint() {
    this.$innerContainer.innerHTML = `
        <p>${this.game.getCurrentPlayerName()}의 차례입니다.</p>
    `;
  }
}

export default Result;
