export default class Book {
    constructor({ id = Math.floor(Math.random() * 4000), title = "", author = "", coverImg = "//placehold.it/200x200" }) {
        this.id = id
        this.title = title
        this.author = author
        this.coverImg = coverImg
    }
    get Template(){
           return `
            <div class="card m-1">
            <h1 class="title text-center">${this.title}</h1>
            <h3 class="author text-center">${this.author}</h3>
            <img class="img-fluid" src="${this.coverImg}">
            <button class="btn btn-secondary"  onclick="app.controllers.bookController.buyBook('${this.id}')">Buy Book</button>
            </div>  
            `
    }
}