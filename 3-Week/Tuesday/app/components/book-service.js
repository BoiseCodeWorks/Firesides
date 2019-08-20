import Book from '../models/Book.js'

let hp = new Book({ id: 1, title: "Harry Potter", author: "JK Rowling", coverImg: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg" })
let narnia = new Book({ id: 2, title: "Narnia", author: "Lewis", coverImg: "https://images-na.ssl-images-amazon.com/images/I/51lOSC0wbfL._SX331_BO1,204,203,200_.jpg" })
let lotr = new Book({ id: 3, title: "The Hobbit", author: "Tolkien", coverImg: "https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg" })

let books = [hp, narnia, lotr]
export default class BookService {

    constructor() {
        console.log('hello from book service')
    }
    buyBook(bookId) {
        let index = books.findIndex(book => book.id == bookId)
        books.splice(index, 1)

        // buyBook(bookId){
        //     for (let index = 0; index < _books.length; index++) {
        //     let book = books[index];
        //     if (book.id == bookId) {
        //         return index
        //          }
        //     }
        //     return -1
        // }
    }
    get Books() {
        return books.map(book => new Book(book))
        // let out = []
        // for (let i = 0; i < _books.length; i++) {
        //     let book = _books[i]
        //     let newBook = new Book(book)
        //     out.push(newBook)
        // }
        // return out
    }
}