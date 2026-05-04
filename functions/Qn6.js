// 6. Use a function to log even numbers in an array.
const prompt = require("prompt-sync")();

function printEven(arr){
    for(let i of arr){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
printEven([1,2,3,4,5]);