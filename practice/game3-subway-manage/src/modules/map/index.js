import { CLASS, LOCAL_DB } from "../../constants/index.js";
import { getLocalStorage } from "../../utils/localStorage.js";
import { mapPrinter } from "../../utils/template.js";

class MapManager {
  constructor($target) {
    this.$target = $target;
    this.render();
  }
  render() {
    this.$target.innerHTML = `
       <div class="${CLASS.MAP}">
       ${mapPrinter(getLocalStorage(LOCAL_DB.LINE))}
       </div>
    `;
  }
}

export default MapManager;
