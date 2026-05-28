/**4. Reverse a Number
Problem: Reverse a number using while.

Example:
Input: 1234
Output: 4321 */

const user = require("prompt-sync")();

let num = Number(user("Enter value of num: "));
let rev = 0;

while(num > 0){
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num/10);
}
console.log(rev);