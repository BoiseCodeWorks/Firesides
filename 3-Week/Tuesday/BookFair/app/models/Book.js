export default class Book {
    constructor({ id = "", title = "", author = "", coverImg = "//placehold.it/200x200" }) {
        this.id = id
        this.title = title
        this.author = author
        this.coverImg = coverImg
    }
}