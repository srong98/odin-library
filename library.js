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
    toggleForm();
    updateLibraryArray();
}

const formStart = document.getElementById('formclick');
formStart.addEventListener('click', toggleForm);

function toggleForm() {
    formSubmit.classList.toggle('hidden');
}

function updateLibraryArray() {
    for (let i = 0; i < myLibrary.length; i++) {
        let bookPresent = document.getElementById(`book${i+1}`);
        if (bookPresent) continue;
        const libraryBody = document.querySelector('.library');
        let newBook = document.createElement('div');
        let newTitle = document.createElement('h2');    
        let newAuthor = document.createElement('h3');
        let newPages = document.createElement('h3');
        let newRead = document.createElement('input');
        let id = `book${i+1}`;
        
        newTitle.innerText = myLibrary[i].bookTitle;
        newAuthor.innerText = myLibrary[i].authorName;
        newPages.innerText = myLibrary[i].numberPages;
        newRead.setAttribute('type', 'checkbox');
        newBook.className = 'bookBlock';
        newBook.setAttribute('id', `${id}`)

        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newPages);
        newBook.appendChild(newRead);
        libraryBody.appendChild(newBook);
    }
}