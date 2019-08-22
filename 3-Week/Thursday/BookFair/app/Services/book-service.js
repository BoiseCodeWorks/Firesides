import Book from '../Models/Book.js'
let state = {
    books: [],
    myBooks: []
}
let hp = new Book({ id: 1, title: "Harry Potter", author: "JK Rowling", coverImg: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg" })
let narnia = new Book({ id: 2, title: "Narnia", author: "Lewis", coverImg: "https://images-na.ssl-images-amazon.com/images/I/51lOSC0wbfL._SX331_BO1,204,203,200_.jpg" })
let lotr = new Book({ id: 3, title: "The Hobbit", author: "Tolkien", coverImg: "https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg" })

state.books = [hp, narnia, lotr]

export default class BookService {

    constructor() {
        console.log('hello from book service')
        console.log(state.myBooks)
    }
    buyBook(bookId) {
        let index = state.books.findIndex(book => book.id == bookId)
        this.saveBook(bookId)
        state.books.splice(index, 1)
        console.log(state.myBooks)
    }
    saveBook(bookId) {
        let bookToSave = state.books.find(b => b.id == bookId) //NOTE returns the actual book that matches the given bookId. If no match is found, null is returned.
        //NOTE Null Check Here
        if (bookToSave) {
            state.myBooks.push(bookToSave)
            localStorage.setItem("myBooks", JSON.stringify(state.myBooks))
        }
    }
    loadBooks() {
        //NOTE this is what retreives the users books from local storage 
        let saved = JSON.parse(localStorage.getItem('myBooks'))
        if (saved) {
            state.myBooks = saved
        }
    }
    get Books() {
        return state.books.map(book => new Book(book))
    }
    get MyBooks() {
        return state.myBooks.map(book => new Book(book))
    }
}