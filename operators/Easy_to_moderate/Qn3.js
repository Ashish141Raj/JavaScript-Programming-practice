// Take a number and check whether it is greater than 100 using >.

const userInput = require("prompt-sync")();

let  num = Number(userInput("Enter value of num: "));
if(num > 100){
    console.log("Greater than 100");
}else{
    console.log("Smaller  than 100");
}