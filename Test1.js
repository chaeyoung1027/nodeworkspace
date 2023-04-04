const os = require('os');

console.log(os.hostname);
console.log(os.type);
console.log(os.arch());

//url
let urlObj = url.parse("www.youtube.com")
console.log(urlObj);