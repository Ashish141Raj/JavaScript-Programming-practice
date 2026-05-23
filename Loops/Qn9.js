/**9. Fibonacci Series

Print first n terms of Fibonacci series.

Example:

Input: 5
Output: 0 1 1 2 3 */

const user = require("prompt-sync")();

let num = Number(user("Enter value of num: "));
let a = 0;
let b = 1
for(let i = 1; i <= num; i++){
    console.log(a);

    let c = a + b;
    a = b;
    b = c;
}