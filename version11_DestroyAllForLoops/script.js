/**
 * Created by randy on 6/26/16.
 */
// V11 REQUIREMENTS
/*
- todoList.toggleAll should use forEach
- view.displayTodos should use forEach
 */

var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get number of completed todos.
        // for (var i = 0; i < totalTodos; i++) {
        //     if (this.todos[i].completed === true) {
        //         completedTodos++;
        //     }
        // }

        this.todos.forEach(function(todo) {
            if(todo.completed === true) {
                completedTodos++;
            }
        });

        // // Case 1: If everything’s true, make everything false.
        // if (completedTodos === totalTodos) {
        //     // for (var i = 0; i < totalTodos; i++) {
        //     //     this.todos[i].completed = false;
        //     // }
        //
        //     this.todos.forEach(function(todo) {
        //        todo.completed = false;
        //     });
        //
        //     // Case 2: Otherwise, make everything true.
        // } else {
        //     // for (var i = 0; i < totalTodos; i++) {
        //     //     this.todos[i].completed = true;
        //     // }
        //     this.todos.forEach(function(todo) {
        //        todo.completed = true;
        //     });
        // }

        this.todos.forEach(function(todo) {
            // Case 1: If everything’s true, make everything false.
            if(completedTodos === totalTodos) {
                todo.completed = false;
            // Case 2: Otherwise make everything true;

            } else {
                todo.completed = true;
            }
        })
    }
};

var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        todoList.todos.forEach(function (todo, position) {
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this)
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function () {
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function (event) {
            // Get the element that was clicked on.
            var elementClicked = event.target;

            // Check if elementClicked is a delete button.
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));

            }
        });
    }
};

view.setUpEventListeners();












