// 5.	Loop through keys and values of an object

const student = {
    name:"Ashish Raj",
    age: 21
};

Object.entries(student).forEach(i =>{
    console.log(i[0] + " : " + i[1]);
});