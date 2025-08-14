let numbers = [10, 20, 30, 40, 50];
let numbers1 = numbers.map(number => number * 3)
console.log(numbers);
console.log("----------------");
console.log(numbers1);

let employees = [
    {
        id: 1,
        name:'Ram',
        age: 25,
        salary: 10000
    },

    {
       id: 2,
        name:'Mohan',
        age: 30,
        salary: 12000
    },

    {
       id: 3,
        name:'Sohan',
        age: 28,
        salary: 14000
    },

    {
       id: 4,
        name:'Javed',
        age: 35,
        salary: 19000
    },

     {
       id: 5,
        name:'Nikhil',
        age: 43,
        salary: 20000
    }
]

//let names = employees.map(employee => 'Mr. '+ employee.name);
//console.log(names);

let names = employees.map((employee) =>{
    if(employee.salary > 12000) {
        return 'Mr.' + employee.name;
    }
})

console.log(names);

let transections = [
    {
        transId:123,
        amount: 450,
        productName: 'Shoes',
        customerId: 678,
        customerName: 'John Doe'
         
    },

    {
         transId:324,
         amount: 350,
         productName: 'Shirt',
         customerId: 764,
         customerName: 'Rohan'
         
    },

    {
          transId:321,
          amount: 550,
          productName: 'Watch',
          customerId: 789,
          customerName: 'Mohan'
         
    },

    {
         transId:456,
         amount: 650,
         productName: 'Bag',
         customerId: 890,
         customerName: 'Ravi'
         
    }
]

let todayTransactions = transections.map((transection) =>{
    return {
        transId: transection.transId,
        amount: transection.amount,
        productName: transection.productName
    };
})

console.log(todayTransactions);