/*4. Grade Calculator (Moderate level)

Take marks from the user and print grades:

90+ → A
75–89 → B
50–74 → C
Below 50 → Fail*/

const userInput = require("prompt-sync")();

let marks = Number(userInput("Enter Your marks: "));

let result = (marks >= 90)? "Grade 'A'":
             (marks >= 75 && marks <= 89)? " Grade 'B'":
             (marks >= 50 && marks <= 74)? " Grade 'C'":"Fail";

console.log("Your Grade is: ",result);
