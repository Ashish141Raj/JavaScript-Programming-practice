/**7. Count Digits

Take a number from the user and count how many digits it has.

Example:

Input: 12345
Output: 5 */

const user = require("prompt-sync")();

let num = Number(user("Enter value of Num: "));
let count = 1;

for(let i = 1; i <= num; i++){
    num /= 10;
    count ++;
}

console.log("Total Digit in Num: ",count);
