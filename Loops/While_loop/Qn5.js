/**5. Count Digits in a Number
Problem:Count how many digits are present in a number using while.

Example:
Input: 98765
Output: 5 */

const user = require("prompt-sync")();

let n = Number(user("Enter value of num: "));
let count = 0;

while(n > 0){
    count += 1;
    n = Math.floor(n/10);
}
console.log(count);