//함수를 선언합니다.
function print(name, count = 1){
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

//함수를 호출합니다.
print("사과", 10);
print("사과");