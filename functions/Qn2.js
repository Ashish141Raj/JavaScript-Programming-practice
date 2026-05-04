// 2. Create a greet function with default name.

const prompt = require("prompt-sync")();

const name = prompt("Enter your name: ");

function greet(name ="Raja"){
    console.log("Hello "+name);
}
greet();
greet(name);