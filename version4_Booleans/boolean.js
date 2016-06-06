/**
 * Created by randy on 6/5/16.
 */
// Requirements
    // todoList.addTodo should add objects
    // todoList.changeTodo should change the todoText property
    // todoList.toggleCompleted should change the completed property

var todoList = {
    todos: [],
    displayTodos: function (todos) {
        console.log('My todos: ', this.todos);
    },
    addTodo: function (todoText) {
        this.todos.push({todoText: todoText, completed: false});
        this.displayTodos();
    },
    changeTodo: function (index, todoText) {
        this.todos[index].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function (index) {
        this.todos.splice(index, 1);
        this.displayTodos();
    }
}