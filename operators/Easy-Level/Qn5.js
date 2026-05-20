// Take a number and find remainder when divided by 2 using %.

const userInput = require("prompt-sync")();

let num = Number(userInput("Enter value of num: "));

let remainder = num % 2;
console.log("Remainder = ",remainder);