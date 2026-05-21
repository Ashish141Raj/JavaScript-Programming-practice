// Create a calculator using operators (+, -, *, /, %, **) and user choice.

const userInput = require("prompt-sync")();

console.log("MATHS-CALCULATOR $#*+-/");

let no1 = Number(userInput("Enter value of no1: "));
let no2 = Number(userInput("Enter value of no2: "));
let userChoice = userInput("Enter Your Choice(+, -, *, /, %, **): ");

if(userChoice === '+'){
    let sum = no1 + no2;
    console.log(no1," + ",no2, " = ",sum);

}else if(userChoice === '-'){
    let sub = no1 - no2;
    console.log(no1," - ",no2, " = ",sub);

}else if(userChoice === '*'){
    let multi = no1 * no2;
    console.log(no1," * ",no2, " = ",multi);

}else if(userChoice === '/'){
    let quotient = no1 / no2 ;
    console.log(no1, " / ", no2, " = ",quotient);

}else if(userChoice === '%'){
    let remainder = no1 % no2;
    console.log(no1," % ",no2, " = ",remainder);

}else if(userChoice === '**'){
    if(no2 === 0){
        console.log("Divison By zero is not possible");
    }else{
        let pow = no1 ** no2;
        console.log(no1," ** ", no2, " = ",pow);
    }

}else{
    console.log("Please enter a valid choice");
}