let h1 = document.querySelector("h1");

window.addEventListener("keydown",function(details){
    if(details.key === " "){
        h1.textContent = "Space";
    }else{
        h1.textContent = details.key;
    }
});