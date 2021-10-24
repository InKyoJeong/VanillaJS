class MapManager {
  constructor($target) {
    this.$target = $target;
    this.render();
  }
  render() {
    this.$target.innerHTML = `<h1>노선도 출력</h1>`;
  }
}

export default MapManager;
