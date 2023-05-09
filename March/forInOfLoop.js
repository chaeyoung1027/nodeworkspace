//변수를 선언합니다.
let array = ['사과', '배', '포도', '딸기', '바나나'];

//변수를 수정합니다.
for(let i in array){
    //출력합니다.
    console.log(`${i}번째 요소 : : ${array[i]}`);
}

console.log("=======구분선========");

//반복을 수행합니다.
for(let item of array){
    //출력합니다.
    console.log(item);
}

for(let i = 0; i<array.length; i++){
    console.log(`${array[i]}`);
}