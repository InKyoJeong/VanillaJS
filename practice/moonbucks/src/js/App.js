class App {
  constructor() {
    this.dom();
    this.addEvents();
    this.editIndex = 0;
  }

  dom() {
    this.$menuForm = document.querySelector("#espresso-menu-form");
    this.$inputField = document.querySelector(".input-field");
    this.$submitButton = document.querySelector(".input-submit");
    this.$menuList = document.querySelector("#espresso-menu-list");
  }

  addEvents() {
    this.$submitButton.addEventListener("click", this.submitForm.bind(this));
    this.$menuForm.addEventListener("submit", this.submitForm.bind(this));
  }

  submitForm(e) {
    e.preventDefault();
    const { value } = this.$inputField;

    if (value === "") {
      return;
    }
    this.addContents(value);
    this.$inputField.value = "";
  }

  addContents(value) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.id = `menu-item-edit-${this.editIndex++}`;
    button.innerText = "✏️수정";
    button.addEventListener("click", this.editItem.bind(this));
    span.innerText = value;
    li.append(span, button);
    this.$menuList.append(li);
  }

  editItem(e) {
    const { parentElement } = e.target;
    const message = prompt("수정하시겠어요?");
    parentElement.children[0].innerText = message;
  }
}

export default App;
