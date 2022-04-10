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

  on(event, handler) {
    this.addEventListener(event, handler);
    return this;
  }

  emit(event, data) {
    const newCustomEvent = new CustomEvent(event, {
      detail: data,
    });
    this.dispatchEvent(newCustomEvent);
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
