/**
 * Created by randy on 6/8/16.
 */
// REQUIREMENTS
    // there should be a 'Display todos' button and a 'Toggle all' button in the app
    // Clicking 'Display todos' should run todoList.displayTodos
    // clicking 'Toggle All' should run todoList.toggleAll();
var todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log("Your todo list is empty!");
        } else {
            console.log('My Todos: ');
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed) {
                    console.log('(x) ', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
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
    },
    toggleCompleted: function (index) {
        var todo = this.todos[index];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function () {
        var totalTodos = this.todos.length;
        var todos = this.todos;
        var completedTodos = 0;
        var toggle = function (value) {
            for (var i = 0; i < totalTodos; i++) {
                todos[i].completed = value;
            }
        }

        // Get number of completed todos.
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed) {
                completedTodos++;
            }
        }

        // Case 1: If everything's true, make everything false
        if (completedTodos === totalTodos) {
            // Make everything false
            toggle(false);
        }
        // Case 2: Otherwise, make everything true
        else {
            toggle(true);
        }
        this.displayTodos();
    }
}

// 1. We want to get access to the display todos button.
var displayTodosButton = document.getElementById("displayTodosButton");
// 2. We want to get access to the toggle all button.
var toggleAllButton = document.getElementById("toggleAllButton");

// 3. We want to run displayTodos method, when someone clicks the display todos button.
displayTodosButton.addEventListener("click", function () {
    todoList.displayTodos();
})

// 4.  We want to run toggleAll method when someone clicks the toggle all button
toggleAllButton.addEventListener("click", function () {
    todoList.toggleAll();
})