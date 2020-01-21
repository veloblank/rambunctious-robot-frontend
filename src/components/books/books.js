import Book from "./book.js";

class Books {
  constructor(book) {
    this.createBook(book);
  }

  createBook(data) {
    new Book(data);
  }
}

export default Books;
