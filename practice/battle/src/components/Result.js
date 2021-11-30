import Game from '../classes/Game.js';
import { ID } from '../constants/index.js';

class Result {
  constructor({ $resultContainer, state }) {
    this.$resultContainer = $resultContainer;
    this.state = state;
    this.game = new Game(this.state.names, this.state.count);

    this.render();
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

  addEvent() {
    this.nextButton.addEventListener('click', this.nextPrint.bind(this));
  }

  firstPrint() {
    this.$innerContainer.innerHTML = `
        <p>${this.game.getCurrentPlayerName()}의 차례입니다.</p>
    `;
  }

  nextPrint() {
    if (!this.game.isGameFinished()) {
      const [first, second, total] = this.game.playNextTurn();
      this.game.moveNextPlayer();
      this.$innerContainer.innerHTML += `
          <p>결과 : ${first}, ${second}</p>
          <p>토탈 : ${total}</p>
          <hr>
          <p>${this.game.getCurrentPlayerName()}의 차례입니다.</p>
          `;
    }
  }

  printBlock() {
    //
  }

  printResult() {
    //
  }
}

export default Result;
