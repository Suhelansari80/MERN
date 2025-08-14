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
// since this function will take some time. so it is asynchronous
// to handle this, we will use promise in getEmp
function getEmp(id) {
    let pr = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let employee = employees.find((employee)=> employee.empId === id);
            if(employee) {
                resolve(employee);
            } else {
                reject("In valid employee ")
            }
        },3000)
    });
    return pr;
}
function getBasicSalary(post) {
    let pr = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let basicSalary;
            if(post === 'professor') {
                basicSalary = 50000;
            } else {
                basicSalary = 40000;
            }
            resolve(basicSalary);
        },3000)
    });

    return pr;
}
function grossSalary(bs) {
    let pr = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let gs = bs + bs*.90 + 8000;
            resolve(gs);
        },3000)
    });
    return pr;
}
// promise
getEmp(101)
.then(employee=> getBasicSalary(employee.post))
.then(basicSalary=>  grossSalary(basicSalary))
.then(grossSalary=> { console.log(grossSalary)})
.catch((err)=> {
    console.log(err)
})
// callback
getEmp(101,(emp)=> {
    console.log(emp);
    getBasicSalary(emp.post, (bs)=> {
        console.log(bs);
        calculateGrossSalary(bs, (gs)=> {
            console.lo (gs);
        })
    })
})