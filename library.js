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

const container = document.querySelector('.container')
function toggleForm() {
    formSubmit.classList.toggle('hidden');
    container.classList.toggle('blur');
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
        newTrash.setAttribute('id', `${i}`);
        newBook.className = 'bookBlock';

        newTitle.innerText = myLibrary[i].bookTitle;
        newAuthor.innerText = `By: ${myLibrary[i].authorName}`;
        newPages.innerText = `Page Count: ${myLibrary[i].numberPages}`;
        if (myLibrary[i].readStatus == true) {
            newRead.checked = true;
        }

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
        let bookNumber = Number(e.target.getAttribute('id'));
        let deletedBook = document.getElementById(`book${bookNumber+1}`)
        myLibrary.splice(bookNumber, 1);
        libraryBody.removeChild(deletedBook);
        reloadBookIDs();
    }
}

function reloadBookIDs() {        
    let childNodes = libraryBody.childNodes;
    for (let i = 0; i < myLibrary.length; i++) {
        let book = childNodes[i+1];
        book.setAttribute('id', `book${i+1}`);
        let trashID = book.querySelector('.trash');
        trashID.setAttribute('id', `${i}`);
    }
}