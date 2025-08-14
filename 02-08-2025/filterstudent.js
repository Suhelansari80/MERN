let Students = [
    {
        name: 'nausad',
        rollNo: 1234,
        marks: 70
    },

    {
        name: 'nikhil',
        rollNo: 1236,
        marks: 56,
    },

    {
        name: 'vineet',
        rollNo: 1237,
        marks: 69,
    },

    {
        name: 'Naveen',
        rollNo: 1238,
        marks: 73,
    },

    {
        name: 'Hans',
        rollNo: 1239,
        marks: 71,
    }
]

//first approch using foreach loop

let filteredStudents = [];
Students.forEach((student) =>{
    if(student.marks > 60){
        filteredStudents.push(student);
    }
})

console.log(filteredStudents);

//second approach using filter method(we will use it in fullstack course)
let filteredStudents2 = Students.filter((student) =>{
    return student.marks >60;
})

console.log(filteredStudents2, 'Filtered Students 2');

let filteredStudents3 = Students.filter((student) => student.marks >60);
console.log(filteredStudents3, 'Filtered Students 3');

let numbers = [11, 15, 17, 18, 19, 20];
let evenNumbers = [];

numbers.forEach((number) =>{
    if(number%2 == 0){
        evenNumbers.push(number);
    }
})
console.log(evenNumbers, 'Even Numbers');

let evenNumbers2 = numbers.filter((number) => number %2 == 0);
console.log(evenNumbers2, 'Even Numbers 2');

let transactions = [
    {
        transId: 123,
        amount: 450,
        custId: 678,
        product:{
            type: 'Books',
            name: 'JavaScript Basics',
            quantity: 2
        }
    },

     {
        transId: 124,
        amount: 550,
        custId: 789,
        product:{
            type: 'book',
            name: 'Python Basics',
            quantity: 1
        }
    },

     {
        transId: 125,
        amount: 650,
        custId: 890,
        product:{
            type: 'book',
            name: 'Java Basics',
            quantity: 3
        }
    },

     {
        transId: 126,
        amount: 750,
        custId:678 ,
        product:{
            type: 'Mobile',
            name: 'iPhone 14',
            quantity: 1
        }
    },

     {
        transId: 127,
        amount: 850,
        custId: 901,
        product:{
            type: 'Laptop',
            name: 'Dell XPS 13',
            quantity: 2
        }
    },
]

// Filtering transactions where amount is greater than 500 and product type is 'book'
let filteredTransactions = transactions.filter((transaction)=> transaction.amount > 500 && transaction.product.type === 'book');
console.log(filteredTransactions,'filter data:');

let student = Students.find((student) => student.rollNo === 1236);
console.log(student);