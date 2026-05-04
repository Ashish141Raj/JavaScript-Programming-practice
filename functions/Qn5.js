// 5. Write a function that returns another function.

function fnc(){
    return function(name){
        console.log("Hello",name,"from inner function")
    }
}

let f = fnc();
f("Ashish");


