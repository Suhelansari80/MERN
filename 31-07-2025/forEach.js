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

let names = [];

employees.forEach((employee)=>{
   
  if(employee.salary > 12000) {
       console.log(employee.name);
   }
})

employees.forEach(function(employee){
    console.log(employee.salary);
})
//forEasch doesnot return any value
employees.forEach(employee => {
    let name = 'Mr'+employee.name;
    names.push(name);
    
})

console.log(names);

let numbers = [11, 15, 17, 18, 19, 20];
let numbers1 = [];
numbers.forEach((number) =>{
    numbers1.push(number*3);
})
console.log(numbers1);

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

let trans = [];

transections.forEach((transection) => {
     trans.push({
        transId: transection.transId,
        amount: transection.amount,
        productName: transection.productName

     })
})