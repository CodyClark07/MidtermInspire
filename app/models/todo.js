export default class Todo {
    constructor(data) {
        this.name = data.name
        this.id = data.id || data._id
        this.description = data.description
        this.user = data.user
        this.completed = data.completed

    }
    get Template() {
        let template = /* html */ `
        <div class=" border border-rounded shadow-lg text-center text-white bg-dark">

        <h2>${this.description}</h2>
        </div>`

        template += `
            <button class="btn btn-danger my-0 rounded-0 btn-block btn-sm" onclick="app.todoController.removeTodo('${this.id}')">Remove Todo</button>
            </div>
            `

        return template


    }
}