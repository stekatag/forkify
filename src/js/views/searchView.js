class SearchView {
  _parentElement = document.querySelector(".search");

  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  updatePlaceholder() {
    const input = this._parentElement.querySelector(".search__field");
    const placeholderText =
      window.innerWidth <= 900
        ? "Search recipes..."
        : "Search over 1,000,000 recipes...";
    input.setAttribute("placeholder", placeholderText);
  }
}

export default new SearchView();
