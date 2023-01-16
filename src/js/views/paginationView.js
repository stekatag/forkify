import View from "./View.js";
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    })
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton("next");
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton("prev");
    }

    // Other page
    if (curPage < numPages) {
      return this._generateMarkupButton("prev").concat(this._generateMarkupButton("next"));
    }

    // Page 1, and there are no other pages
    return "";
  }

  _generateMarkupButton(type) {
    const curPage = this._data.page;
    const calcCurPage = type === "next" ? curPage + 1 : curPage - 1;

    return `
    <button data-goto="${calcCurPage}" class="btn--inline pagination__btn--${type}">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${calcCurPage}</span>
    </button>
    `;
  }
}

export default new PaginationView();