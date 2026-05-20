// Take marks and print "Pass" if marks ≥ 33 otherwise "Fail" using ternary operator.

const userInput = require("prompt-sync")();

let mark = Number(userInput("Enter your marks: "));

let result = mark >= 33 ? "pass":"Fail";
console.log(result);