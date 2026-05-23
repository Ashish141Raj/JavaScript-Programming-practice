/**6. Factorial of a Number

Take a number from the user and find its factorial.

Example:

Input: 5
Output: 120 */

const user = require("prompt-sync")();

let num = Number(user("Enter value of num: "));
let factorial = 1;

for(let i = 1; i <= num; i++){
    factorial *= i;
}
console.log("factorial of "+num+" is: ",factorial);