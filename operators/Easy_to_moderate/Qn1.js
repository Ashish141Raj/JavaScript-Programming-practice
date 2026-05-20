// Take two numbers and check if they are equal using ==.

const userInput = require("prompt-sync")();

let num1 = Number(userInput("Enter value of num1: "));
let num2 = Number(userInput("Enter value of num2: "));

if(num1 == num2){
    console.log("EQual");
}else{
    console.log("Not Equal");
}