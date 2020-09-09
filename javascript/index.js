const myBooks = document.querySelector(".book");
let myLibrary = ["harry potter", "hobbit"];

function Book() {}

function addBookToLibrary() {}

function showBook() {
  let ourBooks = "";
  for (let book of myLibrary) {
    ourBooks += `<div> ${book} </div> `;
  }
  myBooks.innerHTML = ourBooks;
}

showBook(myLibrary);
