let heading = document.querySelector("h1");

let hide_btn = document.querySelector(".hide-btn");
let show_btn = document.querySelector(".show-btn");

hide_btn.onclick = ()=>{
    heading.style.display = "none" ;
};

show_btn.onclick = ()=>{
    heading.style.display = "block";
};
