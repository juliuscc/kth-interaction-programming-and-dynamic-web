class DinnerModel {
  constructor() {
    this.numberOfGuests = 1;
    this.subscribers = [];
  }

  setNumberOfGuests(x) {
    this.numberOfGuests = x;
    this.notifyObservers({ guests: x });
  }

  getNumberOfGuests() {
    return this.numberOfGuests;
  }

  addObserver(callback) {
    this.subscribers.push(callback);
  }

  notifyObservers(payload) {
    this.subscribers.forEach(callback => callback(payload));
  }
}
