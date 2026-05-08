// 7.Sort array of ages in ascending order

let arr = [21,20,19,18];

let newArr = arr.sort((a,b) =>{
    return a - b;
});
console.log(newArr);