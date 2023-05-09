const fs = require('fs');

fs.readFile('test.txt', (error, file)=>{
    console.log(file);
    console.log(file.toString());
});

async.parallel([
    (callback) => {fs.readFile('a.txt', callback);},
    (callback) => {fs.readFile('b.txt', callback);},
    (callback) => {fs.readFile('c.txt', callback);},
],(err, data)=>{
    console.log(result);
})