let user = [
    {
        name: 'Suhel Ansari',
        age: 22
    }

 
]

function getuser(user, callback){
   callback(user[0].name);
}

function sayHello(name){
    console.log('hello '+ name);
}

getuser(user, sayHello);