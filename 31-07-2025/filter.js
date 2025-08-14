let Students = [

    {
        StudentId:143,
        Name: 'Aftab Alam',
        age: 25,
        RollNo: 36
    },

    {
        StudentId:183,
        Name: 'Khajamuddin',
        age: 22,
        RollNo: 18
    },

    {
        StudentId:198,
        Name: 'Sanjay Choudhary',
        age: 21,
        RollNo: 34
    },
]

//let filteredStudents = Students.filter((student) => student.Name)
//console.log(filteredStudents);

let filteredStudents = Students.filter((student) => student.age > 18)
console.log('jiska age 18 se bada hai:',filteredStudents);


