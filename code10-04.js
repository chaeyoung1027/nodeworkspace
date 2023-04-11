let express = require('express');
let fs = require('fs'); //file읽기모듈
let app = express();

//http://10.96.124.97:3000/image
//추가
//그림파일 제공하는 uri 즉 path는 /grim  화면에 출력하시오.
app.get('/', (request, response) =>{
    response.send("<h1> 그림파일 제공하는 uri, path는 image입니다.")
})
// /student uri는 자기학번 이름 한줄자기소개를 출력하시오. 
app.get('/', (request, response) =>{
    response.send("<h1> 3100 김미림 안녕하세요~~~~</h1>");
})
app.get('/image', (request, response) =>{
    fs.readFile('mangh.jpg', (error, data) =>{
        if(error){
            console.log("파일읽기에러");
        }else{
            response.type('image/png');
            response.send(data);
        }
    })
});

app.listen(3000, () =>{
    console.log('서버 시작 3000 포트로 http://10.96.124.97:3000/');
})
