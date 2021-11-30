import Player from './Player.js';

class Game {
  constructor(players, count) {
    this.players = players.map(name => new Player(name, count));
    this.cycleIndex = 0;
    this.playerIndex = 0;
  }

  playNextTurn() {
    return this.players[this.playerIndex].playOneTurn(this.cycleIndex);
  }

  getCurrentPlayerName() {
    return this.players[this.playerIndex].name;
  }

  moveNextPlayer() {
    if (this.playerIndex + 1 === this.players.length) {
      this.playerIndex = 0;
      this.moveNextCycle();
      return;
    }

    return this.playerIndex++;
  }

  moveNextCycle() {
    return this.cycleIndex++;
  }
}

export default Game;
