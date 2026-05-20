// Take a number and find its square using ** operator.

const userInput = require("prompt-sync")();

let number = Number(userInput("Enter value of Number: "));
let square = number**2;

console.log("Square of ",number," is: ",square);
