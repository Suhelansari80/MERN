const math = require('../math');

function multiply(a, b) {
    let result = math.add(90, 190);
    console.log(result);
    let c = a*b;
    console.log(c);
    return c;
}
function divide(a, b) {
    let c = a/b;
    console.log(c);
    return c;
}
module.exports = {
    multiply,
    divide
}