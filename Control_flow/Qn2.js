/*2. Positive, Negative, or Zero (Easy-level)

Write a program that checks whether a number is:

> Positive
> Negative
> Zero
*/

const userInput = require("prompt-sync")();

let num = Number(userInput("Enter value of Num: "));
if(num > 0){
    console.log(num," is Positive Number");
}else if(num < 0){
    console.log(num," is Negative Number");
}else{
    console.log(num,"----> Zero");
}