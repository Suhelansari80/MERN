let updateuser = [
    {
        name: 'suhel',
        age: 22
    }
]

function getuser(updateuser, callback){
    callback(updateuser);
}

function modifyuser(updateuser){
    updateuser.name = 'tathagat',
    updateuser.age = 24
}

getuser(updateuser, modifyuser);
console.log(updateuser);