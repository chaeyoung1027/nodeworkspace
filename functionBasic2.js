function multiple(min, max){
    let output = 1;
    for(let i = min; i<=max; i++){
        output+=i;
    }
    return output;
}
console.log(multiple(1, 10));