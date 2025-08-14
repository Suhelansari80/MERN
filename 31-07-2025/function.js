//1 way

function sum(a, b){
    let c = a+b;
    console.log(c);
    return c;
}

let result=sum(10, 20);
console.log(result,'Result');

//2 way

let add = function(a, b){
    let c = a+b;
    console.log(c);
    return c;
}

let res = add(80, 67);
console.log(res);

//3 way arrow function

let diff = (a, b) => {
    return a - b;
}

let d = diff(100, 50);
console.log(d);
//simple interest arrow function
let simpleInterest = (p, r, t) => {
    let si = (p * r * t) / 100;
    return si;
}
let interest = simpleInterest(1000, 5, 2);
console.log(interest, 'Simple Interest');

//simple interest

let simpleInterest2 = (p, r, t) => (p * r * t) / 100;
let interest2 = simpleInterest2(2000, 3, 4);    

//simple interset

let simpleInterest3  = function(p, r, t) {
    let si = (p*r*t)/100;
    return si;
}

let s = simpleInterest3(1500, 4, 3);
console.log(s, 'Simple Interest 3');

