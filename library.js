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

const libraryBody = document.querySelector('.library');
function updateLibraryArray() {
    for (let i = 0; i < myLibrary.length; i++) {
        let bookPresent = document.getElementById(`book${i+1}`);
        if (bookPresent) continue;
        
        let newBook = document.createElement('div');
        let newTitle = document.createElement('div');    
        let newAuthor = document.createElement('div');
        let newPages = document.createElement('div');
        let newRead = document.createElement('input');
        let newTrash = document.createElement('img');
        let id = `book${i+1}`;
        
        newRead.setAttribute('type', 'checkbox'); 
        newBook.setAttribute('id', `${id}`)
        newTitle.setAttribute('id', 'newTitle');
        newAuthor.setAttribute('id', 'newAuthor');
        newPages.setAttribute('id', 'newPages')
        newTrash.src = './resources/toppng.com-trash-can-720x534.png';
        newTrash.className = 'trash'
        newBook.className = 'bookBlock';

        newTitle.innerText = myLibrary[i].bookTitle;
        newAuthor.innerText = `By: ${myLibrary[i].authorName}`;
        newPages.innerText = `Page Count: ${myLibrary[i].numberPages}`;

        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newPages);
        newBook.appendChild(newRead);
        newBook.appendChild(newTrash)
        libraryBody.appendChild(newBook);
    }
}

libraryBody.addEventListener('click', removeBook)

function removeBook(e) {
    if (e.target.classList.contains('trash')) {
        e.parentNode.parentNode.innerHTML = 0;
        updateLibraryArray();
    }
}