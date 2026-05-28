/**6. Palindrome Number Check
Problem:Check whether a number is palindrome or not using while.

Example:
Input: 121
Output: Palindrome
Input: 123
Output: Not Palindrome */

const user = require("prompt-sync")();

let num = Number(user("Enter value of num: "));
let temp = num;

let rev=0;

while(num > 0){
    let digit = num % 10;
    rev = rev*10+digit;
    num = Math.floor(num/10);
}
if(temp === rev){
    console.log("Palindrome Number");
}else{
    console.log("Not a Palindrome Number");
}