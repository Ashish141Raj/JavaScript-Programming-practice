/**10. Armstrong Number Check (Advanced)

Problem:Check whether a number is an Armstrong number using while.

Example:
Input: 153
Output: Armstrong Number

Because: 1^3+5^3+3^3 = 153 */

const user = require("prompt-sync")();

let num = Number(user('Enter value of num: '));
let temp = num;
let sum = 0;

while(num>0){
    let digit = num % 10;
    sum += digit**3;
    num =Math.floor(num/10);
}
if(temp === sum){
    console.log("Armstrong Number");
}else{
    console.log("Not a Armstrong Number");
}
