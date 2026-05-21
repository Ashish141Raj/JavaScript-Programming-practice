// Take salary and bonus percentage, calculate final salary using assignment operators.
const userInput = require("prompt-sync")();

let salary = Number(userInput("Enter Your Salary: "));
let bonus_percentage = Number(userInput("Enter bonus percent: "));

let bonus = salary*bonus_percentage/100;
let final_salary = salary+bonus;

console.log("Final salary = ",final_salary);