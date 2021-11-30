import { pickRandom } from '../utils/pickRandom.js';

class Player {
  constructor(name, count) {
    this.name = name;
    this.turnScores = Array.from({ length: count }, () => 0);
  }

  getTotalScore() {
    return this.turnScores.reduce((a, b) => a + b, 0);
  }

  playOneTurn(index) {
    const first = pickRandom();
    const second = pickRandom();
    const sum = first + second;

    if (first !== second) {
      this.turnScores[index] += sum;
    }

    return [first, second, this.getTotalScore()];
  }
}

export default Player;
