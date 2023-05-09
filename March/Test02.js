var result = 0;

console.time('합계구하는 시간');    //타이머 시작
for(let i = 0; i<=1000; i++){
    result = result+i;
}
console.timeEnd("합계구하는 시간"); //타이머 종료

console.log("1부터 1000까지 더한 결과물 : %d", result);