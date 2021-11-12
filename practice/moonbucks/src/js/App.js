class App {
  constructor() {
    this.dom();
    this.addEvents();
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
    li.innerText = value;
    this.$menuList.appendChild(li);
  }
}

export default App;
