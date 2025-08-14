let employees = [

    {
        empId: 123,
        name: 'nausad',
        post: 'professor'
    },

    {
        empId: 124,
        name: 'suhel',
        post: 'professor'
    },

    {
        empId: 125,
        name: 'sahil',
        post: 'professor'
    },

    {
        empId: 126,
        name: 'sajid',
        post: 'Lecturer'
    }

    
]
function getEmp(id){
   setTimeout(() =>{//now the get emp is asynchronous
       let emp = employees.find((employee)=> employee.empId === id);
      return emp;
    },3000)
    
   
}

function getBasicSalary(post){
    let basicSalary;
    if(post === 'professor'){
        basicSalary = 50000;
    }else {  
        basicSalary = 40000;
    }
}
let employee = getEmp(123);
console.log(employee);
let bs = getBasicSalary(employee.post);
console.log(bs);