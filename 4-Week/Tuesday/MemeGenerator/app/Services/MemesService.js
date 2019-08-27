import Meme from "../Models/Meme.js";

//Private
let _state = {
    memes: []
}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    memes: []
}

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

//Public
export default class MemesService {
    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }
    get Memes() {
        return _state.memes.map(m => new Meme(m))
    }
    addMeme(newMeme) {
        let meme = new Meme(newMeme)
        //NOTE instead of doing _state.memes.push(meme) and modifying the state directly
        // through an action(which breaks the observer pattern) we do line below instead
        let updatedMemeArray = [meme, ...this.Memes]
        _setState('memes', updatedMemeArray)
    }
}
