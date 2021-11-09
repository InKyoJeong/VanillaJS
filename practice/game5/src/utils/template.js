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
  list.map(v => {
    html += `
      <div>
        <span>${v.name}원: ${v.count}개</span>
      </div>
    `;
  });

  return html;
};
