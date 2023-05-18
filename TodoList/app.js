let express = require('express');
let ejs = require('ejs');
let path = require('path');

let todosArr = [
    {id:1, contents: '영화보기', yesno: 'no'},
    {id:2, contents: '숙제하기', yesno: 'no'},
    {id:3, contents: '운동하기', yesno: 'no'},
    {id:4, contents: '노래듣기', yesno: 'no'}
];  // 빈배열

let app = express();

app.use(express.static('public'));  // pulbic 폴더 공유
app.use(express.urlencoded({extended:false}));  // 사용자 html 입력
app.set('views', path.join(__dirname, 'views'));    // 뷰폴더
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('/ get이 시작됨~~');
    res.render('list', {datalist: todosArr});   // list.ejs 화면에 출력
});
app.get('/insert', (req, res) => {
    console.log("추가됨!");
    res.render('insert');
}) ;
app.post('/insert', (req, res) => {
    console.log("/insert post 시작됨~");
    const newTodo = {
        //배열에 입력받은 값으로 객체를 만들어 추가
        id: todosArr.length === 0 ? 1 : todosArr[todosArr.length - 1].id + 1,
        contents: req.body.contents,
        yesno: req.body.yesno
    };
    todosArr.push(newTodo);
    res.redirect('/');
});
//삭제
app.get('/delete/:id', (req, res) => {
    console.log("/delete "+ req.params.id);
    todosArr = todosArr.filter(item => item.id !== parseInt(req.params.id));
    console.log("delete ok~~~ " + req.params.id);
    res.redirect("/");
});
//수정
app.get('/edit/:id', (req, res) => {
    console.log("/edit get 시작됨~");
    const id = Number(req.params.id); // id 값을 가져옵니다.
    const todo = todosArr.find(todo => todo.id === id); // 해당 id 값을 가진 todo 객체를 찾습니다.
    res.render('edit', {todo}); // 해당 todo 객체를 가지고 edit.ejs 화면에 출력합니다.
});
app.post('/edit/:id', (req, res) => {
    console.log("/edit post 시작됨~");
    const id = Number(req.params.id); // id 값을 가져옵니다.
    const todoIndex = todosArr.findIndex(todo => todo.id === id); // 해당 id 값을 가진 todo 객체의 인덱스를 찾습니다.
    todosArr[todoIndex].contents = req.body.contents; // 새로운 내용으로 수정합니다.
    todosArr[todoIndex].yesno = req.body.yesno; // 새로운 완료 여부로 수정합니다.
    res.redirect('/'); // 수정 후 목록 화면으로 이동합니다.
});

app.listen(3000, () => {
    console.log("3000포트 서버가 시작됨~~");
});