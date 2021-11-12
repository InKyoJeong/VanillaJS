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
    const editButtton = document.createElement("button");
    const deleteButton = document.createElement("button");
    editButtton.innerText = "수정";
    editButtton.className =
      "bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button";
    editButtton.addEventListener("click", this.editItem.bind(this));
    deleteButton.innerText = "삭제";
    deleteButton.className =
      "bg-gray-50 text-gray-500 text-sm menu-remove-button";
    deleteButton.addEventListener("click", this.deleteItem.bind(this));
    span.className = "w-100 pl-2 menu-name";
    span.innerText = value;
    li.className = "menu-list-item d-flex items-center py-2";
    li.id = `menu-item-edit-${this.editIndex++}`;
    li.append(span, editButtton, deleteButton);
    this.$menuList.append(li);
  }

  editItem(e) {
    const { parentElement } = e.target;
    const message = prompt("수정하시겠어요?");
    parentElement.children[0].innerText = message;
  }

  deleteItem(e) {
    const { parentElement } = e.target;
    if (confirm("삭제하시겠어요?")) {
      parentElement.remove();
    }
  }
}

export default App;
