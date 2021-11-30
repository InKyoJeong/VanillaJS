import Player from './Player.js';

class Game {
  constructor(players, count) {
    this.players = players.map(name => new Player(name, count));
    this.count = count;
    this.cycleIndex = 0;
    this.playerIndex = 0;
  }

  playCurrentTurn() {
    return this.players[this.playerIndex].playOneTurn(this.cycleIndex);
  }

  getCurrentPlayerName() {
    return this.players[this.playerIndex].name;
  }

  getCurrentPlayerIndex() {
    return this.playerIndex;
  }

  getCurrentCycle() {
    return this.cycleIndex;
  }

  moveNextPlayerIndex() {
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

  isGameFinished() {
    return this.cycleIndex === this.count;
  }

  isLastTurn() {
    return (
      this.cycleIndex + 1 === this.count &&
      this.playerIndex + 1 === this.players.length
    );
  }
}

export default Game;
