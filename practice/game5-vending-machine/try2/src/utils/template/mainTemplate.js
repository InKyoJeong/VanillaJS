import { ID } from "../../constants/index.js";

export const mainTemplate = () => {
  return `
      <h1>π₯€ μνκΈ° π₯€</h1>
      <div id=${ID.MENU_BUTTON_CONTAINER}>
        <button id=${ID.PRODUCT_ADD_MENU}>μν κ΄λ¦¬</button>
        <button id=${ID.VENDING_MACHINE_MANAGE_MENU}>μλ μΆ©μ </button>
        <button id=${ID.PRODUCT_PURCHASE_MENU}>μν κ΅¬λ§€</button>
      </div>
      <div id=${ID.RESULT_CONTAINER}></div>
  `;
};
