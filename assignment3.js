// Book class definition
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this._isbn = isbn; // Private property with underscore
        this.available = true; // Default to true
    }

    // Getter for ISBN
    get isbn() {
        return this._isbn;
    }

    // Setter for ISBN (kept private, so no public setter method)

    // Method to borrow a book
    borrowBook() {
        if (this.available) {
            this.available = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is not available for borrowing.`);
        }
    }

    // Method to return a book
    returnBook() {
        this.available = true;
        console.log(`${this.title} has been returned.`);
    }
}

// Library class definition
class Library {
    constructor() {
        this.books = []; // Array to store Book objects
    }

    // Method to add a book
    addBook(book) {
        this.books.push(book);
        console.log(`${book.title} by ${book.author} added to the library.`);
    }

    // Method to remove a book by ISBN
    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
        console.log(`Book with ISBN: ${isbn} has been removed.`);
    }

    // Method to find a book by title
    findBookByTitle(title) {
        const foundBook = this.books.find(book => book.title === title);
        if (foundBook) {
            return `Title: ${foundBook.title}, Author: ${foundBook.author}, ISBN: ${foundBook.isbn}, Available: ${foundBook.available}`;
        } else {
            return `Book with title "${title}" not found.`;
        }
    }
}

// DigitalLibrary class definition (inherits from Library)
class DigitalLibrary extends Library {
    // Method to download a book if available
    downloadBook(isbn) {
        const bookToDownload = this.books.find(book => book.isbn === isbn);
        if (bookToDownload) {
            if (bookToDownload.available) {
                console.log(`Downloading ${bookToDownload.title}...`);
            } else {
                console.log(`${bookToDownload.title} is not available for download.`);
            }
        } else {
            console.log(`Book with ISBN: ${isbn} not found in the library.`);
        }
    }
}

// Example usage:

// Creating book instances
let book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '123456789');
let book2 = new Book('1984', 'George Orwell', '987654321');

// Creating a library instance
let library = new Library();

// Adding books to the library
library.addBook(book1);
library.addBook(book2);

// Borrowing a book
book1.borrowBook();

// Finding a book by title
console.log(library.findBookByTitle('1984'));

// Creating a digital library instance
let digitalLibrary = new DigitalLibrary();

// Adding books to digital library
digitalLibrary.addBook(book1);
digitalLibrary.addBook(book2);

// Downloading a book
digitalLibrary.downloadBook('987654321');

// Returning a borrowed book
book1.returnBook();

// Attempt to download again
digitalLibrary.downloadBook('123456789');
