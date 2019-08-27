import MemesController from "./Controllers/MemesController.js";


class App {
    constructor() {
        this.controllers = {
            memesController: new MemesController()
        }
    }
}

window['app'] = new App()