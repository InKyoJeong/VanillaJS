import { ID } from '../constants/index.js';
import { clearInput } from '../utils/clearInput.js';
import { isValidNameInput } from '../utils/valid.js';

class NameInput {
  constructor($target) {
    this.$target = $target;
    this.render();
  }

  render() {
    this.addContents();
    this.selectDom();
    this.addEvent();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>이름을 5자 이하, 쉼표로 구분</h3>
        <input type="text" placeholder="" id=${ID.NAME_INPUT} />
        <button id=${ID.NAME_SUBMIT}>확인</button>
    `;
  }

  selectDom() {
    this.$nameInput = document.querySelector(`#${ID.NAME_INPUT}`);
    this.$submitButton = document.querySelector(`#${ID.NAME_SUBMIT}`);
  }

  addEvent() {
    this.$submitButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    const names = this.$nameInput.value.split(',');
    if (!isValidNameInput(names)) {
      clearInput(this.$nameInput);
      return;
    }

    this.disableNameInput();
  }

  disableNameInput() {
    this.$nameInput.disabled = true;
    this.$submitButton.disabled = true;
  }
}

export default NameInput;
