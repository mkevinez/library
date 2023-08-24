const myLibrary = [];

function Book(title, author, pages, markedRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.markedRead = markedRead;

    this.bookCard = createCardElem();

    function createCardElem() {
        let cardElem = document.createElement('div');
        cardElem.classList.add('book-grid-item');

        cardElem.setAttribute('librarykey', myLibrary.length);
        console.log(cardElem.getAttribute('librarykey'));

        cardElem.appendChild(createTitleElem());
        cardElem.appendChild(createAuthorElem());
        cardElem.appendChild(createPagesElem());
        cardElem.appendChild(createBookReadElem());
        cardElem.appendChild(createReadButton());

        return cardElem;

    }

    function createTitleElem() {
        let cardTitle = document.createElement('h3');
        cardTitle.textContent = title;

        return cardTitle;
    }

    function createAuthorElem() {
        let cardAuthorContainer = document.createElement('div');
        cardAuthorContainer.classList.add('author-container');
        
        let cardAuthorLabel = document.createElement('p');
        let cardAuthor = document.createElement('p');

        cardAuthorLabel.classList.add('label');

        cardAuthorLabel.textContent = 'Author';
        cardAuthor.textContent = author;

        cardAuthorContainer.appendChild(cardAuthorLabel);
        cardAuthorContainer.appendChild(cardAuthor);

        return cardAuthorContainer;
    }

    function createPagesElem() {
        let cardPagesContainer = document.createElement('div');
        cardPagesContainer.classList.add('pages-container');
        
        let cardPagesLabel = document.createElement('p');
        let cardPages = document.createElement('p');

        cardPagesLabel.classList.add('label');

        cardPagesLabel.textContent = 'Pages';
        cardPages.textContent = pages;

        cardPagesContainer.appendChild(cardPagesLabel);
        cardPagesContainer.appendChild(cardPages);

        return cardPagesContainer;
    }

    function createBookReadElem() {
        let bookRead = document.createElement('p');

        if (markedRead) {
            bookRead.textContent = 'Read';
            bookRead.classList.add('read');
        } else {
            bookRead.textContent = 'Unread';
            bookRead.classList.add('unread');
        }

        return bookRead;
    }

    function createReadButton() {
        let markReadButton = document.createElement('button');

        markReadButton.addEventListener('click', (e) => {
            myLibrary.splice(markReadButton.parentElement.getAttribute('librarykey'),1);
            resetBooksGrid();
            loadLibrary();
        })

        return markReadButton;
    }



}

// Declared HTML elements

const libraryContainer = document.querySelector('#books-container');
const openFormButton = document.querySelector('#show-form-button');
const addBookModal = document.querySelector('#add-book-modal');
const submitButton = document.querySelector('#submit-button');


// Add Example Books on Load

const exampleBook1 = new Book ('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
myLibrary.push(exampleBook1);


console.log(myLibrary[0]);



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
        libraryContainer.appendChild(book.bookCard);
    })
}


const resetBooksGrid = () => {
    libraryContainer.innerHTML = '';
}




