let express = require('express');
//서버 생성
let app = express();
//리스너 설정
app.use((request, response)=>{
    response.send('<h1> Hello express </h1>');
});
//서버를 실행합니다.
app.listen(3000, ()=>{
    console.log('Server running at locallhost:3000');
});