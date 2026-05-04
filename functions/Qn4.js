// 4. Create a closure counter function.

function closureFunction(){
    let counter = 0;
    return function(){
        counter++;
        console.log(counter);
    }
}
let c = closureFunction();
c();
c(); 