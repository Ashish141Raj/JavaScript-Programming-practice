// 5.	Find the first student with grade A

let student = [
    {name: "Ashish", grade:"A++"},
    {name: "Navya",  grade:"A++"},
    {name: "Jiya",  grade:"A+"},
    {name: "Diya",  grade:"A"},
]

let firstGradeA = student.find(student =>{
     return student.grade === "A";
});

console.log(firstGradeA);