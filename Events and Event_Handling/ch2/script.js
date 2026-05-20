let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover", ()=>{
    abcd.style.backgroundColor = "green";
});

abcd.addEventListener("mouseout", ()=>{
    abcd.style.backgroundColor = "red";
});

window.addEventListener("mousemove", (details)=>{
    abcd.style.top = details.clientY + "px";
    abcd.style.left = details.clientX + "px";
});

