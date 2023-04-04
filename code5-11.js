const fs = require('fs');

fs.readFile('test.txt', (error, file)=>{
    console.log(file);
    console.log(file.toString());
});