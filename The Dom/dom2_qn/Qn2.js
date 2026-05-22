/**
2. Change Background Color
👉 Create a div box and a button.
👉 When button is clicked, change the box color.

Hint:
- Use style.backgroundColor

*/


let btn = document.querySelector("button");
let div = document.querySelector(".box");

btn.onclick = ()=>{
    div.style.backgroundColor = "red";
};