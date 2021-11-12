import {
  deleteLocalStorage,
  editLocalStorage,
  getLocalStorage,
  saveLocalStorage,
} from "./utils/localStorage.js";

class App {
  constructor() {
    this.list = [];
    this.currentCategory = "espresso"; // 초기 카테고리
    this.dom();
    this.addEvents();
    this.loadItems();
    this.itemIndex = Date.now() + "";
  }

  dom() {
    this.$nav = document.querySelector("nav");
    this.$h2 = document.querySelector("h2");
    this.$menuForm = document.querySelector("#espresso-menu-form");
    this.$inputField = document.querySelector(".input-field");
    this.$submitButton = document.querySelector(".input-submit");
    this.$menuList = document.querySelector("#espresso-menu-list");
    this.$menuCount = document.querySelector(".menu-count");
  }

  addEvents() {
    this.$nav.addEventListener("click", this.clickCategory.bind(this));
    this.$submitButton.addEventListener("click", this.submitForm.bind(this));
    this.$menuForm.addEventListener("submit", this.submitForm.bind(this));
  }

  loadItems() {
    // LS
    const list = getLocalStorage(this.currentCategory);

    if (list !== null) {
      list.forEach((item) => this.addContents(item));
    }
  }

  clickCategory(e) {
    if (!e.target.classList.contains("cafe-category-name")) {
      return;
    }

    const { categoryName } = e.target.dataset;
    this.currentCategory = categoryName;
    this.changeCategory(this.currentCategory);
    console.log("카테고리 변경됨", this.currentCategory, categoryName);
  }

  changeCategory(category) {
    // repaint
    this.$menuList.innerHTML = "";
    this.list = [];
    this.loadItems();

    // changeTitle
    const obj = {
      espresso: "☕ 에스프레소",
      frappuccino: "🥤 프라푸치노",
      blended: "🍹 블렌디드",
      teavana: "🫖 티바나",
      desert: "🍰 디저트",
    };
    this.$h2.innerText = `${obj[category]} 메뉴 관리`;

    // changeInput
    this.$inputField.setAttribute(
      "placeholder",
      `${obj[category].slice(2)} 메뉴 이름`
    );
    this.$inputField.setAttribute("id", `${category}-menu-name`);

    // changeSubmit
    this.$submitButton.setAttribute("id", `${category}-menu-submit-button`);
  }

  submitForm(e) {
    e.preventDefault();
    const text = this.$inputField.value;
    if (text === "") {
      return;
    }
    const id = this.itemIndex++;

    this.addContents({ text, id });
    this.$inputField.value = "";
  }

  addContents(obj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const editButtton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const soldButton = document.createElement("button");
    editButtton.innerText = "수정";
    editButtton.className =
      "bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button";
    editButtton.addEventListener("click", this.editItem.bind(this));
    deleteButton.innerText = "삭제";
    deleteButton.className =
      "bg-gray-50 text-gray-500 text-sm menu-remove-button";
    deleteButton.addEventListener("click", this.deleteItem.bind(this));
    soldButton.innerHTML = "품절";
    soldButton.className =
      "bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button";
    soldButton.addEventListener("click", this.soldItem.bind(this));
    span.className = "w-100 pl-2 menu-name";
    span.innerText = obj.text;
    li.className = "menu-list-item d-flex items-center py-2";
    const item = { text: obj.text, id: obj.id };
    li.dataset.index = obj.id;
    li.append(span, soldButton, editButtton, deleteButton);
    this.$menuList.append(li);
    this.updateCount();

    this.list.push(item);

    // LS
    saveLocalStorage(this.currentCategory, this.list);
  }

  editItem(e) {
    const { parentElement } = e.target;
    const message = prompt("수정하시겠어요?");
    parentElement.children[0].innerText = message;

    // LS
    const { index } = parentElement.dataset;
    editLocalStorage(this.currentCategory, index, message);
  }

  deleteItem(e) {
    const { parentElement } = e.target;
    if (confirm("삭제하시겠어요?")) {
      parentElement.remove();
    }
    this.updateCount();

    // LS
    const { index } = parentElement.dataset;
    deleteLocalStorage(this.currentCategory, index);
  }

  soldItem(e) {
    const span = e.target.parentElement.children[0];
    span.classList.toggle("sold-out");
  }

  updateCount() {
    const count = this.$menuList.childElementCount;
    this.$menuCount.innerText = `총 ${count}개`;
  }
}

export default App;
