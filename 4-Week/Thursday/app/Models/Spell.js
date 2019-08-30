export default class Spell {
    constructor(data) {
        this.name = data.name
        this.level = data.level
        this.range = data.range
        this.duration = data.duration
        this.description = data.description || data.desc.join("\n").replace(/â€™/, "'")
        this.components = data.componets
        this._id = data._id
        this.apiData = false

        if (data.index) {
            this.apiData = true;
        }
    }

    get Template() {
        let template = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.description}</p>
                    <p>${this.level}<br>${this.range}<br>${this.duration}<br>${this.components}</p>
                </div> 
                <button class="btn btn-success" onclick="app.controllers.spellController.addSpell()">Learn Spell</button>`
        if (!this.apiData) {
            template += `
            <button class="btn btn-warning" onclick="app.controllers.spellController.showEditSpell()">Edit</button>
            <button class="btn btn-danger" onclick="app.controllers.spellController.deleteSpell()">remove</button>
            `
        }
        return template + '<div>'
    }

    get EditTemplate() {
        return `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <form onsubmit="app.controllers.spellController.editSpell(event)">
                        <textarea id="edit-description" name="description"></textarea>
                        <button class="btn btn-warning" type="submit">save</button>
                    </form>
                </div> 
            </div>
            `
    }
}

