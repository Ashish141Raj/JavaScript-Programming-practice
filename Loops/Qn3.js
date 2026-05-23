/**3. Sum of Numbers

Take a number n from the user and print the sum from 1 to n.

Example:

Input: 5
Output: 15 */

const user = require("prompt-sync")();

let n = Number(user("Enter value of n: "));
let sum = 0;

for(let i = 1; i <= n; i++){
    sum += i;
}
console.log(sum);