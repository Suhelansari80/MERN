let employees = [
    {
        id: 101,
        name: 'naushad',
        mobNo: 8791007588,
        post: 'Professor'
    }, 
    {
        id: 102,
        name: 'vineet',
        mobNo: 8791007588,
        post: 'Professor'
    },
    {
        id: 103,
        name: 'nikhil',
        mobNo: 8791007588,
        post: 'Lecturer'
    },
    {
        id: 104,
        name: 'Navdeep',
        mobNo: 8791007588,
        post: 'Lecturer'
    }
]
function getEmp(id, callback) {
    setTimeout(()=> {
        let emp = employees.find((employee)=> employee.id === id);
        callback(emp);
    },3000)
}
function getBasicSalary(post, callback) {
    setTimeout(()=> {
        let basicSalary;
        if(post === 'professor') {
            basicSalary = 50000;
        } else {
            basicSalary = 40000;
        }
        callback(basicSalary)
    },3000)
}
function calculateGrossSalary(bs, callback){
    setTimeout(()=> {
        let gs = bs + bs*.90 + 9000;
        callback(gs);
    },3000)
}
getEmp(101,(emp)=> {
    console.log(emp);
    getBasicSalary(emp.post, (bs)=> {
        console.log(bs);
        calculateGrossSalary(bs, (gs)=> {
            console.log (gs);
        })
    })
})