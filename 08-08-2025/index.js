
const http = require('http');
const fs = require('fs');

let myServer = http.createServer((req, res) => {
    fs.readFile('doc.txt', (error) => {
        if (error) {
            console.log(error);
        } else {
            // res.write('hello from server...');
            res.end("this is server page message.");
        }
    });
});

myServer.listen(3000, () => {
    console.log('Server is running on port 3000');
});
          