let employees = [
    {
        empId: 101,
        name: 'naushad',
        mobileNo: 879120567,
        post: 'professor'
    }, 
    {
        empId: 102,
        name: 'vineet',
        mobileNo: 1234567,
        post: 'professor'
    },
    {
        empId: 103,
        name: 'vinay',
        mobileNo: 1234567,
        post: 'Lecturer'
    }, 
    {
        empId: 104,
        name: 'Tapesh',
        mobileNo: 1234567,
        post: 'Lecturer'
    }
]
function getEmp(id) {
    let pr = new Promise((reslove, reject)=> {
        setTimeout(()=> {
            let employee = employees.find((employee)=> employee.empId === id)
            if(employee) {
                reslove(employee)
            } else {
                reject("Employee not found")
            }
        },3000)
    });
    return pr;
}
function getBasicSalary(post) {
    let pr = new Promise((reslove, reject)=> {
        setTimeout(()=> {
            let basicSalary;
            if(post === 'professor') {
                basicSalary = 50000;
            } else {
                basicSalary = 40000;
            }
            reslove(basicSalary)
        },3000)
    });

    return pr;
}
function calculateSalary(bs) {
    let pr = new Promise((reslove)=> {
        setTimeout(()=> {
            let gs;
            gs = bs*.85+bs + 9000;
            reslove(gs);
        },3000)
    });

    return pr;
}
async function manageEmployee() {
    try {
        let employee =  await getEmp(100);
        console.log(employee, 'employee');
        let basicSalary =  await getBasicSalary(employee.post);
        console.log(basicSalary)
        let gs = await calculateSalary(basicSalary);
        console.log(gs)
    } catch(err) {
        console.log(err)
    }
}
manageEmployee();