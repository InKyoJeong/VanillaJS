class CustomElement extends HTMLElement {
  static get observedAttributes() {
    return ["lang"];
  }

  constructor() {
    super();

    // add shadow root in constructor
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
          <style>div { background-color: #82b74b; }</style>
          <div>yey</div>
        `;
    this.test = shadowRoot.querySelector("div");
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr == "lang") {
      let yey;
      switch (newValue) {
        case "ko":
          yey = "만세!";
          break;
        case "es":
          yey = "hoora!";
          break;
        case "jp":
          yey = "万歳!";
          break;
        default:
          yey = "yey!";
      }

      this.test.innerText = yey;
    }
  }

  yell() {
    alert(this.test.innerText);
  }
}

customElements.define("my-element", CustomElement);
