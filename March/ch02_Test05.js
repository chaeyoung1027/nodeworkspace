/**
 * 2장 모듈 호출
 * 더하기 함수를 모듈로 분리한 calc.js 파일을 불러들임
 * exports가 불러들인 객체
 */

//1번 방식 : exports
var calc = require("./calc");
console.log('모듈 분리 후 - calc.add 함수 호출 결과 %d', calc.add(10, 10));

//2번 방식 module.exports
var calc2 = require("./calc2");
console.log('모듈 분리 후 - calc.add 함수 호출 결과 %d', calc2.add(10, 10));

var os = require('os');
console.log("시스템의 메모리 : %d, / %d", os.freemem(), os.totalmem());
console.dir("시스템의 cpu 정보\n")
console.dir(os.cpus());
console.log("시스템의 네트워크 인터페이스정보 \n");
console.log(os.networkInterfaces());