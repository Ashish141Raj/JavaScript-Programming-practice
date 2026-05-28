/**1. Print Numbers 1 to 10
Problem:

Use a while loop to print numbers from 1 to 10.

Expected Output:
1
2
3
...
10 */

const user = require("prompt-sync")();
let n = 1;

while (n <= 10){
    console.log(n);
    n+=1;
}