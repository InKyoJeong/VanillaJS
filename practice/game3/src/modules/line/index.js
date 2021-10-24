class LineManager {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.$target.innerHTML = "<h1>Line(노선입니다.</h1>";
  }
}

export default LineManager;
