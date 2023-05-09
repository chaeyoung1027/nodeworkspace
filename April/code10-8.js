let express = require('express');

let app = express();

app.use(express.static('public'));

app.get('*', (request, response)=>{
    response.send('<h1>정적 파일을 활용합니다. /public 폴더활용</h1>');
});

app.listen(3000, ()=>{
    console.log('server starting 3000 port');
});