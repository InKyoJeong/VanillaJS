import { observable } from "./core/observer.js";

export const store = {
  state: observable({
    a: 1,
    b: 2,
  }),

  setState(newState) {
    for (const [key, value] of Object.entries(newState)) {
      if (!this.state[key]) continue;
      this.state[key] = value;
    }
  },
};
