/**3. Sum of First N Numbers
Problem: Take a number n and find the sum of numbers from 1 to n using while.

Example:
Input: 5
Output: 15

Because:

1 + 2 + 3 + 4 + 5 = 15 */

const user = require("prompt-sync")();

let n = Number(user("Enter value of Number: "));
let sum = 0;
let i = 1;
while(i <= n){
    sum += i;
    i +=1
}
console.log(sum);