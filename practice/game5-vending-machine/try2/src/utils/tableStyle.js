import { $, $$ } from "./selector.js";

export const addTableStyle = () => {
  $("table").style.borderCollapse = "collapse";
  $("table").style.textAlign = "center";
  $$("td").forEach((e) => (e.style.padding = "0.5em 2em"));
};
