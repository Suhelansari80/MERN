let a = {
    name: "John",
    age: 30,
    marks: 85,
    "full Name": "John Doe"
};

let ar = ['ram', 'shyam', 'hari'];
console.log(typeof ar); 
console.log(a.name);
console.log(a['name']);
console.log(a["full Name"]); 
a.name = "Ravi";
console.log(a);
Object.freeze(a); 
a.name = "Rohan"; 
console.log(a.name); 

let student = {
    name : 'Ram',
    age : 45,
    marks : 78

};

let faculty = {
  fscultyName: 'Nausad Imam',
  facultyAge: 65,
  salary: 10000
};

let result = Object.assign({},student, faculty);
console.log(result, 'result');
let keys = Object.keys(student);
console.log(keys, 'keys');
let values = Object.values(student);
console.log(values, 'values');
let entries = Object.entries(student);
console.log(entries, 'entries');