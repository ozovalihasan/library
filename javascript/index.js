const myBooks = document.querySelector(".book");
const formButton = document.querySelector(".display-form");
const formSlot = document.querySelector(".form-space");
formButton.addEventListener("click", () => {
  formSlot.style.display = "block";
});
const myLibrary = ["harry potter", "hobbit"];

// function Book() {}

// function addBookToLibrary() {}

function showBook() {
  let ourBooks = "";
  myLibrary.forEach((book, bookIndex) => {
    ourBooks += `<div> ${book} </div>
            <button onclick="removeBook(${bookIndex})" >Remove this book</button>
    `;
  });
  myBooks.innerHTML = ourBooks;
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  showBook();
}

showBook();
