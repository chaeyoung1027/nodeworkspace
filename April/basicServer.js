//모듈을 추출합니다.
const express = require("express");

//서버를 생성합니다.
const app = express();

//request 이벤트 리스너를 설정합니다.
app.use((request, response)=>{
    response.send("<h1>Hello express</h1>");
});

//서버를 실행합니다.
app.listen(3000, ()=>{
    console.log('Server running at http://10.96.124.97:3000/');
});