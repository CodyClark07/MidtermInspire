import store from "../store.js";
import Todo from "../models/todo.js"
// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/codyc/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get("todos").then(res => {
      console.log(res)
      store.commit("todos", res.data.data.map(rawTodoData => new Todo(rawTodoData)))
    }).catch(err => console.error(err))
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {

    todoApi.post("todos", todo).then(res => {
      console.log(res)
      this.getTodos()
    }).catch(err => console.error(err));
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    todo.completed == true ?
      todo.completed = false :
      todo.completed = true


    todoApi.put("todos/" + todoId, todo).then(res => {
      this.getTodos()
    }).catch(err => console.error(err));
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    todoApi.delete("todos/" + todoId).then(res => {
      console.log(res);
      this.getTodos()
    }).catch(err => console.error(err))
  }
}

const todoService = new TodoService();
export default todoService;
