// Take a boolean value and reverse it using !.

const userInput = require("prompt-sync")();

let value = userInput("Enter true or false: ")

value = (value === "true");
let reversed = !value;
console.log("Reverse of Boolean: ",reversed);