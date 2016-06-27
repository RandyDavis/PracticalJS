/**
 * Created by randy on 6/23/16.
 */

// setTimeout lesson

setTimeout(function () {
    console.log("Wake up Randy!");
}, 5000);

//forEach lesson

var students = ['jon', 'jenny', 'elliot'];

function logName(name) {
    console.log(name);
}

students.forEach(logName); // Returns each name in the students array

// creating my own forEach function that works the same way
function forEach(myArray, myFunction) {
    for (var i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}



// addEventListener lesson
// - using mozilla dev network page
var tutorialsEl = $0;

tutorialsEl.addEventListener('click', function() {
    console.log("The tutorials element was clicked");
});

tutorialsEl.addEventListener('click', function(event) {
    console.log(event);
    console.log("The tutorials element was clicked");
});

// Buzzwords: Higher order functions and callback functions
/*

// Higher Order Functions:
- Functions that accept other functions
- Enhance the behavior of other functions

// Callback Functions:
- These are the functions passed into higher order functions

// All previous functions in this section/file actually demonstrate these concepts
 */






