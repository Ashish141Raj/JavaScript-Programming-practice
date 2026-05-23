let para = document.querySelector("p");

let Incbtn = document.querySelector(".inc");
let Decbtn = document.querySelector(".dec");

let size = 30;

Incbtn.addEventListener("click", ()=>{
    size += 5;
    para.style.fontSize = size + "px";
});

Decbtn.addEventListener("click", ()=>{
    size -= 5;
    para.style.fontSize = size + "px";
});
