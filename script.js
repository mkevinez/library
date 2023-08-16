const myLibrary = [];

function Book(title, author, pages, markedRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.markedRead = markedRead;
}

function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}

let submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', (e) => {
    let bookTitle = document.querySelector('#book-title-input');
    let bookAuthor = document.querySelector('#author-input');
    let numberOfPages = document.querySelector('#total-pages-input');
    let markedRead = document.querySelector('#mark-read-input');
    let allInputs = document.querySelectorAll('input');

    let book = createBook(bookTitle.value, bookAuthor.value, numberOfPages.value, markedRead.checked);
    addBookToLibrary(book);
    
    allInputs.forEach(singleInput => singleInput.value = '');

    console.log(myLibrary);
});

function createBook(title, author, pages, markedRead) {
    return new Book(title, author, pages, markedRead);
}