import SearchesAdapter from "../../adapters/searchesAdapter.js";
import Search from "./search.js";

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
    this.adapter
      .createNewSearch(searchedBook.value)
      .then(() => this.fetchAndLoadSearches());
    searchedBook.value = "";
  }

  fetchAndLoadSearches() {
    this.adapter
      .getSearches()
      .then(searches =>
        searches.forEach(search => this.searches.push(new Search(search)))
      )
      .then(() => this.renderSearches());
  }

  renderSearches() {
    let searchHistory = document.getElementById("search-history");
    searchHistory.innerText = ""; //empties previous content so it doesn't duplicate <li's>
    this.searches.forEach(search => {
      let searchLi = document.createElement("li");
      searchLi.innerText = search.text;
      searchHistory.append(searchLi);
    });
    this.searches = [];
  }
}

export default Searches;
