// 3.	Map prices to include GST (18%)

let prices = [1000000,2000000,3000000,4000000,5000000];

let newPrice = prices.map(price =>{
    return price +(price * 18/100);
});
console.log(newPrice);
