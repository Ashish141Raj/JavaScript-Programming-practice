// Take a number and double it using *= operator.
const userInput = require("prompt-sync")();

let num = Number(userInput("Enter value of num: "));

num *= 2;
console.log(num);