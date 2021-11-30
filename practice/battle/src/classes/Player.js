class Player {
  constructor(name, count) {
    this.name = name;
    this.turnScores = Array.from({ length: count }, () => 0);
  }
}

export default Player;
