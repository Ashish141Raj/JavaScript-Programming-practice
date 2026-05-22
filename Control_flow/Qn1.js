/*
1. Even or Odd (Easy-Level)

Take a number from the user and check whether it is even or odd using if-else.*/

const userInput = require("prompt-sync")();

let num = Number(userInput("Enter value of num: "));

if(num % 2 === 0){
    console.log(num," is Even Number");
}else{
    console.log(num," is Odd Number")
}