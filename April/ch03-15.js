function add(a, b, callback){
    let result = a+b;
    callback(result);
}

add(10, 20, function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기 (10, 20)의 결과 : %d', result);
})

//add2 화살표함수를 만들어서 실행
const add2 = (a, b, callback) => {
    let result = a + b;
    callback(result);
}

add2(10, 20, (result) => {
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log(`더하기 (10, 20)의 결과: ${result}`);
});