class CurrentTime {
  constructor(element) {
    this.element = element;

    this.init();
    this.start();
  }

  init() {
    this.localeChangedObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "locale"
        ) {
          this.locale = this.element.getAttribute("locale");
        }
      });
    });

    this.localeChangedObserver.observe(this.element, {
      attributes: true,
      attributeFilter: ["locale"],
    });

    this.disconnectedObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "childList" &&
          Array.prototype.slice
            .call(mutation.removedNodes)
            .indexOf(this.element) >= 0
        ) {
          this.dispose();
        }
      });
    });

    this.disconnectedObserver.observe(this.element.parentNode, {
      childList: true,
    });
  }

  start() {
    this.stop();

    this.timer = window.setInterval(() => {
      this.element.innerText = new Date().toLocaleString();
    }, 1000);
  }

  stop() {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  dispose() {
    this.stop();
    this.localeChangedObserver.disconnect();
    this.disconnectedObserver.disconnect();
  }

  static create(el) {
    return new CurrentTime(el);
  }
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    document.querySelectorAll(".current-time").forEach((el) => {
      CurrentTime.create(el);
    });
  },
  false
);
