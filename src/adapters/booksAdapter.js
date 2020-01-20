class BooksAdapter {
  constructor(){
    this.baseUrl = "https://localhost:3000/api/v1"
    this.getBooks();
  }

  getBooks(){
    return fetch(this.baseUrl+"/books")
    .then(resp => resp.json())
    .then(books => console.log(books))
  }
}
