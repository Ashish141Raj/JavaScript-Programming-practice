// Take two numbers and multiply them using * operator.

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter value of num1: "));
let num2 = Number(prompt("Enter value of num2: "));

let result = num1 * num2;
console.log(num1," X ",num2," = ",result);