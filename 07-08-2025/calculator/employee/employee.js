const salary = require('../../salary');
function manageEmployee() {
    let result = salary.grossSalary(50000);
    console.log(result);
    let result1 = salary.grossSalaryFaculty(90000);

}
module.exports = {
    manageEmployee
}