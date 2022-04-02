class CurrentTime extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    // 모니터링 할 속성 이름
    return ["locale"];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    // 속성이 추가/제거/변경되었다.
    // this[attrName] = newVal;
    console.log("감지됨", attrName, oldVal, newVal);
  }

  connectedCallback() {
    this.start();
  }

  disconnectedCallback() {
    this.stop();
  }

  start() {
    document.querySelector("current-time").setAttribute("locale", "ko-KR");
    this.stop();
    this._timer = window.setInterval(() => {
      this.innerText = new Date().toLocaleString();
      this.attributeChangedCallback("locale", "ko-KR", "en-US");
    }, 1000);
  }

  stop() {
    if (this._timer) {
      window.clearInterval(this._timer);
      this._timer = null;
    }
  }
}

customElements.define("current-time", CurrentTime);
