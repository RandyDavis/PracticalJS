/**
 * Created by randy on 6/8/16.
 */
// REQUIREMENTS
// .toggleAll: If everything's true, make everything false
// .toggleAll: Otherwise, make everything true.

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
            // for (var i = 0; i < totalTodos; i++) {
            //     this.todos[i].completed = false;
            // }
            toggle(false);
        }
        // Case 2: Otherwise, make everything true
        else {
            // for (var i = 0; i < totalTodos; i++) {
            //     this.todos[i].completed = true;
            // }
            toggle(true);
        }
        this.displayTodos();
    }
}