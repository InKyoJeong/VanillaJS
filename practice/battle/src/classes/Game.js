import Player from './Player.js';

class Game {
  constructor(players, count) {
    this.players = players.map(name => new Player(name, count));
    this.turnIndex = 0;
    this.playerIndex = 0;
  }

  playNextTurn() {
    return this.players[this.playerIndex].playOneTurn(this.turnIndex);
  }

  getCurrentPlayerName() {
    return this.players[this.playerIndex].name;
  }
}

export default Game;
