import BookController from "./Controllers/book-controller.js";

class App {
    constructor() {
        console.log('hello from main');
        this.controllers = {
            bookController: new BookController()
        }
    }
}

window['app'] = new App()