const math = require('./math');
const calculate = require('./calculator/calculate');

console.log(math, 'math');
console.log("-------------------------------");
console.log(typeof math);
let result = math.add(2,8);
console.log(result, 'result');
let result1 = math.subtract(10, 5);
console.log(result1, 'result');
let result2 = calculate.divide(70, 35);
console.log(result2);
let result3 = calculate.multiply(20, 6);
console.log(result3)
 
const emp = require('./calculator/employee/employee');
emp.manageEmployee();
