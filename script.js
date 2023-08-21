const myLibrary = [];

function Book(title, author, pages, markedRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.markedRead = markedRead;
}

// Declared HTML elements

const libraryContainer = document.querySelector('#books-container');
const openFormButton = document.querySelector('#show-form-button');
const addBookModal = document.querySelector('#add-book-modal');
const submitButton = document.querySelector('#submit-button');


// Add Example Books on Load

const exampleBook1 = new Book ('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
myLibrary.push(exampleBook1);

// Event Listeners

submitButton.addEventListener('click', (e) => {
    let bookTitle = document.querySelector('#book-title-input');
    let bookAuthor = document.querySelector('#author-input');
    let numberOfPages = document.querySelector('#total-pages-input');
    let markedRead = document.querySelector('#mark-read-input');

    let book = new Book(bookTitle.value, bookAuthor.value, numberOfPages.value, markedRead.checked);
    myLibrary.push(book);

    resetFormInputs();
    loadLibrary();
    addBookModal.close();
});

openFormButton.addEventListener('click', (e) => {
    addBookModal.showModal()
});

document.addEventListener("DOMContentLoaded", loadLibrary);


// Helper Functions

function resetFormInputs() {
    let allInputs = document.querySelectorAll('#add-book-form input');
    allInputs.forEach(singleInput => singleInput.value = '');
}

function loadLibrary() {
    resetBooksGrid();

    myLibrary.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-grid-item');

        const titleValueElem = document.createElement('h3');
        titleValueElem.textContent = book.title;

        const authorContainerElem = document.createElement('div');
        authorContainerElem.classList.add('author-container');

        const authorLabelElem = document.createElement('p')
        authorLabelElem.textContent = 'Author';
        authorLabelElem.classList.add('author-label');
        authorContainerElem.appendChild(authorLabelElem);

        const authorValueElem = document.createElement('p')
        authorValueElem.textContent = book.author;
        authorContainerElem.appendChild(authorValueElem);

        const pagesContainerElem = document.createElement('div');
        pagesContainerElem.classList.add('pages-container');

        const pagesLabelElem = document.createElement('p')
        pagesLabelElem.textContent = 'Pages';
        pagesLabelElem.classList.add('pages-label');
        pagesContainerElem.appendChild(pagesLabelElem);

        const pagesValueElem = document.createElement('p')
        pagesValueElem.textContent = book.pages;
        pagesContainerElem.appendChild(pagesValueElem);


        const bookReadElem = document.createElement('p');


        if (book.markedRead) {
            bookReadElem.textContent = 'Read';
            bookReadElem.classList.add('read');
        } else {
            bookReadElem.textContent = 'Unread';
            bookReadElem.classList.add('unread');
        }

        bookItem.appendChild(titleValueElem);
        bookItem.appendChild(authorContainerElem);
        bookItem.appendChild(pagesContainerElem);
        bookItem.appendChild(bookReadElem);

        libraryContainer.appendChild(bookItem);
    })
}


const resetBooksGrid = () => {
    libraryContainer.innerHTML = '';
}




