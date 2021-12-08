import Event from './index.js';

class State {
  constructor() {
    this.event = new Event();
  }

  updateState() {
    this.event.fire();
  }
}

export default State;
