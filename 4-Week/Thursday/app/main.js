import SpellController from "./Controllers/SpellController.js";


class App {
    constructor() {
        this.controllers = {
            spellController: new SpellController()
        }
    }
}

window['app'] = new App()