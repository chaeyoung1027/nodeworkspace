/**
 * 2장 모듈 호출
 * 더하기 함수를 모듈로 분리한 calc.js 파일을 불러들임
 * exports가 불러들인 객체
 */

var calc = require("./calc");
console.log('모듈 분리 후 - calc.add 함수 호출 결과 %d', calc.add(10, 10));