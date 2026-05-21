// Check if a character is a vowel using logical ||.

const userInput = require("prompt-sync")();

let ch = userInput("Enter a character: ");

if (ch === 'A' || ch === 'E' || ch=== 'I' || ch === 'O' || ch === 'U' || ch === 'a' || ch==='e'|| ch==='i'||ch==='o'||ch==='u'){
    console.log(ch,"Vowel");
}else{
    console.log("consonant");
}