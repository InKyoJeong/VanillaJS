import { ID } from '../constants/index.js';

class CountInput {
  constructor({ $countContainer, setState }) {
    this.$countContainer = $countContainer;
    this.setState = setState;
    this.render();
  }

  render() {
    this.addContents();
    this.selectDom();
    this.addEvent();
  }

  addContents() {
    this.$countContainer.innerHTML = `
        <h3>플레이턴 수 입력</h3>
        <input type="number" placeholder="" id=${ID.COUNT_INPUT} />
        <button id=${ID.COUNT_SUBMIT}>확인</button>
    `;
  }

  selectDom() {
    this.$countInput = document.querySelector(`#${ID.COUNT_INPUT}`);
    this.$submitButton = document.querySelector(`#${ID.COUNT_SUBMIT}`);
  }

  addEvent() {
    this.$submitButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    const count = Number(this.$countInput.value);
    if (!isValidCount(count)) {
      console.log('false');
      return;
    }
  }
}

export default CountInput;
