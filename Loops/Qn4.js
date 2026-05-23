/**
4. Multiplication Table

Take a number from the user and print its multiplication table till 10.

Example:

Input: 3

Output:
3 x 1 = 3
3 x 2 = 6
...
*/

const user = require("prompt-sync")();

let num = Number(user("Enter value of num: "));

for(let i = 1; i <= 10; i++){
    let multi = num * i;
    console.log(num, " X ", i, " = ",multi);
}
