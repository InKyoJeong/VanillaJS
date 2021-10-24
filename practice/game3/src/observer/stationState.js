import Event from "./index.js";

class StationState {
  constructor() {
    this.event = new Event();
  }

  addStationState() {
    this.updateStationState();
  }

  removeStationState() {
    this.updateStationState();
  }

  updateStationState() {
    this.event.fire();
  }
}

export default StationState;
