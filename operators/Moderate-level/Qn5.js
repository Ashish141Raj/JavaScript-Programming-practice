// Take username and password and validate login using && operator.

const userInput = require("prompt-sync")();

const username = userInput("Enter Username: ");
const password = userInput("Enter your password: ");

if(username === "admin" && password === '1234'){
    console.log("Login successfully");
}else{
    console.log("please enter valid username and password")
}