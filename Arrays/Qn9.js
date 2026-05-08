// 9.	Use some() to check if any student failed
let arr = [90,80,89,97,31,40];

let newArr = arr.some(mark =>{
    return mark < 35;
});
console.log(newArr);