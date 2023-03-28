let products = [
    {name : '바나나', price : 1200},
    {name : '사과', price : 2000},
    {name : '배', price : 3000},
    {name : '고구마', price : 7000},
    {name : '감자', price : 600},
    {name : '수박', price : 5000}
];

function print(fruit){
    console.log(`${fruit.name}의 가격은 ${fruit.price}입니다.`)
};
for(const fruit of products){
    print(fruit);
}

console.log(products);
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(element);
}

for(const key in products){
    console.log(key +'\t'+ products[key].name+"\t"+products[key].price);
}

for(const item of products){
    console.log(item.name+"\t"+item.price);
}