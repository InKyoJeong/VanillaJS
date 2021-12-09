import { purchaseTableTemplate } from "../../utils/template/purchaseTemplate.js";
import { addTableStyle } from "../../utils/tableStyle.js";
import { CLASS, LOCAL_DB } from "../../../constants/index.js";
import { isPurchaseAvailable } from "../../utils/valid.js";
import { getLocalStorage, saveLocalStorage } from "../../utils/localStorage.js";

class PurchaseTable {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addTemplate();
    this.addEvent();
    addTableStyle();
  }

  addTemplate() {
    this.$target.innerHTML = purchaseTableTemplate();
  }

  addEvent() {
    this.$target.addEventListener("click", this.clickButton.bind(this));
  }

  clickButton(e) {
    if (!e.target.classList.contains(CLASS.PURCHASE_BUTTON)) {
      return;
    }

    const tr = e.target.closest("tr");
    const { productName } = tr.children[0].dataset;
    const { productPrice } = tr.children[1].dataset;
    const { productQuantity } = tr.children[2].dataset;
    console.log(tr, productName, productPrice, productQuantity);

    if (!isPurchaseAvailable(productPrice)) {
      return;
    }

    this.updateProductStorage(productName);
    this.updatePurchaseStorage(productPrice);
  }

  updateProductStorage(productName) {
    const products = getLocalStorage(LOCAL_DB.PRODUCT);
    const index = products.findIndex(({ name }) => name === productName);
    products[index].quantity--;
    if (products[index].quantity === 0) {
      products.splice(index, 1);
    }
    saveLocalStorage(LOCAL_DB.PRODUCT, products);
  }

  updatePurchaseStorage(productPrice) {
    const purchase = getLocalStorage(LOCAL_DB.PURCHASE);
    saveLocalStorage(LOCAL_DB.PURCHASE, purchase - Number(productPrice));
  }
}

export default PurchaseTable;
