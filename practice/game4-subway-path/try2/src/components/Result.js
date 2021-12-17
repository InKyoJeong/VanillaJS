class Result {
  constructor({ $resultContainer, state }) {
    this.$resultContainer = $resultContainer;
    this.state = state;

    this.addTemplate();
  }

  addTemplate() {
    this.$resultContainer.innerHTML = `
        <h1>결과</h1>
        <table border="1">
            <th>총거리</th>
            <th>총시간</th>
            <tr align="center">
              <td>${this.state.distance}km</td>
              <td>${this.state.time}분</td>
            <tr>
            <tr align="center">
              <td colspan="2">${this.state.path.join("▶︎")}</td>
            </tr>
        </table>
    `;
  }
}

export default Result;
