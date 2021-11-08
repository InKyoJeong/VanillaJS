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
