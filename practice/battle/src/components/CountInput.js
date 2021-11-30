import { ID } from '../constants/index.js';
import { clearInput } from '../utils/clearInput.js';
import { isValidCount } from '../utils/valid.js';

class CountInput {
  constructor({ $countContainer, setState, showResult }) {
    this.$countContainer = $countContainer;
    this.setState = setState;
    this.showResult = showResult;
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
      clearInput(this.$countInput);
      return;
    }

    this.setState({ count });
    this.disableCountInput();
    this.showResult();
  }

  disableCountInput() {
    this.$countInput.disabled = true;
    this.$submitButton.disabled = true;
  }
}

export default CountInput;
