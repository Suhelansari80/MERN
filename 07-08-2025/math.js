function add(a, b) {
    let c = a+ b;
    console.log(c);
    return c;
}
function subtract(a,b) {
    let c = a-b;
    console.log(c);
    return c;
}
 module.exports = {

    add,
    subtract
 }
//exports.add = function(a, b) {
    //let c = a+ b;
    //console.log(c);
    //return c;
//}
//exports.subtract = (a, b)=> {
    //let c = a - b;
    //console.log(c);
    //return c;
//}