import SearchesAdapter from "../../adapters/searchesAdapter.js";
import Search from "./search.js";

class Searches {
  constructor() {
    this.searches = [];
    this.adapter = new SearchesAdapter();
    this.fetchAndLoadSearches();
  }

  bindEventListeners() {
    let searchForm = document.getElementById("new-search-form");
    let delSearch = document.querySelectorAll(".delete-search");
    delSearch.forEach(result => {
      result.addEventListener("click", e => this.removeSearchResult(e));
    });
    searchForm.addEventListener("submit", this.createSearch.bind(this));
  }

  removeSearchResult(e) {
    let delSearch = document.querySelector("#search-history");
    let targetLi = e.target.parentElement;
    let targetId = parseInt(targetLi.attributes.data.value);
    delSearch.removeChild(targetLi);
    this.adapter.removeSearch(targetId);
  }

  createSearch(event) {
    event.preventDefault();
    let searchedBook = document.getElementById("search-book");
    if (searchedBook.value) {
      this.adapter
        .createNewSearch(searchedBook.value)
        .then(() => this.fetchAndLoadSearches());
      searchedBook.value = "";
    }
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
      searchLi.setAttribute("data", search.id);
      searchLi.innerText = search.text;
      searchLi.innerHTML += "<button class='delete-search'>&times;</button>";
      searchHistory.append(searchLi);
    });
    this.searches = [];
    this.bindEventListeners();
  }
}

export default Searches;
