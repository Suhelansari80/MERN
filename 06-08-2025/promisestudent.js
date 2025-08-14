let students = [
    {
        rollNo: 101,
        name: 'naushad',
        age: 23,
        branch: 'CSE',
        marks: 78
    }, 
    {
        rollNo: 102,
        name: 'nikhil',
        age: 23,
        branch: 'CSE',
        marks: 79
    }, 
    {
        rollNo: 103,
        name: 'navdeep',
        age: 23,
        branch: 'CSE',
        marks: 89
    }, 
    {
        rollNo: 104,
        name: 'Rajan',
        age: 23,
        branch: 'CSE',
        marks: 90
    }
]
let newStudent = {
    rollNo: 105,
    name: 'Vineet',
    age: 23,
    branch: 'CSE',
    marks: 90
}
function addStudent(newStudent) {
    let pr = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(newStudent.branch === '') {
                reject("Invalid Student")
            } else {
                students.push(newStudent)
                resolve(students[students.length-1]);
            }
        },3000)
    });
    return pr;
}
function getDeviation(student)  {
    let pr = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let sum = 0;
            for(let i = 0; i<students.length;i++) {
                sum = sum + students[i].marks;
            }
            let avg = sum/students.length;
            let deviation = student.marks - avg;
            resolve(deviation);
        },3000)
    });

    return pr;
}
addStudent(newStudent)
.then((student)=> {
    console.log(student)
    return getDeviation(student)
})
.then((deviation)=> {
    console.log(deviation)
})
.catch((err)=> {
    console.log(err)
})
async function manageStudent() {
    try {
        let student = await addStudent(newStudent);
        console.log(student);
        let deviation = await getDeviation(student);
        console.log(deviation)
    } catch(err) {
        console.log(err)
    }
}
manageStudent();