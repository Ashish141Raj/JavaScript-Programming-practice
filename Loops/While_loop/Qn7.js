/**7. Find Factorial
Problem:Find factorial of a number using while.

Example:
Input: 5
Output: 120

Because:

5 × 4 × 3 × 2 × 1 = 120 */
const user = require("prompt-sync")();

let n = Number(user("Enter value of n: "));

let fact = 1;

while(n > 0){
    fact *= n;
    n -= 1;
}
console.log(fact);
