// 2.	Filter even numbers from an array

let arr = [1,2,3,4,5,6,7,8,9,10];

let i = 0;
while (i < arr.length){
    if (arr[i] % 2 === 0){
        console.log(arr[i]);
    }
    i += 1;
}

