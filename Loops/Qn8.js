/**8. Prime Number Check

Take a number from the user and check whether it is prime or not.

Example:

Input: 7
Output: Prime */
const user = require("prompt-sync")();

let num = Number(user("Enter value of Num: "));
let isPrime = true;

if(num <= 1){
    isPrime = false;
}

for(let i = 2; i <= num; i++){
    if(num % 2 === 0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(num," is prime_number");
}else{
    console.log(num," is not a prime_number");
}