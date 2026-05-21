// Check whether a year is leap year using logical and comparison operators.

const userInput = require("prompt-sync")();

let year = Number(userInput("Enter Year: "));

if((year % 4 === 0 && year % 100 !== 0 )|| year % 400 === 0 ){
    console.log(year," is leap year");
}else{
    console.log(year," is not a leap year")
}