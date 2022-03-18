const myLibrary = [];

class Book {
    constructor(title, author, pageNumber, readCheck) {
        this.bookTitle = title;
        this.authorName = author;
        this.numberPages = pageNumber;
        this.readStatus = readCheck;
    }
}

const formSubmit = document.getElementById('form');
formSubmit.addEventListener('submit', addBookToLibrary);

function createBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author-name').value;
    const pageNumber = document.getElementById('pages').value;
    const readCheck = document.getElementById('read-status').checked;
    return new Book(title, author, pageNumber, readCheck);
}

function addBookToLibrary(e) {
    e.preventDefault();
    myLibrary.push(createBook());
    formSubmit.reset();
}