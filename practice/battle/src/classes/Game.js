import Player from './Player.js';

class Game {
  constructor(names, count) {
    this.names = names.map(name => new Player(name, count));
  }
}

export default Game;
