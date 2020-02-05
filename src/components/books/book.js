class Book {
  constructor(data) {
    this.clearBookDiv();
    this.renderBook(data);
  }

  clearBookDiv() {
    let displayDiv = document.getElementById("display-book");
    displayDiv.innerHTML = "";
    debugger;
  }

  renderBook(data) {
    let addBookBtn = document.createElement("button");
    let displayDiv = document.getElementById("display-book");
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book-card");
    let bookImg = document.createElement("img");
    let bookTitle = document.createElement("h2");
    let bookAuthor = document.createElement("p");
    let words = document.createElement("p");
    addBookBtn.innerHTML = `<button data='${data.id}' class='button' id='add-book'>Add Book</button>`;
    bookImg.src = data.large_img;
    bookImg.width = 400;
    bookTitle.innerText = data.title;
    bookAuthor.innerText = data.author;
    words.innerText = `Between ${data.words_low} and ${data.words_high} words.`;
    bookDiv.appendChild(bookImg);
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(words);
    bookDiv.appendChild(addBookBtn);

    displayDiv.appendChild(bookDiv);
    this.id = data.id;
    this.author = data.author;
    this.compressed_img = data.compressed_img;
    this.pages = data.pages;
    this.words_low = data.words_low;
    this.words_high = data.words_high;
    this.search_id = data.search_id;
  }
}

export default Book;
