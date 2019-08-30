import Spell from "../Models/Spell.js";

let _sandBoxApi = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/class/spells'
})

let _apiSpells = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/spells'
})

//Private
let _state = {
    apiSpells: [],
    currentSpell: {},
    mySpells: []
}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    apiSpells: [],
    currentSpell: [],
    mySpells: []
}

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

//Public
export default class SpellService {

    setActive(_id) {
        let spell = _state.mySpells.find(s => s._id == id)
        _setState('currentSpell', spell)
    }

    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get ApiSpells() {
        return _state.apiSpells
    }

    get CurrentSpell() {
        return new Spell(_state.currentSpell)
    }

    get MySpells() {
        return _state.mySpells
    }

    getMySpells() {
        _sandBoxApi.get()
            .then(res => {
                console.log(res.data);
                _setState('mySpells', res.data.data)
            })
    }
    getMySpellById() {
        _sandBoxApi.get(_state.currentSpell._id)
            .then(res => {
                _setState('currentSpell', res.data.data)
            })
    }
    getApiSpells() {
        _apiSpells.get()
            .then(res => {
                _setState('apiSpells', res.data)
                console.log(res.data);
            })
    }
    select(id) {
        _apiSpells.get(id)
            .then(res => {
                if (!res.data._id) return
                console.log(res.data);
                _setState('currentSpell', res.data.data)
            })
    }
    addSpell() {
        let mySpell = _state.mySpells.find(s => s.name == _state.currentSpell.name)
        if (mySpell) {
            alert('Spell already in book')
            return
        }
        _sandBoxApi.post('', this.CurrentSpell)
            .then(res => {
                _setState("currentSpell", res.data.data)
                this.getMySpells();
            })
            .catch(err => console.error(err))
    }
    editSpell(update) {
        _sandBoxApi.put(_state.currentSpell._id, update)
            .then(res => {
                this.getMySpellById()
                this.getMySpells()
            })
    }
    deleteSpell() {
        _sandBoxApi.delete(_state.currentSpell._id)
            .then(res => {
                this.getMySpells();
            })
    }

}
