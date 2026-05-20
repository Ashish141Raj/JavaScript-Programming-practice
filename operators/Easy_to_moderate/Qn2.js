// Take two values and check strict equality using ===.

const userInput = require("prompt-sync")();

let num1 = Number(userInput("Enter value of num1: "));
let num2 = Number(userInput("Enter value of num2: "));

if(num1 === num2){
    console.log("Equal");
}else{
    console.log("Not-equal");
}