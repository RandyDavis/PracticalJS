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
var testArray = ["item 1", "item 2", "item 3"];

for (var i = 0; i < testArray.length; i++) {
  console.log(testArray[i]);
}