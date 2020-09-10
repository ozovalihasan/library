const form = document.getElementById("book-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const author = form.elements.namedItem("author").value;
  const title = form.elements.namedItem("title").value;
  const pageNumber = form.elements.namedItem("pages").value;
  const readStatus = form.elements.namedItem("read-status").value;
  if (author && title && pageNumber && readStatus) {
    addBookToLibrary(author, title, pageNumber, readStatus);
    showBook();
    form.reset();
  } else {
    alert("Fill all informations correctly ");
  }
});

const myBooks = document.querySelector(".book");
const formButton = document.querySelector(".display-form");
const formSlot = document.querySelector(".form-space");
formButton.addEventListener("click", () => {
  formSlot.style.display = "block";
});
const myLibrary = [];

function Book(author, title, pageNumber, readStatus) {
  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.readStatus = readStatus;
}

Book.prototype.toggleRead = function () {
  return this.readStatus === "Read"
    ? (this.readStatus = "Not yet read")
    : (this.readStatus = "Read");
};
function addBookToLibrary(author, title, pageNumber, readStatus) {
  const book = new Book(author, title, pageNumber, readStatus);
  myLibrary.push(book);
}

function showBook() {
  let ourBooks = "";
  myLibrary.forEach((book, bookIndex) => {
    ourBooks += `<div> ${book.title} </div>
            <button onclick="removeBook(${bookIndex})" >Remove this book</button>
            <button onclick="changeReadStatus(${bookIndex})" >${book.readStatus}</button>
    `;
  });
  myBooks.innerHTML = ourBooks;
}
function changeReadStatus(bookIndex) {
  const book = myLibrary[bookIndex];
  book.toggleRead();
  showBook();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  showBook();
}

showBook();
