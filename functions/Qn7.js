// 7. Create a pure function to add tax.

function purefunct(price, taxRate){
    return price + price*taxRate;
}
console.log(purefunct(500,0.18));