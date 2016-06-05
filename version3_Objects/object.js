/**
 * Created by randy on 6/2/16.
 */
var myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011
};

// Objects and Functions
var randy = {
    name: "Randy",
    sayName: function () {
        console.log(this.name);
    }
}


// TodoList
var todoList = {
    todos: ['item 1', ' item 2', 'item 3'],
        displayTodos: function () {
        console.log('My Todos: ', this.todos);
    },
    addTodo: function (todo) {
        this.todos.push(todo);
        this.displayTodos();
    }
};