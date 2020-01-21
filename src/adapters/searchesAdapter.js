import Books from "../components/books/books.js";
import Book from "../components/books/book.js";

class SearchesAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/searches";
  }

  getSearches() {
    return fetch(this.baseUrl).then(resp => resp.json());
  }

  createNewSearch(formData) {
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: formData })
    })
      .then(resp => resp.json())
      .then(data => new Book(data));
  }
}

export default SearchesAdapter;
