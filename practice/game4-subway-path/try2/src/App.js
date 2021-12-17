class App {
  constructor($target) {
    this.$target = $target;
  }

  addTemplate() {
    this.$target.innerHTML = `
      <h1>지하철 길찾기</h1>
      <div></div>
      <div></div>
    `;
  }
}

export default App;
