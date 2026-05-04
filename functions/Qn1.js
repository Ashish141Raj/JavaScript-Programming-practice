// 1. Check whether a number is even or odd using a function.

const prompt = require("prompt-sync")();

let n = prompt("Enter a number: ");

function check_Number(n){
    if (n % 2 === 0){
        console.log("Even Number");
    }else{
        console.log("odd Number");
    }
}
check_Number(n);
