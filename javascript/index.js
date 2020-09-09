const myBooks = document.querySelector('.book');
const formButton = document.querySelector('.display-form');
const formSlot = document.querySelector('.form-space');

formButton.addEventListener('click', () => {
  formSlot.style.display = 'block';
});
const myLibrary = ['harry potter', 'hobbit'];

// function Book() {}

// function addBookToLibrary() {}

function showBook() {
  let ourBooks = '';
  myLibrary.forEach((book) => {
    ourBooks += `<div> ${book} </div> `;
  });
  myBooks.innerHTML = ourBooks;
}

showBook(myLibrary);
