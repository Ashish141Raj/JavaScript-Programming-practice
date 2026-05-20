// Take two numbers and subtract them using - operator.

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter value of num1: "));
let num2 = Number(prompt("Enter value of num2: "));

let result = num1 - num2;
console.log("Subtract of ", num1, "and", num2 ,"is: ",result);