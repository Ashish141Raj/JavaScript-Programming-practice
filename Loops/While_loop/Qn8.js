/**8. Fibonacci Series
Problem:Print first n Fibonacci numbers using while.

Example:
Input: 7
Output:
0 1 1 2 3 5 8 */
const user = require("prompt-sync")();

let n = Number(user("Enter value of num: "));

let firstNum = 0;
let secNum = 1;
let i = 0;
while(i < n){
    console.log(firstNum);
    let thirdNum = firstNum + secNum;
    firstNum = secNum;
    secNum = thirdNum;

    i++;
}