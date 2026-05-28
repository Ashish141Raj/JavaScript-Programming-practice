/**Create a Menu Program

Using while, make a program like:

1. Add
2. Subtract
3. Multiply
4. Exit

Program should keep running until user chooses Exit. */

const user = require("prompt-sync")();

let num1 = Number(user("Enter value of num1: "));
let num2 = Number(user("Enter value of num2: "));

let choice = 0;

while(choice !== 4){
    console.log("\n 1.Add");
    console.log("\n 2.subtract");
    console.log("\n 3.Multiply");
    console.log("\n 4.Exit");

    choice = Number(user("Enter your choice: "));

    if(choice === 1){
        let sum = num1 + num2;
        console.log("Sum: ",sum);
    }else if(choice === 2){
        let sub = num1 - num2;
        console.log("sub: ",sub);
    }else if(choice === 3){
        let multi = num1 * num2;
        console.log("Multi: ",multi);
    }else if(choice === 4){
        console.log("Exited");
    }else{
        console.log("Invalid Choice");
    }
    
}

