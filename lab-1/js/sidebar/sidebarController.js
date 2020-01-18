class SidebarController {
  constructor(model, root) {
    new SidebarView(model, root).render();

    const minusButton = document.querySelector("#minus-button");
    minusButton.addEventListener("click", () =>
      model.setNumberOfGuests(model.getNumberOfGuests() - 1)
    );

    const plusButton = document.querySelector("#plus-button");
    plusButton.addEventListener("click", () =>
      model.setNumberOfGuests(model.getNumberOfGuests() + 1)
    );
  }
}
