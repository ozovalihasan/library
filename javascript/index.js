const myBooks = document.querySelector('.book');
const formButton = document.querySelector('.display-form');
const formSlot = document.querySelector('.form-space');
const form = document.getElementById('book-form');
const myLibrary = localStorage.myLibrary
  ? JSON.parse(localStorage.myLibrary)
  : [];

function Book(author, title, pageNumber, readStatus) {
  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.readStatus = readStatus;
}

Book.prototype.toggleRead = function () {
  if (this.readStatus === 'Read') {
    this.readStatus = 'Not yet read';
  } else {
    this.readStatus = 'Read';
  }
  return this.readStatus;
};

function addBookToLibrary(author, title, pageNumber, readStatus) {
  const book = new Book(author, title, pageNumber, readStatus);
  myLibrary.push(book);
  localStorage.myLibrary = JSON.stringify(myLibrary);
  formSlot.style.display = 'none';
}

function showBook() {
  let ourBooks = '';
  myLibrary.forEach((book, bookIndex) => {
    ourBooks += `
      <div class="col-sm-12 col-md-6 p-3">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">${book.title}</h6>
            <p class="card-text">${book.author} is the author of this book and it as ${book.pageNumber} number of page</p>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <p>This book as a ${book.readStatus} status</p>
              <button class="btn btn-success" onclick="changeReadStatus(${bookIndex})" >change book status</button>
            </div>
            <button class="btn btn-danger" onclick="removeBook(${bookIndex})" >Remove this book</button>
          </div>
        </div>
      </div>
    `;
  });
  myBooks.innerHTML = ourBooks;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const author = form.elements.namedItem('author').value;
  const title = form.elements.namedItem('title').value;
  const pageNumber = form.elements.namedItem('pages').value;
  const readStatus = form.elements.namedItem('read-status').value;
  if (author && title && pageNumber && readStatus) {
    addBookToLibrary(author, title, pageNumber, readStatus);
    showBook();
    form.reset();
  } else {
    alert('Fill all informations correctly ');
  }
});

formButton.addEventListener('click', () => {
  formSlot.style.display = 'block';
});

function changeReadStatus(bookIndex) {
  const book = new Book();
  book.readStatus = myLibrary[bookIndex].readStatus;
  myLibrary[bookIndex].readStatus = book.toggleRead();
  localStorage.myLibrary = JSON.stringify(myLibrary);
  showBook();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  localStorage.myLibrary = JSON.stringify(myLibrary);
  showBook();
}

showBook();
