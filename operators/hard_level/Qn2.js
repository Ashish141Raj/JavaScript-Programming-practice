// Take a number and check whether it is divisible by both 3 and 5.

const userInput = require("prompt-sync")();

let num = Number(userInput("Enter value of num: "));

if(num % 3 === 0 && num % 5 === 0){
    console.log("Divisible");
}else{
    console.log("not Divisible");
}