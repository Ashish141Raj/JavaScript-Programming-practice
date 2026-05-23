let textarea = document.querySelector("textarea");
let para = document.querySelector("p");

textarea.addEventListener("input",()=>{
    let count = textarea.value.length;

    para.innerText = "characters"+" = "+count;
});