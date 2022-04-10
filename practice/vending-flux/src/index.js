import { $ } from "./utils/dom.js";
import "./views/App.js";

document.addEventListener("DOMContentLoaded", () => {
  const $target = $("#app");
  $target.insertAdjacentHTML("beforeend", `<vending-app></vending-app>`);
});
