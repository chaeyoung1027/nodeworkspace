let express = require('express');

let app = express();

app.get('*', (request, response) => {
    response.redirect('http://www.naver.com');
});

app.listen(3000, () =>{
    console.log('server start~! 3000 port');
});