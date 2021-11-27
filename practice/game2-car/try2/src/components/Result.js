class Result {
  constructor({ $resultContainer, state }) {
    this.$resultContainer = $resultContainer;
    this.$resultContainer.removeAttribute("hidden");
    this.state = state;

    console.log("저장된 상태", this.state);
  }
}

export default Result;
