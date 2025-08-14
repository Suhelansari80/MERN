let students = [
  { id:101,name: "Amit", marks: 80, post:'professor' },
  { id:102,name: "Sara", marks: 45, post: 'professor'},
  { id:103,name: "John", marks: 60, post: 'lecturer'}
];

function PrintPassed(students, callback){
    students.forEach((student)=>{
        if(callback(student)){
            console.log(student.name+ 'Whose Marks:'+ student.marks)
        }
    })
}

function isPassed(student){
    return student.marks >=50;
}

PrintPassed(students, isPassed);