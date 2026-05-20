// Check whether a number is less than 0 or greater than 100 using ||.

const userInput = require("prompt-sync")();

let num = Number(userInput("Enter value of num: "));

if(num < 0 || num > 100){
    console.log(num, "is less than 0 or greater than 100");
}else{
    console.log(num," lies between 0 to 100");
}