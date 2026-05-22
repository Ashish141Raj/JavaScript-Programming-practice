/**
1. Change Text of a Paragraph
👉 Create a paragraph and a button.
👉 When button is clicked, change the paragraph text.

Hint:
- Use getElementById()
- Use innerText

-----------------------------------------
*/
let button = document.querySelector("button");
let paragraph = document.querySelector("p");
button.onclick = ()=>{
    paragraph.innerText = "clicked";
}