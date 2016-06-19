// REQUIREMENTS
    // There should be an li element for every todo
    // Each li element should contain .todoText
    // Each li element should show .completed


var todoList = {
    todos: [],
    addTodo: function (todoText) {
        this.todos.push({todoText: todoText, completed: false});
    },
    changeTodo: function (index, todoText) {
        this.todos[index].todoText = todoText;
    },
    deleteTodo: function (index) {
        this.todos.splice(index, 1);
    },
    toggleCompleted: function (index) {
        var todo = this.todos[index];
        todo.completed = !todo.completed;
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

        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed) {
                completedTodos++;
            }
        }

        if (completedTodos === totalTodos) {
            toggle(false);
        }
        else {
            toggle(true);
        }
    }
};

var handlers = {
    addTodo: function () {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");

        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function () {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");

        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");

        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for(var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');

            var todoTextWithCompletion = '';
            var todo = todoList.todos[i];

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};
