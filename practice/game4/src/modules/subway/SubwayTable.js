import { tableHeader } from "../../utils/template.js";

class SubwayTable {
  constructor($target, { result, distance, time, type }) {
    this.$target = $target;
    this.result = result;
    this.distance = distance;
    this.time = time;
    this.type = type;
    this.render();
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
        <br />
        <h2>결과</h2>
        <h3>${this.type}</h3>
        <table border="1" >
            ${tableHeader}
            <tr align="center">
              <td>${this.distance}km</td>
              <td>${this.time}분</td>
            <tr>
            <tr align="center">
              <td colspan="2">${this.result}</td>
            </tr>
        </table>
    `;
  }
}

export default SubwayTable;
