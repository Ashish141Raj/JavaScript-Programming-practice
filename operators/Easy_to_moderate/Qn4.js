// Take age input and check if age is at least 18 using >=.

const userInput = require("prompt-sync")();

let age = Number(userInput("Enter your age: "));
if(age >= 18){
    console.log("Adult");
}else{
    console.log("Child")
}