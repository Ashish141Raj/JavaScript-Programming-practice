// 3. Sum all numbers using rest parameter.


let sum = function(...nums){
    let total = 0;

    for (let num of nums){
        total += num;
    }

    console.log("sum: ",total);
}
sum(1,2,3,4,5);