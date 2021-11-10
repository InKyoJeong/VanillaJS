class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(index) {
    this.handlers.delete(index);
  }

  fire() {
    this.handlers.forEach(handler => handler());
  }
}

export default Event;
