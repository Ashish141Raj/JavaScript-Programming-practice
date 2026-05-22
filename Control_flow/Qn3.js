/*3. Largest Among Three Numbers (Easy–Moderate Level)
Take three numbers from the user and print the largest number using if-else.
*/

const userInput = require("prompt-sync")();

let num1 = Number(userInput("Enter value of num1: "));
let num2 = Number(userInput("Enter value of num2: "));
let num3 = Number(userInput("Enter value of num3: "));

if(num1 > num2 && num1 > num3){
    console.log(num1," is Greater");
}else if(num2 > num3){
    console.log(num2," is Greater");
}else{
    console.log(num3," is Greater");
}