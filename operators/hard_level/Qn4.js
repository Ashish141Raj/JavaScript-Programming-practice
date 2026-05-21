// Take electricity units and calculate bill using conditional operators.

const userInput = require("prompt-sync")();

let unit = Number(userInput("Enter used Unit: "));

let bill = (unit <= 100) ? unit * 5:
           (unit <= 200) ? (100 * 5) +((unit-100)*7):(100*5)+(100*7)+((unit -200)*10);
console.log("Electricity Bill: ",bill);