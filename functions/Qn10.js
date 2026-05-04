// 10. Make a toUpperCase transformer using higher-order function.

function transfrom(fn,str){
    return fn(str);

}

function toUpperStr(str){
    return str.toUpperCase();

}

console.log(transfrom( toUpperStr,"Ashish"));