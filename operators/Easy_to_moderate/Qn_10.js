// Take two numbers and swap them using arithmetic operators only.

const userInput = require("prompt-sync")();

let num1 = Number(userInput("Enter value of num1: "));
let num2 = Number(userInput("Enter value of num2: "));
console.log("Before Swapping");
console.log(num1,num2);


num1 = num2 - num1;
num2 = num2 - num1;
num1 = num1 + num2;

console.log("after Swapping");
console.log(num1,num2)
