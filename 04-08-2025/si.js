function simpleIntrest(p, r, t, callback) {
    setTimeout(()=> {
        let si = p*r*t/100;
        //callback(si); 
    },3000)
}
simpleIntrest(1000, 10, 3, (result)=> {
    console.log(result)
})