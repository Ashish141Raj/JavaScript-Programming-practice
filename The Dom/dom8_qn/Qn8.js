let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    if(input.type === "password"){

        input.type = "text";
        btn.innerText = "Hide password";
    }else{
        input.type = "password";
        btn.innerText = "show password";
    }
})