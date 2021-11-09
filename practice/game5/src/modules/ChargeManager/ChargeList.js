import { LOCAL_DB } from '../../constants/index.js';
import { coinStorage } from '../../utils/localStorage.js';
import { chargeAmount, chargeCoinList } from '../../utils/template.js';

class ChargeList {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.state.event.subscribe(this.render.bind(this));
    this.render();
  }

  render() {
    this.addContents();
  }

  addContents() {
    this.$target.innerHTML = `
        <h3>자판기가 보유한 금액 현황</h3>
        ${chargeAmount(coinStorage(LOCAL_DB.COIN))}
        <h3>자판기가 보유한 동전 현황</h3>
        ${chargeCoinList(coinStorage(LOCAL_DB.COIN))} 
    `;
  }
}

export default ChargeList;
