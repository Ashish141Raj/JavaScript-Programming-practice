// 9. Write a discount calculator using higher-order function.

function disCal(discount){
    return function(price){
        return price -(price * discount);
    };
}

let totalDiscount = disCal(0.1);

console.log(totalDiscount(100));