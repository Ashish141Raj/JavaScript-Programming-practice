// Check whether a number lies between 10 and 50 using logical &&.

const userInput = require("prompt-sync")();

let num = Number(userInput("Enter value of num: "));
if(num >= 10 && num <= 50){
    console.log(num," Lies between 10 and 50");
}else{
    console.log("Out of Bound")
}