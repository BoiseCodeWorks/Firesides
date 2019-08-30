import SpellService from "../Services/SpellService.js";

//Private
let _spellService = new SpellService()

function _drawApiSpells() {
    let template = '<ul>'
    let spells = _spellService.ApiSpells
    spells.forEach(s => {
        template += `<li onclick="app.controllers.spellController.select('${s.id}')">${s.name}<li>`
    })
    document.getElementById('api-spell').innerHTML = template + '</ul>'
}

function _drawCurrentSpell() {
    document.getElementById('current-spell').innerHTML = _spellService.CurrentSpell.Template
}

function _drawSpellEdit() {
    document.getElementById('current-spell').innerHTML = _spellService.CurrentSpell.EditTemplate
    document.getElementById('edit-description').value = _spellService.CurrentSpell.description
}

function _drawMySpells() {
    let spells = _spellService.MySpells
    let template = '<ul>'
    spells.forEach(s => {
        template += `<li onclick="app.controllers.spellController.setActive('${s._id}')">${s.name}</li>`
    })
    document.getElementById('my-spells').innerHTML = template + '</ul>'
}


//Public
export default class SpellController {
    constructor() {
        //NOTE Register all subscribers
        _spellService.addSubscriber('currentSpell', _drawCurrentSpell)
        _spellService.addSubscriber('mySpells', _drawMySpells)

        //NOTE Retrieve data
        _spellService.getApiSpells()
        _spellService.getMySpells()
    }
    select(id) {
        _spellService.select(id)
    }

    setActive(id) {
        _spellService.setActive(id)
    }
    addSpell() {
        _spellService.addSpell()
    }
    showEditSpell() {
        _drawSpellEdit()
    }

    editSpell(e) {
        e.preventDefault();
        let form = e.target
        let update = {
            description: form.description.value
        }
        _spellService.editSpell(update)
    }
    deleteSpell() {
        _spellService.deleteSpell()
        document.getElementById('current-spell').innerHTML = ''
    }
}