let students = [
    {
        rollNo: 101,
        name: 'naushad',
        age: 23,
        branch: 'CSE'
    }, 
    {
        rollNo: 102,
        name: 'nikhil',
        age: 23,
        branch: 'CSE'
    }, 
    {
        rollNo: 103,
        name: 'navdeep',
        age: 23,
        branch: 'CSE'
    }, 
    {
        rollNo: 104,
        name: 'Rajan',
        age: 23,
        branch: 'CSE'
    }
]
let newStudent = {
    rollNo: 105,
    name: 'Vineet',
    age: 23,
    branch: 'CSE'
}
// since this fn will take some time so this fn is asynchonous
// so we will use promise to handle it.
function addStudent(newStudent) {
    let pr = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(newStudent.branch === '') {
                reject("Must have a branch for enrollment");
        } else {
                students.push(newStudent);
                resolve(students);
        }
        },3000)
    });
    return pr;
}
addStudent(newStudent)
.then((result)=> {
    console.log(result)
})
.catch((err)=> {
    console.log(err);
})