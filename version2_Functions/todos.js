/**
 * Created by randy on 6/2/16.
 */
/*
    REQUIREMENTS:
    - It should have a function to display todos
    - It should have a function to add todos
    - It should have a function to change todos
    - It should have a function to delete todos
 */

var todos = ['item 1', 'item 2', 'item 3'];

// display todos
function displayTodos () {
    console.log('My todos:', todos);
}

displayTodos();

// add todos
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo("item 4");

// change todos
function changeTodo(index, newValue) {
    todos[index] = newValue;
    displayTodos();
}

changeTodo(0, "new item 1");

// delete todos
function deleteTodo(index) {
    console.log('"' + todos[index] + '"' + ' was deleted.');
    todos.splice(index, 1);
    displayTodos();
}