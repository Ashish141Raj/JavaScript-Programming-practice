/*
6. Simple Calculator Using Switch (Moderate-level)

Take:

two numbers
one operator (+, -, *, /, %)

Perform the operation using switch.
*/

const userInput = require("prompt-sync")();

let a = Number(userInput("Enter value of a: "));
let b = Number(userInput("Enter value of b: "));
let choice = userInput("Enter Your Choice(+, -, *, /, %): ");

switch(choice){
    case "+":
        let sum = a + b;
        console.log(a," + ",b, " = ", sum);
        break;
    
        case "-":
            let sub = a - b;
            console.log(a," - ",b, " = ",sub);
            break;
        
        case "*":
            let multi = a * b;
            console.log(a," * ",b, " = ",multi);
            break;
        
        case "/":
            let div = a/b;
            console.log(a,"/",b," = ",div);
            break;
        
        case "%":
            let remainder = a % b;
            console.log(a,"%",b," = ",remainder);
            break;

        default:
            console.log("Invalid Operator");

}