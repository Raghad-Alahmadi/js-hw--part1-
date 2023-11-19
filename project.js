// Database for books
let books = [
    { id: 1, title: "Start with why", author: "Simon Sinek", price: 80.0, quantity: 13 },
    { id: 2, title: "But how do it know", author: "J. Clark Scott", price: 59.9, quantity: 22 },
    { id: 3, title: "Clean Code", author: "Robert Cecil Martin", price: 50.0, quantity: 5 },
    { id: 4, title: "Zero to One", author: "Peter Thiel", price: 45.0, quantity: 12 },
    { id: 5, title: "You don't know JS", author: "Kyle Simpson", price: 39.9, quantity: 9 }
];

//display all books
function displayBooks() {
    console.log("ID\tTitle\t\t\tAuthor\t\tPrice\tQuantity");
    books.forEach(book => {
        console.log(`${book.id}\t${book.title}\t${book.author}\t${book.price}\t${book.quantity}`);
    });
}

//add a new book
function addBook(bookId, title, author, price, quantity) {
    const newBook = { id: bookId, title, author, price, quantity };
    books.push(newBook);
    console.log(`Book '${title}' added successfully!`);
}

//search for a book
function searchBook(key, value) {
    const result = books.filter(book => String(book[key]).toLowerCase().includes(String(value).toLowerCase()));
    if (result.length > 0) {
        console.log("Search results:");
        displayBooks();
    } else {
        console.log("Book not found.");
    }
}

// sell books and generate a receipt
function sellBooks(title, quantity, balance) {
    const book = books.find(book => book.title.toLowerCase() === title.toLowerCase() && book.quantity >= quantity);
    if (book) {
        const totalCost = book.price * quantity;
        if (totalCost <= balance) {
            book.quantity -= quantity;
            console.log(`Sale successful! Total cost: ${totalCost}`);
            console.log("Receipt:");
            console.log(`Book Title: ${book.title}\nQuantity: ${quantity}\nTotal Cost: ${totalCost}`);
        } else {
            console.log("Insufficient balance.");
        }
    } else {
        console.log("Book not found or insufficient quantity.");
    }
}


displayBooks();
addBook(6, "KillJoy Main", "Raghad Alahmadi", 108, 10);
searchBook("id", 2);
sellBooks("Zero to One", 8, 6969);