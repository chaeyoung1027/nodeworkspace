var path = require("path");
//디렉토리 이름 합치기
var directory = ["users","milk","docs"];
var docsDirection = directory.join(path.sep);
console.log("문서 디렉터리 : %s", docsDirection);
//디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/Users/mike','notepad.exe');
console.log("파일 패스 : %s", curPath);