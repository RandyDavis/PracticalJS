/**
 * Created by randy on 6/5/16.
 */
var todoList = {
    todos: [],
    displayTodos: function (todos) {
        console.log('My todos: ', this.todos);
    },
    addTodo: function (todoText) {
        this.todos.push({todoText: todoText, completed: false});
        this.displayTodos();
    },
    changeTodo: function (index, newValue) {
        this.todos[index] = newValue;
        this.displayTodos();
    },
    deleteTodo: function (index) {
        this.todos.splice(index, 1);
        this.displayTodos();
    }
}