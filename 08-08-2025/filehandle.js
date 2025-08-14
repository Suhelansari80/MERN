const fs = require('fs');
fs.writeFile('test.txt','hii there',()=>{
  fs.readFile('test.txt', 'utf-8',(err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
});
