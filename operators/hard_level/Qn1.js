// Take three angles and check if they can form a triangle using logical operators.

const userInput = require("prompt-sync")();

let first_angle = Number(userInput("Enter value of first_angle: "));
let secon_angle = Number(userInput("Enter value of secon_angle: "));
let third_angle = Number(userInput("Enter value of third_angle: "));

if(first_angle > 0 && secon_angle > 0 && third_angle > 0 && first_angle+secon_angle+third_angle === 180){
    console.log("These angles can form a triangle");
}else{
    console.log("These angles can not form a triangle");
}