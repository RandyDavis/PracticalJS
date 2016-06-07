/**
 * Created by randy on 6/6/16.
 */
/*
 i = 0                 // Initialization
 Say "hey" if i < 3    // Condition
 Increase i by 1       // final-expression

 0 "hey"
 1 "hey"
 2 "hey"
 3

 for(initialization; condition; final-expression) {
 console.log('Hey');
 }
 */

// the for loop
// for (var i = 0; i < 3; i++) {
//   console.log('Hey');
// }


// looping over arrays
// var testArray = ["item 1", "item 2", "item 3"];
//
// for (var i = 0; i < testArray.length; i++) {
//   console.log(testArray[i]);
// }

// displayTodos should show .todoText
var todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
            console.log('My Todos: ');
            for (var i = 0; i < this.todos.length; i++) {
                console.log(this.todos[i].todoText);
            }
        }
    },
    addTodo: function (todoText) {
        this.todos.push({todoText: todoText, complete: false});
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
    }
}











