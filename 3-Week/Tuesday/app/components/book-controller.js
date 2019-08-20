import BookService from "./book-service.js";

let _bookService = new BookService()

function drawBooks() {
    let books = _bookService.Books
    let template = ''
    books.forEach(book => {
        template += `
        <div class="card m-1">
        <h1 class="title text-center">${book.title}</h1>
        <h3 class="author text-center">${book.author}</h3>
        <img class="img-fluid" src="${book.coverImg}">
        <button class="btn btn-secondary"  onclick="app.controllers.bookController.buyBook('${book.id}')">Buy Book</button>
        </div>  
        `
    })
    document.querySelector('.book-shelf').innerHTML = template
}

function notify() {
    var notificationsElem = document.getElementById("notifications")
    var notification = document.createElement('div')
    notification.className = "alert alert-success text-center"
    notification.innerText = "Successfully bought book!";
    notificationsElem.appendChild(notification)
    //NOTE notify() creates --> "<div class='alert alert-success text-center'>Successfully bought book!</div>"
    setTimeout(() => {
        notification.remove()
    }, 3000)

}


export default class BookController {
    constructor() {
        console.log('hello from book controller');
    }

    buyBook(bookId) {
        _bookService.buyBook(bookId)
        notify()
        this.draw()
    }
    draw() {
        console.log('drawing');
        drawBooks()
    }
}