/*
5. Leap Year Checker (Moderate)

Write a program to check whether a year is a leap year or not.

Rules:

Divisible by 4
Not divisible by 100 unless divisible by 400

*/

const userInput = require("prompt-sync")();

let year = Number(userInput("Enter year: "));

let leap_year = (year % 4 === 0 && year % 100 !== 0)?" Leap Year ":(year % 400 === 0)?"Leap Year":"Not a Leap Year";

console.log(year," is ", leap_year);