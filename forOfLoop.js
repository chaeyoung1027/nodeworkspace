//변수를 선언합니다.
let array = ['사과', '배', '포도', '딸기','바나나'];

//반복을 수행합니다.
for(let i in array){
    //출력합니다.
    console.log(`${i}번째 요소 : ${array[i]}`);
}

console.log("======================");

//반복을 수행합니다.
for(let item of array){
    //출력합니다.
    console.log(item);
}
