import Game from '../classes/Game.js';

class Result {
  constructor({ $resultContainer, state }) {
    this.$resultContainer = $resultContainer;
    this.state = state;
    this.game = new Game(this.state.names, this.state.count);
  }
}

export default Result;
