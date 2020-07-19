import store from "../store.js"
export default class Todo {
    constructor(data) {
        this.id = data.id || data._id
        this.description = data.description
        this.user = data.user
        this.completed = data.completed || false
        this.todos = data.todos


    }
    get Template() {
        return `
        <p class="${this.completed == true ? "complete" : ""}">${this.description}<input ${this.completed == true ? 'checked' : ""} type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')">       
        <i class="fa fa-trash-o text-danger" onclick="app.todoController.removeTodo('${this.id}')"></i>
       
        `
    }

    static todoCountTemplate() {
        return `
<h5 class="${store.State.todos.length <= 0 ? "hidden" : ""}" >#Todos:${store.State.todos.length}</h5>
`
    }
}