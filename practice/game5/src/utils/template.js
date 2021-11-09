import { CLASS, coinIdList } from '../constants/index.js';

export const productContents = list => {
  let html = ``;
  list.map(v => {
    html += `
        <div>
          <span>${v.name} /</span>
          <span>${v.price}원 /</span>
          <span>${v.quantity}개</span>
        </div>
      `;
  });

  return html;
};

export const chargeAmount = list => {
  return list.map(v => v.name * v.count).reduce((a, b) => a + b, 0) + '원';
};

export const chargeCoinList = list => {
  let html = ``;
  list.map((v, i) => {
    html += `
      <div>
        <span id=${coinIdList[i]}>${v.name}원: ${v.count}개</span>
      </div>
    `;
  });

  return html;
};

export const purchaseContents = list => {
  let html = ``;
  list.map(v => {
    html += `
        <div>
          <span class=${CLASS.PRODUCT_PURCHASE_NAME} data-product-name=${v.name}>${v.name} /</span>
          <span class=${CLASS.PRODUCT_PURCHASE_PRICE} data-product-price=${v.price}>${v.price}원 /</span>
          <span class=${CLASS.PRODUCT_PURCHASE_QUANTITY} data-product-quantity=${v.quantity}>${v.quantity}개</span>
          <button class=${CLASS.PURCHASE_BUTTON}>구매</button>
        </div>
      `;
  });

  return html;
};

export const returnCoinList = list => {
  let name = [500, 100, 50, 10];
  return `
    <div>
      ${list.map((v, i) => `<div>${name[i]}원 / ${v}개</div>`).join('')}
    </div>
  `;
};
