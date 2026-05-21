// Take three numbers and find the largest using comparison operators.

const userInput = require("prompt-sync")();

let a = Number(userInput("Enter value of A: "));
let b = Number(userInput("Enter value of B: "));
let c = Number(userInput("Enter value of C: "));

if(a>b && a>c){
    console.log(a);
}else if(b > c){
    console.log(b);
}else{
    console.log(c);
}