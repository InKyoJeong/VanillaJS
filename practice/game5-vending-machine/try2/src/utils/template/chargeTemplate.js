import { ID, LOCAL_DB } from "../../../constants/index.js";
import { getLocalStorage } from "../localStorage.js";

const totalCharge = (list) => {
  const total = list
    .map(({ name, count }) => name * count)
    .reduce((a, b) => a + b, 0);

  return total === 0 ? "" : total;
};

export const chargeInputTemplate = () => {
  return `
    <h3>자판기 동전 충전하기</h3>
    <input id=${ID.VENDING_MACHINE_CHARGE_INPUT} type="number" placeholder="자판기가 보유할 금액" />
    <button id=${ID.VENDING_MACHINE_CHARGE_BUTTON}>충전하기</button>
  `;
};

export const totalChargeTemplate = () => {
  return `
    <p id=${ID.VENDING_MACHINE_CHARGE_AMOUNT}>보유 금액: ${totalCharge(
    getLocalStorage(LOCAL_DB.COIN)
  )}</p>
  `;
};

const chargeTableHeader = `
  <tr>
    <td>동전</td>
    <td>개수</td> 
  </tr>
`;

const chargeTableRows = (list) => {
  let html = "";
  list.map(({ name, count }) => {
    html += `
      <tr>
        <td>${name}원</td>
        <td>${count}개</td> 
      </tr>
    `;
  });

  return html;
};

export const chargeTableTemplate = () => {
  return `
    <h3>자판기가 보유한 동전</h3>
    <table border="1">
      ${chargeTableHeader} 
      ${chargeTableRows(getLocalStorage(LOCAL_DB.COIN))}
    </table>
  `;
};