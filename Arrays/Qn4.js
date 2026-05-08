// 4.	Reduce salaries to calculate total payroll

let salaries = [1800000,2800000,3800000,4800000,5800000];

let totalPayroll = salaries.reduce((total,salary) =>{
    return total + salary;
}, 0);
console.log(totalPayroll);