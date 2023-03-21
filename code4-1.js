//let i = 0;
// for(let i = 0; i<1000; i++){
//     console.log("출력!");
// }

let array = [52, 352, '안녕', '끝!', true, false];
array[0] = 0;   //값 변경

for(let i = 0; i<array.length; i++){
    console.log(array[i]);
}