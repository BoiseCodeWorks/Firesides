import MemesService from "../Services/MemesService.js";

//Private
let _memeService = new MemesService()

function drawMemes() {
    let memes = _memeService.Memes
    //do not invoke getters
    let template = ''
    memes.forEach(m => {
        template += m.Template
    })
    document.getElementById('dropzone').innerHTML = template
}

//Public
export default class MemesController {
    constructor() {
        //NOTE Register all subscribers
        _memeService.addSubscriber('memes', drawMemes)
        //NOTE Retrieve data
    }

    createMeme(event) {
        event.preventDefault()
        let form = event.target
        let newMeme = {
            topScript: form.topScript.value,
            bottomScript: form.bottomScript.value,
            img: form.img.value
        }
        _memeService.addMeme(newMeme)
    }
}