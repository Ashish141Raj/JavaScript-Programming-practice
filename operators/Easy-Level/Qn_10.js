// Take a number and divide it by 5 using /= operator.

const userInput = require("prompt-sync")();

let num  = Number(userInput("Enter value of num: "));

num /= 5;
console.log(num);