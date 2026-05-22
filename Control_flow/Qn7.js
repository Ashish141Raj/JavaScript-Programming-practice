/*
7. Vowel or Consonant (Moderate-level)

Take a character from the user and check whether it is:

Vowel
Consonant

Use logical operators.
*/

const userInput = require("prompt-sync")();

let ch = userInput("Enter character: ");

if(ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O'|| ch === 'U' || ch === 'a' || ch==='e' || ch === 'i' || ch ==='o' || ch === 'u'){
    console.log(ch," Vowel");
}else{
    console.log(ch," consonant");
}