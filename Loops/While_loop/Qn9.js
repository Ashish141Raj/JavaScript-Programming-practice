/**9. Guess the Secret Number
Problem:Keep asking the user for input until they guess the correct number.

Example Logic:
Secret number = 7

Loop should continue until user enters 7. */

const user = require("prompt-sync")();

let secretNum = 7;
let guess = 0;

while(guess !== secretNum){
    guess = Number(user("Enter guessing Number: "));

    if(guess === secretNum){
        console.log("You win 🎉")
    }else{
        console.log("Try Again")
    }
}