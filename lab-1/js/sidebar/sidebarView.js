class SidebarView {
  constructor(model, root) {
    this.root = root;
    this.model = model;
    model.addObserver(x => this.update(x));
  }

  render() {
    this.root.innerHTML = `<button id="minus-button">-</button><span>${this.model.getNumberOfGuests()}</span> people<button id="plus-button">+</button>`;
  }

  update(whatHappened) {
    if (whatHappened.guests) {
      this.root.firstElementChild.nextSibling.textContent = whatHappened.guests;
    }
  }
}
