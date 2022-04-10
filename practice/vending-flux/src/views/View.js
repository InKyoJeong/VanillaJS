export default class View extends HTMLElement {
  hideClassName = "hide";

  connectedCallback() {
    this.replaceChildren();
    this.insertAdjacentHTML("afterbegin", this.render());

    this.init();
  }

  init() {
    return this;
  }

  render() {
    return ``;
  }

  show() {
    this.classList.remove(this.hideClassName);
    return this;
  }

  hide() {
    this.classList.add(this.hideClassName);
    return this;
  }
}
