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
    this.printTitle();
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
    this.nextButton.addEventListener('click', this.playGame.bind(this));
  }

  playGame() {
    if (!this.game.isLastTurn()) {
      this.printBlockResult();
      this.game.moveNextPlayerIndex();
      this.printTitle();
    } else {
      this.printBlockResult();
      this.game.moveNextPlayerIndex();
    }

    if (this.game.isGameFinished()) {
      return this.printFinalResult();
    }
  }

  printTitle() {
    this.$innerContainer.innerHTML += `<p>${this.game.getCurrentPlayerName()}의 차례입니다.</p>`;
  }

  printBlockResult() {
    const [first, second, total] = this.game.playCurrentTurn();
    this.$innerContainer.innerHTML += `
          <p>결과 : ${first}, ${second}</p>
          <p>토탈 : ${total}</p>
          <hr>
    `;
  }

  printFinalResult() {
    this.nextButton.hidden = true;
    this.$innerContainer.innerHTML += `
        <p>총점</p>
    `;
    this.game.players.forEach(player => {
      this.$innerContainer.innerHTML += `
        <p>${player.name} : ${player.getTotalScore()}</p>
      `;
    });
  }
}

export default Result;
