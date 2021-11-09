import { ID, LOCAL_DB } from '../../constants/index.js';
import { decresePurchaseStorage, getPurchaseStorage } from '../../utils/localStorage.js';

class ChangeReturn {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.render();
    this.fiveHundred = 0;
  }

  render() {
    this.addContents();
    this.dom();
    this.addEvent();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>동전 반환</h3>
        <button id=${ID.COIN_RETURN_BUTTON}>반환 하기</button>
        <div>500원 / 0개</div>
        <div>100원 / 0개</div>
        <div>50원 / 0개</div>
        <div>10원 / 0개</div>
    `;
  }

  dom() {
    this.$returnButton = document.querySelector(`#${ID.COIN_RETURN_BUTTON}`);
  }

  addEvent() {
    this.$returnButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    let returnAmount = getPurchaseStorage(LOCAL_DB.PURCHASE);

    // purchase금액 스토리지 만큼 최소개수 동전생성
    let returnCoins = this.generateReturnCoin(returnAmount);
    console.log(returnCoins);

    // todo: 최소 개수 동전 만큼 코인 스토리지에서 차감

    // purchase금액 0원으로 초기화,
    decresePurchaseStorage(LOCAL_DB.PURCHASE, returnAmount);
    this.state.updateState();
  }

  generateReturnCoin(amount) {
    let fiveHundred = Math.floor(amount / 500);
    amount -= fiveHundred * 500;
    let oneHundred = Math.floor(amount / 100);
    amount -= oneHundred * 100;
    let fifty = Math.floor(amount / 50);
    amount -= fifty * 50;
    let ten = Math.floor(amount / 10);

    return [fiveHundred, oneHundred, fifty, ten];
  }
}

export default ChangeReturn;
