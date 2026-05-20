// Take a number and increase it by 1 using ++.

const userInput = require("prompt-sync")();

let num = Number(userInput("Enter value of num: "));

num++;
console.log(num);