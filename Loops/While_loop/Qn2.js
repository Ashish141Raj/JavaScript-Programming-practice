/**2. Print Even Numbers
Problem:

Print all even numbers from 1 to 20 using while.

Expected Output:
2 4 6 8 10 12 14 16 18 20 */

let n = 1;
let result = " ";

while (n <= 20){
    if(n % 2 === 0){
        result += n + " ";
    }
    n+=1;
}
console.log(result);