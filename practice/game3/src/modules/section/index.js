class SectionManager {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.$target.innerHTML = "<h1>Section(구간)ㄴㄴ입니다.</h1>";
  }
}

export default SectionManager;
