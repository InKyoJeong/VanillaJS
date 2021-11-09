import { ID } from '../../constants/index.js';

class ChangeReturn {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.render();
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>동전 반환</h3>
        <button id=${ID.COIN_RETURN_BUTTON}>반환 하기</button>
    `;
  }
}

export default ChangeReturn;
