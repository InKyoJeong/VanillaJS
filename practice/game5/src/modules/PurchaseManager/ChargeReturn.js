import { ID, LOCAL_DB } from '../../constants/index.js';
import { decreaseCoinStorage, decresePurchaseStorage, getPurchaseStorage } from '../../utils/localStorage.js';
import { returnCoinList } from '../../utils/template.js';

class ChangeReturn {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.arr = [0, 0, 0, 0];
    this.render();
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
        ${returnCoinList(this.arr)}
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
    // 최소 개수 동전 만큼 코인 스토리지에서 차감
    decreaseCoinStorage(LOCAL_DB.COIN, returnCoins);
    // 투입 금액 0원으로 초기화
    decresePurchaseStorage(LOCAL_DB.PURCHASE, returnAmount);
    this.state.updateState();
    // 반환 동전 뷰 업데이트
    this.arr = decreaseCoinStorage(LOCAL_DB.COIN, returnCoins); // 1) 실제 반환하는 동전만큼만 표시할 경우
    // this.arr = returnCoins // 2) 최소 개수 동전 계산한 만큼 모두 표시할 경우
    this.addContents();
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
