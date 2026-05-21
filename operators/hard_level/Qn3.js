// Use nested ternary operators to find largest among three numbers.

const userInput = require("prompt-sync")();

let a = Number(userInput("Enter value of a: "));
let b = Number(userInput("Enter value of b: "));
let c = Number(userInput("Enter value of c: "));

let largest = (a > b && a > c) ? a: (b > c) ? b : c;
console.log("largest number is: ",largest);