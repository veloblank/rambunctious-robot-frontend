import SearchesAdapter from "../../adapters/searchesAdapter.js";

class Searches {
  constructor() {
    this.searches = [];
    this.adapter = new SearchesAdapter();
    this.fetchAndLoadSearches();
    this.bindEventListeners();
  }

  bindEventListeners() {
    let searchForm = document.getElementById("new-search-form");
    searchForm.addEventListener("submit", this.createSearch.bind(this));
  }

  createSearch(event) {
    event.preventDefault();
    let searchedBook = document.getElementById("search-book");
    this.adapter.createNewSearch(searchedBook.value);
  }

  fetchAndLoadSearches() {}
}

export default Searches;
