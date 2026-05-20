// Use ternary operator to check whether a number is even or odd.

const userInput = require("prompt-sync")();

let num = Number(userInput("Enter value of num: "));

let even_or_odd = num % 2 === 0 ? "Even":"Odd";
console.log(num," is ",even_or_odd);