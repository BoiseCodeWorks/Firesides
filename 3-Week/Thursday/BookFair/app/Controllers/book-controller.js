import BookService from "../Services/book-service.js";

let _bookService = new BookService()

function drawAllBooks() {
    let template = ''
    _bookService.Books.forEach(b => template += b.Template)
    document.querySelector('.book-shelf').innerHTML = template
}
function drawMyBooks() {
    let template = ''
    _bookService.MyBooks.forEach(b => template += b.Template)
    //NOTE this line replaces book-shelf with the users books. OR you could refer to 'my-book-shelf' and render their books underneath all of the books.
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
        //NOTE calling loadBooks ensures the user can see the data saved in local storage upon refresh! 
        _bookService.loadBooks()
    }

    buyBook(bookId) {
        _bookService.buyBook(bookId)
        notify()
        this.draw()
    }
    draw() {
        drawAllBooks()
    }
    drawMine() {
        //NOTE this is the function called to render the users books specifially
        drawMyBooks()
    }
}